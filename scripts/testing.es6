
import render from 'mithril-node-render';
import HtmlDom from 'htmldom';

export const matchSnapshot = (cmp) => {
    const html = new HtmlDom(render(cmp)).beautify();
    expect(html).toMatchSnapshot();
};