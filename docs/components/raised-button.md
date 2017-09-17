# Raised Button

Displays a text button with a [Shadow](shadow.md) effect.


## Main features

* All [Button](button.md) main features
* Custom z-depth
* Custom z-increase
* Disable z-animation


## Usage

* [Usage with Mithril](mithril/raised-button.md)
* [Usage with React](react/raised-button.md)



## Options

All options for [Button](button.md) also apply to Raised Button, with additionally:

### Raised button options

| **Parameter**    |  **Required** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **z**            | optional       | Number 0-5 | 1           | The shadow depth |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |


## Composition

Raised button is composed from:

* [Button](button.md)
  * [Ripple](ripple.md) (when option `ink` is not `false`)
* [Shadow](shadow.md) 


## CSS classes

See: `polythene-core-raised-button/src/classes.js`


