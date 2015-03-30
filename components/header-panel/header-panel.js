/*
Important: The header-panel will not display if its parent does not have a height.

var headerPanel = require('components/header-panel.js');
var myPanel = new headerPanel(opts);
var view = myPanel.view();

Constructor opts:

    opts.controller (optional)
    opts.container (optional): function(inner, opts, controller) => Mithril template
    opts.inner (optional): function(opts, controller) => Mithril template

    opts.mode

        Controls header and scrolling behavior. Options are
        `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and 
        `cover`. Default is `standard`.

        `standard`: The header is a step above the panel. The header will consume the
        panel at the point of entry, preventing it from passing through to the
        opposite side.

        `seamed`: The header is presented as seamed with the panel.

        `waterfall`: Similar to standard mode, but header is initially presented as
        seamed with panel, but then separates to form the step.

        `waterfall-tall`: The header is initially taller (`tall` class is added to
        the header).  As the user scrolls, the header separates (forming an edge)
        while condensing (`tall` class is removed from the header).

        `scroll`: The header keeps its seam with the panel, and is pushed off screen.

        `cover`: The panel covers the whole `core-header-panel` including the
        header. This allows user to style the panel in such a way that the panel is
        partially covering the header.


    opts.header: Mithril template
    opts.body: Mithril template
    opts.mode (optional): defaults to opts.mode
    opts.tallClass
    opts.shadow
    opts.animateDuration
*/

// TODO: remove scroll listener on detach

module.exports = function(opts) {
    'use strict';

    var m = require('mithril');

    var styler = require('../polythene/styler.js');
    styler('header-panel', require('./header-panel.jss'));

    var container,
        inner,
        controller,
        modeConfigs,

        // functions
        getScrollerContainer,
        scrollHandler,
        initScroll;

    modeConfigs = {
        shadowMode: {'waterfall': 1, 'waterfall-tall': 1},
        noShadow: {'seamed': 1, 'cover': 1, 'scroll': 1},
        tallMode: {'waterfall-tall': 1},
        outerScroll: {'scroll': 1}
    };

    opts = opts || {};
    opts.mode = opts.mode || 'standard';

    getScrollerContainer = function() {
        return modeConfigs.outerScroll[opts.mode] ? 'outer' : 'main';
    };

    scrollHandler = function(e) {
        console.log('scrollHandler', e);
    };

    // function(element, isInitialized, context)
    initScroll = function(element, isInitialized) {
        if (isInitialized) return;
        if (opts.mode !== 'tall') return; // FIXME: premature optimization?
        element.addEventListener('scroll', scrollHandler);
/*
        context.onunload = function() {
            element.removeEventListener('scroll', scrollHandler);
            console.log('removeEventListener');
        }
*/
    };

    // function(inner, opts, controller)
    container = opts.container || function(inner) {
        return m('div', {class: 'header-panel'}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        var header = opts.header || '';
        var body = opts.body || '';
        /*
            opts.tallClass = opts.tallClass || 'tall'; // TODO: not used yet
            opts.shadow = opts.shadow || false; // TODO: not used yet
            opts.animateDuration = 200; // TODO: not used yet
        */
        var scrollerContainer = getScrollerContainer();
        return m('div[vertical][layout]', {
                class: 'outerContainer',
                opts: scrollerContainer === 'outer' ? initScroll : ''
            }, [
                header,
                m('div[flex][vertical][layout]', {class: 'mainPanel'}, [
                    m('div[flex]', {
                        class: 'mainContainer',
                        opts: scrollerContainer === 'main' ? initScroll : ''
                    },
                    body
                ),
                opts.mode === 'seamed' ? '' : m('div', {class: 'dropShadow'})
            ])
        ]);
    };

    controller = opts.controller || function() {};
    
    return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};
