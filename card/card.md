# Card

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/card">Demo</a>

Displays a small piece of "summary" content - a photo, text, a link - about a single subject, as trigger to more detailed information.

This implementation closely follows the [design specification](http://www.google.com/design/spec/components/cards.html). A number of convenience properties have been added to allow different image formats without having to prepare the right image ratio beforehand.


## Usage

~~~javascript
import m from 'mithril';
import card from 'polythene/card/card';
~~~

The card can contain various elements. The `content` parameter accepts any Mithril element:

~~~javascript
import list from 'polythene/list/list';
const myCard = m.component(card, {
	content: m.component(list, {...})
});
~~~

To generated Material Design elements, pass an array of element options, where each item is an object with on of the keys:

* primary
* text
* media
* header
* actions


Element `primary` contains the sub-options `title` and `subtitle`:

~~~javascript
const myCard = m.component(card, {
	content: [{
	    primary: {
	        title: 'Primary title',
	        subtitle: 'Subtitle'
	    }
	}]
});
~~~

Content parts are processed in the order as they are written. Of course this makes it possible to wildly deviate from the design specs.

To show in order:

1. header with portrait image
1. media item
1. title and subtitle
1. action row
1. text

these are passed in this order to `content`:

~~~javascript
const myCard = m.component(card, {
	content: [{
	    header: {
	        title: 'Name',
	        subtitle: 'date',
	        icon: {
	            type: 'large',
	            class: 'pe-icon--avatar',
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
~~~

## Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used with overlay text or "title images" (part of `primary`). Both `ratio` ('square' or 'landscape') and `type` ('small', 'medium', 'large', 'extra-large') can be set.

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is 'center', optional values are 'start' and 'end'. The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:

~~~javascript
content: [{
    media: {
        origin: 'start',
        content: m('img', {
            src: 'app/images/1.png'
        })
    }
}]
~~~

Images with an overlay (text, actions) can be created with `media.overlay`:

~~~javascript
content: [{
    media: {
        ratio: 'square',
        content: m('img', {
            src: 'app/images/1.jpg'
        }),
        overlay: {
            sheet: true,
            class: 'pe-dark-theme',
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
~~~

CSS class 'pe-dark-theme' is used as a quick way to get white text on a dark background.

An additional HTML element to control the image is 'card__media__dimmer'. To create a fuzzy dark border all around use an inset box shadow:

~~~css
.pe-card__media__dimmer {
	box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
}
.pe-card__overlay__content {
	/* something else */
}
~~~

To create a square image at the right side of the title, use `primary.media`:

~~~javascript
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
~~~

For further control over the `primary` content, you can pass an array to `primary.content`. See the demo page (function `titleImageExtraLarge`) how this can be used.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Card specific options

### Options for card

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **url** | optional | Object with `href`, optionally `config` | | URL for the entire card |
| **content** | required | Mithril element or Array |  | Any Mithril content, or a list of option objects for distinct areas - see below |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |

Next to the card itself, each content parts has a set of options:

* primary
* text
* media
* header
* actions

### Options for primary

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card__primary'; if `media` is passed, class 'card__primary--media' is automatically added too; use class `pe-card__primary--tight` to reduce bottom padding |
| **title** | optional | String |  | Title text |
| **subtitle** | optional | String |  | Subtitle text |
| **media** | optional | Options object, equal to media part below |  | Media that is shown in this part |
| **actions** | optional | Options object, equal to actions part below |  | Actions that are shown in this part |


### Options for text

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card__text'; use class `pe-card__text--tight` to reduce bottom padding |
| **content** | required | Mithril element |  | Text contents |


### Options for header

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card__header' |
| **url** | optional | Object | | URL for the entire card; options object containing `href` and `config` |
| **events** | optional | Object | | Card events; options object containing one or more events like `onclick` |
| **title** | required | String | | The title content |
| **info** | optional | String | | The subtitle (1 line high) |
| **icon** | optional | Object |  | [icon](#icon) options object; used to show an round "avatar" portrait image |


### Options for media

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' or div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card__media' |
| **content** | required | Mithril element |  | The image |
| **ratio** | optional | String: 'landscape' or 'square' | 'landscape' | Image ratio; 'landscape' translates to `16:9` ratio |
| **type** | optional | String: 'small', 'medium', 'large', 'extra-large' | | For primary media only; defines the image size |
| **origin** | optional | String: 'start', 'center', 'end | 'center' | From which side cropping should be done |
| **overlay** | optional | Options object, equal to card options | | Content to place on the overlay |
| **sheet** | optional | Boolean | | Set to `true` to show the overlay as a partly covering sheet |


### Options for actions

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **layout** | optional | String: 'horizontal', 'vertical' or 'justified' | 'horizontal' | Set to 'vertical' for a vertical list of actions; use 'justified' for a horizontally evenly spread of icons |
| **class** | optional | String |  | Extra CSS class appended to 'pe-card__actions'; add class `pe-card__actions--borders` to add a top border; use class `card__actions--tight` to reduce the height  |
| **content** | required | Mithril element |  | Action contents, for instance a list of buttons |
