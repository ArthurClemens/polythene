# Handling state

The state of form elements is controlled by your app. In React parlance, these form components are "controlled components" (as opposed to uncontrolled components where the input element stores the state).

That means that your app sets the initial state and subsequent mutated states of the form component.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [State flow](#state-flow)
- [Receiving component state](#receiving-component-state)
- [Mithril example](#mithril-example)
  - [Using streams](#using-streams)
- [React example](#react-example)
- [Components supporting onChange](#components-supporting-onchange)

<!-- /MarkdownTOC -->



<a id="state-flow"></a>
## State flow

A state change for Checkbox follows these steps:

| | **Step** | **State** | **Component option** |
| --- | --- | --- | -- |
| 1. | App sets initial component state | unchecked | `defaultChecked` |
| 2. | Component is rendered | unchecked | |
| 3. | User input (user checks input element) | intermediate: checked | |
| 4. | App receives intermediate state | intermediate: checked | `onChange` |
| 5. | App sets mutated component state | checked | `checked` |
| 6. | Component is rendered | checked | |



<a id="receiving-component-state"></a>
## Receiving component state

Option `onChange` is called after user input, and receives an object with the current component state. The shape of the returned object differs slightly per component. 


<a id="mithril-example"></a>
## Mithril example

Checkbox:

~~~javascript
m(Checkbox, {
  // read state
  onChange: state => vnode.state.checked = state.checked,
  // set checked state 
  checked: vnode.state.checked
})
~~~

Text Field:

~~~javascript
m(TextField, {
  // read state
  onChange: newState => vnode.state.value = newState.value,
  // set checked state 
  value: vnode.state.value
})
~~~


<a id="using-streams"></a>
### Using streams

Polythene uses streams internally to manage state - they are a lightweight and versatile tool to store state values.

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Checkbox } from "polythene-mithril"

const SimpleForm = {
  oninit: vnode => {
    const checked = stream(false)
    vnode.state = {
      checked
    }
  },
  view: vnode => {
    const state = vnode.state
    const checked = state.checked()
    return m(Checkbox, {
      label: "Label",
      onChange: newState => state.checked(newState.checked),
      checked
    })
  }
}
~~~



<a id="react-example"></a>
## React example

Checkbox:

~~~jsx
<Checkbox 
  onChange={
    newState => this.setState({ checked: newState.checked })
  }
  checked={this.state.checked}
/>
~~~

Text Field:

~~~jsx
<TextField 
  onChange={
    newState => this.setState({ value: newState.value })
  }
  value={this.state.value}
/>
~~~


<a id="components-supporting-onchange"></a>
## Components supporting onChange

* [Menu](components/menu.md)
* [Radio Group](components/radio-group.md)
* [Selection Control](components/selection-control.md)
  * [Checkbox](components/checkbox.md)
  * [Radio Button](components/radio-button.md)
  * [Switch](components/switch.md)
* [Slider](components/slider.md)
* [Tabs](components/tabs.md)
* [Text Field](components/textfield.md)


