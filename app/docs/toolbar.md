# Toolbar

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/toolbar.html">Demo</a>

Displays a horizontal bar containing a label and action items. One toolbar can have 1 to 3 horizontal bars.


## Variations

Toolbar wraps 3 optional sub components:
* `topBar`
* `middleBar`
* `bottomBar`

Alternatively:
* `content` can be passed as substitute for the bars

Each bar contains the class 'toolbar-tools', plus the name of the bar type (f.i. 'topBar').

A toolbar can have different heights, set with param `mode`:

* `standard` (default)
* `medium-tall`
* `tall`

These heights are predefined by the toolbar CSS.


## Usage

	var toolbar = require('polythene/toolbar/toolbar');

	var myToolbar = m.component(toolbar, {
        content: ...
    });

To show a toolbar with a label and 3 icon buttons:

	var iconBtn = require('polythene/icon-button/icon-button');
	
	var btn = function(group, name) {
	    return m.component(iconBtn, {
	        icon: {
	            svg: {
	                group: group,
	                name: name
	            }
	        }
	    });
	};

	var toolbarRow = [
        btn('navigation', 'menu'),
        m('span[flex]', 'Toolbar'),
        btn('navigation', 'refresh'),
        btn('content', 'add')
    ];

	var myToolbar = m.component(toolbar, {
        content: toolbarRow
    });

To show 3 bars:

	var myToolbar = m.component(toolbar, {
		mode: 'tall',
		topBar: toolbarRow,
		middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
		bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
    });


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'toolbar animate' (animate is used to transition the height) |
| **mode** | optional | String | 'standard' | CSS height class added to className; mode 'tall' is the same as using className 'tall' |
| **content** | either a bar or content must be passed | Mithril template | | Top bar content; use this if you only show 1 bar |
| **topBar** | either a bar or content must be passed | Mithril template | | Top bar content |
| **middleBar** | either a bar or content must be passed | Mithril template | | Middle bar content |
| **bottomBar** | either a bar or content must be passed | Mithril template | | Bottom bar content |



## Default generated HTML

When using a label and 3 icon buttons:

	<div class="toolbar animate topBar standard">
		<div center="true" horizontal="true" layout="true" class="toolbar-tools topBar">
			<div class="icon-button">
				<div class="icon icon-normal">
					<i fit="true" class="svg">svg...</i>
				</div>
			</div><span flex="true">Toolbar</span>
			<div class="icon-button">
				<div class="icon icon-normal">
					<i fit="true" class="svg ">svg...</i>
				</div>
			</div>
			<div class="icon-button">
				<div class="icon icon-normal">
					<i fit="true" class="svg ">svg...</i>
				</div>
			</div>
		</div>
	</div>


## TODO

* Classes: justify, middleJustify, bottomJustify
* Toolbar adapts to mobile/narrow layout when there is a core-narrow class set on itself or any of its ancestors

