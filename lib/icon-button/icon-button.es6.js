'use strict';

import m from 'mithril';
import icon from 'polythene/icon/icon';
import button from 'polythene/button/button';
require('polythene-theme/icon-button/icon-button');

let component,
    createView;

createView = (ctrl, opts = {}) => {
	let content;
	if (opts.icon) {
		content = m.component(icon, opts.icon);
	} else if (opts.content) {
		content = opts.content;
	}
    opts.content = m('span', content);
    opts.parentClass = opts.parentClass || 'icon-button';
    // default do not show hover effect
    opts.wash = (opts.wash !== undefined) ? opts.wash : false;
    return m.component(button, opts);
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
