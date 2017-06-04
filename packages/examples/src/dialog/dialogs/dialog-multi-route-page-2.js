import m from 'mithril';
import { Button } from 'polythene';

export default {
    view: () => {
        return m('.layout.vertical',
            m('p', 'This is page two'),
            m(Button, {
                raised: true,
                label: 'Go to page one',
                events: {
                    onclick: () => {
                        m.route('/dialog/multi-route/one');
                    }
                }
            })
        );
    }
};