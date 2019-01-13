// @ts-check

import { isClient } from "polythene-core";

export const Timer = function() {

  /** @type {number} */
  let timerId;

  /** @type {number} */
  let startTime;

  /** @type {number} */
  let remaining;

  /** @type {() => any} */
  let cb;

  const stop = () => {
    if (isClient) {
      window.clearTimeout(timerId);
    }
  };

  const pause = () => (
    stop(),
    remaining -= new Date().getTime() - startTime
  );

  const startTimer = () => {
    if (isClient) {
      stop();
      startTime = new Date().getTime();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  const start = (callback, duration) => (
    cb = callback,
    remaining = duration * 1000,
    startTimer()
  );

  const resume = () =>
    startTimer();

  return {
    start,
    pause,
    resume,
    stop
  };
};
