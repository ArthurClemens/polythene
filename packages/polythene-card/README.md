# Card

Displays a small piece of "summary" content - a photo, text, a link - about a single subject, as trigger to more detailed information.

This implementation closely follows the [design specification](https://material.io/guidelines/components/cards.html). A number of convenience properties have been added to allow different image formats without having to prepare the right image ratio beforehand.



## Usage

~~~javascript
import m from "mithril";
import card from "polythene-card";
~~~

The card can contain various elements. The `content` parameter accepts any Mithril element:

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
          type: "large",
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
          type: "large",
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

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used too, as well as "title images" (an image placed next to the title). Images can additionally have with overlay text. Both `ratio` ("square" or "landscape") and `type` ("small", "medium", "large", "extra-large") can be set.


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
      class: "pe-dark-theme",
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
      type: type,
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
  class: "themed-card",
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
| **class**     | optional | String |  | Extra CSS class appended to "pe-card" |
| **id** | optional | String | | HTML element id |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before**    | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-theme`); use "light" to locally inverse (sets class `pe-light-theme`) |

### Card specific options

### Options for card

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL for the entire card |
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
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-card__primary` |
| **title** | optional | String |  | Title text |
| **subtitle** | optional | String |  | Subtitle text |
| **media** | optional | Options object, equal to media part below |  | Media that is shown in this part |
| **actions** | optional | Options object, equal to actions part below |  | Actions that are shown in this part |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |


### Options for text

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-card__text` |
| **content** | required | Mithril element |  | Text contents |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |


### Options for header

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **class** | optional | String |  | Extra CSS class appended to `pe-card__header` |
| **element** | optional | String | "a" | HTML tag |
| **events** | optional | Object | | Card events; options object containing one or more events such as `onclick` |
| **icon** | optional | Object |  | [icon](#icon) options object; used to show an round "avatar" portrait image |
| **info** | optional | String | | The subtitle (1 line high) |
| **title** | required | String | | The title content |
| **url** | optional | Object | | URL for the entire card; options object containing `href` and `oncreate` |


### Options for media

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **class** | optional | String |  | Extra CSS class appended to `pe-card__media` |
| **content** | required | Mithril element |  | The image |
| **element** | optional | String | "a" or div" | HTML tag |
| **origin** | optional | String: "start", "center", "end | "center" | From which side cropping should be done |
| **overlay** | optional | Options object, equal to card options | | Content to place on the overlay |
| **ratio** | optional | String: "landscape" or "square" | "landscape" | Image ratio; "landscape" translates to `16:9` ratio |
| **sheet** | optional | Boolean | | Set to `true` to show the overlay as a partly covering sheet |
| **type** | optional | String: "small", "medium", "large", "extra-large" | | For primary media only; defines the image size |


### Options for actions

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **bordered** | optional | Boolean | | Set to `true` to add a top border |
| **class** | optional | String |  | Extra CSS class appended to `pe-card__actions` |
| **content** | required | Mithril element |  | Action contents, for instance a list of buttons |
| **element** | optional | String | "div" | HTML tag |
| **layout** | optional | String: "horizontal", "vertical" or "justified" | "horizontal" | Set to "vertical" for a vertical list of actions; use "justified" for a horizontally evenly spread of icons |
| **tight** | optional | Boolean | | Set to `true` to reduce the top and bottom padding |



## Composition

Card is optionally composed from:

* [List tile](../polythene-list-tile)
* [Shadow](../polythene-shadow)



## CSS classes

| **Element**     | **Key**         | **Class** |
| --------------- | --------------- | --------------- |
| Component       | component       | `pe-card` |
| Content         | content         | `pe-card__content` |
| Header          | header          | `pe-card__header` |
| Header title    | headerTitle     | `pe-card__header-title` |
| Title           | title           | `pe-card__title` |
| Sub title       | subtitle        | `pe-card__subtitle` |
| Text            | text            | `pe-card__text` |
| Primary element | primary         | `pe-card__primary` |
| Primary media   | primaryMedia    | `pe-card__primary-media` |
| Actions         | actions         | `pe-card__actions` |
| Overlay         | overlay         | `pe-card__overlay` |
| Overlay content | overlayContent  | `pe-card__overlay__content` |
| Media           | media           | `pe-card__media` |
| Media dimmer    | mediaDimmer     | `pe-card__media__dimmer` |

| **State**                 | **Key**             |  **Class** |
| ------------------------- | ------------------- | --------------- |
| Primary element has media | primaryHasMedia     | `pe-card__primary--media` |
| Tight text                | textTight           | `pe-card__text--tight` |
| Square ratio media        | mediaRatioSquare    | `pe-card__media--square` |
| Landscape ratio media     | mediaRatioLandscape | `pe-card__media--landscape` |
| Small media               | mediaSmall          | `pe-card__media--small` |
| Regular media             | mediaRegular        | `pe-card__media--regular` |
| Medium media              | mediaMedium         | `pe-card__media--medium` |
| Large media               | mediaLarge          | `pe-card__media--large` |
| Media cropped on x-axis   | mediaCropX          | `pe-card__media--crop-x` |
| Media cropped on y-axis   | mediaCropY          | `pe-card__media--crop-y` |
| Overlay with sheet        | overlaySheet        | `pe-card__overlay--sheet` |
| Horizontal actions        | actionsHorizontal   | `pe-card__actions--horizontal` |
| Vertical actions          | actionsVertical     | `pe-card__actions--vertical` |
| Justified actions         | actionsJustified    | `pe-card__actions--justified` |
| Bordered actions          | actionsBordered     | `pe-card__actions--borders` |
| Tight actions             | actionsTight        | `pe-card__actions--tight` |


