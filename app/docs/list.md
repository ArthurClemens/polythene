# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list">Demo</a>

Displays a list of [list tiles](#list-tile), with an optional header (which is also a list tile).


## Usage

~~~javascript
import list from 'polythene/list/list';

const myList = m.component(list, {
	header: {
		title: 'My header'
	},
	tiles: [
	    m.component(listTile, {
	        title: 'Ali Connors',
	        info: 'Brunch this weekend?',
	        icon: {
	            type: 'large',
	            src: 'app/list-tile/avatars/1.png'
	        }
	    })
	]
});
~~~

## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](http://www.google.com/design/spec/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the subheader, and if we show borders, indent them too. We do so by adding the parameter `class` with value `'indent'`, and optionally set `mode` to `bordered-indent`.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'list-tile'; use 'indent' to align the subheader with text contents of the list tiles below |
| **header** | optional | Object | | Options object for a [list tile](#list-tile); use `title` for the text label |
| **tiles** | optional | Array of type Mithril template | | List of [list tiles](#list-tile) |
| **mode** | optional | String | | Give borders to list tiles; use either `bordered` or `bordered-indent` |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect on list tiles |


## Default generated HTML

List with subheader and two-line items:

~~~html
<div class="list has-subheader">
    <div class="horizontal layout center list-tile list-tile-single-line subheader">
        <div class="flex list-tile-primary">
            <div class="layout horizontal center">
                <div class="flex list-tile-content">
                    <div class="list-tile-title">Subheader</div>
                </div>
            </div>
        </div>
    </div>
    <div class="horizontal layout center list-tile list-tile-two-line">
        <div class="flex list-tile-primary">
            <div class="layout horizontal center">
                <div class="flex list-tile-content">
                    <div class="list-tile-title">Two-line item
                        <div class="list-tile-info">Secondary text</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
~~~


## TODO

* Sticky headers
