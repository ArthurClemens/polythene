define(['mithril', 'polythene/icon/icon'], function(m) {
    'use strict';

    return {
        view: function(ctrl, args) {
            return m('div[center][horizontal][layout]', {
                class: 'p-nav-block'
            }, [
                m('a', {
                        href: 'index.html',
                        class: 'icon-button'
                    },
                    m('div', {
                            class: 'icon'
                        },
                        m('i[fit]', {
                                class: 'material-design-iconic-font'
                            },
                            m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M8 16h8v-8h-8v8zm12 24h8v-8h-8v8zm-12 0h8v-8h-8v8zm0-12h8v-8h-8v8zm12 0h8v-8h-8v8zm12-20v8h8v-8h-8zm-12 8h8v-8h-8v8zm12 12h8v-8h-8v8zm0 12h8v-8h-8v8z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>')
                        )
                    )
                ),
                m('div', {
                    class: 'p-title indent'
                }, [
                    args.title,
                    m.trust(' '),
                    m('span', args.subtitle)
                ]),
                m('span[flex]'),
                m('div', {
                    class: 'p-version'
                }, [
                    args.baseFileName ? m('a', {
                        href: './' + args.baseFileName + '-plain.html',
                    }, 'Plain') : null,
                    m('span', 'Mithril')
                ])
            ]);
        }
    };
});