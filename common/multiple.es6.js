/*
Helper module to manage multiple items of the same component type.
*/
import m from 'mithril';
import 'polythene/common/object.assign';

/*
mOpts:
- instance
- defaultId
- tag
- noneTag
- bodyShowClass
*/
const multiple = (mOpts) => {
    const items = [];

    const removeItem = (id) => {
        let item = findItem(id);
        // Find and remove item from an array
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    const findItem = (id) => {
        // traditional for loop for IE10
        for (let i = 0; i < items.length; i++) {
            if (items[i].instanceId === id) {
                return items[i];
            }
        }
    };

    const next = () => {
        if (items.length) {
            items[0].show = true;
            m.redraw();
        }
    };

    const remove = (instanceId) => {
        if (mOpts.queue) {
            items.shift();
            // add time to remove the previous instance before drawing the next one
            setTimeout(next, 0);
        } else {
            removeItem(instanceId);
        }
    };

    const setPauseState = (pause, instanceId) => {
        const item = findItem(instanceId);
        if (item) {
            item.pause = pause;
            item.unpause = !pause;
        }
    };

    const didShow = (instanceId) => {
        const item = findItem(instanceId);
        if (item) {
            item.showDeferred.resolve();
        }
    };

    const didHide = (instanceId) => {
        const item = findItem(instanceId);
        if (item) {
            item.hideDeferred.resolve();
        }
        if (mOpts.queue) {
            remove(instanceId);
        }

    };

    const makeItem = (opts, instanceId) => {
        return Object.assign({}, mOpts, {
            instanceId,
            opts,
            show: mOpts.queue ? false : true,
            showDeferred: m.deferred(),
            hideDeferred: m.deferred(),
            didShow,
            didHide
        });
    };

    return {

        count: () => (items.length),

        clear: () => (items.length = 0),

        show: (opts, instanceId = mOpts.defaultId) => {
            let item;
            if (mOpts.queue) {
                item = makeItem(opts, instanceId);
                items.push(item);
                if (items.length === 1) {
                    next();
                }
            } else {
                item = findItem(instanceId);
                if (!item) {
                    item = makeItem(opts, instanceId);
                    items.push(item);
                }
            }
            return item.showDeferred.promise;
        },

        hide: (instanceId = mOpts.defaultId) => {
            let item;
            if (mOpts.queue) {
                if (items.length) {
                    item = items[0];
                }
            } else {
                item = findItem(instanceId);
            }
            item.hide = true;
            return item.hideDeferred.promise;
        },

        remove: (instanceId = mOpts.defaultId) => {
            remove(instanceId);
        },

        pause: (instanceId = mOpts.defaultId) => {
            setPauseState(true, instanceId);
        },

        unpause: (instanceId = mOpts.defaultId) => {
            setPauseState(false, instanceId);
        },

        view: () => {
            const toShowItems = items.filter((item) => {
                return item.show;
            });
            if (!toShowItems.length) {
                document.body.classList.remove(mOpts.bodyShowClass);
                // placeholder because we cannot return null
                return m(mOpts.noneTag);
            } else {
                document.body.classList.add(mOpts.bodyShowClass);
            }
            return m(mOpts.tag, toShowItems.map((itemData) => {
                return m.component(mOpts.instance, Object.assign({}, itemData, {
                    transitions: mOpts.transitions
                }));
            }));
        }
    };
};

export default multiple;
