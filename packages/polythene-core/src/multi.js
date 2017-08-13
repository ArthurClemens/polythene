/*
Helper module to manage multiple items of the same component type.
*/

import { isClient } from "./iso";
import { unpackAttrs } from "./attrs";
import { emit } from "./events";

export const Multi = ({ options: mOptions, renderer }) => {

  const items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
  let current;
  
  const getInitialState = (vnode, createStream) => {
    current = createStream();
    return {
      current,
      redrawOnUpdate: createStream.merge([current])
    };
  };

  /*
  @param e: { id, eventName }
  */
  const onChange = e => {
    if (!current) {
      console.error("Cannot set state. Did you set a root element like Dialog to show instances?"); // eslint-disable-line no-console
    }
    current(e.id);
    emit(mOptions.name, e);
  };

  const itemIndex = id => {
    const item = findItem(id);
    return items.indexOf(item);
  };

  const removeItem = id => {
    const index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
      onChange({ id, name: "removeItem" });
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
    }
    onChange({ id: items.length ? items[0].instanceId : null, name: "next" });
  };

  const remove = (instanceId = mOptions.defaultId) => {
    if (mOptions.queue) {
      items.shift();
      next();
    } else {
      removeItem(instanceId);
    }
  };

  const removeAll = () => {
    items.length = 0;
    onChange({ id: null, name: "removeAll" });
  };

  const setPauseState = (pause, instanceId) => {
    const item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({ id: instanceId, name: pause ? "pause" : "unpause" });
    }
  };

  const makeItem = (itemAttrs, instanceId, spawn) => {
    let resolveShow;
    let resolveHide;
    const attrs = unpackAttrs(itemAttrs);

    const didShow = () => {
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }
      onChange({ id: instanceId, name: "didShow" });
      return resolveShow(instanceId);
    };
    const showPromise = new Promise(resolve => 
      resolveShow = resolve
    );

    const didHide = () => {
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }
      onChange({ id: instanceId, name: "didHide" });
      remove(instanceId);
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
    onChange({ id: instanceId, name: "show" });
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
    }
    onChange({ id: instanceId, name: "hide" });
    return item
      ? item.hidePromise
      : Promise.resolve(instanceId);
  };

  const clear = () => removeAll();

  const view = ({ attrs }) => {
    const spawn = attrs.spawn || mOptions.defaultId;
    const candidates = items.filter(item => 
      item.show && item.spawn === spawn
    );
    if (mOptions.bodyShowClass && isClient) {
      document.body.classList[candidates.length ? "add" : "remove"](mOptions.bodyShowClass);
    }
    return !candidates.length
      ? renderer(mOptions.placeholder) // placeholder because we cannot return null
      : renderer(mOptions.holderSelector,
        {
          className: attrs.position === "container"
            ? "pe-multiple--container"
            : "pe-multiple--screen"
        },
        candidates.map(itemData => {
          return renderer(mOptions.instance, Object.assign(
            {},
            {
              key: itemData.key,
              instanceId: itemData.instanceId,
              transitions: mOptions.transitions,
              holderSelector: mOptions.holderSelector,
              className: mOptions.className,
              showInstance: itemData.show,
              hideInstance: itemData.hide,
              pauseInstance: itemData.pause,
              unpauseInstance: itemData.unpause,
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

Multi.displayName = "Multi";


