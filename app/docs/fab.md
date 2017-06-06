# Floating Action Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/fab">Demo</a>

A circular main button with a [shadow](#shadow) and [ripple](#ripple) effect.


## Usage

~~~javascript
import m from 'mithril';
import { FAB } from 'polythene';

m(FAB, {
    icon: {
    	svg: {
    	    src: 'img/arrow.svg'
    	}
    }
});
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-button--fab' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### FAB specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon** | either `icon` or `content` | Object |  | [icon](#icon) options object |
| **content**| either `icon` or `content` | Mithril element |  | Alternative content |
| **tabindex** | optional | Integer | | Tab index |

### FAB appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |
| **mini** | optional | Boolean | false | Set to true to display a small button (class name `fab--mini`) |


## Inheritance/composition

FAB is composed with [icon button](#icon-button) (which is composed with [button](#button), with these adjustments:

* Button options `raised` is set to true
* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed



## Future

* "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."
* "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."
* "The floating action button can fling out related actions upon press."
* "The floating action button can transform into a single piece of material which contains all the actions."
* "The floating action button can transform into sheets of material that are part of the app structure."
