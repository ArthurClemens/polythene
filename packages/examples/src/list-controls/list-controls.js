import m from 'mithril';
import sortableList from './sortable-list';
import checkboxPrimary from './checkbox-primary';
import checkboxSecondary from './checkbox-secondary';
import switchSecondary from './switch-secondary';
import { styler } from 'polythene';
import style from './list-controls-style';
styler.add('polythene-examples-list-controls', style);

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
    return m('.module-list-controls', [

        m('.p-block.p-block-info',
            m('p', m.trust('See also <a href="#/list">List</a> and <a href="#/list-tile">List Tile</a>.'))
        ),

        m(titleBlock, {
            title: 'Checkbox as primary action',
            info: 'Rows are clickable',
            content: checkboxPrimary
        }),

        m(titleBlock, {
            title: 'Checkbox as secondary action',
            info: 'Rows are clickable',
            content: checkboxSecondary
        }),

        m(titleBlock, {
            title: 'Switch as secondary action',
            info: 'Rows are clickable',
            content: switchSecondary
        }),

        m(titleBlock, {
            title: 'Sortable list',
            content: sortableList
        })
    ]);
};

export default module;
