# Item

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/item.html">Demo</a>

Item is a simple horizontal element with a label and an optional icon.


## Usage

	var item = require('polythene/item/item');

	var myItem = m.component(item, {
        label: 'Settings'
    });

To add an icon, pass an [icon](#icon) options object:

	var myItem = m.component(item, {
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });

To make the item a link, set its content as the link:

	var myItem = m.component(item, {
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    },
        content: m('a', {href: '#settings'})
    });

To make a big item, pass className `font-scalable` - the icon will scale automatically:

	// CSS
	.big {
		font-size: 30px;
	}
	.small {
		font-size: 14px;
	}

	// JS
	var myItem = m.component(item, {
		className: 'font-scalable big',
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });
	var myItem = m.component(item, {
		className: 'font-scalable small',
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });

Create a custom item:

	icon = require('polythene/icon/icon');

	var myItem = m.component(item, {
        className: 'contact-item',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'account-circle'
	        }
	    },
        content: [
            m('div[flex]', [
                m('div', {class: 'name'}, 'John Doe'),
                m('div', {class: 'address'}, '123 A Street, San Francisco, CA')
            ]),
            m.component(icon, {
                attr: {
                    role: 'img'
                },
                svg: {
                    group: 'navigation',
                    name: 'more-vert'
                }
            })
        ]
    }


## Variations

Item can be extended with CSS and custom content - see the custom example below.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'item'; to make the item scale with CSS, add class `font-scalable` (see above) |
| **icon** | optional | Object |  | [icon](#icon) options object |
| **label** | optional | String | | Item label |
| **content** | optional | Mithril template or String | | Additional content; can co-exist with icon and label |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |


## Default generated HTML

When using an SVG icon:

	<div center="true" horizontal="true" layout="true" class="item">
		<div class="icon icon-normal">
			<i fit="true" class="svg">
				<svg ...>...</svg>
			</i>
		</div>
		<div>Settings</div>
	</div>

