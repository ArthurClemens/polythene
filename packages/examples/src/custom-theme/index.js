import m from 'mithril';
import { Button } from 'polythene';
import primaryButton from './primary-button';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content ? args.content : null
        ]);
    }
};

const module = {};
module.view = () => {
    return m('div', [

        m('.p-block.p-block-info',
            m('p', m.trust('Theming is described in the <a href="https://github.com/ArthurClemens/Polythene/blob/master/theme/theme.md">Polythene theme documentation</a>.'))
        ),

        m(titleBlock, {
            title: 'Sub-classing a component',
            info: m('p', m.trust('Creating a wrapper around a Polythene component.')),
            content: m('div', {
                style: {
                    margin: '0 -4px'
                }
            }, [
                m(primaryButton, {label: 'One'}),
                m(primaryButton, {label: 'Two'}),
                m(primaryButton, {label: 'Three'})
            ])
        }),
    ]);
};

export default module;
