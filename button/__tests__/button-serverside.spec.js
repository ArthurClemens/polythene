/* global describe, it, expect */
import m from 'mithril';
import { ms, tidyHtml, runServerSnapshots } from '../../scripts/snapshots';
import { tests } from './tests.js';
import render from 'mithril-node-render';
import component from 'polythene/button/button';

const renderer = (cmp, opts, children) => render(m(cmp, opts, children));

runServerSnapshots(tests, renderer);

describe('Button component', () => {
  it('no options', () => {
    const html = renderer(component);
    expect(html).toContain('<a class="pe-button pe-button--text');
  });
  it('option content', () => {
    const html = renderer(component, {content: m('span', 'Content')});
    expect(html).toContain('<span>Content</span>');
  });
  it('option id', () => {
    const html = renderer(component, {id: 'id-x'});
    expect(html).toContain('id="id-x"');
  });
  it('option label', () => {
    const html = renderer(component, {label: 'Button label'});
    expect(html).toContain('Button label');
  });
  it('option class', () => {
    const html = renderer(component, {class: 'class-x'});
    expect(html).toContain('class-x');
  });
  it('option tag', () => {
    const html = renderer(component, {tag: 'button'});
    expect(html).toContain('<button ');
    expect(html).toContain('</button>');
  });
  it('option tabindex', () => {
    const html = renderer(component, {tabindex: 3});
    expect(html).toContain('tabindex="3"');
  });
  it('option before', () => {
    const html = renderer(component, {before: m('span', 'Before')});
    expect(html).toContain('<span>Before</span>');
  });
  it('option after', () => {
    const html = renderer(component, {after: m('span', 'After')});
    expect(html).toContain('<span>After</span>');
  });
});
