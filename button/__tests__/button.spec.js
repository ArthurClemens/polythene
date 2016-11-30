import m from 'mithril';
import {matchSnapshot} from '../../scripts/testing';
import button from 'polythene/button/button';

describe('Button component', () => {
    it('should render with no params', () => {
        const cmp = m(button);
        matchSnapshot(cmp);
    });
    it('should render params before and after', () => {
        const cmp = m(button, {
            before: m('div', 'BEFORE'),
            after: m('div', 'AFTER')
        });
        matchSnapshot(cmp);
    });
    it('should render common component params', () => {
        const cmp = m(button, {
            id: 'ID',
            tag: 'button',
            class: 'site--button'
        });
        matchSnapshot(cmp);
    });
    it('should render main params', () => {
        const cmp = m(button, {
            label: 'Send',
            borders: true,
            disabled: true,
            selected: true,
            formaction: '/submit',
            animateOnTap: true,
            inactive: true
        });
        matchSnapshot(cmp);
    });
    it('should render button appearance params (on)', () => {
        const cmp = m(button, {
            wash: true,
            ink: true,
            ripple: true,
            raised: true,
            z: 1
        });
        matchSnapshot(cmp);
    });
    it('should render button appearance params (off)', () => {
        const cmp = m(button, {
            wash: false,
            ink: false,
            ripple: false,
            raised: false
        });
        matchSnapshot(cmp);
    });
    it('should render param tabindex', () => {
        const cmp = m(button, {
            tabindex: 1
        });
        matchSnapshot(cmp);
    });
    it('should render param url', () => {
        const cmp = m(button, {
            url: {href: '/'}
        });
        matchSnapshot(cmp);
    });
    it('should render param content', () => {
        const cmp = m(button, {
            content: m('div', 'Send')
        });
        matchSnapshot(cmp);
    });

});