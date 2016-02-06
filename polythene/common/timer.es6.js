// Simple start/stop/pause/resume timer

const Timer = function (callback, delay) {
    let timerId, start, remaining = delay;

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

export default Timer;
