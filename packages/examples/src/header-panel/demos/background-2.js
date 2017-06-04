import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel, styler } from 'polythene';
import common from './common';
import style from './background-2-style';
styler.add('polythene-examples-header-panel-background-2', style);

const TITLE = 'Image background variant 2';
const SUBTITLE = 'Dissolve';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit background2',
    mode: 'waterfall-tall',
    condenses: true,
    noReveal: true
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.background-2',
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
