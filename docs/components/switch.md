# Switch

Form control to toggle the state of a single option. Generates a styled checkbox input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Switch specific options](#switch-specific-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [Checkbox](checkbox.md) main features
* Custom icon
* Custom z-depths
* Disable shadow
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

Identical to [Checkbox](checkbox.md). See Checkbox usage instructions and replace "Checkbox" with "Switch".

* [Checkbox usage with Mithril](mithril/checkbox.md)
* [Checkbox usage with React](react/checkbox.md)



<a id="options"></a>
## Options

See: [Checkbox](checkbox.md#options)


<a id="switch-specific-options"></a>
### Switch specific options

| **Parameter** |  **Required** | **Type**   | **Default** | **Description** |
| ------------- | -------------- | ---------- | ----------- | --------------- |
| **wash**      | optional       | Boolean    | true on touch devices | Set to false to always hide the wash (radial feedback); note that a (hidden) wash is still drawn to create a large tap target  |
| **raised**    | optional       | Boolean    | true | Shows a shadow below the thumb; when the Switch state is `on`, the depth is incremented by 1 |
| **zOff**      | optional       | Number 0-5 | 1 | The shadow depth for the thumb in off state |
| **zOn**       | optional       | Number 0-5 | 2 | The shadow depth for the thumb in on state |




<a id="css-classes"></a>
## CSS classes

* [Switch classes](../../packages/polythene-css-classes/switch.js)
