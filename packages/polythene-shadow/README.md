# Shadow

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
| **class** | optional | String |  | Extra CSS class appended to `pe-shadow` |
| **id** | optional | String | | HTML element id |
| **content**   | optional | Mithril element |  | Any content; replaces `vnode.children`  |
| **before**    | optional | Mithril element | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |

### Shadow appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |



## CSS classes

| **Element**     | **Key**         | **Class**       |
| --------------- | --------------- | --------------- |
| Component       | component       | `pe-shadow` |
| Top shadow      | topShadow       | `pe-shadow__top` |
| Bottom shadow   | bottomShadow    | `pe-shadow__bottom` |

| **State**       | **Key**         | **Class**       |
| --------------- | --------------- | --------------- |
| Animated        | animated        | `pe-shadow--animated` |
| Depth 0 (min)   | depth_0         | `pe-shadow--z-0` |
| Depth 1         | depth_1         | `pe-shadow--z-1` |
| Depth 2         | depth_2         | `pe-shadow--z-2` |
| Depth 3         | depth_3         | `pe-shadow--z-3` |
| Depth 4         | depth_4         | `pe-shadow--z-4` |
| Depth 5 (max)   | depth_5         | `pe-shadow--z-5` |

