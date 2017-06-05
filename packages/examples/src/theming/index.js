import m from 'mithril';
import { Button } from 'polythene';
import PrimaryButton from './primary-button';

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
                m(PrimaryButton, {label: 'One'}),
                m(PrimaryButton, {label: 'Two'}),
                m(PrimaryButton, {label: 'Three'})
            ])
        }),

        m.component(titleBlock, {
            title: 'Custom style as configuration',
            info: m('p', m.trust('Enhancing/replacing styles with configuration per component. This new configuration is scoped to this page.')),
            class: 'example-custom-theme',
            content: m('div', {
                style: {
                    margin: '0 -4px'
                }
            }, [
                m(Button, {raised: true, label: 'One'}),
                m(Button, {raised: true, label: 'Two'}),
                m(Button, {raised: true, label: 'Three'})
            ])
        })
    ]);
};

export default module;
