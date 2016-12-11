/* global it, expect */
import m from 'mithril';
import htmltidy from 'htmltidy';

/*
Usage:

import m from 'mithril';
import {matchSnapshot} from '../../../scripts/testing';

describe('My component', () => {
    it('no params', (done) => {
        const cmp = m(myComponent);
        matchSnapshot(cmp, done);
    });
});
*/
export const matchSnapshot = (component, done) => {
    const root = document.createElement('div');
    m.render(root, component);
    htmltidy.tidy(root.innerHTML, {
        // Options: http://tidy.sourceforge.net/docs/quickref.html
        'show-body-only': true,
        'indent': true
    }, (err, html) => (!err && expect(html).toMatchSnapshot(),
        done()
    ));
};

/*
Usage:

import {runTests} from '../../../scripts/testing';

const tests = {
    'no params': m(myComponent),
    'param content': m(myComponent, {
        content: m('div', 'CONTENT')
    })
};

describe('My component', () => {
    runTests(tests);
});
*/
export const runTests = tests =>
    Object.keys(tests).forEach(key =>
        it(key, (done) => matchSnapshot(tests[key], done))
    );