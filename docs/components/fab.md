_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Floating Action Button

A circular main button with a [Shadow](shadow) and [Ripple](#ripple.md) effect.


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
| **icon** | either `icon` or `content` | Object |  | [Icon](icon.md) options object |
| **content**| either `icon` or `content` | Mithril element |  | Alternative content |
| **tabindex** | optional | Integer | | Tab index |

### FAB appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |
| **mini** | optional | Boolean | false | Set to true to display a small button (class name `fab--mini`) |


## Inheritance/composition

FAB is composed with [IconButton](icon-button) (which is composed with [Button](#button.md), with these adjustments:

* Button options `raised` is set to true
* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed

