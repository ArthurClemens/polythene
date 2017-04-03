/* global describe, it, expect */
import m from 'mithril';
import { tests } from './tests.js';
import { tidy, runSnapshots } from '../../scripts/snapshots';
import component from 'polythene/button/button';

runSnapshots(tests);

describe('Button component', () => {
  it('no options', () => {
    const cmp = m(component);
    const html = tidy(cmp);
    expect(html).toContain('<a class="pe-button pe-button--text');
  });
  it('option content', () => {
    const cmp = m(component, {content: m('span', 'Content')});
    const html = tidy(cmp);
    expect(html).toContain('<span>Content</span>');
  });
  it('option id', () => {
    const cmp = m(component, {id: 'id-x'});
    const html = tidy(cmp);
    expect(html).toContain('id="id-x"');
  });
  it('option class', () => {
    const cmp = m(component, {class: 'class-x'});
    const html = tidy(cmp);
    expect(html).toContain('class-x');
  });
  it('option tag', () => {
    const cmp = m(component, {tag: 'button'});
    const html = tidy(cmp);
    expect(html).toContain('<button ');
    expect(html).toContain('</button>');
  });
  it('option tabindex', () => {
    const cmp = m(component, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain('tabindex="3"');
  });
  it('option before', () => {
    const cmp = m(component, {before: m('span', 'Before')});
    const html = tidy(cmp);
    expect(html).toContain('<span>Before</span>');
  });
  it('option after', () => {
    const cmp = m(component, {after: m('span', 'After')});
    const html = tidy(cmp);
    expect(html).toContain('<span>After</span>');
  });
});
