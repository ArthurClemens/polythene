import m from 'mithril';
import {matchSnapshot} from '../../scripts/testing';
import shadow from 'polythene/shadow/shadow';

describe('Shadow component', () => {
    it('should render with no params', () => {
        const cmp = m(shadow);
        matchSnapshot(cmp);
    });
    // it('should render params before and after', () => {
    //     const cmp = m(shadow, {
    //         before: m('div', 'BEFORE'),
    //         after: m('div', 'AFTER')
    //     });
    //     matchSnapshot(cmp);
    // });
    it('should render common component params', () => {
        const cmp = m(shadow, {
            id: 'ID',
            tag: 'span',
            class: 'site--ripple'
        });
        matchSnapshot(cmp);
    });
    it('should render appearance params', () => {
        const cmp = m(shadow, {
            z: 5,
            animated: true
        });
        matchSnapshot(cmp);
    });
});