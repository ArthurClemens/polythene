[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
    - [Reading the checked state](#reading-the-checked-state)
    - [Setting the checked state](#setting-the-checked-state)
    - [Maintaining state](#maintaining-state)
  - [Shared options](#shared-options)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Radio Button options](../radio-button.md)



<a id="usage"></a>
## Usage

Radio buttons always come in groups. To simply show 2 radio buttons, without handling their state, does not make much sense:

~~~jsx
import React from "react"
import { RadioButton } from "polythene-react"

// Inferior solution
<div>
  <RadioButton 
    name="company"
    value="1"
    label="One"
  />
  <RadioButton 
    name="company"
    value="2"
    label="Two"
  />
</div>
~~~


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

<a href="https://jsfiddle.net/ArthurClemens/b1vbbLgw/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { RadioGroup } from "polythene-react"

// Better solution
<RadioGroup
  name="company"
  buttons={[
    {
      value: "One",
      label: "One",
    },
    {
      value: "Two",
      label: "Two",
    }
  ]}
/>
~~~

Note that `name` is required when using RadioGroup.

See also [Handling state](../../handling-state.md).


<a id="reading-the-checked-state"></a>
#### Reading the checked state

To read the checked state, use `onChange`:


~~~jsx
<RadioGroup
  onChange={state => this.setState({ checkedValue: state.value })}
/>
~~~


But unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group:


<a id="setting-the-checked-state"></a>
#### Setting the checked state

Unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group.

To set the initially checked radio button, pass `defaultChecked` to the `button` option:

~~~javascript
[
  {
    value: "1",
    label: "One",
    defaultChecked: true
  },
  {
    value: "2",
    label: "Two",
  }
]
~~~


or use `defaultCheckedValue` on the group:

~~~jsx
<RadioGroup
  name="company"
  defaultCheckedValue="1"
  buttons={[
    {
      value: "1",
      label: "One",
    },
    {
      value: "1",
      label: "Two",
    }
  ]}
/>
~~~

#### Maintaining state

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkcMAdwDmEYvjpZZAQQ7FCAVw4BhWDjRxZ3WlACeBpjFlYMcRh2sZqAawwr4a1sHQicAWg4Yb2JZABMIdyD7RzQYCKjqYjD3DDRYjCh6GHwAKzhxAD4WWXYuXgrRNDZOHn5BEXFJaTkFZTUNLV19I1NzJisbZNDUlzcPL19-QMmQ8Oo4K3jElZS09bhs4lz8wtTS8pAqmpb6xrum+IA3PghYsRAMbm5K6qeKyhAcBgsEyEHoCEQIAADIgAIxQgAcIAAvhR0NhcJDzgC6AwmMQ8PIXlgbPo+AAlDL8MAcWhYPjiSLRcSNIkQEm0MnACkYeK0ADitMM3AofAAQoZiMR6HxkXwaXSGSAdtM0kzMiy0Lj3HxueTeWDBbRhaKJVKZXLhHwVU57trqZysAARDBHPhW4CNPh8TA4RBK43EOCvGDiChevixGBgDCGKDEEyhXwwWIANQKhhg-sZEBUJDDEceGfg-uQEe9nrQ3urfCLUEz2ZAsDAxALVZrfCgGAARsDGwAZaOtyjl2Xh9sV0feusNpVcPPD8cdzs9vtK8m5-MjidjiMAXUayLtXY2fAAYo6+DAAB6MPJwClU-AmOk2VIMXUR+0cQyZTkACm4WlpAASk-Hc4GFGAOEA4C4BA0cDASfAckYd1wOXagkx8FN03rLN5UdF0jnwKMYzjBNsNw4tRyPds6O9SI8mg-8wMrGt7T4LCYGTNNi3QpC4BQo5GE0Ki+Pw0dImIYwq3-Kc+BYP4FO9Fh9T5I1hRU6tfRgYRgDAIjXQwfBdIY5dq243i8MzfSrJwiTM3Miy+HoRNcgCfT-25GcYFlMDhAqPhBJQmBiAAZREmBvK48SbII3z-OcizcTvYh9MMjhnWM-BfLgZKa1kBodxrYBZAAKj4cL2TjV0-KBKUIDQFRgtCPhFD5Phu0laUq1QvyFXpQNgyjf1ytkArqyUiBnmoE84AAOQxd5uDSbrzTQCJaCUSptNUs1er26su17KB3nCsK+EHFtNRcmtFASFMju9GBHnxOB9PYu6azcqAIF8f1WPdIKQoayK6pi+zqPwxtm2HfzntlSbCuK76WAO+hEZO4FzsujcF1u772owR7YkR173s+xHvV+-6fEBgKQcIZCwaiyG4uLRt5y3BGSos5FkerIrtN+GbUY7UXHnF70EPow97kpaInQAeQAWXwJioxgu5iBYC8sr4YW0FFT5uBAnFX2gaC8G7VdyCoIEQWIMFLDwABWABORAkVRdEcDwTQNgtvFmEhbtaFiOwMOtXl4ma-0ACYoW4a8AG55bQfBVoiA1aDCFQhW4PgAGo+CztaevoLalGj1wODUTbpW4RPk7TjPy5zvkwlS2koBLsvs46sFu-oYhe9rjB66asI4f9AAWVv07QOiAUdnjnfBPAvahFE9yoP60B8CFUBAXS8HVDQozewpuAsDQygBYxyEhLoZHkQw0G4HwVE0OkFCpWQhgsCxH-tEUiFMb532xFQYgdhVp4FqK0FEaJT4YnPlSMIsQ6TgOvrQW++JoEgCfngV+PQP5fx-oMC+mC-5AJAdQrBWAcHAjwVAh+MC4GYkBDcAkyI9zIiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If you want to maintain the radio button states yourself, for instance when using a state management solution like Meiosis or Redux, you can either:
* Set option `checked` on each Radio Button
* Set option `checkedValue` on the Radio Group

This example shows the latter method:

~~~jsx
import React from "react"
import { RadioGroup, Button } from "polythene-react"

const formData = {
  name: "outside",
  defaultCheckedValue: "right",
  values: [
    {
      value: "left",
      label: "Left",
    },
    {
      value: "right",
      label: "Right",
    },
  ]
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedValue: formData.defaultCheckedValue
    }
  }
  render() {
    const checkedValue = this.state.checkedValue
    return (
      <div>
        <RadioGroup
          name={formData.name}
          checkedValue={checkedValue}
          onChange={({ value }) => this.setState({ checkedValue: value })}
          content={formData.values}
        />
        {/* Simulate setting the radio button state from outside: */}
        <div className="pe-button-row">
          <Button
            label="Set Left"
            raised
            events={{
              onClick: () => this.setState({ checkedValue: "left" })
            }}
          />
          <Button
            label="Set Right"
            raised
            events={{
              onClick: () => this.setState({ checkedValue: "right" })
            }}
          />
        </div>
      </div>
    )
  }
}
~~~


<a id="shared-options"></a>
### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons.

~~~jsx
<RadioGroup
  name="company"
  all={{
    className: "my-class"
  }}
  buttons={[
    // ...
  ]}
/>
~~~

<a id="appearance"></a>
## Appearance

Both Radio Button and Radio Group can be styled using `theme`, `style` and CSS.


<a id="styling"></a>
### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { RadioButtonCSS } from "polythene-css"

RadioButtonCSS.addStyle(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<RadioButton className="themed-radio-button" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Radio Button CSS classes](../../../packages/polythene-css-classes/radio-button.js)
* [Radio Group CSS classes](../../../packages/polythene-css-classes/radio-group.js)

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/radio-button"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<RadioButton
  style={{
    color: "#2196F3"
  }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the radio button icon and label is reversed when the Radio Button is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


