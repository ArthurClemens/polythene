// @ts-check

import { pointerEndEvent } from "./pointer";
import { isClient } from "./iso";

/**
 * @type {{[s: string]: Array<function>}} listeners
 */
const listeners = {};

/**
 * @param {function} func
 * @param {number} [s]
 * @param {object} [context]
 * @returns {function}
 * @see https://gist.github.com/Eartz/fe651f2fadcc11444549
 */
export const throttle = (func, s = 0.05, context = isClient ? window : {}) => {
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

/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 * @param {number} [delay] 
 */
export const subscribe = (eventName, listener, delay) => {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 */
export const unsubscribe = (eventName, listener) => {
  if (!listeners[eventName]) {
    return;
  }
  const index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */
export const emit = (eventName, event) => {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(listener => listener(event));
};

if (isClient) {
  window.addEventListener("resize",      e => emit("resize", e));
  window.addEventListener("scroll",      e => emit("scroll", e));
  window.addEventListener("keydown",     e => emit("keydown", e));
  pointerEndEvent.forEach(eventName =>
    window.addEventListener(eventName, e => emit(eventName, e))
  );
}
