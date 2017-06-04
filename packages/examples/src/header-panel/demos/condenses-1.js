import 'polythene/common/object.assign';
import m from 'mithril';
import { HeaderPanel, styler } from 'polythene';
import common from './common';
import style from './condenses-1-style';
styler.add('polythene-examples-header-panel-condenses-1', style);

const MIN_SCALE = 0.65;
let titleStyle;

const onHeaderTransform = (e) => {
    titleStyle = titleStyle || document.querySelector('.pe-header-panel .pe-title').style;
    const h = e.height - e.condensedHeight;
    const scale = Math.max(MIN_SCALE, (h - e.y) / (h / (1 - MIN_SCALE)) + MIN_SCALE);
    titleStyle.transform = titleStyle.webkitTransform = 'scale(' + scale + ') translateZ(0)';
};

const TITLE = 'Condenses variant 1';
const SUBTITLE = 'mode "waterfall-tall"';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    condenses: true,
    transform: onHeaderTransform
};

const module = {};
module.view = function() {
    return m('.demo-header-panel.condenses-1',
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
