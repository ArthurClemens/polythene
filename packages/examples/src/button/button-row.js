import m from 'mithril';
import { Button } from 'polythene';

export default (opts) => {
    const buttonOpts = [{
        label: 'Normal',
        raised: opts.raised
    }, {
        label: 'Disabled',
        disabled: true,
        raised: opts.raised
    }, {
        label: 'Wash only',
        ink: false,
        raised: opts.raised
    }, {
        label: 'Ink only',
        ink: true,
        raised: opts.raised,
        wash: false
    }, (opts.raised ? {
        label: 'Raised more',
        raised: opts.raised,
        z: 2
    } : null), {
        label: '2 secs inactive',
        inactivate: 2,
        raised: opts.raised
    }];

    return buttonOpts.map((opts) => {
        if (opts) {
            return m(Button, opts);
        }
    });
};
