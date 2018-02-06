# Drawer

Navigation panel.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Drawer specific options](#drawer-specific-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a name="main-features"></a>
## Main features

* Set backdrop background


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/dialog.md)
* [Usage with React](react/dialog.md)



<a name="options"></a>
## Options

<a name="drawer-specific-options"></a>
### Drawer specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **backdrop** | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **closeOnEscape** | optional | Boolean | false | Set to `true` to close the panel when the Escape key is pressed; NOTE: will close all drawer panels on the page |

* onChange
* transitions
* backdropTransitions
* didShow
* didHide
* permanent
* type
* menu
* show, hide


<a name="composition"></a>
## Composition

Drawer is composed from:

* [Menu](menu.md)
* [Shadow](shadow.md)


<a name="css-classes"></a>
## CSS classes

* [Drawer classes](../../packages/polythene-css-classes/drawer.js)
