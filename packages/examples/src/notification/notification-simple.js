import m from 'mithril';
import { Button, Notification } from 'polythene';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            args.title ? m('.p-block-header', args.title) : null,
            args.info ? args.info : null,
            args.content ? args.content : null
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-notification', [

        m('#notifications.pe-fit.layout.center-center',
            m(Notification)
        ),

        m(titleBlock, {
            title: 'Page notification',
            content: m(Button, {
                label: 'Show',
                raised: true,
                disabled: notification.count() !== 0,
                events: {
                    onclick: () => {
                        notification.show({
                            title: 'Done!',
                            containerSelector: '#notifications',
                        }, 'body');
                    }
                }
            })
        })
    ]);
};

module.updateContentOnScroll = true;
module.isSub = true;
module.back = '/notification';
module.title = 'Simple page notification';

export default module;
