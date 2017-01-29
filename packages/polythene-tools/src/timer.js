
export const Timer = function(callback, delaySeconds) {
  let timerId, start, remaining = delaySeconds * 1000;

  this.stop = function() {
    window.clearTimeout(timerId);
  };

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};
