/*
Helper module to manage multiple items of the same component type.
*/
import m from 'mithril';

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
        for (let item of items) {
            if (item.instanceId === id) {
                return item;
            }
        }
    };

    const next = () => {
        if (items.length) {
            items[0].show = true;
            m.redraw();
        }
    };

    const setPauseState = (pause, instanceId) => {
        const item = findItem(instanceId);
        if (item) {
            if (pause) {
                item.unpause = false;
                item.pause = true;
            } else {
                item.pause = false;
                item.unpause = true;
            }
        }
    };

    return {
        count: () => (items.length),
        show: (opts, instanceId = mOpts.defaultId) => {
            if (mOpts.queue) {
                items.push({
                    instanceId,
                    opts
                });
                if (items.length === 1) {
                    next();
                }
            } else {
                const item = findItem(instanceId);
                if (!item) {
                    items.push({
                        instanceId,
                        opts,
                        show: true
                    });
                }
            }
        },
        hide: (instanceId = mOpts.defaultId) => {
            if (mOpts.queue) {
                if (items.length) {
                    const item = items[0];
                    if (item) {
                        item.hide = true;
                    }
                }
            } else {
                const item = findItem(instanceId);
                if (item) {
                    item.hide = true;
                }
            }
        },
        remove: (instanceId = mOpts.defaultId) => {
            if (mOpts.queue) {
                items.splice(0, 1);
                // add time to remove the previous component before drawing the next one
                setTimeout(() => {
                    next();
                }, 0);
            } else {
                removeItem(instanceId);
            }
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
            return m(mOpts.tag, toShowItems.map((itemData, index) => {
                if (itemData.show) {
                    return m.component(mOpts.instance, Object.assign({}, itemData, {
                        key: index
                    }));
                }
            }));
        }
    };
};

export default multiple;
