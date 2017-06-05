import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel } from 'polythene';
import { styler } from 'polythene-core-css';
import common from './common';
import style from './background-3-style';
styler.add('polythene-examples-header-panel-background-3', style);

const TITLE = 'Image background variant 3';
const SUBTITLE = 'Keep condensed header';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit background3',
    mode: 'waterfall-tall',
    condenses: true,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.background-3',
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
