import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel } from 'polythene';
import { styler } from 'polythene-core-css';
import common from './common';
import style from './background-1-style';
styler.add('polythene-examples-header-panel-background-1', style);

const TITLE = 'Image background variant 1';
const SUBTITLE = 'No dissolve, still image';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit background1',
    mode: 'waterfall-tall',
    condenses: true,
    noDissolve: true,
    noReveal: true,
    backgroundScrollSpeed: 0
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.background-1',
        m(HeaderPanel, Object.assign({}, {
            header: {
                toolbar: {
                    topBar: common.toolbarRow(''),
                    bottomBar: common.createBottomBar(TITLE, SUBTITLE)
                }
            },
            content: m.trust(common.textContent())
        }, PANEL_PROPS))
    );
};

module.hideNav = true;

export default module;
