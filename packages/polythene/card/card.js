var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import shadow from '../shadow/shadow';
import icon from '../icon/icon';
import listTile from '../list-tile/list-tile';
import "./theme";

var CSS_CLASSES = {
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
    title: 'pe-card__title',
    subtitle: 'pe-card__subtitle',
    text: 'pe-card__text',
    primary: 'pe-card__primary',
    primaryMedia: 'pe-card__primary__media',
    actions: 'pe-card__actions',
    actionsHorizontal: 'pe-card__actions--horizontal',
    actionsVertical: 'pe-card__actions--vertical',
    actionsJustified: 'pe-card__actions--justified',
    actionsBordered: 'pe-card__actions--borders',
    mediaRatioSquare: 'pe-card__media--square',
    mediaRatioLandscape: 'pe-card__media--landscape',
    primaryHasMedia: 'pe-card__primary--media',
    mediaSmall: 'pe-card__media--small',
    mediaRegular: 'pe-card__media--regular',
    mediaMedium: 'pe-card__media--medium',
    mediaLarge: 'pe-card__media--large'
};

var imageRatios = {
    landscape: 16 / 9,
    square: 1
};

var createOverlay = function createOverlay() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tag = opts.tag || 'div';
    var content = opts.content.map(function (o) {
        var key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return m('div', {
        class: [CSS_CLASSES.overlay, opts.sheet ? CSS_CLASSES.overlaySheet : null].join(' ')
    }, [m(tag, {
        class: [CSS_CLASSES.overlayContent, opts.class].join(' ')
    }, content), m('div', {
        class: CSS_CLASSES.mediaDimmer
    })]);
};

var createText = function createText(o) {
    var opts = o.text || {};
    var tag = opts.tag || 'div';
    return m(tag, {
        class: [CSS_CLASSES.text, opts.class].join(' ')
    }, opts.content);
};

// media type to class

var mediaTypeClasses = {
    small: CSS_CLASSES.mediaSmall,
    regular: CSS_CLASSES.mediaRegular,
    medium: CSS_CLASSES.mediaMedium,
    large: CSS_CLASSES.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
    var opts = o.media || {};
    var ratio = opts.ratio || 'landscape';
    var origin = opts.origin || 'center';
    var tag = opts.tag || 'div';

    var initImage = function initImage(el, inited) {
        if (inited) {
            return;
        }
        var img = el.querySelector('img');
        if (img) {
            img.onload = function () {
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var naturalRatio = w / h;
                // crop-x: crop over x axis
                // crop-y: crop over y axis
                var cropClass = naturalRatio < imageRatios[ratio] ? CSS_CLASSES.mediaCropX : CSS_CLASSES.mediaCropY;
                img.className = cropClass;

                if (origin !== 'start') {
                    var clientWidth = el.clientWidth;
                    var clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        var imageHeight = clientWidth / naturalRatio;
                        var diff = clientHeight - imageHeight;
                        var offset = Math.ceil(origin === 'center' ? diff / 2 : diff);
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        var imageWidth = clientHeight * naturalRatio;
                        var _diff = clientWidth - imageWidth;
                        var _offset = Math.ceil(origin === 'center' ? _diff / 2 : _diff);
                        this.style.marginLeft = _offset + 'px';
                    }
                }
            };
        }
    };

    return m(tag, {
        class: [CSS_CLASSES.media, mediaClassForType(opts.type), ratio === 'landscape' ? CSS_CLASSES.mediaRatioLandscape : CSS_CLASSES.mediaRatioSquare, opts.class].join(' '),
        config: initImage
    }, [opts.content, opts.overlay ? createOverlay(opts.overlay) : m('div', { class: CSS_CLASSES.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
    var opts = o.header || {};
    return m(listTile, _extends({}, opts, {
        class: [CSS_CLASSES.header, opts.class].join(' ')
    }, opts.icon ? {
        front: m(icon, opts.icon)
    } : null));
};

var actionLayoutClasses = {
    horizontal: CSS_CLASSES.actionsHorizontal,
    vertical: CSS_CLASSES.actionsVertical,
    justified: CSS_CLASSES.actionsJustified
};
var actionClassForLayout = function actionClassForLayout() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'horizontal';
    return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
    var opts = o.actions || {};
    var tag = opts.tag || 'div';
    return m(tag, {
        class: [CSS_CLASSES.actions, actionClassForLayout(opts.layout), opts.class].join(' ')
    }, opts.content);
};

var createPrimary = function createPrimary(o) {
    var content = void 0,
        key = void 0,
        partOpts = void 0;
    var opts = o.primary || {};
    var tag = opts.tag || 'div';
    var primaryHasMedia = false;

    var lookup = {
        title: function title(pops) {
            return pops.attrs ? pops : m('div', { class: CSS_CLASSES.title }, [pops.title ? pops.title : null, pops.subtitle ? m('div', { class: CSS_CLASSES.subtitle }, pops.subtitle) : null]);
        },
        media: function media(pops) {
            primaryHasMedia = true;
            return m('div', {
                class: CSS_CLASSES.primaryMedia
            }, createMedia({
                media: pops
            }));
        },
        actions: function actions(pops) {
            return createActions({
                actions: pops
            });
        }
    };

    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (part) {
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
        content = [opts.title ? lookup.title({
            title: opts.title,
            subtitle: opts.subtitle
        }) : null, opts.media ? lookup.media(opts.media) : null, opts.actions ? lookup.actions(opts.actions) : null, opts.content ? opts.content : null];
    }
    return m(tag, {
        class: [CSS_CLASSES.primary, primaryHasMedia ? CSS_CLASSES.primaryHasMedia : null].join(' ')
    }, content);
};

var contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || opts.url ? 'a' : 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);

    var content = void 0;
    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (o) {
            var key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift(m(shadow, {
            z: ctrl.z(),
            animated: true
        }));
    } else {
        content = [m(shadow, {
            z: ctrl.z(),
            animated: true
        }), opts.content];
    }
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: m.prop(z)
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;