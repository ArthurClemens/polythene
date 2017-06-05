import m from 'mithril';
import buttonRow from './button-row';
import { styler } from 'polythene-core-css';
import style from './button-style';
styler.add('polythene-examples-button', style);

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            args.content ? args.content : null
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-button', [
        m(titleBlock, {
            title: 'Raised Light / Light theme',
            content: m('.button-row', buttonRow({
                raised: true
            }))
        }),
        m(titleBlock, {
            title: 'Flat Light / Light theme',
            content: m('.button-row', buttonRow({
                raised: false
            }))
        }),
        m(titleBlock, {
            title: 'Raised Dark / Dark theme',
            class: 'pe-dark-theme',
            content: m('.button-row', buttonRow({
                raised: true
            }))
        }),
        m(titleBlock, {
            title: 'Flat Dark / Dark theme',
            class: 'pe-dark-theme',
            content: m('.button-row', buttonRow({
                raised: false
            }))
        })
    ]);
};

export default module;
