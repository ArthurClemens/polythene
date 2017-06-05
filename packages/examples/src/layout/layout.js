import m from 'mithril';
import { styler } from 'polythene-core-css';
import style from './layout-style';
styler.add('polythene-examples-layout', style);

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', [
                m.trust(args.title),
                args.subtitle ? m('p', m.trust(args.subtitle)) : null,
            ]),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const blocks = [1,2,3,4].map((num) => {
    return m('.block', num);
});

const module = {};
module.view = () => {
    return m('.module-layout', [

        m('.p-block.p-block-info',
            m('p', m.trust('Flexbox layout classes.'))
        ),

        m('.h-block',
            m('h4', 'Horizontal')
        ),
        m(titleBlock, {
            title: 'div.layout.horizontal',
            content: m('.screen.layout.horizontal',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.horizontal.inline',
            content: m('.screen.layout.horizontal.inline',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.horizontal.reverse',
            content: m('.screen.layout.horizontal.reverse',
                blocks
            )
        }),

        m('.h-block',
            m('h4', 'Vertical')
        ),
        m(titleBlock, {
            title: 'div.layout.vertical',
            content: m('.screen.layout.vertical',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.vertical.inline',
            content: m('.screen.layout.vertical.inline',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.vertical.reverse',
            content: m('.screen.layout.vertical.reverse',
                blocks
            )
        }),
        m(titleBlock, {
            title: '.auto-vertical',
            subtitle: 'container: div.layout.vertical',
            content: m('.screen.layout.vertical',
                m('.block.auto-vertical', '1'),
                m('.block.auto-vertical', '2'),
                m('.block.auto-vertical', '3'),
                m('.block.auto-vertical', '4')
            )
        }),
        m(titleBlock, {
            title: '.auto-vertical',
            subtitle: 'container: div.layout.horizontal',
            content: m('.screen.layout.horizontal',
                m('.block.auto-vertical', '1'),
                m('.block.auto-vertical', '2'),
                m('.block.auto-vertical', '3'),
                m('.block.auto-vertical', '4')
            )
        }),

        m('.h-block',
            m('h4', 'Wrap')
        ),
        m(titleBlock, {
            title: 'div.layout.wrap',
            content: m('.screen.demo-fixed-height.demo-small-width.layout.wrap',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.wrap.reverse',
            content: m('.screen.demo-fixed-height.demo-small-width.layout.wrap.reverse',
                blocks
            )
        }),

        m('.h-block',
            m('h4', 'Start, Center, End')
        ),
        m(titleBlock, {
            title: 'div.layout.start',
            content: m('.screen.demo-fixed-height.layout.start',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.center',
            content: m('.screen.demo-fixed-height.layout.center',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.end',
            content: m('.screen.demo-fixed-height.layout.end',
                blocks
            )
        }),

        m(titleBlock, {
            title: 'div.layout.vertical.center',
            content: m('.screen.demo-fixed-height.layout.vertical.center',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.center-center',
            content: m('.screen.demo-fixed-height.layout.center-center',
                blocks
            )
        }),

        m('.h-block',
            m('h4', 'Justified')
        ),
        m(titleBlock, {
            title: 'div.layout.justified',
            content: m('.screen.demo-fixed-height.layout.justified',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.start-justified',
            content: m('.screen.demo-fixed-height.layout.start-justified',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.center-justified',
            content: m('.screen.demo-fixed-height.layout.center-justified',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.end-justified',
            content: m('.screen.demo-fixed-height.layout.end-justified',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.center-justified.end',
            content: m('.screen.demo-fixed-height.layout.center-justified.end',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.around-justified',
            content: m('.screen.demo-fixed-height.layout.around-justified',
                blocks
            )
        }),
        m(titleBlock, {
            title: 'div.layout.around-justified.end',
            content: m('.screen.demo-fixed-height.layout.around-justified.end',
                blocks
            )
        }),

        m('.h-block',
            m('h4', 'Flexible children layout')
        ),
        m(titleBlock, {
            title: '.flex, .flex.two, .flex.two, .flex.six',
            subtitle: 'container: div.layout',
            content: m('.screen.layout',
                m('.block.flex', '1'),
                m('.block.flex.two', '2'),
                m('.block.flex.two', '3'),
                m('.block.flex.six', '4')
            )
        }),
        m(titleBlock, {
            title: '&mdash;, .flex, &mdash;, &mdash;',
            subtitle: 'container: div.layout',
            content: m('.screen.layout',
                m('.block', '1'),
                m('.block.flex', '2'),
                m('.block', '3'),
                m('.block', '4')
            )
        }),
        m(titleBlock, {
            title: '.self-start, .flex, .flex, .self-end',
            subtitle: 'container: div.horizontal.layout',
            content: m('.screen.layout',
                m('.block.self-start', '1'),
                m('.block.flex', '2'),
                m('.block.flex', '3'),
                m('.block.self-end', '4')
            )
        }),
        m(titleBlock, {
            title: '.flex, .flex.two, .flex.two, .flex.six',
            subtitle: 'container: div.vertical.layout',
            content: m('.screen.demo-large-fixed-height.vertical.layout',
                m('.block.flex', '1'),
                m('.block.flex.two', '2'),
                m('.block.flex.two', '3'),
                m('.block.flex.six', '4')
            )
        }),

        m(titleBlock, {
            title: 'div.vertical.layout .self-center',
            content: m('.screen.vertical.layout',
                m('.self-center', blocks)
            )
        }),
        m(titleBlock, {
            title: 'div.vertical.layout .self-end',
            content: m('.screen.vertical.layout',
                m('.self-end', blocks)
            )
        }),
        m(titleBlock, {
            title: 'div.self-stretch',
            content: m('.screen.self-stretch',
                blocks
            )
        }),

        m('.h-block',
            m('h4', 'Other')
        ),
        m(titleBlock, {
            title: '.pe-fit',
            subtitle: 'container: div',
            content: m('.screen.demo-fixed-height',
                m('.block.auto-size.pe-fit', '1')
            )
        }),
    ]);
};

export default module;
