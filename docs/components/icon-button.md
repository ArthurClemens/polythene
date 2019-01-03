# Icon Button

Displays an [Icon](icon.md) as a button. Also called toggle button.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

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

Because Icon Button is composed from Button, most [Button options](button.md#options) can be used for Icon Button too. Additionally:

<a id="icon-button-specific-options"></a>
### Icon button specific options


| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
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


