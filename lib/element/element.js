define([
    'polythene/polythene/polythene',
    'mithril'
], function(
    p,
    m
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            var tag, props, content;
            opts = opts || {};

            tag = opts.tag || 'div';
            props = p.componentProps({}, opts, this, ctrl);

            content = [
                opts.content ? opts.content : null
            ];
            return m(tag, props, p.embellish(content, opts));
        }
    };
});