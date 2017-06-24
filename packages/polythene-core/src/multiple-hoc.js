/*
Helper module to manage multiple items of the same component type.

mOptions:
- instance
- defaultId
- element
- placeholder
- bodyShowClass
*/

import { unpackAttrs } from "./attrs";

export const multipleHOC = ({ options: mOptions, renderer }) => {

  const items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
  let current;
  
  const getInitialState = (vnode, createStream) => {
    current = createStream();
    return {
      current,
      redrawOnUpdate: createStream.merge([current])
    };
  };

  const itemIndex = id => {
    const item = findItem(id);
    return items.indexOf(item);
  };

  const removeItem = id => {
    const index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  };

  const replaceItem = (id, newItem) => {
    const index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  const findItem = id => {
    // traditional for loop for IE10
    for (let i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  const next = () => {
    if (items.length) {
      items[0].show = true;
      current(items[0].instanceId);
    }
  };

  const remove = (instanceId = mOptions.defaultId) => {
    if (mOptions.queue) {
      items.shift();
      // add time to remove the previous instance before drawing the next one
      setTimeout(next, 0);
    } else {
      removeItem(instanceId);
    }
  };

  const removeAll = () => {
    // traditional for loop for IE10
    for (let i = 0; i < items.length; i++) {
      items[i].cancelled = true;
    }
    items.length = 0;
    current(null);
  };

  const setPauseState = (pause, instanceId) => {
    const item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
    }
  };

  const makeItem = (itemAttrs, instanceId, spawn) => {
    let resolveShow;
    const didShow = () => {
      const attrs = unpackAttrs(itemAttrs);
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }
      current(instanceId);
      return resolveShow(instanceId);
    };
    const showPromise = new Promise(resolve => 
      resolveShow = resolve
    );

    let resolveHide;
    const didHide = () => {
      const attrs = unpackAttrs(itemAttrs);
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }
      remove(instanceId);
      current(instanceId);
      return resolveHide(instanceId);
    };

    const hidePromise = new Promise(resolve => resolveHide = resolve);

    return Object.assign(
      {},
      mOptions,
      {
        instanceId,
        spawn,
        attrs: itemAttrs,
        show: mOptions.queue ? false : true,
        cancelled: false,
        showPromise,
        hidePromise,
        didShow,
        didHide
      }
    );
  };

  const count = () => items.length;
  const pause = (instanceId = mOptions.defaultId) => setPauseState(true, instanceId);
  const unpause = (instanceId = mOptions.defaultId) => setPauseState(false, instanceId);

  const show = (attrs = {}, spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOptions.defaultId;
    const spawn = spawnOpts.spawn || mOptions.defaultId;
    const item = makeItem(attrs, instanceId, spawn);
    if (mOptions.queue) {
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      const storedItem = findItem(instanceId);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
      current(instanceId);
    }
    return item.showPromise;
  };

  const hide = (spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOptions.defaultId;
    const item = mOptions.queue && items.length
      ? items[0]
      : findItem(instanceId);
    if (item) {
      item.hide = true;
      current(null);
      return item.hidePromise;
    }
    return Promise.resolve(instanceId);
  };

  const clear = () => removeAll();

  const view = ({ attrs }) => {
    const spawn = attrs.spawn || mOptions.defaultId;
    const candidates = items.filter(item => 
      item.show && item.spawn === spawn
    );
    document.body.classList[candidates.length ? "add" : "remove"](mOptions.bodyShowClass);
    return !candidates.length
      ? renderer(mOptions.placeholder) // placeholder because we cannot return null
      : renderer(mOptions.element,
        {
          className: attrs.position === "container"
            ? "pe-multiple--container"
            : "pe-multiple--screen"
        },
        candidates.map(itemData => {
          return renderer(mOptions.instance, Object.assign(
            {},
            {
              key: itemData.key || itemData.instanceId,
              transitions: mOptions.transitions,
              show: itemData.show,
              hide: itemData.hide,
              multipleDidShow: itemData.didShow,
              multipleDidHide: itemData.didHide
            },
            unpackAttrs(itemData.attrs)
          ));
        })
      );
  };

  return {
    clear,
    count,
    getInitialState,  
    hide,
    pause,
    remove,
    show,
    unpause,
    view,
  };
};
