# Item

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/item">Demo</a>

Item is a simple horizontal element with a label and an optional icon.

This component does not belong to the Material Design specification, but was introduced by <a href="https://www.polymer-project.org/0.5/docs/elements/core-item.html" target="_blank">Polymer</a>.


## Usage

	import item from 'polythene/item/item';

	const myItem = m.component(item, {
        label: 'Settings'
    });

To add an icon, pass an [icon](#icon) options object:

	const myItem = m.component(item, {
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });

To make the item a link, set its content as the link:

	const myItem = m.component(item, {
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    },
        content: m('a', {href: '#settings'})
    });

To make a big item, pass class `font-scalable` - the icon will scale automatically:

	// CSS
	.big {
		font-size: 30px;
	}
	.small {
		font-size: 14px;
	}

	// js
	const myItem = m.component(item, {
		class: 'font-scalable big',
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });
	const myItem = m.component(item, {
		class: 'font-scalable small',
		label: 'Settings',
        icon: {
	        svg: {
	            group: 'action',
	            name: 'settings'
	        }
	    }
    });

Create a custom item:

	import icon from 'polythene/icon/icon';

	const myItem = m.component(item, {
        class: 'contact-item',
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
| **class** | optional | String |  | Extra CSS class appended to 'item'; to make the item scale with CSS, add class `font-scalable` (see above) |
| **icon** | optional | Object |  | [icon](#icon) options object |
| **label** | optional | String | | Item label |
| **content** | optional | Mithril template or String | | Additional content; can co-exist with icon and label |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Default generated HTML

When using an SVG icon:

	<div class="center horizontal layout item">
	    <div class="icon icon-normal">
	        <i class="fit svg">
	            <svg>...</svg>
	        </i>
	    </div>
	    <div>Label</div>
	</div>


