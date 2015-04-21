# Header Panel

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/header-panel.html">Demo</a>

## Usage

	var headerPanel = require('polythene/header-panel/header-panel');

	m.component(headerPanel, {
	    header: {
	        content: 'My title'
	    },
	    content: 'My content'
	})


## Requirements

The header-panel will not display if its parent does not have a height.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'header-panel' |
| **mode** | optional | String | 'standard'| Controls header and scrolling behavior - see below |
| **header** | optional | Mithril template or Object | | The header above the scrolling area - see below |
| **content** | optional | Mithril template or String | | Panel contents |
| **shadow** | optional | Boolean | true | If set to `false`, no shadow will be shown, regardless the mode |
| **tallClass** | optional | String | 'tall' | Set this when the header has a class other than 'tall' and the height needs to be toggled. |


### Mode

Controls header and scrolling behavior. Options are 'standard', 'seamed', 'waterfall', 'waterfall-tall', 'scroll' and 'cover'.

* `standard`: The header is a step above the panel. The header will consume the panel at the point of entry, preventing it from passing through to the opposite side.
* `seamed`: The header is presented as seamed with the panel.
* `waterfall`: Similar to standard mode, but header is initially presented as seamed with panel, but then separates to form the step.
* `waterfall-tall`: The header is initially taller (`tall` class is added to the header).  As the user scrolls, the header separates (forming an edge) while condensing (`tall` class is removed from the header).
* `scroll`: The header keeps its seam with the panel, and is pushed off screen.


## Header

A header can be create by passing a content string:

	header: {
	    content: 'My title'
	}

in which case a div with class 'header' is created.

Alternatively, pass [toolbar](#toolbar) options to use a toolbar as header:

    header: {
        toolbar: {
            mode: 'tall',
            content: toolbarRow
        }
    }

Or use a Mithril template:

	header: m('.demo-header', 'My custom header')


## Default generated HTML

	<div class="header-panel" mode="standard">
		<div vertical="true" layout="true" class="outerContainer">
			<div class="header animate">My header title</div>
			<div flex="true" vertical="true" layout="true" class="mainPanel">
				<div flex="true" class="mainContainer">
					<div class="content">
						My content
					</div>
				</div>
				<div class="dropShadow"></div>
			</div>
		</div>
	</div>


## TODO

* Mode `cover`: The panel covers the whole `header-panel` including the header. This allows user to style the panel in such a way that the panel is partially covering the header.
* Remove scroll listener on detach
* To have the content fits to the main area, use fit attribute.
* Check: If you want to use other than toolbar for the header, add 'header' class to that element.


