// Simple start/stop/pause/resume timer

const Timer = function (callback, delay) {
    let timerId, start, remaining = delay;

    this.stop = function() {
        clearTimeout(timerId);
    };

    this.pause = function() {
        clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    this.resume();
};

export default Timer;
