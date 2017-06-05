import m from 'mithril';
import { Button, Shadow } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './shadow-style';
styler.add('polythene-examples-shadow', style);

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

const interactiveShadow = {
    controller: function(args) {
        let STEPS = 5;

        return {
            z: m.prop(STEPS + args.initZ),

            getZ: function() {
                return Math.abs((this.z() % (2 * STEPS)) - STEPS);
            }
        };
    },
    view: function(ctrl, args) {
        return m('div.animated.layout.horizontal', {
            class: args.class,
            onclick: function() {
                let z = ctrl.z();
                ctrl.z(++z);
            }
        }, [
            m('div.self-center', 'z = ' + ctrl.getZ()),
            m(Shadow, {
                z: ctrl.getZ(),
                animated: true,
                refresh: true
            })
        ]);
    }
};

const indices = [0, 1, 2, 3, 4, 5];
const tapItems = [{
    id: 1,
    class: 'shadow-card',
    initZ: 1
}, {
    id: 2,
    class: 'shadow-fab',
    initZ: 3
}];

const module = {};
module.view = () => {
    return m('.module-shadow', [
        m(titleBlock, {
            title: 'Shadows',
            content: m('div.layout.horizontal.wrap', [
                indices.map(function(z) {
                    return m('div.layout.horizontal', {
                        class: 'shadow-card'
                    }, [
                        m('div.self-center', 'z = ' + z),
                        m(Shadow, {
                            z: z
                        })
                    ]);
                })
            ])
        }),
        m(titleBlock, {
            title: 'Interactive and animated',
            content: m('div.layout.horizontal', [
                tapItems.map(function(item) {
                    return m(interactiveShadow, {
                        id: item.id,
                        class: item.class,
                        initZ: item.initZ
                    });
                })
            ])
        }),
        m(titleBlock, {
            title: 'Element shadows',
            content: m('.has-background.layout.horizontal', [
                m(Button, {
                    raised: true,
                    label: 'Normal'
                }),
                m(Button, {
                    raised: true,
                    label: 'Raised more',
                    z: 2
                })
            ])
        })
    ]);
};

export default module;
