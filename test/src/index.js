import m from 'mithril';
import CSS from './styles';
import shadow from './shadow';

const links = [{
    path: '/shadow',
    module: shadow,
    name: 'Shadow'
}];

const index = {
    view: () =>
        m(CSS.page, [
            m(CSS.pageTitle, 'Polythene components'),
            m('ul', links.map(link => (
                m(CSS.listItem, m(CSS.link, {
                    href: link.path,
                    oncreate: m.route.link
                }, link.name))
            )))
        ])
};

m.route.prefix('#');
const mountNode = document.querySelector('#app');
const routes = {
    '/': index
};
links.forEach(link => routes[link.path] = link.module);
m.route(mountNode, '/', routes);
