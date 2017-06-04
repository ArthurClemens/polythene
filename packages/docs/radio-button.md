# Radio button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/radio-button">Demo</a>

Form control to select 1 option from a set. Generates a styled radio button input element.


## Usage

~~~javascript
import m from 'mithril';
import { RadioButton } from 'polythene';

// view
return m('form', [
    m(RadioButton, {
        name: 'pref'
    }),
    m(RadioButton, {
        name: 'pref',
        state: true
    })
]);
~~~

Note that the `name` property is required for radio buttons.

To read the radio button value, for instance to write it to a controller variable, use `getState`:

~~~javascript
const module = {};
module.controller = () => {
    return {
        value: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m(RadioButton, {
        label: 'Label',
        checked: ctrl.checked,
        getState: (state) => (ctrl.value = state.value)
    });
}
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag for the radio button container |
| **class** | optional | String |  | Extra CSS class appended to 'pe-control--radio' |
| **id** | optional | String | | HTML element id for the radio button container |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Radio button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name** | required | String | | Input element name |
| **label** | optional | String | | Text label |
| **checked** | optional | Boolean | false | Sets the checked state |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `checked` {Boolean}, `value` {String}, `el` {HTMLElement}) |
| **value** | optional | String | '1' | Input element value |
| **disabled** | optional | Boolean |  | Set to true to disable the radio button |
| **tabindex** | optional | Integer | | Tab index |

### Radio button appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn** | optional | Options object for [icon](#icon) | | Assigns a different icon for the on state |
| **iconOff** | optional | Options object for [icon](#icon) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the icon button | | Add attributes like `wash` and `ink` |
| **size** | optional | String | 'regular' | Equivalent to [icon's type](#icon) option; either 'small' (16px), 'regular' (24px), 'medium' (32px), 'large' (40px) |


## Styling

To use alternative icons (see "msvg" at [icon](#icon)):

~~~javascript
import iconAltCheckOff from 'app/radio-button/comment-outline';
import iconAltCheckOn from 'app/radio-button/comment-check-outline';

// view
return m('form', [
    m(RadioButton, {
        name: 'pref',
        iconOn: {
            msvg: iconAltCheckOn
        },
        iconOff: {
            msvg: iconAltCheckOff
        }
    }),
    m(RadioButton, {
        name: 'pref',
        state: true,
        iconOn: {
            msvg: iconAltCheckOn
        },
        iconOff: {
            msvg: iconAltCheckOff
        }
    })
]);
~~~


## Inheritance/composition

Radio button is composed with [Selection control](#selection-control).
