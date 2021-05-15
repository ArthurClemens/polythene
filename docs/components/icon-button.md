# Icon Button

Displays an [Icon](icon.md) as a button. Also called toggle button.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Icon Button](#icon-button)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Icon button specific options](#icon-button-specific-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [Button](button.md) main features
* Custom icon
* Compact display
* Inactive display



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/icon-button.md)
* [Usage with React](react/icon-button.md)



<a id="options"></a>
## Options

Icon Button is composed from Button, so most [Button options](button.md#options) can be used for Icon Button too. 

One main difference is that Icon Button uses a button element instead of a link. Because Icon Button is a building block for form components such as Slider, Checkbox and Radio Button, it makes more sense to have form control behavior at the core. 


<a id="icon-button-specific-options"></a>
### Icon button specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "button" | HTML element tag; may also be "a" |
| **icon**      | either icon or child nodes must be passed | Object |  | [Icon](icon.md) options object; also used to show an round "avatar" portrait image |
| **label** | optional | String |  | Optional button label, placed next to the icon |
| **compact**   | optional | Boolean | false | Set to `true` to use smaller padding |



<a id="composition"></a>
## Composition

Icon Button is composed from:

* [Button](button.md)
* [Icon](icon.md) (when using option `icon`)



<a id="css-classes"></a>
## CSS classes

* [Icon Button classes](../../packages/polythene-css-classes/icon-button.js)


