// Simple start/stop/pause/resume timer

var Timer = function Timer(callback, delay) {
    var timerId = void 0,
        start = void 0,
        remaining = delay;

    this.stop = function () {
        clearTimeout(timerId);
    };

    this.pause = function () {
        clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function () {
        start = new Date();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    this.resume();
};

export default Timer;