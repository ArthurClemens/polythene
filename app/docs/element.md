# Element

A simple element to wrap a component around a Mithril template. It doesn't do anything out of itself.


## Usage

~~~javascript
import element from 'polythene/element/element';

const myElement = m.component(element, {
    content: m('.content', 'My content')
});
~~~

## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'element' |
| **content** | optional | Mithril template or String | | Content |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Default generated HTML

~~~html
<div>
    ...
</div>
~~~
