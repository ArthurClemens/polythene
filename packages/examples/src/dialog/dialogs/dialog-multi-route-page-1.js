import m from 'mithril';
import { Button } from 'polythene';

export default {
    view: () => {
        return m('.layout.vertical',
            m('p', 'This is page one'),
            m(Button, {
                raised: true,
                label: 'Go to page two',
                events: {
                    onclick: () => {
                        m.route('/dialog/multi-route/two');
                    }
                }
            })
        );
    }
};