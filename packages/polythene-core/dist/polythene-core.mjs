const isClient = typeof document !== "undefined";
const isServer = !isClient;

const evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};
const getAnimationEndEvent = () => {
  if (isClient) {
    const el = document.createElement("fakeelement");

    for (let a in evts) {
      if (el.style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

const modes = {
  hidden: "hidden",
  visible: "visible",
  exposing: "exposing",
  hiding: "hiding"
};
const Conditional = {
  getInitialState: (vnode, createStream) => {
    const attrs = vnode.attrs;

    if (!attrs.didHide) {
      return {};
    }

    const visible = attrs.permanent || attrs.show;
    const mode = createStream(attrs.permanent ? modes.visible : visible ? modes.visible : modes.hidden);
    return {
      mode,
      redrawOnUpdate: createStream.merge([mode])
    };
  },
  onUpdate: ({
    state,
    attrs
  }) => {
    if (!attrs.didHide) {
      return;
    }

    const mode = state.mode();

    if (attrs.permanent) {
      if (mode === modes.visible && attrs.show) {
        state.mode(modes.exposing);
      } else if (mode === modes.exposing && !attrs.show) {
        state.mode(modes.hiding);
      }
    } else {
      // "normal" type
      if (mode === modes.hidden && attrs.show) {
        state.mode(modes.visible);
      } else if (mode === modes.visible && !attrs.show) {
        state.mode(modes.hiding);
      }
    }
  },
  view: ({
    state,
    attrs
  }, {
    renderer: h
  }) => {
    const placeholder = h("span", {
      className: attrs.placeholderClassName
    }); // No didHide callback passed: use normal visibility evaluation

    if (!attrs.didHide) {
      return attrs.permanent || attrs.inactive || attrs.show ? h(attrs.instance, attrs) : placeholder;
    } // else: use didHide to reset the state after hiding


    const mode = state.mode();
    const visible = mode !== modes.hidden;
    return visible ? h(attrs.instance, Object.assign({}, attrs, {
      didHide: args => (attrs.didHide(args), state.mode(attrs.permanent ? modes.visible : modes.hidden))
    }, mode === modes.hiding && {
      show: true,
      hide: true
    })) : placeholder;
  }
};
Conditional.displayName = "Conditional";

const r = (acc, p) => (acc[p] = 1, acc);
/* 
Separately handled props:
- class
- element
*/


const defaultAttrs = [// Universal
"key", "style", "href", "id", // React
"tabIndex", // Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];
const filterSupportedAttributes = (attrs, {
  add: addAttrs = [],
  remove: removeAttrs = []
} = {}) => {
  const removeLookup = removeAttrs.reduce(r, {});
  const supported = defaultAttrs.concat(addAttrs).filter(item => !removeLookup[item]).reduce(r, {});
  return Object.keys(attrs).reduce((acc, key) => (supported[key] ? acc[key] = attrs[key] : null, acc), {});
};
const unpackAttrs = attrs => typeof attrs === "function" ? attrs() : attrs;

const sizeClasses = classes => ({
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab
});

const classForSize = (classes, size = "regular") => sizeClasses(classes)[size];

const isTouch = isServer ? false : "ontouchstart" in document.documentElement;
const pointerStartEvent = isTouch ? ["touchstart", "click"] : ["click"];
const pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];
const pointerStartMoveEvent = isTouch ? ["touchstart", "mousedown"] : ["mousedown"];
const pointerMoveEvent = isTouch ? ["touchmove", "mousemove"] : ["mousemove"];
const pointerEndMoveEvent = isTouch ? ["touchend", "mouseup"] : ["mouseup"];

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}

const listeners = {}; // https://gist.github.com/Eartz/fe651f2fadcc11444549

const throttle = (func, s = 0.05, context = isClient ? window : {}) => {
  let wait = false;
  return (...args) => {
    const later = () => func.apply(context, args);

    if (!wait) {
      later();
      wait = true;
      setTimeout(() => wait = false, s);
    }
  };
};
const subscribe = (eventName, listener, delay) => {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};
const unsubscribe = (eventName, listener) => {
  if (!listeners[eventName]) {
    return;
  }

  const index = listeners[eventName].indexOf(listener);

  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};
const emit = (eventName, event) => {
  if (!listeners[eventName]) {
    return;
  }

  listeners[eventName].forEach(listener => listener(event));
};

if (isClient) {
  window.addEventListener("resize", e => emit("resize", e));
  window.addEventListener("scroll", e => emit("scroll", e));
  window.addEventListener("keydown", e => emit("keydown", e));
  window.addEventListener(pointerEndEvent, e => emit(pointerEndEvent, e));
}

/*
Helper module to manage multiple items of the same component type.
*/
const Multi = ({
  options: mOptions,
  renderer
}) => {
  const items = []; // This is shared between all instances of a type (Dialog, Notification, ...)

  let current;

  const getInitialState = (vnode, createStream) => {
    current = createStream(null);
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
      onChange({
        id,
        name: "removeItem"
      });
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

    onChange({
      id: items.length ? items[0].instanceId : null,
      name: "next"
    });
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
    onChange({
      id: null,
      name: "removeAll"
    });
  };

  const setPauseState = (pause, instanceId) => {
    const item = findItem(instanceId);

    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({
        id: instanceId,
        name: pause ? "pause" : "unpause"
      });
    }
  };

  const createItem = (itemAttrs, instanceId, spawn) => {
    let resolveShow;
    let resolveHide;
    const attrs = unpackAttrs(itemAttrs);

    const didShow = () => {
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didShow"
      });
      return resolveShow(instanceId);
    };

    const showPromise = new Promise(resolve => resolveShow = resolve);

    const didHide = () => {
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didHide"
      });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    const hidePromise = new Promise(resolve => resolveHide = resolve);
    return Object.assign({}, mOptions, {
      instanceId,
      spawn,
      attrs: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise,
      hidePromise,
      didShow,
      didHide
    });
  };

  const count = () => items.length;

  const pause = (instanceId = mOptions.defaultId) => setPauseState(true, instanceId);

  const unpause = (instanceId = mOptions.defaultId) => setPauseState(false, instanceId);

  const show = (attrs = {}, spawnOpts = {}) => {
    const instanceId = spawnOpts.id || mOptions.defaultId;
    const spawn = spawnOpts.spawn || mOptions.defaultId;
    const item = createItem(attrs, instanceId, spawn);
    onChange({
      id: instanceId,
      name: "show"
    });

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
    const item = mOptions.queue && items.length ? items[0] : findItem(instanceId);

    if (item) {
      item.hide = true;
    }

    onChange({
      id: instanceId,
      name: "hide"
    });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  const clear = removeAll;

  const view = ({
    attrs
  }) => {
    const spawn = attrs.spawn || mOptions.defaultId;
    const candidates = items.filter(item => item.show && item.spawn === spawn);

    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }

    return !candidates.length ? renderer(mOptions.placeholder) // placeholder because we cannot return null
    : renderer(mOptions.holderSelector, {
      className: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(itemData => {
      return renderer(mOptions.instance, Object.assign({}, {
        fromMultipleClassName: mOptions.className,
        fromMultipleClear: clear,
        fromMultipleDidHide: itemData.didHide,
        fromMultipleDidShow: itemData.didShow,
        hide: itemData.hide,
        holderSelector: mOptions.holderSelector,
        instanceId: itemData.instanceId,
        key: itemData.key,
        pause: itemData.pause,
        show: itemData.show,
        spawnId: spawn,
        transitions: mOptions.transitions,
        unpause: itemData.unpause
      }, unpackAttrs(itemData.attrs)));
    }));
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
    view
  };
};
Multi.displayName = "Multi";

