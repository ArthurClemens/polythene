# Card

Displays a small piece of "summary" content - a photo, text, a link - about a single subject, as trigger to more detailed information.

This implementation closely follows the [design specification](https://material.io/guidelines/components/cards.html). A number of convenience properties have been added to allow different image formats without having to prepare the right image ratio beforehand.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Card specific options](#card-specific-options)
  - [Options for card](#options-for-card)
  - [Options for primary](#options-for-primary)
  - [Options for text](#options-for-text)
  - [Options for header](#options-for-header)
  - [Options for media](#options-for-media)
  - [Options for media.overlay](#options-for-mediaoverlay)
  - [Options for actions](#options-for-actions)
  - [Options for any](#options-for-any)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Flexibly composable with card elements in different order
* Set shadow depth
* Set avatar portrait image
* Tight display
* Horizontal or vertical orientation of actions
* Crop image from left, center or right
* Set image ratio
* Set image size
* Image overlay
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/card.md)
* [Usage with React](react/card.md)




<a id="options"></a>
## Options


<a id="card-specific-options"></a>
### Card specific options


<a id="options-for-card"></a>
### Options for card

| **Parameter**   |  **Required** | **Type** | **Default** | **Description** |
| --------------- | -------------- | -------- | ----------- | --------------- |
| **content**     | required | Array |  | List of option objects for distinct areas - see below; to pass other content, use `children` |
| **shadowDepth** | optional | Number 0-5 | 1 | Depth of the shadow |
| **url**         | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) | | URL for the entire card; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |

Next to the card itself, each content parts has a set of options:

* primary
* text
* media
* header
* actions


<a id="options-for-primary"></a>
### Options for primary

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__primary` |
| **title**     | optional | String |  | Title text |
| **subtitle**  | optional | String |  | Subtitle text |
| **media**     | optional | Options object, equal to media part below |  | Media that is shown in this part |
| **actions**   | optional | Options object, equal to actions part below |  | Actions that are shown in this part |
| **tight**     | optional | Boolean | false | Set to `true` to reduce the top and bottom padding |
| **style**     | optional | String |  | Style object |


<a id="options-for-text"></a>
### Options for text

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__text` |
| **content**   | required | String, hyperscript or component |  | Text contents |
| **tight**     | optional | Boolean | false | Set to `true` to reduce the top and bottom padding |
| **style**     | optional | String |  | Style object |


<a id="options-for-header"></a>
### Options for header

The header is composed from [List Tile](list-tile.md). The header accepts all options for List Tile, plus `icon`.

A Material Design header needs one of these options:

* `icon` (or `front`)
* `title`
* `info`
* `url`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | optional | Object |  | [Icon](icon.md) options object; used to show an round "avatar" portrait image |


<a id="options-for-media"></a>
### Options for media

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__media` |
| **content**   | required | String, hyperscript or component |  | The image or iframe |
| **element**   | optional | String | "div" | HTML tag |
| **origin**    | optional | String: "start", "center", "end | "center" | From which side cropping should be done |
| **overlay**   | optional | Options object, equal to card options; see below | | Content to place on the overlay |
| **showDimmer** | optional | Boolean | false | Set to `true` to create an image dimmer; the dimmer does not have a default style |
| **ratio**     | optional | String: "landscape" or "square" | "landscape" | Image ratio; "landscape" translates to `16:9` ratio |
| **size**      | optional | String: "small", "medium", "large", "extra-large" | | For primary media only; defines the image (or iframe) size |
| **style**     | optional | String |  | Style object |


### Options for media.overlay

The media overlay part can contain any card content. Additional options:

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **sheet**     | optional | Boolean | false | Set to `true` to show the overlay as a partly covering sheet |


<a id="options-for-actions"></a>
### Options for actions

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **border**    | optional | Boolean | false | Set to `true` to add a top border |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__actions` |
| **content**   | required | String, hyperscript or component |  | Action contents, for instance a list of buttons |
| **element**   | optional | String | "div" | HTML tag |
| **layout**    | optional | String: "horizontal", "vertical" or "justified" | "horizontal" | Set to "vertical" for a vertical list of actions; use "justified" for a horizontally evenly spread of icons |
| **tight**     | optional | Boolean | false | Set to `true` to reduce the top and bottom padding |
| **style**     | optional | String |  | Style object |


<a id="options-for-any"></a>
### Options for any

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-card__any` |
| **content**   | required | String, hyperscript or component |  | Contents |
| **style**     | optional | String |  | Style object |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className**     | optional | String |  | Extra CSS class appended to `pe-card` |
| **element**   | optional | String | "a" | HTML element tag |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id** | optional | String | | HTML element id |
| **style**     | optional | String |  | Style object |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Card is optionally composed from:

* [List Tile](list-tile.md)
* [Shadow](shadow.md)



<a id="css-classes"></a>
## CSS classes

* [Card classes](../../packages/polythene-css-classes/card.js)


