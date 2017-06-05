import m from 'mithril';
import { styler } from 'polythene-core-css';
import style from './tabs-menu-style';
styler.add('polythene-examples-tabs-menu', style);

import screen from './tabs-menu-screen';

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-tabs.tabs-menu', [
        m(titleBlock, {
            title: 'Menu buttons: icons only',
            content: m(screen, {
                labels: false
            })
        }),
        m(titleBlock, {
            title: 'Menu buttons: icons with label',
            content: m(screen, {
                labels: true
            })
        })
    ]);
};
module.isSub = true;
module.back = '/tabs';
module.title = 'Tabs as menu';

export default module;
