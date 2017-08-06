_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Checkbox

Form control to select multiple options from a set. Generates a styled checkbox input element.


## Usage

~~~javascript
import m from 'mithril';
import { Theme, Checkbox } from 'polythene';

m(Checkbox);
~~~

Creates an unselected checkbox.

To read the checkbox state, for instance to write its checked state to a controller variable, use `getState`:

~~~javascript
m(Checkbox, {
    label: 'Checkbox',
    getState: (state) => (ctrl.checked = state.checked)
})
~~~

Because `checked` can be called as a function, it can be written much shorter in combination with `m.prop`:

~~~javascript
const cmp = {};
module.controller = () => {
    return {
        checked: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m(Checkbox, {
        label: 'Checkbox',
        checked: ctrl.checked,
        getState: (state) => (ctrl.checked = state.checked)
    });
}
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag for the checkbox container |
| **class** | optional | String |  | Extra CSS class appended to 'pe-control--checkbox' |
| **id** | optional | String | | HTML element id for the checkbox container |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Checkbox specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name** | optional | String | | Input element name |
| **label** | optional | String | | Text label |
| **checked** | optional | Boolean or Function | false | Checked state; use as function to set the value from outside |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `checked` {Boolean}, `value` {String}, `el` {HTMLElement}) |
| **value** | optional | String | '1' | Input element value |
| **disabled** | optional | Boolean |  | Set to true to disable the checkbox |
| **tabindex** | optional | Integer | | Tab index |

### Checkbox appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn** | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the on state |
| **iconOff** | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the icon button | | Add attributes like `wash` and `ink` |
| **size** | optional | String | 'regular' | Equivalent to [Icon's type](icon) option; either 'small' (16px), 'regular' (24px), 'medium' (32px), 'large' (40px.md) |


## Styling

To use alternative icons, use options `iconOn` and `iconOff` (see also "msvg" at [Icon](icon).md):

~~~javascript
import iconAltCheckOff from 'app/checkbox/comment-outline';
import iconAltCheckOn from 'app/checkbox/comment-check-outline';

m(Checkbox, {
    label: 'Checkbox',
    iconOn: {
        msvg: iconAltCheckOn
    },
    iconOff: {
        msvg: iconAltCheckOff
    }
})
~~~

## Inheritance/composition

Checkbox is composed with [Selection control](selection-control.md).
