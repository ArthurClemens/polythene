# Raised Button

Displays a text button with a [shadow](Shadow.md) effect.

See also: [(flat) Button](Button.md), [Icon Button](IconButton.md) and [Floating Action Button](FAB.md)



## Usage

* [Usage with Mithril](RaisedButton-Mithril.md)
* [Usage with React](RaisedButton-React.md)



## Options

All options for [Button](Button.md) also apply to Raised Button, with additionally:

### Raised button options

| **Parameter**    |  **Mandatory** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **z**            | optional       | Number 0-5 | 1           | The shadow depth |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |



## Composition

Raised button is composed from:

* [Button](Button.md)
  * [Ripple](Ripple.md) (when option `ink` is not `false`)
* [Shadow](Shadow.md) 



## CSS classes

See: `polythene-core-raised-button/src/classes.js`
