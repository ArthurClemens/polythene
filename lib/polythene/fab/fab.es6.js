'use strict';

import m from 'mithril';
import iconBtn from 'polythene/icon-button/icon-button';
require('polythene-theme/fab/fab');

let component,
    createView;

createView = (ctrl, opts = {}) => {
    opts.parentClass = ['fab', (opts.mini ? 'mini' : null)].join(' ');
    opts.raised = true;
    opts.ripple = {
        center: true,
        opacityDecayVelocity: 0.24,
        cache: true
    };
    opts.shadow = {
        increase: 5
    };
    opts.ink = true;
    opts.wash = true;
    return m.component(iconBtn, opts);
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
