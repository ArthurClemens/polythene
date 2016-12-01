import render from 'mithril-node-render';
const beautify = require('js-beautify').html;

export const matchSnapshot = (cmp) => {
    const html = beautify(render(cmp));
    expect(html).toMatchSnapshot();
};