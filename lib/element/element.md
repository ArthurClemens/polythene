# Element

A simple element to wrap a component around a Mithril template.


## Usage

	var element = require('polythene/element/element');

	var myElement = m.component(element, {
        content: m('.content', 'My content')
    });



## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'element' |
| **content** | optional | Mithril template or String | | Content |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |



## Default generated HTML

	<div>
	    ...
	</div>