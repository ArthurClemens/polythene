import m from 'mithril';
import { Button, Icon, SVG, styler } from 'polythene';
import style from './svg-style';
styler.add('polythene-examples-svg', style);

const ICON_FOLDER = '../assets/svg/mmsvg-google-content/';
const LOADER_EXTENSION = '!text';

import gIconStars from 'mmsvg/google/msvg/action/stars';
import gIconGroup from 'mmsvg/google/msvg/social/group';
import gIconChatBubble from 'mmsvg/google/msvg/communication/chat-bubble';

const block = {
    view: (ctrl, args) => {
        return m('.demo-icon', [
            args.svg ? m(SVG, args.svg) : null,
            args.icon ? m(Icon, args.icon) : null,
            m('span', args.label)
        ]);
    }
};

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            m('.demo-icons', args.content)
        ]);
    }
};

const dynamic = {
    controller: () => {
        const icons = ['add-box.svg', 'add-circle-outline.svg', 'add-circle.svg', 'add.svg', 'archive.svg', 'backspace.svg', 'block.svg', 'clear.svg', 'content-copy.svg', 'content-cut.svg', 'content-paste.svg', 'create.svg', 'drafts.svg', 'filter-list.svg', 'flag.svg', 'font-download.svg', 'forward.svg', 'gesture.svg', 'inbox.svg', 'link.svg', 'mail.svg', 'markunread.svg', 'redo.svg', 'remove-circle-outline.svg', 'remove-circle.svg', 'remove.svg', 'reply-all.svg', 'reply.svg', 'report.svg', 'save.svg', 'select-all.svg', 'send.svg', 'sort.svg', 'text-format.svg', 'undo.svg'];
        const getIcon = () => {
            return icons[Math.floor(Math.random() * icons.length)];
        };
        let icon = m.prop(getIcon());

        return {
            icon: icon,
            icons: icons,
            refreshIcon: () => {
                icon(getIcon());
            }
        };
    },
    view: (ctrl) => {
        const icon = ctrl.icon();

        return m(titleBlock, {
            title: 'Dynamic loading from a set of .svg files',
            info: m('p',
                m(Button, {
                    label: 'Refresh',
                    raised: 1,
                    events: {
                        onclick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                            ctrl.refreshIcon();
                            m.redraw();
                        }
                    }
                })
            ),
            content: [
                m(block, {
                    svg: {
                        key: icon,
                        src: ICON_FOLDER + icon + LOADER_EXTENSION,
                        preload: ctrl.icons.map((name) => (ICON_FOLDER + name + LOADER_EXTENSION)),
                        class: 'demo-svg mdi'
                    }
                })
            ]
        });
    }
};

const module = {};
module.view = () => {
    return m('.module-svg',

        m(titleBlock, {
            title: 'Using msvg files',
            info: m('p', [
                m.trust('See '),
                m('a', {href: '/icon', config: m.route}, 'Icon'),
                m.trust(' for info about msvg.')
            ]),
            content: [
                m(block, {
                    svg: {
                        content: gIconStars,
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        content: gIconGroup,
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        content: gIconChatBubble,
                        class: 'demo-svg md'
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Using SVG XML',
            content: [
                m(block, {
                    svg: {
                        content: m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'),
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        content: m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'),
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        content: m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>'),
                        class: 'demo-svg md'
                    }
                })
            ]
        }),
/*
        m(titleBlock, {
            title: 'Dynamic loading of .svg files',
            info: m('p',
                m.trust('Using SystemJS module loader.')
            ),
            content: [
                m(block, {
                    svg: {
                        src: ICON_FOLDER + 'add.svg' + LOADER_EXTENSION,
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        src: ICON_FOLDER + 'filter-list.svg' + LOADER_EXTENSION,
                        class: 'demo-svg md'
                    }
                }),
                m(block, {
                    svg: {
                        src: ICON_FOLDER + 'backspace.svg' + LOADER_EXTENSION,
                        class: 'demo-svg md'
                    }
                })
            ]
        }),

        dynamic,

        m(titleBlock, {
            title: 'Usage with Icon',
            info: m('p', [
                m.trust('SVG as param for '),
                m('a', {href: '/icon', config: m.route}, 'Icon'),
                m.trust('.')
            ]),
            content: [
                m(block, {
                    icon: {
                        svg: {
                            src: ICON_FOLDER + 'add.svg' + LOADER_EXTENSION
                        }
                    }
                }),
                m(block, {
                    icon: {
                        svg: {
                            src: ICON_FOLDER + 'filter-list.svg' + LOADER_EXTENSION
                        }
                    }
                }),
                m(block, {
                    icon: {
                        svg: {
                            src: ICON_FOLDER + 'backspace.svg' + LOADER_EXTENSION
                        }
                    }
                })
            ]
        })
*/
    );
};

export default module;
