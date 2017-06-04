import 'polythene/common/object.assign';
import m from 'mithril';
import { Icon, List, ListTile, styler } from 'polythene';
import formattingList from '../menu/formatting-list';
import style from './list-style';
styler.add('polythene-examples-list', style);

const titleLineText = 'Lorem ipsum dolor sit amet, in et consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
const infoDoubleLineText = 'Lorem ipsum dolor sit amet, in et consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const avatarImageUrl = (fileName) => 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const exampleTiles = [
    m(ListTile, {
        title: titleLineText,
        subtitle: infoDoubleLineText
    }),
    m(ListTile, {
        title: titleLineText,
        subtitle: infoDoubleLineText
    }),
    m(ListTile, {
        title: titleLineText,
        subtitle: infoDoubleLineText
    })
];

const exampleList = (opts = {}, noHeader = false) => {
    return m(List, Object.assign(
        {},
        {
            class: ['demo-list', opts.class ? opts.class : null].join(' '),
            borders: opts.borders,
            indentedBorders: opts.indentedBorders,
            hoverable: opts.hoverable,
            compact: opts.compact,
            tiles: [1,2,3].map((index) => {
                return m(ListTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    front: m(Icon, {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl(index + '.png')
                    })
                });
            })
        },
        noHeader ? null : {
            header: {
                title: 'Subheader',
                indent: opts.indent
            }
        }
    ));
};

const module = {};
module.view = () => {
    return m('.module-list', [

        m('.p-block.p-block-info',
            m('p', m.trust('See also <a href="#/list-controls">List Controls</a> and <a href="#/list-tile">List Tile</a>.'))
        ),

        m(titleBlock, {
            title: 'List as menu contents',
            content: m(formattingList, {
                class: 'demo-list menu-list',
            })
        }),

        m(titleBlock, {
            title: 'Bordered list items with avatars',
            content: m('div', [
                exampleList({
                    borders: true
                }),
                exampleList({
                    borders: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Indented borders and sub-headers',
            content: m('div', [
                exampleList({
                    indentedBorders: true,
                    indent: true
                }),
                exampleList({
                    indentedBorders: true,
                    indent: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Hoverable (not on touch device)',
            content: m(List, {
                class: 'demo-list',
                tiles: exampleTiles,
                hoverable: true
            })
        }),

        m(titleBlock, {
            title: 'No sub-header',
            content: m(List, {
                class: 'demo-list',
                tiles: exampleTiles
            })
        }),

        m(titleBlock, {
            title: 'Subheader',
            content: m(List, {
                class: 'demo-list',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m(titleBlock, {
            title: 'Compact',
            content: exampleList({
                class: 'demo-list',
                compact: true
            }, true)
        }),

        m(titleBlock, {
            title: 'Subheaders in a scrollable list',
            info: m('p', m.trust('<a href="http://caniuse.com/#feat=css-sticky">Does not work in IE/Edge</a>')),
            content: m('.scrollable-list', [0,1,2,3,4].map(() => {
                return m(List, {
                    class: 'demo-list',
                    header: {
                        title: 'Subheader',
                        sticky: true
                    },
                    tiles: exampleTiles
                });
            }))
        }),

        m(titleBlock, {
            title: 'Bordered list items',
            content: m(List, {
                class: 'demo-list',
                borders: true,
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m(titleBlock, {
            title: 'Avatars',
            content: m('div', [
                exampleList(),
                exampleList()
            ])
        }),

        m(titleBlock, {
            title: 'Bordered, dark theme',
            content: m(List, {
                class: 'demo-list pe-dark-theme',
                borders: true,
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m(titleBlock, {
            title: 'Avatars dark theme',
            content: m('.pe-dark-theme', [
                exampleList({hoverable: true}),
                exampleList({hoverable: true})
            ])
        }),

    ]);
};

export default module;
