# Card

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/card.html">Demo</a>

Displays a small piece of "summary" content - a photo, text, a link - about a single subject, as trigger to more detailed information.

This implementation closely follows the [design specification](http://www.google.com/design/spec/components/cards.html). A number of convenience properties have been added to allow different image formats without having to prepare the right image ratio beforehand.


## Usage

	import card from 'polythene/card/card';

The card can contain various elements. The `content` parameter accepts an array of element options. Element `primary` contains the title and subtitle:

	let myCard = m.component(card, {
		content: [{
		    primary: {
		        title: 'Primary title',
		        subtitle: 'Subtitle'
		    }
		}]
	});

Content parts are processed in the order as they are written. Of course this makes it possible to wildly deviate from the design specs.

To show in order:

1. header with portrait image
1. media item
1. title and subtitle
1. action row
1. text

these are passed in this order to `content`:

	let myCard = m.component(card, {
		content: [{
		    header: {
		        title: 'Name',
		        subtitle: 'date',
		        icon: {
		            type: 'large',
		            class: 'avatar',
		            src: 'app/list-tile/avatars/1.png'
		        }
		    }
		}, {
		    media: {
		        content: m('img', {
		            src: 'app/images/1.jpg'
		        })
		    }
		}, {
		    primary: {
		        title: 'Primary title',
		        subtitle: 'Subtitle'
		    }
		}, {
            actions: {
                content: [
                    m.component(button, {
                        label: 'Action 1'
                    }),
                    m.component(button, {
                        label: 'Action 2'
                    })
                ]
            }
        }, {
            text: {
                content: 'More text'
            }
        }]
	});

## Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used with overlay text or "title images" (part of `primary`). Both `ratio` ('square' or 'landscape') and `type` ('small', 'medium', 'large', 'extra-large') can be set.

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is 'center', optional values are 'start' and 'end'. The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:

	content: [{
	    media: {
	        origin: 'start',
	        content: m('img', {
	            src: 'app/images/1.png'
	        })
	    }
	}]

Images with an overlay (text, actions) can be created with `media.overlay`:

	content: [{
	    media: {
	        ratio: 'square',
	        content: m('img', {
	            src: 'app/images/1.jpg'
	        }),
	        overlay: {
	            class: 'dark-theme',
	            content: [{
	                primary: {
	                    title: 'Primary title',
	                    subtitle: 'Subtitle'
	                }
	            }, {
	                actions: {
	                    content: [
	                        m.component(button, {
	                            label: 'Action 1'
	                        }),
	                        m.component(button, {
	                            label: 'Action 2'
	                        })
	                    ]
	                }
	            }]
	        }
	    }
	}]

CSS class 'dark-theme' is used as a quick way to get white text on a dark background.

An additional HTML element to control the image is 'image-dimmer'. To create a fuzzy dark border all around use an inset box shadow: 

	.image-dimmer {
		box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
	}
	.overlay-content {
		/* something else */
	}

To create a square image at the right side of the title, use `primary.media`:

	content: [{
	    primary: {
	        title: title,
	        subtitle: 'Subtitle',
	        media: {
	            ratio: 'square',
	            type: type,
	            content: m('img', {
	                src: 'app/images/1.jpg'
	            })
	        }
	    }
	}]

For further control over the `primary` content, you can pass an array to `primary.content`. See the demo page (function `titleImageExtraLarge`) how this can be used.


## Options

Next to the card itself, each content parts has a set of options:

* primary
* text
* media
* header
* actions


### Options for card

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'card' |
| **url** | optional | Object with `href`, optionally `config` | | URL for the entire card |
| **events** | optional | Object | | Card events; options object containing one or more events like `onclick` |
| **content** | required | Array |  | List of option objects for distinct areas - see below |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |


### Options for primary

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | '[layout][horizontal]' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'primary'; if `media` is passed, class 'has-media' is automatically added too; use class `tight` to reduce bottom padding |
| **title** | optional | String |  | Title text |
| **subtitle** | optional | String |  | Subtitle text |
| **media** | optional | Options object, equal to media part below |  | Media that is shown in this part |
| **actions** | optional | Options object, equal to actions part below |  | Actions that are shown in this part |


### Options for text

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'text'; use class `tight` to reduce bottom padding |
| **content** | required | Mithril template or String |  | Text contents |


### Options for header

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a[layout][horizontal][center]' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'header' |
| **url** | optional | Object | | URL for the entire card; options object containing `href` and `config` |
| **events** | optional | Object | | Card events; options object containing one or more events like `onclick` |
| **title** | required | String | | The title content |
| **info** | optional | String | | The subtitle (1 line high) |
| **icon** | optional | Object |  | [icon](#icon) options object; used to show an round "avatar" portrait image |


### Options for media

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' or div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'media' |
| **content** | required | Mithril template |  | The image |
| **ratio** | optional | String: 'landscape' or 'square' | 'landscape' | Image ratio; 'landscape' translates to `16:9` ratio |
| **type** | optional | String: 'small', 'medium', 'large', 'extra-large' | | For primary media only; defines the image size |
| **origin** | optional | String: 'start', 'center', 'end | 'center' | From which side cropping should be done |
| **overlay** | optional | Options object, equal to card options | | Content to place on the overlay |


### Options for actions

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | '[layout][horizontal][center]' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'actions'; add class `bordered` to add a top border |
| **content** | required | Mithril template or String |  | Action contents, for instance a list of buttons |


## Default generated HTML

For a card with title only:

	<div class="card">
	    <div fit="true" class="shadow">
	        <div fit="true" animated="true" class="shadow-bottom shadow-bottom-z-1"></div>
	        <div fit="true" animated="true" class="shadow-top shadow-top-z-1"></div>
	    </div>
	    <div layout="true" horizontal="true" class="primary">
	        <div flex="true" class="title">Primary title
	            <div class="subtitle">Subtitle</div>
	        </div>
	    </div>
	</div>

For a card with header, image, title and actions:

	<div class="card">
	    <div fit="true" class="shadow ">
	        <div fit="true" animated="true" class="shadow-bottom shadow-bottom-z-1"></div>
	        <div fit="true" animated="true" class="shadow-top shadow-top-z-1"></div>
	    </div>
	    <div layout="true" horizontal="true" center="true" class="header">
	        <div class="content-icon">
	            <div class="icon icon-large avatar">
	                <i fit="true">
	                    <img src="app/list-tile/avatars/1.png" />
                    </i>
                </div>
            </div>
            <div flex="true" class="title">Title
                <div class="subtitle">Subhead</div>
            </div>
        </div>
        <div class="media landscape crop-y">
            <img src="app/images/1.jpg" style="margin-left: -71.11111111111114px;" />
            <div class="image-dimmer"></div>
        </div>
        <div layout="true" horizontal="true" class="primary">
            <div flex="true" class="title">Primary title
                <div class="subtitle">Subtitle</div>
            </div>
        </div>
        <div layout="true" horizontal="true" center="true" class="actions">
            <div class="button ">
                <div class="button-content">
                    <span>Action 1</span>
                    <div fit="true" class="ripple constrained ">
                        <div class="ripple-mask">
                            <div class="ripple-waves"></div>
                        </div>
                    </div>
                    <div fit="true" class="wash"></div>
                </div>
            </div>
            <div class="button">
                <div class="button-content">
                    <span>Action 2</span>
                    <div fit="true" class="ripple constrained">
                        <div class="ripple-mask">
                            <div class="ripple-waves"></div>
                        </div>
                    </div>
                    <div fit="true" class="wash"></div>
                </div>
            </div>
        </div>
    </div>

