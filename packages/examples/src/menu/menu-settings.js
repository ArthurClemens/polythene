import m from 'mithril';
import { List, ListTile, Menu } from 'polythene';

const settings = {};
settings.controller = () => {
    const lockedMenu = {
        show: false,
        selectedIndex: 0,
        options: [
            'Show all notification content',
            'Hide sensitive notification content',
            'Hide all notification content'
        ]
    };
    return {
        lockedMenu
    };
};
settings.view = (ctrl) => {
    return m('.settings', [
        m(Menu, {
            target: 'choice_device_locked',
            show: ctrl.lockedMenu.show,
            hideDelay: .240,
            didHide: () => {
                ctrl.lockedMenu.show = false;
            },
            size: 5,
            content: m(List, {
                hoverable: true,
                tiles: ctrl.lockedMenu.options.map((setting, index) => {
                    return m(ListTile, {
                        title: setting,
                        selected: index === ctrl.lockedMenu.selectedIndex,
                        ink: true,
                        events: {
                            onclick: () => (ctrl.lockedMenu.selectedIndex = index)
                        }
                    });
                })
            })
        }),
        m(List, {
            class: 'selectable-list',
            selectable: true,
            tiles: [
                m(ListTile, {
                    id: 'choice_device_locked',
                    title: 'When device is locked',
                    subtitle: ctrl.lockedMenu.options[ctrl.lockedMenu.selectedIndex],
                    events: {
                        onclick: () => {
                            ctrl.lockedMenu.show = true;
                        }
                    }
                }),
                m(ListTile, {
                    title: 'Item 2',
                    disabled: true
                }),
                m(ListTile, {
                    title: 'Item 3',
                    disabled: true
                })
            ]
        })
    ]);
};

export default settings;
