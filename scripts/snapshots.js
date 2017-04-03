/* global it, expect */
import m from 'mithril';
import htmltidy from 'tidy-html5';
import render from 'mithril-node-render';

export const defaultHtmlTidyOptions = {
  'show-body-only': true,
  'drop-empty-elements': false,
  'doctype': 'omit',
  'indent': true,
  'quiet': true, // Hides 'About this fork of Tidy ...'
  'show-warnings': false, // Hides 'line 1 column 1 - Warning: missing <!DOCTYPE> declaration ...''
  // Recognize SVG tags:
  'new-blocklevel-tags': ['svg', 'defs'],
  'new-inline-tags': ['path', 'polyline', 'line', 'polygon']
};

export const tidy = (vnodes, htmltidyOptions = defaultHtmlTidyOptions) => {
  const htmlElement = document.createElement('div');
  m.render(htmlElement, vnodes);
  const html = htmlElement.innerHTML;
  return htmltidy.tidy_html5(html, htmltidyOptions);
};

export const tidyHtml = (html, htmltidyOptions = defaultHtmlTidyOptions) =>
  htmltidy.tidy_html5(html, htmltidyOptions);

export const runSnapshots = (tests) => (
  tests.forEach(test =>
    it(test.name, () => {
      const html = tidy(m(test.component, test.attrs, test.children));
      expect(html).toMatchSnapshot();
    })
  )
);

export const runServerSnapshots = (tests, renderer) => (
  tests.forEach(test =>
    it(test.name, () => {
      const html = renderer(test.component, test.attrs, test.children);
      expect(html).toMatchSnapshot();
    })
  )
);