const getStyle = ({
  element,
  selector,
  pseudoSelector,
  prop
}) => {
  const el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return;
  }

  return el.currentStyle ? el.currentStyle[prop] : window.getComputedStyle ? document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop) : null;
};
const stylePropCompare = ({
  element,
  selector,
  pseudoSelector,
  prop,
  equals,
  contains
}) => {
  const el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return false;
  }

  if (equals !== undefined) {
    return equals === document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
  }

  if (contains !== undefined) {
    return document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop).indexOf(contains) !== -1;
  }
};
const isRTL = ({
  element = document,
  selector
}) => stylePropCompare({
  element,
  selector,
  prop: "direction",
  equals: "rtl"
});
const styleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed) ? 0 : parsed;
};

/*
Generic show/hide transition module
*/

const DEFAULT_DURATION = .240;
const DEFAULT_DELAY = 0; // const TRANSITION =    "both";
// See: transition

const show = opts => transition(opts, "show");
const hide = opts => transition(opts, "hide");
/*
opts:
- el
- duration
- delay
- showClass
- transitionClass
- before
- show
- hide
- after
- timingFunction

- state (show, hide)
*/

const transition = (opts, state) => {
  const el = opts.el;

  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      const style = el.style;
      const computedStyle = isClient ? window.getComputedStyle(el) : {};
      const duration = opts.hasDuration ? opts.duration * 1000.0 : styleDurationToMs(computedStyle.transitionDuration);
      const delay = opts.hasDelay ? opts.delay * 1000.0 : styleDurationToMs(computedStyle.transitionDelay);
      const timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      if (opts.transitionClass) {
        const transitionClassElement = opts.transitionClassElement || el;
        transitionClassElement.classList.add(opts.transitionClass);
      }

      const before = () => {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.before();
      };

      const maybeBefore = opts.before && state === "show" ? before : opts.before && state === "hide" ? before : null;
      const after = opts.after ? () => opts.after() : null;

      const applyTransition = () => {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }

        if (opts.showClass) {
          const showClassElement = opts.showClassElement || el;
          showClassElement.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }

        if (opts.transition) {
          opts.transition();
        }
      };

      const doTransition = () => {
        applyTransition();
        setTimeout(() => {
          if (after) {
            after();
          }

          if (opts.transitionClass) {
            const transitionClassElement = opts.transitionClassElement || el;
            transitionClassElement.classList.remove(opts.transitionClass);
            el.offsetHeight; // force reflow
          }

          resolve();
        }, duration + delay);
      };

      const maybeDelayTransition = () => {
        if (duration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (maybeBefore) {
        maybeBefore();
        el.offsetHeight; // force reflow

        setTimeout(() => {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

const transitionComponent = ({
  isShow,
  state,
  attrs,
  domElements,
  beforeTransition,
  afterTransition,
  showClass,
  transitionClass
}) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }

  state.transitioning(true);
  state.visible(isShow ? true : false);

  if (beforeTransition) {
    beforeTransition();
  }

  const duration = attrs[isShow ? "showDuration" : "hideDuration"];
  const delay = attrs[isShow ? "showDelay" : "hideDelay"];
  const timingFunction = attrs[isShow ? "showTimingFunction" : "hideTimingFunction"];
  const transitions = attrs.transitions;
  const fn = isShow ? show : hide;
  const opts1 = Object.assign({}, attrs, domElements, {
    showClass,
    transitionClass,
    duration,
    delay,
    timingFunction
  });
  const opts2 = Object.assign({}, opts1, transitions && transitions[isShow ? "show" : "hide"](opts1));
  const opts3 = Object.assign({}, opts2, {
    duration: opts2.duration !== undefined ? opts2.duration : DEFAULT_DURATION,
    hasDuration: opts2.duration !== undefined,
    delay: opts2.delay !== undefined ? opts2.delay : DEFAULT_DELAY,
    hasDelay: opts2.delay !== undefined
  });
  return fn(opts3).then(() => {
    const id = state.instanceId;

    if (attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"]) {
      attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"](id); // when used with Multiple; this will call attrs.didShow / attrs.didHide
    } else if (attrs[isShow ? "didShow" : "didHide"]) {
      attrs[isShow ? "didShow" : "didHide"](id); // when used directly
    }

    if (afterTransition) {
      afterTransition();
    }

    state.transitioning(false);
  });
};

const deprecation = (component, {
  option,
  newOption,
  newComponent
}) => (option && console.warn(`${component}: option '${option}' is deprecated and will be removed in later versions. Use '${newOption}' instead.`), // eslint-disable-line no-console
newComponent && !newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' instead.`), // eslint-disable-line no-console
newComponent && newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' with option '${newOption}' instead.`) // eslint-disable-line no-console
);

const iconDropdownUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-up-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
const iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";

export { getAnimationEndEvent, Conditional, filterSupportedAttributes, unpackAttrs, classForSize, isClient, isServer, isTouch, pointerStartEvent, pointerEndEvent, pointerStartMoveEvent, pointerMoveEvent, pointerEndMoveEvent, Multi, show, hide, transitionComponent, throttle, subscribe, unsubscribe, emit, getStyle, stylePropCompare, isRTL, styleDurationToMs, deprecation, iconDropdownUp, iconDropdownDown };
