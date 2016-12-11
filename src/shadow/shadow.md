# Shadow

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/shadow">Demo</a>

Adds a configurable shadow to an element.

Other than Polymer, the shadow component does not wrap content. Instead the shadow component is added below another element's content.


## Usage

~~~javascript
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';

const myShadow = m.component(shadow, {
	z: 1
});
~~~

Add the shadow to a Mithril element:

~~~javascript
const myCard = m('.pe-card', [
    m('div.self-center', 'Card!'),
    myShadow
]);
~~~

To animated the shadow on change, use `animated`:

~~~javascript
const myShadow = m.component(shadow, {
	z: 1,
	animated: true
});
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-shadow' |
| **id** | optional | String | | HTML element id |

### Shadow appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 0 | Depth of the shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |
