define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/shadow/shadow',
    'polythene/icon/icon',
    'css!./card'
], function(
    p,
    m,
    shadow,
    icon
) {
    'use strict';

    var imageRatios,
        createText,
        createMedia,
        createHeader,
        createPrimary,
        createActions,
        createOverlay,
        contentMap,
        createView;

    imageRatios = {
        landscape: 16 / 9,
        square: 1
    };

    createText = function(o) {
        var opts, className, tag;
        opts = o.text || {};
        className = ['text', opts.class].join(' ');
        tag = 'div' || opts.tag;

        return m(tag, {
            class: className
        }, m.trust(opts.content));
    };

    createMedia = function(o) {
        var opts, className, tag, ratio, origin, initImage;
        opts = o.media || {};
        ratio = opts.ratio || 'landscape';
        origin = opts.origin || 'center';
        className = ['media', opts.type || null, ratio, opts.class].join(' ');
        tag = 'div' || opts.tag;

        initImage = function(el, inited) {
            if (inited) return;
            var img = el.querySelector('img');
            if (img) {
                img.onload = function() {
                    var w, h, naturalRatio, cropClass;
                    w = this.naturalWidth;
                    h = this.naturalHeight;
                    naturalRatio = w / h;
                    // crop-x: crop over x axis; crop-y: crop over y axis
                    cropClass = (naturalRatio < imageRatios[ratio]) ? 'crop-x' : 'crop-y';
                    el.className += ' ' + cropClass;

                    if (origin !== 'start') {
                        var clientHeight, clientWidth, diff, offset;
                        clientWidth = el.clientWidth;
                        clientHeight = el.clientHeight;
                        if (naturalRatio < imageRatios[ratio]) {
                            // orient on y axis
                            var imageHeight = clientWidth / naturalRatio;
                            diff = clientHeight - imageHeight;
                            offset = (origin === 'center') ? diff / 2 : diff;
                            this.style.marginTop = offset + 'px';
                        } else {
                            // orient on x axis
                            var imageWidth = clientHeight * naturalRatio;
                            diff = clientWidth - imageWidth;
                            offset = (origin === 'center') ? diff / 2 : diff;
                            this.style.marginLeft = offset + 'px';
                        }
                    }
                };
            }
        };
        return m(tag, {
            class: className,
            config: initImage
        }, [
            opts.content,
            opts.overlay ? createOverlay(opts.overlay) : m('.image-dimmer')
        ]);
    };

    createHeader = function(o) {
        var opts, tag, props;
        opts = o.header || {};

        tag = opts.tag || (opts.url ? 'a[layout][horizontal][center]' : 'div[layout][horizontal][center]');

        props = Object.assign({
            class: ['header', opts.class].join(' '),
            config: opts.config
        }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));

        return m(tag, props, [
            opts.icon ? m('.content-icon', m.component(icon, opts.icon)) : null,
            m('.title[flex]', [
                opts.title ? m.trust(opts.title) : null,
                opts.subtitle ? m('.subtitle', m.trust(opts.subtitle)) : null
            ])
        ]);
    };

    createPrimary = function(o) {
        var opts, className, tag, content, lookup, key, partOpts, hasMedia;
        opts = o.primary || {};
        className = ['primary', opts.media ? 'has-media' : null, opts.class].join(' ');
        tag = '[layout][horizontal]' || opts.tag;
        hasMedia = false;

        lookup = {
            title: function(pops) {
                return pops.attrs ? pops : m('.title[flex]', [
                    pops.title ? m.trust(pops.title) : null,
                    pops.subtitle ? m('.subtitle', m.trust(pops.subtitle)) : null
                ]);
            },
            media: function(pops) {
                hasMedia = true;
                return m('div', {
                    class: ['primary-media', pops.type].join(' ')
                }, createMedia({
                    media: pops
                }));
            },
            actions: function(pops) {
                return createActions({
                    actions: pops
                });
            }
        };

        if (Array.isArray(opts.content)) {
            content = opts.content.map(function(part) {
                key = Object.keys(part)[0];
                partOpts = part[key];
                if (lookup[key]) {
                    return lookup[key](partOpts);
                } else {
                    return part;
                }
            });
        } else {
            // shorthand for simple primary titles
            content = [
                opts.title ? lookup.title({
                    title: opts.title,
                    subtitle: opts.subtitle
                }) : null,
                opts.media ? lookup.media(opts.media) : null,
                opts.actions ? lookup.actions(opts.actions) : null
            ];
        }
        if (hasMedia) {
            className += ' has-media';
        }
        return m(tag, {
            class: className
        }, content);
    };

    createActions = function(o) {
        var opts, tag, className;
        opts = o.actions || {};
        tag = opts.tag || '[layout][horizontal][center]';
        className = ['actions', opts.class].join(' ');
        return m(tag, {
            class: className
        }, opts.content);
    };

    createOverlay = function(opts) {
        var tag, className, content, key;
        opts = opts || {};
        tag = opts.tag || 'div';
        className = ['overlay-content', opts.class].join(' ');

        content = opts.content.map(function(o) {
            key = Object.keys(o)[0];
            return contentMap[key](o);
        });

        return m('.overlay', [
            m(tag, {
                class: className
            }, content),
            m('.image-dimmer')
        ]);
    };

    contentMap = {
        text: createText,
        media: createMedia,
        header: createHeader,
        primary: createPrimary,
        actions: createActions
    };

    createView = function(ctrl, opts) {
        var tag, props, content,
            key;
        opts = opts || {};

        tag = opts.tag || (opts.url ? 'a' : 'div');

        props = Object.assign({
            class: ['card', opts.class].join(' '),
            config: opts.config
        }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));

        content = opts.content.map(function(o) {
            key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift(m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }));

        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function(opts) {
            var z = (opts.z !== undefined) ? opts.z : 1;
            return {
                view: m.prop(),
                z: m.prop(z)
            };
        },
        view: function(ctrl, opts) {
            var view;
            opts = opts || {};
            view = ctrl.view();
            if (view && opts.cache) {
                return view;
            }
            view = createView(ctrl, opts);
            if (opts.cache) ctrl.view(view);
            return view;
        }
    };
});