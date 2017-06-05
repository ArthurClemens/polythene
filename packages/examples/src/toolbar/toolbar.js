import m from 'mithril';
import { IconButton, Toolbar } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './toolbar-style';
styler.add('polythene-examples-toolbar', style);

import iconMenu from 'mmsvg/google/msvg/navigation/menu';
import iconSearch from 'mmsvg/google/msvg/action/search';
import iconFavorite from 'mmsvg/google/msvg/action/favorite';
import iconMore from 'mmsvg/google/msvg/navigation/more-vert';

const btn = function(msvg) {
    return m(IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

const toolbarRow = [
    btn(iconMenu),
    m('span.flex', 'Toolbar title lorem ipsum dolor sit amet'),
    btn(iconSearch),
    btn(iconFavorite),
    btn(iconMore)
];

const toolbarBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.label),
            m(Toolbar, args.toolbar)
        ]);
    }
};

let module = {};
module.view = () => {
    return m('.module-toolbar', [
        m(toolbarBlock, {
            label: 'Content',
            toolbar: {
                topBar: toolbarRow
            }
        }),
        m(toolbarBlock, {
            label: 'Dark theme',
            toolbar: {
                class: 'pe-dark-theme',
                topBar: toolbarRow
            }
        }),
        m(toolbarBlock, {
            label: 'Tall with elements pinned to the bottom',
            toolbar: {
                mode: 'tall',
                bottomBar: toolbarRow
            }
        }),
        m(toolbarBlock, {
            label: 'Medium-tall with label aligns to the bottom',
            toolbar: {
                mode: 'medium-tall',
                topBar: toolbarRow,
                bottomBar: m.trust('<span flex class="pe-toolbar__title--indent">Bottom content</span>')
            }
        }),
        m(toolbarBlock, {
            label: 'Three bars',
            toolbar: {
                mode: 'tall',
                topBar: toolbarRow,
                middleBar: m.trust('<div flex class="middle pe-toolbar__title--indent">label aligns to the middle</div>'),
                bottomBar: m.trust('<div class="bottom pe-toolbar__title--indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
            }
        }),
        m(toolbarBlock, {
            label: 'With loader bar',
            toolbar: {
                mode: 'tall',
                topBar: toolbarRow,
                middleBar: m.trust('<div flex class="middle pe-toolbar__title--indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),
                bottomBar: m.trust('<div flex class="bottom pe-fit" style="height: 20px; background-color: #0f9d58;"></div>')
            }
        })
    ]);
};

export default module;
