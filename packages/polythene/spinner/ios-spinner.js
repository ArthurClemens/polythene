import m from 'mithril';
import spinner from './spinner';
import './theme/ios/theme';

var CSS_CLASSES = {
    block: 'pe-spinner--ios'
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blades = [];
        for (var i = 0; i < 12; i = i + 1) {
            blades.push(m('div'));
        }
        opts.content = blades;
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        return m(spinner, opts);
    }
};

export default component;