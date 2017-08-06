_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_

# Installation


## Installation

~~~bash
yarn add polythene@0.3
~~~

or

~~~bash
npm install --save polythene@0.3
~~~

## A single component

~~~javascript
import m from 'mithril';
import { Theme, Button } from 'polythene';

m(Button, {
    label: 'Button',
    raised: true
})
~~~


## A simple app

A simple component that shows a button:

~~~javascript
import m from 'mithril';
import { Theme, Button } from 'polythene';

const app = {
    view: () => {
        return m('div', [
            m(Button, {
                label: 'Button',
                raised: true
            })
        ]);
    }
};

m.mount(document.body, app);
~~~

By importing `Theme`, the default material design styles, including Roboto font, are loaded.

