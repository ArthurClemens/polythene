import j2c from 'j2c';

const remove = (id) => {
    if (id) {
        const old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
const add = (id, ...styles) => {
    remove(id);
    const styleEl = document.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach((styleList) => {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach((style) => {
                const scoped = {'@global': style};
                const sheet = j2c.sheet(scoped);
                styleEl.appendChild(document.createTextNode(sheet));
            });
        }
    });
    document.head.appendChild(styleEl);
};

export default {
    add,
    remove
};
