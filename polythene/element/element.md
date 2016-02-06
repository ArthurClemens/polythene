# Element

A simple element to wrap a component around a Mithril element. It doesn't do anything out of itself.


## Usage

~~~javascript
import m from 'mithril';
import element from 'polythene/element/element';

const myElement = m.component(element, {
    content: m('.content', 'My content')
});
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag for the checkbox container |
| **class** | optional | String |  | Extra CSS class appended to 'pe-control--checkbox' |
| **id** | optional | String | | HTML element id for the checkbox container |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
