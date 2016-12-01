import m from 'mithril';
import {matchSnapshot} from '../../scripts/testing';
import ripple from 'polythene/ripple/ripple';

describe('Ripple component', () => {
    it('should render with no params', () => {
        const cmp = m(ripple);
        matchSnapshot(cmp);
    });
    it('should render params before and after', () => {
        const cmp = m(ripple, {
            before: m('div', 'BEFORE'),
            after: m('div', 'AFTER')
        });
        matchSnapshot(cmp);
    });
    it('should render common component params', () => {
        const cmp = m(ripple, {
            id: 'ID',
            tag: 'blockquote',
            class: 'my-ripple'
        });
        matchSnapshot(cmp);
    });
    it('should render appearance params', () => {
        const cmp = m(ripple, {
            constrained: false,
            center: true,
            initialOpacity: .1,
            opacityDecayVelocity: .2
        });
        matchSnapshot(cmp);
    });
});