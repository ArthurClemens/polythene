/*
Helper module to manage multiple items of the same component type.
*/
import m from 'mithril';

const multiple = (instance, defaultId, tag, noneTag, bodyShowClass) => {
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

    return {
        show: (opts, instanceId = defaultId) => {
            const item = findItem(instanceId);
            if (!item) {
                items.push({
                    instanceId,
                    opts
                });
            }
        },
        hide: (id = defaultId) => {
            findItem(id).hide = true;
        },
        remove: (id = defaultId) => {
            removeItem(id);
        },
        view: () => {
            if (!items.length) {
                document.body.classList.remove(bodyShowClass);
                // placeholder because we cannot return null
                return m(noneTag);
            } else {
                document.body.classList.add(bodyShowClass);
            }
            return m(tag, items.map((itemData) => {
                return m.component(instance, itemData);
            }));
        }
    };
};

export default multiple;
