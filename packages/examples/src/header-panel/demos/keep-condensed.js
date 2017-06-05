import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel } from 'polythene';
import { styler } from 'polythene-core-css';
import common from './common';
import style from './keep-condensed-style';
styler.add('polythene-examples-header-panel-keep-condensed', style);

const TITLE = 'Keep condensed header';
const SUBTITLE = '';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    condenses: true,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.keep-condensed',
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
