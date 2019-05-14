/*
Helper module to manage multiple items of the same component type.
*/

import { isClient } from "./iso";
import { unpackAttrs } from "./attrs";
import { emit, subscribe, unsubscribe } from "./events";

/**
 * @typedef {object} Item 
 */

/**
 * 
 * @param {object} params
 * @param {object} params.options
 */
export const Multi = ({ options: mOptions }) => {

  /**
   * @type {Array<Item>} items
   */
  const items = []; // This is shared between all instances of a type (Dialog, Notification, ...)

  /*
  @param e: { id, eventName }
  */
  const onChange = e => {
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

  const createItem = (itemAttrs, instanceId, spawn) => {
    let resolveShow;
    let resolveHide;
    const props = unpackAttrs(itemAttrs);

    const didShow = () => {
      if (props.didShow) {
        props.didShow(instanceId);
      }
      onChange({ id: instanceId, name: "didShow" });
      return resolveShow(instanceId);
    };

    const showPromise = new Promise(resolve => 
      resolveShow = resolve
    );

    const hidePromise = new Promise(resolve =>
      resolveHide = resolve
    );

    const didHide = () => {
      if (props.didHide) {
        props.didHide(instanceId);
      }
      onChange({ id: instanceId, name: "didHide" });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    return {
      ...mOptions,
      // keyId: mOptions.queue ? new Date().getTime() : undefined, // to force rendering a new component
      instanceId,
      spawn,
      props: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise,
      hidePromise,
      didShow,
      didHide
    };
  };

  const count = () => items.length;
  const pause = (instanceId = mOptions.defaultId) => setPauseState(true, instanceId);
  const unpause = (instanceId = mOptions.defaultId) => setPauseState(false, instanceId);

  const show = (props = {}, spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOptions.defaultId;
    const spawn = spawnOpts.spawn || mOptions.defaultId;
    const item = createItem(props, instanceId, spawn);
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

  const clear = removeAll;

  const render = ({ h, useState, useEffect, ...props }) => {
    const [, setCurrent] = useState();
    useEffect(
      () => {
        subscribe(mOptions.name, e => {
          setCurrent(e);
        });
        return () => {
          unsubscribe(mOptions.name);
        }
      },
      []
    );
    
    const spawn = props.spawn || mOptions.defaultId;
    const candidates = items.filter(item => 
      item.show && item.spawn === spawn
    );
    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }
    
    return !candidates.length
      ? h(mOptions.placeholder) // placeholder because we cannot return null
      : h(mOptions.holderSelector,
        {
          className: props.position === "container"
            ? "pe-multiple--container"
            : "pe-multiple--screen"
        },
        candidates.map(itemData => {
          return h(mOptions.instance, {
            ...unpackAttrs(props),
            fromMultipleClear: clear,
            spawnId: spawn,
            // from mOptions:
            fromMultipleClassName: mOptions.className,
            holderSelector: mOptions.holderSelector,
            transitions: mOptions.transitions,
            // from itemData:
            fromMultipleDidHide: itemData.didHide,
            fromMultipleDidShow: itemData.didShow,
            hide: itemData.hide,
            instanceId: itemData.instanceId,
            key: itemData.key !== undefined ? itemData.key : itemData.keyId,
            pause: itemData.pause,
            show: itemData.show,
            unpause: itemData.unpause,
            ...unpackAttrs(itemData.props)
          });
        })
      );
  };

  return {
    clear,
    count,
    hide,
    pause,
    remove,
    show,
    unpause,
    render,
  };
};

Multi["displayName"] = "Multi";
