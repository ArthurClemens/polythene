'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
require('polythene-theme/svg/svg');

const PLUGIN_EXTENSION = '!text';

let component,
	createView,
	getPath,
	loadSvg,
	preloadNext,
	globalCache;

globalCache = {};

getPath = (opts = {}) => {
	let components = ['polythene/deps/svg'];
	components.push(opts.iconSet || p.iconSet());
	if (opts.group) {
		components.push(opts.group);
	}
	if (opts.name) {
		components.push(opts.name);
	}
	return components.join('/') + '.svg';
};

createView = (ctrl, opts = {}) => {
    let tag, props, content,
		path, svg;

    tag = opts.tag || 'div';
    props = {
        class: ['svg', opts.class].join(' '),
        config: opts.config
    };

    path = opts.src ? opts.src : getPath(opts);
    if (ctrl.path() !== path) {
		svg = globalCache[path];
		if (svg) {
			content = m.trust(svg);
			preloadNext(ctrl);
		} else {
			// load new, then wait until file has been loaded
			ctrl.path(path);
			loadSvg(path, ctrl);
		}
    } else {
		svg = ctrl.svg();
		svg = svg || '';
		content = m.trust(svg);
		preloadNext(ctrl);
    }

    return m(tag, props, p.insertContent(content, opts));
};

loadSvg = (path, ctrl, preload = false) => {
	let requireUrl,
		deferred;

	requireUrl = path + PLUGIN_EXTENSION;
	deferred = m.deferred();
	System.import(requireUrl).then(function(data) {
		deferred.resolve(data);
		if (preload) {
			globalCache[path] = data;
			ctrl.preloadingIndex++;
		} else {
			ctrl.svg(data);
			m.redraw();
		}
	});
};

preloadNext = (ctrl) => {
	let next, path;

	if (!ctrl.preloadingItems) {
		return;
	}
	if (ctrl.preloadingIndex >= ctrl.preloadingItems.length) {
		return;
	}
	next = ctrl.preloadingItems[ctrl.preloadingIndex];
	path = next.src ? next.src : getPath(next);
	if (globalCache[path]) {
		return;
	}
	loadSvg(path, ctrl, true);
};

component = {
	controller: (opts = {}) => {
		return {
			path: m.prop(''),
			svg: m.prop(''),
			preloadingItems: opts.preload,
			preloadingIndex: 0
		};
	},
	view: (ctrl, opts = {}) => {
		return createView(ctrl, opts);
	}
};

export default component;
