// Simple start/stop/pause/resume timer

var Timer = function Timer(callback, delay) {
    var timerId = void 0,
        start = void 0,
        remaining = delay;

    this.stop = function () {
        window.clearTimeout(timerId);
    };

    this.pause = function () {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function () {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};

export default Timer;