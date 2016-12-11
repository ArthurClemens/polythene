import m from 'mithril';
import shadow from '../../../src/shadow/shadow';
import CSS from '../styles';

export const tests = {
    'no params': m(shadow),
    'param content': m(shadow, {
        content: m('div', 'CONTENT')
    }),
    'common component params': m(shadow, {
        id: 'ID',
        tag: 'span',
        class: 'my-shadow'
    }),
    'appearance params': m(shadow, {
        z: 5,
        animated: true
    }),
    'z: 0': m(shadow, {
        z: 0
    }),
    // 'animated z-index': {
    //     oninit : function(vnode) {
    //         vnode.state.z = 1;
    //     },
    //     view : function(vnode) {
    //         return m(shadow, {
    //             z: vnode.state.z,
    //             animated: true
    //         });
    //     }
    // }
};

const page = {
    view: () => Object.keys(tests).map(key => m(CSS.resultBlock, [
        m(CSS.resultTitle, key),
        m(CSS.result, tests[key])
    ]))
};

export default page;