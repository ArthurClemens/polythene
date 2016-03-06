const listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
const throttle = (func, s = 0.05, context = window) => {
    let wait = false;
    return (...args) => {
        const later = () => {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(() => {
                wait = false;
            }, s);
        }
    };
};

const subscribe = (eventName, listener, delay) => {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

const unsubscribe = (eventName, listener) => {
    if (!listeners[eventName]) {
        return;
    }
    const index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

const emit = (eventName, event) => {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach((listener) => {
        listener(event);
    });
};

export default {
    throttle,
    subscribe,
    unsubscribe,
    emit
};
