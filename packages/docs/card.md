TO UPDATE

# Card

Displays a small piece of "summary" content - a photo, text, a link - about a single subject, as trigger to more detailed information.

This implementation closely follows the [design specification](https://material.io/guidelines/components/cards.html). A number of convenience properties have been added to allow different image formats without having to prepare the right image ratio beforehand.



## Usage

~~~javascript
import m from "mithril";
import card from "polythene-card";
~~~

The card can contain various elements. The `content` parameter accepts any String, hyperscript or component:

~~~javascript
import list from "polythene-list";
const myCard = m(card, {
  content: m(list, {...})
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
const myCard = m(card, {
  content: [{
    primary: {
      title: "Primary title",
      subtitle: "Subtitle"
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
const myCard = m(card, {
  content: [
    {
      header: {
        title: "Name",
        subtitle: "date",
        icon: {
          size: "large",
          avatar: true,
          src: "img/avatar.png"
        }
      }
    },
    {
      media: {
        content: m("img", {
          src: "img/large.jpg"
        })
      }
    },
    {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    },
    {
      actions: {
        content: [
          m(button, {
            label: "Action 1"
          }),
          m(button, {
            label: "Action 2"
          })
        ]
      }
    },
    {
      text: {
        content: "More text"
      }
    }
  ]
});
~~~


For further control over the `primary` content, you can pass an array to `primary.content`:

~~~javascript
content: [{
  primary: {
    content: [
      {
        media: {
          ratio: ratio,
          size: "large",
          content: m("img", {
            src: "img/large.jpg"
          })
        }
      },
      m(".flex"),
      {
        actions: {
          layout: "vertical",
          content: [
            m(iconButton, { icon: { msvg: iconHeart } }),
            m(iconButton, { icon: { msvg: iconBookmark } }),
            m(iconButton, { icon: { msvg: iconShare } })
          ]
        }
      }
    ]
  }
}]
~~~



## Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used too, as well as "title images" (an image placed next to the title). Images can additionally have with overlay text. Both `ratio` ("square" or "landscape") and `size` ("small", "medium", "large", "extra-large") can be set.


### Cropping / origin

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is "center", optional values are "start" and "end". The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:

~~~javascript
content: [{
  media: {
    origin: "start",
    content: m("img", {
      src: "img/large.png"
    })
  }
}]
~~~


### Overlay

Images with an overlay (text, actions) can be created with `media.overlay`:

~~~javascript
content: [{
  media: {
    ratio: "square",
    content: m("img", {
      src: "img/large.jpg"
    }),
    overlay: {
      sheet: true,
      className: "pe-dark-tone",
      content: [
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle"
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Action 1"
              }),
              m(button, {
                label: "Action 2"
              })
            ]
          }
        }
      ]
    }
  }
}]
~~~

An additional HTML element to control the image is "card__media__dimmer". To create a fuzzy dark border all around use an inset box shadow:

~~~css
.pe-card__media__dimmer {
  box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
}
.pe-card__overlay__content {
  /* something else */
}
~~~


### Title image

To create a square image at the right side of the title, use `primary.media`:

~~~javascript
content: [{
  primary: {
    title: title,
    subtitle: "Subtitle",
    media: {
      ratio: "square",
      size,
      content: m("img", {
        src: "img/large.jpg"
      })
    }
  }
}]
~~~



## Appearance

### Styling

Below are examples how to change the card appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
card.theme(".themed-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text:      "#fff",
  color_light_subtitle_text:   "#fff"
});

m(card, {
  className: "themed-card",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(button, {
  style: {
    maxWidth: "360px",
    backgroundColor: "#B89E58"
  }
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "a" | HTML element tag |
| **className**     | optional | String |  | Extra CSS class appended to "pe-card" |
| **id** | optional | String | | HTML element id |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Card specific options

### Options for card

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL for the entire card |
| **content** | required | String, hyperscript or component or Array |  | Any Mithril content, or a list of option objects for distinct areas - see below |
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
| **element** | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__primary` |
| **title** | optional | String |  | Title text |
| **subtitle** | optional | String |  | Subtitle text |
| **media** | optional | Options object, equal to media part below |  | Media that is shown in this part |
| **actions** | optional | Options object, equal to actions part below |  | Actions that are shown in this part |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |


### Options for text

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__text` |
| **content** | required | String, hyperscript or component |  | Text contents |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |


### Options for header

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__header` |
| **element** | optional | String | "a" | HTML tag |
| **events** | optional | Object | | Card events; options object containing one or more events such as `onclick` |
| **icon** | optional | Object |  | [icon](#icon) options object; used to show an round "avatar" portrait image |
| **info** | optional | String | | The subtitle (1 line high) |
| **title** | required | String | | The title content |
| **url** | optional | Object | | URL for the entire card; options object containing `href` and `oncreate` |


### Options for media

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__media` |
| **content** | required | String, hyperscript or component |  | The image |
| **element** | optional | String | "a" or div" | HTML tag |
| **origin** | optional | String: "start", "center", "end | "center" | From which side cropping should be done |
| **overlay** | optional | Options object, equal to card options | | Content to place on the overlay |
| **ratio** | optional | String: "landscape" or "square" | "landscape" | Image ratio; "landscape" translates to `16:9` ratio |
| **sheet** | optional | Boolean | | Set to `true` to show the overlay as a partly covering sheet |
| **size** | optional | String: "small", "medium", "large", "extra-large" | | For primary media only; defines the image size |


### Options for actions

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **bordered** | optional | Boolean | | Set to `true` to add a top border |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__actions` |
| **content** | required | String, hyperscript or component |  | Action contents, for instance a list of buttons |
| **element** | optional | String | "div" | HTML tag |
| **layout** | optional | String: "horizontal", "vertical" or "justified" | "horizontal" | Set to "vertical" for a vertical list of actions; use "justified" for a horizontally evenly spread of icons |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |



## Composition

Card is optionally composed from:

* [List tile](../polythene-list-tile)
* [Shadow](../polythene-shadow)



## CSS classes

See: `src/classes.js`


