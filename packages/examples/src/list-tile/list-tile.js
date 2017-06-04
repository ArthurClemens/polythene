import 'polythene/common/object.assign';
import m from 'mithril';
import { Icon, ListTile, styler } from 'polythene';
import style from './list-tile-style';
styler.add('polythene-examples-list-tile', style);

const titleLineText = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
const infoDoubleLineText = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

import iconStarOutline from 'mmsvg/templarian/msvg/star-outline';
import iconStarFilled from 'mmsvg/templarian/msvg/star';
import iconHeartOutline from 'mmsvg/templarian/msvg/heart-outline';
import iconHeart from 'mmsvg/templarian/msvg/heart';

const avatarImageUrl = (fileName) => 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const textListTile = (opts = {}) => {
    return m(ListTile, Object.assign(
        {
            title: titleLineText
        },
        opts
    ));
};

const avatarListTile = (index, opts = {}) => {
    return m(ListTile, Object.assign(
        {
            title: titleLineText,
            front: m(Icon, {
                type: 'large',
                class: 'pe-icon--avatar',
                src: avatarImageUrl(index + '.png')
            })
        },
        opts
    ));
};

const iconListTile = (index, opts = {}) => {
    return m(ListTile, Object.assign(
        {
            title: titleLineText,
            front: m(Icon, {
                msvg: (index === 2) ? iconStarFilled : iconStarOutline
            })
        },
        opts
    ));
};

const avatarIconListTile = (index, opts = {}) => {
    return m(ListTile, Object.assign(
        {
            title: titleLineText,
            front: m(Icon, {
                type: 'large',
                class: 'pe-icon--avatar',
                src: avatarImageUrl(index + '.png')
            }),
            secondary: Object.assign(
                {
                    icon: {
                        msvg: (index === 2) ? iconHeart : iconHeartOutline
                    }
                },
                opts.secondaryUrl ? {url: opts.secondaryUrl} : null
            ),
        },
        opts
    ));
};

const module = {};
module.view = () => {
    return m('.module-list-tile', [

        m('.p-block.p-block-info',
            m('p', m.trust('See also <a href="#/list">List</a> and <a href="#/list-controls">List Controls</a>.'))
        ),

        // Text only

        m(titleBlock, {
            title: 'Single line, no icons',
            content: m('.demo-list', [
                [1].map(() => (textListTile()))
            ])
        }),
        m(titleBlock, {
            title: 'Subtitle',
            content: m('.demo-list', [
                [1].map(() => (textListTile({subtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'High subtitle',
            content: m('.demo-list', [
                [1].map(() => (textListTile({highSubtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'Compact',
            content: m('.demo-list', [
                [1].map(() => (textListTile({compact: true, subtitle: infoDoubleLineText})))
            ])
        }),


        // Avatars

        m(titleBlock, {
            title: 'Single line with avatar',
            content: m('.demo-list', [
                [1].map((index) => (avatarListTile(index)))
            ])
        }),
        m(titleBlock, {
            title: 'Subtitle with avatar',
            content: m('.demo-list', [
                [1].map((index) => (avatarListTile(index, {subtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'High subtitle with avatar',
            content: m('.demo-list', [
                [1].map((index) => (avatarListTile(index, {highSubtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'Compact with avatar',
            content: m('.demo-list', [
                [1].map((index) => (avatarListTile(index, {compact: true, subtitle: infoDoubleLineText})))
            ])
        }),

        // Icons

        m(titleBlock, {
            title: 'Single line with icon',
            content: m('.demo-list', [
                [1].map((index) => (iconListTile(index)))
            ])
        }),
        m(titleBlock, {
            title: 'Subtitle with icon',
            content: m('.demo-list', [
                [1].map((index) => (iconListTile(index, {subtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'High subtitle with icon',
            content: m('.demo-list', [
                [1].map((index) => (iconListTile(index, {highSubtitle: infoDoubleLineText})))
            ])
        }),
        m(titleBlock, {
            title: 'Compact with icon',
            content: m('.demo-list', [
                [1].map((index) => (iconListTile(index, {compact: true, subtitle: infoDoubleLineText})))
            ])
        }),


        // Secondary content

        m(titleBlock, {
            title: 'Single line with secondary item',
            content: m('.demo-list', [
                [1].map((index) => (avatarIconListTile(index, {})))
            ])
        }),
        m(titleBlock, {
            title: 'Subtitle with secondary item',
            content: m('.demo-list', [
                [1].map((index) => (avatarIconListTile(index, {subtitle: infoDoubleLineText})))
            ])
        }),

        m(titleBlock, {
            title: 'High subtitle with secondary item',
            content: m('.demo-list', [
                [1].map((index) => (avatarIconListTile(index, {highSubtitle: infoDoubleLineText})))
            ])
        }),

        m(titleBlock, {
            title: 'Primary and secondary action',
            info: m.trust('Primary content (avatar and title) and secondary content (icon) are separate links'),
            content: m('.demo-list.links', [
                [1].map((index) => (avatarIconListTile(index, {
                    subtitle: infoDoubleLineText,
                    url: {
                        href: 'javascript: void(0)'
                    },
                    secondaryUrl: {
                        href: 'javascript: void(0)'
                    }
                })))
            ])
        }),

        m(titleBlock, {
            title: 'Background ripple',
            info: m('p', 'Demonstrating ripple on tap.'),
            content: m('.demo-list', [
                [1].map((index) => (avatarListTile(index, {
                    subtitle: infoDoubleLineText,
                    url: {
                        href: 'javascript: void(0)'
                    },
                    ink: true
                })))
            ])
        }),

        // Custom content

        m(titleBlock, {
            title: 'Custom secondary content',
            content: m('.demo-list.custom', [
                m(ListTile, {
                    title: 'Ali Connors',
                    highSubtitle: [
                        m('.demo-first', 'Brunch this weekend?'),
                        m('.demo-second', 'I\'ll be in your neighborhood doing errands.')
                    ],
                    secondary: {
                        content: m('.custom-secondary',
                            m('small', '15 min'),
                            m('.flex'),
                            m(Icon, {
                                msvg: iconStarOutline
                            })
                        )
                    }
                })
            ])
        }),

        m(titleBlock, {
            title: 'Disabled',
            content: m('.demo-list', [
                [1].map(() => (textListTile({
                    subtitle: infoDoubleLineText,
                    disabled: true
                })))
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme: subtitle',
            class: 'pe-dark-theme',
            content: m('.demo-list', [
                [1].map(() => (textListTile({subtitle: infoDoubleLineText})))
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: m('.demo-list', [
                [1].map((index) => (avatarIconListTile(index, {subtitle: infoDoubleLineText})))
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: m('.demo-list', [
                [1].map(() => (textListTile({
                    subtitle: infoDoubleLineText,
                    disabled: true
                })))
            ])
        })
    ]);
};

export default module;
