import m from 'mithril';
import { Icon, styler } from 'polythene';
import style from './icon-style';
styler.add('polythene-examples-icon', style);

import gIconStars from 'mmsvg/google/msvg/action/stars';
import gIconGroup from 'mmsvg/google/msvg/social/group';
import gIconChatBubble from 'mmsvg/google/msvg/communication/chat-bubble';

import zIconFemale from 'mmsvg/zavoloklom/msvg/2_1/03_person/female';
import zIconAttachment from 'mmsvg/zavoloklom/msvg/2_1/01_web_application/attachment';
import zIconCloud from 'mmsvg/zavoloklom/msvg/2_1/04_file/cloud-download';

import tIconBarcode from 'mmsvg/templarian/msvg/barcode';
import tIconHappy from 'mmsvg/templarian/msvg/emoticon-happy';
import tIconHeadphones from 'mmsvg/templarian/msvg/headphones';

const block = {
    view: function(ctrl, args) {
        return m('.demo-icon', [
            m(Icon, args.icon)
        ]);
    }
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            m('.demo-icons', args.content)
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-icon', [

        m('.p-block.p-block-info', [
            m('p', m.trust('Mithril msvg icons are available via <a href="https://github.com/ArthurClemens/mithril-material-design-icons">mithril-material-design-icons</a>.')),
            m('p',
                m.trust('Examples loading PNG or SVG files are omitted here; see <a href="http://polythene.js.org/#icon">the documentation on icon</a> for more information.')
            )
        ]),

        m(titleBlock, {
            title: 'Google icons',
            info: m('p',
                m.trust('SVG icons, from <a href="https://github.com/google/material-design-icons">google/material-design-icons</a>, converted to Mithril msvg.')
            ),
            content: [
                m(block, {
                    icon: {
                        msvg: gIconStars
                    }
                }),
                m(block, {
                    icon: {
                        msvg: gIconGroup
                    }
                }),
                m(block, {
                    icon: {
                        msvg: gIconChatBubble
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Zavoloklom icons',
            info: [
                m('p',
                    m.trust('SVG icons, from <a href="https://github.com/zavoloklom/material-design-iconic-font">zavoloklom/material-design-iconic-font</a>, converted to Mithril msvg.')
                )
            ],
            content: [
                m(block, {
                    icon: {
                        msvg: zIconFemale
                    }
                }),
                m(block, {
                    icon: {
                        msvg: zIconAttachment
                    }
                }),
                m(block, {
                    icon: {
                        msvg: zIconCloud
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Templarian icons',
            info: m('p',
                m.trust('SVG icons, from <a href="https://github.com/Templarian/MaterialDesign">Templarian/MaterialDesign</a>, converted to Mithril msvg.')
            ),
            content: [
                m(block, {
                    icon: {
                        msvg: tIconBarcode
                    }
                }),
                m(block, {
                    icon: {
                        msvg: tIconHappy
                    }
                }),
                m(block, {
                    icon: {
                        msvg: tIconHeadphones
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Sizing icons',
            info: m('p',
                m.trust('small, regular, medium, large')
            ),
            content: ['small', 'regular', 'medium', 'large'].map((size) => {
                return m(block, {
                    icon: {
                        type: size,
                        msvg: tIconHappy
                    }
                });
            })
        })
    ]);
};

export default module;
