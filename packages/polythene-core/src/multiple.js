/*
Helper module to manage multiple items of the same component type.
*/
import m from "mithril";

/*
mOpts:
- instance
- defaultId
- element
- placeholder
- bodyShowClass
*/
export const multiple = mOpts => {

  const items = [];

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

  const isCancelled = id => {
    const item = findItem(id);
    return item !== undefined
      ? item.cancelled
      : true;
  };

  const next = () => {
    if (items.length) {
      items[0].show = true;
      m.redraw();
    }
  };

  const remove = (instanceId = mOpts.defaultId) => {
    if (mOpts.queue) {
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
    setTimeout(m.redraw);
  };

  const setPauseState = (pause, instanceId) => {
    const item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
    }
  };

  const makeItem = (itemOpts, instanceId, spawn) => {
    let resolveShow;
    const didShow = () => {
      if (isCancelled(instanceId)) {
        return;
      }
      const opts = (typeof itemOpts === "function")
        ? itemOpts()
        : itemOpts;
      if (opts.didShow) {
        opts.didShow(instanceId);
      }
      return resolveShow(instanceId);
    };
    const showPromise = new Promise(resolve => 
      resolveShow = resolve
    );

    let resolveHide;
    const didHide = () => {
      if (isCancelled(instanceId)) {
        return;
      }
      const opts = (typeof itemOpts === "function")
        ? itemOpts()
        : itemOpts;
      if (opts.didHide) {
        opts.didHide(instanceId);
      }
      if (mOpts.queue) {
        remove(instanceId);
      }
      return resolveHide(instanceId);
    };

    const hidePromise = new Promise(resolve => resolveHide = resolve);

    return Object.assign(
      {},
      mOpts,
      {
        instanceId,
        spawn,
        opts: itemOpts,
        show: mOpts.queue ? false : true,
        cancelled: false,
        showPromise,
        hidePromise,
        didShow,
        didHide
      }
    );
  };

  const show = (opts = {}, spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOpts.defaultId;
    const spawn = spawnOpts.spawn || mOpts.defaultId;
    let item;
    if (mOpts.queue) {
      item = makeItem(opts, instanceId, spawn);
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      const storedItem = findItem(instanceId);
      item = makeItem(opts, instanceId, spawn);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  const hide = (spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOpts.defaultId;
    const item = mOpts.queue && items.length
      ? items[0]
      : findItem(instanceId);
    if (item) {
      item.hide = true;
      return item.hidePromise;
    }
    return Promise.resolve(instanceId);
  };

  const clear = () => removeAll();

  const view = ({ attrs }) => {
    const spawn = attrs.spawn || mOpts.defaultId;
    const candidates = items.filter(item => 
      item.show && item.spawn === spawn
    );
    document.body.classList[candidates.length ? "add" : "remove"](mOpts.bodyShowClass);
    return !candidates.length
      ? m(mOpts.placeholder) // placeholder because we cannot return null
      : m(mOpts.element, {
        className: attrs.position === "container"
          ? "pe-multiple--container"
          : "pe-multiple--screen"
      }, candidates.map(itemData =>
          m(mOpts.instance, Object.assign(
            {},
            itemData,
            {
              transitions: mOpts.transitions,
              key: itemData.key || itemData.instanceId
            }
          ))
        )
      );
  };

  return {
    count: () => items.length,
    clear,
    show,
    hide,
    remove,
    pause: (instanceId = mOpts.defaultId) => setPauseState(true, instanceId),
    unpause: (instanceId = mOpts.defaultId) => setPauseState(false, instanceId),
    view,
    theme: mOpts.instance.theme
  };
};
