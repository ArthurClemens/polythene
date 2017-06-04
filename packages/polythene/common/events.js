var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    var wait = false;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, s);
        }
    };
};

var subscribe = function subscribe(eventName, listener, delay) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
    if (!listeners[eventName]) {
        return;
    }
    var index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

var emit = function emit(eventName, event) {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(function (listener) {
        listener(event);
    });
};

window.addEventListener('resize', function (e) {
    return emit('resize', e);
});
window.addEventListener('scroll', function (e) {
    return emit('scroll', e);
});
window.addEventListener('keydown', function (e) {
    return emit('keydown', e);
});

export default {
    throttle: throttle,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    emit: emit
};