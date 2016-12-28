# Shadow

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/shadow">Demo</a>

Adds a configurable shadow to an element.


## Usage

~~~javascript
import m from "mithril";
import { shadow } from "polythene-shadow";

const myShadow = m.component(shadow);
~~~

Add the shadow to a Mithril element:

~~~javascript
const myCard = m(".pe-card", [
    m("div.self-center", "Card!"),
    myShadow
]);
~~~

To animated the shadow on change, use `animated`:

~~~javascript
const myShadow = m.component(shadow, {
  z: vnode.state.z,
  animated: true
});
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to "pe-shadow" |
| **id** | optional | String | | HTML element id |

### Shadow appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |


## CSS classes

| **Element** |  **Class name** |
| ----------- | --------------- |
| component   | `pe-shadow` |
| top shadow   | `pe-shadow__top` |
| bottom shadow   | `pe-shadow__bottom` |

| **State**     |  **Class name** |
| ------------- | --------------- |
| animated      | `pe-shadow--animated` |
| depth 0 (min) | `pe-shadow--z-0` |
| depth 5 (max) | `pe-shadow--z-5` |


