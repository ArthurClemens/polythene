'use strict';

import m from 'mithril';
import svg from 'polythene/svg/svg';
import button from 'polythene/button/button';
require('./svg.css!');

const block = {
    view: (ctrl, args) => {
        return m('.demo-icon', [
            m.component(svg, args.svg),
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
        const icons = ['account-alert', 'account-box-outline', 'account-box', 'account-check', 'account-circle', 'account-key', 'account-location', 'account-minus', 'account-multiple-outline', 'account-multiple-plus', 'account-multiple', 'account-network', 'account-outline', 'account-plus', 'account-remove', 'account-search', 'account-switch', 'account', 'airballoon', 'airplane-off', 'airplane', 'alarm-check', 'alarm-multiple', 'alarm-off', 'alarm-plus', 'alarm', 'album', 'alert-box', 'alert-circle', 'alert-octagon', 'alert', 'alpha', 'alphabetical', 'amazon-clouddrive', 'amazon', 'ambulance', 'android-debug-bridge', 'android-studio', 'android', 'apple-finder', 'apple-mobileme', 'apple-safari', 'apple', 'appnet', 'apps', 'archive', 'arrange-bring-forward', 'arrange-bring-to-front', 'arrange-send-backward', 'arrange-send-to-back', 'arrow-all', 'arrow-collapse', 'arrow-down-bold-circle-outline', 'arrow-down-bold-circle', 'arrow-down-bold-hexagon-outline', 'arrow-down-bold', 'arrow-down', 'arrow-expand', 'arrow-left-bold-circle-outline', 'arrow-left-bold-circle', 'arrow-left-bold-hexagon-outline', 'arrow-left-bold', 'arrow-left', 'arrow-right-bold-circle-outline', 'arrow-right-bold-circle', 'arrow-right-bold-hexagon-outline', 'arrow-right-bold', 'arrow-right', 'arrow-up-bold-circle-outline', 'arrow-up-bold-circle', 'arrow-up-bold-hexagon-outline', 'arrow-up-bold', 'arrow-up', 'attachment', 'auto-fix', 'auto-upload', 'backup-restore', 'bank', 'barcode', 'barley', 'barrel', 'basecamp', 'basket-fill', 'basket-unfill', 'basket', 'battery-20', 'battery-30', 'battery-40', 'battery-60', 'battery-80', 'battery-90', 'battery-alert', 'battery-charging-20', 'battery-charging-30', 'battery-charging-40', 'battery-charging-60', 'battery-charging-80', 'battery-charging-90', 'battery-charging-100', 'battery-minus', 'battery-negative', 'battery-outline', 'battery-plus', 'battery-positive', 'battery-standard', 'battery-unknown', 'battery', 'beaker-empty-outline', 'beaker-empty', 'beaker-outline', 'beaker', 'beats', 'beer', 'behance', 'bell-off', 'bell-outline', 'bell-ring-outline', 'bell-ring', 'bell-sleep', 'bell', 'beta', 'bike', 'bing', 'bio', 'black-mesa', 'blackberry', 'blinds', 'block-helper', 'blogger', 'bluetooth-audio', 'bluetooth-connect', 'bluetooth-settings', 'bluetooth', 'blur-linear', 'blur-off', 'blur-radial', 'blur', 'book-multiple-variant', 'book-multiple', 'book-open', 'book-variant', 'book', 'bookmark-check', 'bookmark-outline-plus', 'bookmark-outline', 'bookmark-plus', 'bookmark-remove', 'bookmark', 'border-all', 'border-bottom', 'border-color', 'border-horizontal', 'border-inside', 'border-left', 'border-none', 'border-outside', 'border-right', 'border-top', 'border-vertical', 'bowling', 'box-download', 'box-upload', 'box', 'briefcase-checked', 'briefcase-download', 'briefcase-upload', 'briefcase', 'brightness-1', 'brightness-2', 'brightness-3', 'brightness-4', 'brightness-5', 'brightness-6', 'brightness-7', 'brightness-auto', 'brightness', 'broom', 'brush', 'bug', 'bullhorn', 'bus', 'cake-variant', 'cake', 'calculator', 'calendar-blank', 'calendar-check-multiple', 'calendar-check', 'calendar-multiple', 'calendar-remove', 'calendar-select', 'calendar-text', 'calendar-today', 'calendar', 'camcorder-box-off', 'camcorder-box', 'camcorder-off', 'camcorder', 'camera-iris', 'camera-party-mode', 'camera-switch', 'camera-timer', 'camera', 'cancel', 'candycane', 'car-wash', 'car', 'carrot', 'cart-outline', 'cart', 'cash-multiple', 'cash-usd', 'cash', 'cast-connected', 'cast', 'castle', 'cellphone-android', 'cellphone-dock', 'cellphone-iphone', 'cellphone-link-off', 'cellphone-link', 'cellphone-settings', 'cellphone', 'chair-school', 'chart-arc', 'chart-bar', 'chart-histogram', 'chart-line', 'chart-pie', 'check-all', 'check-bookmark', 'check-circle', 'check', 'checkbox-blank-circle-outline', 'checkbox-blank-circle', 'checkbox-blank-outline', 'checkbox-blank', 'checkbox-marked-circle-outline', 'checkbox-marked-circle', 'checkbox-marked-outline', 'checkbox-marked', 'checkbox-multiple-blank-outline', 'checkbox-multiple-blank', 'checkbox-multiple-marked-outline', 'checkbox-multiple-marked', 'checkerboard', 'chevron-double-down', 'chevron-double-left', 'chevron-double-right', 'chevron-double-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'church', 'city', 'clapperboard', 'clipboard-account', 'clipboard-alert', 'clipboard-arrow-down', 'clipboard-arrow-left'];
        const getIcon = () => {
            return icons[Math.floor(Math.random() * icons.length)];
        };
        let icon = m.prop(getIcon());

        return {
            icon: icon,
            refreshIcon: () => {
                icon(getIcon());
            }
        };
    },
    view: (ctrl) => {
        const icon = ctrl.icon();

        return m('div',
            m.component(titleBlock, {
                title: 'Dynamically load SVG',
                info: m('p',
                    m.component(button, {
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
                    }),
                    m.trust(' '),
                    m('span.secondary', new Date())
                ),
                content: [
                    m.component(block, {
                        svg: {
                            name: icon,
                            iconSet: 'mdi',
                            class: 'demo-svg mdi'
                        }
                    })
                ]
            })
        );
    }
};

let module = {};
module.view = () => {
    return m('.module-svg', [
        dynamic,
        m.component(titleBlock, {
            title: 'Iconset: Material Design Icon Font',
            info: m('p',
                m.trust('SVG icons from <a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a>')
            ),
            content: [
                m.component(block, {
                    svg: {
                        group: 'google/navigation',
                        name: 'menu',
                        class: 'demo-svg md'
                    }
                }),
                m.component(block, {
                    svg: {
                        group: 'google/content',
                        name: 'add',
                        class: 'demo-svg md'
                    }
                }),
                m.component(block, {
                    svg: {
                        group: 'google/navigation',
                        name: 'refresh',
                        class: 'demo-svg md'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Iconset: Templarian Material Design',
            info: m('p',
                m.trust('SVG icons from <a href="https://github.com/Templarian/MaterialDesign">Templarian / Material Design</a>')
            ),
            content: [
                m.component(block, {
                    svg: {
                        name: 'barcode',
                        iconSet: 'mdi',
                        class: 'demo-svg mdi'
                    }
                }),
                m.component(block, {
                    svg: {
                        name: 'emoticon-happy',
                        iconSet: 'mdi',
                        class: 'demo-svg mdi'
                    }
                }),
                m.component(block, {
                    svg: {
                        name: 'headphones',
                        iconSet: 'mdi',
                        class: 'demo-svg mdi'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'File reference',
            info: m('p',
                m.trust('src: file.svg')
            ),
            content: [
                m.component(block, {
                    svg: {
                        src: 'app/icon/img/ic_flight_24px.svg',
                        class: 'demo-svg google'
                    }
                }),
                m.component(block, {
                    svg: {
                        src: 'app/icon/img/ic_pin_drop_48px.svg',
                        class: 'demo-svg google'
                    }
                })
            ]
        })
    ]);
};

export default module;
