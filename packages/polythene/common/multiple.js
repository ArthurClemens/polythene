var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
import m from 'mithril';
import { isClient } from 'polythene-core';
import './object.assign';

/*
mOpts:
- instance
- defaultId
- tag
- noneTag
- bodyShowClass
*/
var multiple = function multiple(mOpts) {
    var items = [];

    var itemIndex = function itemIndex(id) {
        var item = findItem(id);
        return items.indexOf(item);
    };

    var removeItem = function removeItem(id) {
        var index = itemIndex(id);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    var replaceItem = function replaceItem(id, newItem) {
        var index = itemIndex(id);
        if (index !== -1) {
            items[index] = newItem;
        }
    };

    var findItem = function findItem(id) {
        // traditional for loop for IE10
        for (var i = 0; i < items.length; i++) {
            if (items[i].instanceId === id) {
                return items[i];
            }
        }
    };

    var next = function next() {
        if (items.length) {
            items[0].show = true;
            m.redraw();
        }
    };

    var _remove = function _remove(instanceId) {
        if (mOpts.queue) {
            items.shift();
            // add time to remove the previous instance before drawing the next one
            setTimeout(next, 0);
        } else {
            removeItem(instanceId);
        }
    };

    var setPauseState = function setPauseState(pause, instanceId) {
        var item = findItem(instanceId);
        if (item) {
            item.pause = pause;
            item.unpause = !pause;
        }
    };

    var makeItem = function makeItem(itemOpts, instanceId) {
        var resolveShow = void 0;
        var didShow = function didShow() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didShow) {
                opts.didShow(instanceId);
            }
            return resolveShow(instanceId);
        };
        var showPromise = new Promise(function (resolve) {
            resolveShow = resolve;
        });

        var resolveHide = void 0;
        var didHide = function didHide() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didHide) {
                opts.didHide(instanceId);
            }
            if (mOpts.queue) {
                _remove(instanceId);
            }
            return resolveHide(instanceId);
        };
        var hidePromise = new Promise(function (resolve) {
            resolveHide = resolve;
        });

        return _extends({}, mOpts, {
            instanceId: instanceId,
            opts: itemOpts,
            show: mOpts.queue ? false : true,
            showPromise: showPromise,
            hidePromise: hidePromise,
            didShow: didShow,
            didHide: didHide
        });
    };

    return {

        count: function count() {
            return items.length;
        },

        clear: function clear() {
            return items.length = 0;
        },

        show: function show(opts) {
            var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                item = makeItem(opts, instanceId);
                items.push(item);
                if (items.length === 1) {
                    next();
                }
            } else {
                var storedItem = findItem(instanceId);
                item = makeItem(opts, instanceId);
                if (!storedItem) {
                    items.push(item);
                } else {
                    replaceItem(instanceId, item);
                }
            }
            return item.showPromise;
        },

        hide: function hide() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                if (items.length) {
                    item = items[0];
                }
            } else {
                item = findItem(instanceId);
            }
            if (item) {
                item.hide = true;
                return item.hidePromise;
            }
            return Promise.resolve(instanceId);
        },

        remove: function remove() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            _remove(instanceId);
        },

        pause: function pause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(true, instanceId);
        },

        unpause: function unpause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(false, instanceId);
        },

        view: function view() {
            var toShowItems = items.filter(function (item) {
                return item.show;
            });
            if (!toShowItems.length) {
                if (isClient) {
                    document.body.classList.remove(mOpts.bodyShowClass);
                }
                // placeholder because we cannot return null
                return m(mOpts.noneTag);
            } else {
                if (isClient) {
                    document.body.classList.add(mOpts.bodyShowClass);
                }
            }
            return m(mOpts.tag, toShowItems.map(function (itemData) {
                return m(mOpts.instance, _extends({}, itemData, {
                    transitions: mOpts.transitions,
                    key: itemData.key || itemData.instanceId
                }));
            }));
        }
    };
};

export default multiple;