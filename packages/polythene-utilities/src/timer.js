
export const Timer = (callback, delaySeconds) => {
  let timerId, startTime, remaining = delaySeconds * 1000;

  const stop = () =>
    window.clearTimeout(timerId);

  const pause = () => {
    window.clearTimeout(timerId);
    remaining -= new Date() - startTime;
  };

  const start = () => {
    startTime = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  start();

  return {
    start,
    pause,
    resume: start,
    stop
  };
};
