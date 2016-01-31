import 'polythene/common/object.assign';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
import icon from 'polythene/icon/icon';
import 'polythene/card/theme/theme';

const CSS_CLASSES = {
    block: 'pe-card',
    overlay: 'pe-card__overlay',
    overlaySheet: 'pe-card__overlay--sheet',
    overlayContent: 'pe-card__overlay__content',
    mediaDimmer: 'pe-card__media__dimmer',
    mediaCropX: 'pe-card__media--crop-x',
    mediaCropY: 'pe-card__media--crop-y',
    media: 'pe-card__media',
    header: 'pe-card__header',
    headerTitle: 'pe-card__header-title',
    headerSubtitle: 'pe-card__header-subtitle',
    title: 'pe-card__title',
    subtitle: 'pe-card__subtitle',
    titleFront: 'pe-card__header__front',
    text: 'pe-card__text',
    primary: 'pe-card__primary',
    primaryMedia: 'pe-card__primary__media',
    actions: 'pe-card__actions',
    actionsBordered: 'pe-card__actions--borders',
    mediaRatioSquare: 'pe-card__media--square',
    mediaRatioLandscape: 'pe-card__media--landscape',
    primaryHasMedia: 'pe-card__primary--media',
    mediaSmall: 'pe-card__media--small',
    mediaRegular: 'pe-card__media--regular',
    mediaMedium: 'pe-card__media--medium',
    mediaLarge: 'pe-card__media--large'
};

const imageRatios = {
    landscape: 16 / 9,
    square: 1
};

const createOverlay = (opts = {}) => {
    const tag = opts.tag || 'div';
    const content = opts.content.map(function(o) {
        const key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return m('div', {
        class: [
            CSS_CLASSES.overlay,
            opts.sheet ? CSS_CLASSES.overlaySheet : null,
        ].join(' ')
    }, [
        m(tag, {
            class: [CSS_CLASSES.overlayContent, opts.class].join(' ')
        }, content),
        m('div', {
            class: CSS_CLASSES.mediaDimmer
        })
    ]);
};

const createText = o => {
    const opts = o.text || {};
    const tag = 'div' || opts.tag;
    return m(tag, {
        class: [CSS_CLASSES.text, opts.class].join(' ')
    }, opts.content);
};

// media type to class

const mediaTypeClasses = {
    small: CSS_CLASSES.mediaSmall,
    regular: CSS_CLASSES.mediaRegular,
    medium: CSS_CLASSES.mediaMedium,
    large: CSS_CLASSES.mediaLarge
};

const mediaClassForType = (mode = 'regular') => {
    return mediaTypeClasses[mode];
};

const createMedia = o => {
    const opts = o.media || {};
    const ratio = opts.ratio || 'landscape';
    const origin = opts.origin || 'center';
    const tag = 'div' || opts.tag;

    let initImage = function(el, inited) {
        if (inited) {
            return;
        }
        let img = el.querySelector('img');
        if (img) {
            img.onload = function() {
                const w = this.naturalWidth;
                const h = this.naturalHeight;
                const naturalRatio = w / h;
                // crop-x: crop over x axis
                // crop-y: crop over y axis
                const cropClass = (naturalRatio < imageRatios[ratio]) ? CSS_CLASSES.mediaCropX : CSS_CLASSES.mediaCropY;
                img.className = cropClass;

                if (origin !== 'start') {
                    const clientWidth = el.clientWidth;
                    const clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        const imageHeight = clientWidth / naturalRatio;
                        const diff = clientHeight - imageHeight;
                        const offset = Math.ceil((origin === 'center') ? diff / 2 : diff);
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        const imageWidth = clientHeight * naturalRatio;
                        const diff = clientWidth - imageWidth;
                        const offset = Math.ceil((origin === 'center') ? diff / 2 : diff);
                        this.style.marginLeft = offset + 'px';
                    }
                }
            };
        }
    };

    return m(tag, {
        class: [
            CSS_CLASSES.media,
            mediaClassForType(opts.type),
            (ratio === 'landscape' ? CSS_CLASSES.mediaRatioLandscape : CSS_CLASSES.mediaRatioSquare),
        ].join(' '),
        config: initImage
    }, [
        opts.content,
        opts.overlay ? createOverlay(opts.overlay) : m('div', {class: CSS_CLASSES.mediaDimmer})
    ]);
};

const createHeader = o => {
    const opts = o.header || {};
    const tag = opts.tag || 'a.layout.horizontal.center';
    const props = Object.assign({
        class: [CSS_CLASSES.header, opts.class].join(' '),
        config: opts.config
    }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));
    return m(tag, props, [
        opts.icon ? m('div', {class: CSS_CLASSES.titleFront}, m.component(icon, opts.icon)) : null,
        m('div', {
            class: CSS_CLASSES.headerTitle
        }, [
            opts.title ? opts.title : null,
            opts.subtitle ? m('div', {class: CSS_CLASSES.headerSubtitle}, opts.subtitle) : null
        ])
    ]);
};

const createActions = o => {
    const opts = o.actions || {};
    const tag = opts.tag || '.layout.horizontal.center';
    return m(tag, {
        class: [CSS_CLASSES.actions, opts.class].join(' ')
    }, opts.content);
};

const createPrimary = o => {
    let content, key, partOpts;
    const opts = o.primary || {};
    const tag = '.layout.horizontal' || opts.tag;
    let primaryHasMedia = false;

    const lookup = {
        title: function(pops) {
            return pops.attrs ? pops : m('div', {class: CSS_CLASSES.title}, [
                pops.title ? pops.title : null,
                pops.subtitle ? m('div', {class: CSS_CLASSES.subtitle}, pops.subtitle) : null
            ]);
        },
        media: function(pops) {
            primaryHasMedia = true;
            return m('div', {
                class: CSS_CLASSES.primaryMedia
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
            opts.actions ? lookup.actions(opts.actions) : null,
            opts.content ? opts.content : null
        ];
    }
    return m(tag, {
        class: [
            CSS_CLASSES.primary,
            (primaryHasMedia ? CSS_CLASSES.primaryHasMedia : null)
        ].join(' ')
    }, content);
};

const contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || opts.url ? 'a' : 'div';
    const props = Object.assign({
        class: [CSS_CLASSES.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));

    let content;
    if (Array.isArray(opts.content)) {
        content = opts.content.map(function(o) {
            const key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift(m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }));
    } else {
        content = [
            m.component(shadow, {
                z: ctrl.z(),
                animated: true
            }),
            opts.content
        ];
    }
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;
        return {
            z: m.prop(z)
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
