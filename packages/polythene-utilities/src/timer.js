
import { isClient } from "polythene-core";

export const Timer = () => {
  let timerId, startTime, remaining, cb;

  const stop = () => {
    if (isClient) {
      window.clearTimeout(timerId);
    }
  };

  const pause = () => (
    stop(),
    remaining -= new Date() - startTime
  );

  const startTimer = () => {
    if (isClient) {
      stop();
      startTime = new Date();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  const start = (callback, delaySeconds) => (
    cb = callback,
    remaining = delaySeconds * 1000,
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
