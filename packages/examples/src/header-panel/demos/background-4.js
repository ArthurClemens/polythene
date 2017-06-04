import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel, styler } from 'polythene';
import common from './common';
import style from './background-4-style';
styler.add('polythene-examples-header-panel-background-4', style);

const TITLE = 'Image background variant 4';
const SUBTITLE = 'Blending images';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit background4',
    mode: 'waterfall-tall',
    condenses: true,
    shadow: false,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.background-4',
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
