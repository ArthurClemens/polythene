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

```jsx
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
```


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApAAlGhkmAAISM7HYfAwGq1LgA4rAjOopEKpAopODNgBuArK8pqzXavUGvgAYQAyv6bXaHSiggH-S6qAVPS5vYaqBHmFrRv70qQABQqZiBBijJammALBz6hMqY3AApSKS8SZQAD6YmsHHrfCQ1erKgAxPh8LyAOwAFkH5arNfgMAbTZbMF77c7IB7faHI7ZY9rk8bhGb7EbNAcJDg7e7vYHw9HVGrG4b4ygElbVHnHe7EAArLzeQA2ABMF6vE5vfR71nfAnykF93y-X810vcc63rW97zgfdD3nE9exUAohQASijV0+BVQg5TTfQAHl9TEAZ-QANTNEMinJawpAAd2pQxUm-VcZBIbcOA4rjyUIEhmJ1GBQlSNApEkzjmDQaTB1ktBEkEfdSB1FYJGsS0xlSAZmKkgyZLkqQjKUvFhHUGhDCkIgEFSLs5McsybOIOBSMsiA7D8VJeUSIZYAkEgAHU2NYCTmGgip2ACkgABlxBIU4YHEWkYCMMZEhpFQAFkpA-ZgAE4isHDBeVfZgAGYCsHCrYqkAAOCKKs-EqB2YT8WtqqQCqa3lWoqyr6oqrryoKtBqtKtBmFfNBXy63kpu-eqJoW5heW-Ar5t5QriowT9ZM279+zq3kBv7cbWqm9bNpOxq0GWy7ptm+aFP7T8h1KgaKqG+byrezjSv7drOty79tqKiaes478jpOhT6vukrGp-V9v0-E7wd2zH6th7q1rGpH2u-VH0bynbIYiwcYeOqQgcHV9h0+wrPxuqRyvq3kJu-KaiqGjHydaoGjrQebGoHLmeYKvm8v2hnGdO5nWbBgWMChqmjqkAAtcCQG0fFrkY3IozdKliOGKAADFXJIVNaPosBGJY0L+MSLJePYF2QCkQThNE8SVEk+STNXfFLOsrKQGy9a8qF47eTF+qTN5OAFm2lqFiBkXYphvHOJToHOYWdreVi6PvzxzmGvaiqTNzwc4HKwdPykV7avZ8uwYALxUPWCUNvCqDMYEwCkUjE1YEZrBIKQwgEMYR-VHZVmYX0YDoXwBn4VV1wI6KjFWScM3UWBNGw7fYOrMArRIKAj5PsBcLHatDEIKwDgEENKwvjsICyCBAtGNRCYRgSDHhAGPEgmFv5CijNWIUY45BjBvhmM+X8OzjksOUX+JB-42yAXAEBIYX5v2GAIZg2DcGAOASQWBHY5DsBMJeUkFJ7joOrMwykQwMgkAUMANUdB9C2CoKJH0dAwG8jkHQRIQohS5DQWwgABvgkB7YAAkwAKEAOUdPBQuipDpVGPIBKowpAAH4dYADl6QVByF7dsmi8HUKFAop+HYhRXGZKwthwhYwwAtGldQrj0G0AYKkP0E8qBTygWwjs4TJ48OABmNU5JqE2jPgoXIUhiHMG6CRAQSSax-y0dQ9sKSCHTxwvA7+6C5Rzw9sAFAQS2HyJiegspKidYQL-K09ByEDxHk6QMbpPTqyGPwDQIwcB2C+iKTbdse9IHVLYSKJp6CWkjPaaAnWAAVZiMBhkjL6ahHZeyDkxKqT07AFy2F6yaR4lhtCqlVPwpgqQABBdQ1p7QoLtJkscHCvHsOZDWZC7gLHilSvpKg9JIF4juTQGQchFCvANLUD4DQTBmB+C0Gw-xHDOFcI6VECxDF0BgN4ZYqxtBdm0FAQsxZSx8ESObKeHsVD1gcMhSQeR-TZCkBMMAMB2wAAUwwDBspODUS9ygLBNNqKQ8Y+BSFJTAK4NBAVSHuSyVxHCQXD3BaElQsBmJ5DucCoeYKIUqHYHYUgeQAAi8gJlTMKTggBWqNVAopHqy1hrZRrw3gqU1Sz2G+P8VaVZHYQk8JUGM510zZmjGiSM2pCpeGNJDc0yNMTNlgK6TBEZbCjkDJUPmjA2a3HlszWsitbSSknP2QWwtHZi1gN2Y2qtzaOxxsmQmt1cyslQBAbWm0FarmRtuUsj1OqmQsJ1ea0FYADUxpAMa4NMTdUWqXVakANr2B2rxPa1+qkbbTqnQu-VO7eDrymPwddrSfGFnDYE6tUho2pDJGAE9SaQAVomCkPhFalDsE-d++ZQ7FmFpkRW1N-B00jvWYW3NgzYWdq7VIVtKGzmtJWa+6siGNn1pUO27DPTMPEdOU2rtPapkzP7aMcDw68OjtfeOzNk6N2zu1d-M96DN2LuXZC+9fGL2+pXXug9uRfRGCGGvU2fBePeNE9uv117A13rhZmx92pn0VvfSoCAMnDR0AWERJlv7X3-t4QR9BwGzNUDHu2NUDtrBOYwXU9s9mSKW2trbOitpcNdvs6ROcqoKiMTc7B9gnmzZkQoglGi-mWNQeuT0qL8HmM2dach0tQyqPNvI+AvLaGoMlZGVlnNRGQAkfy4WwrNWyuFpo32yhjHIPNtS60tjPSOPeK4xqxTXrKRbsE0amAJrNMbuU6N3dtrYW5DHoU+Jg2Oz8cvapgNt6GSTYfWPGZ8SpC9b4-1mdnj53epGzutdO2RMXYEzuiT820zcNGCtobPqVMrrU1t4T3iw2WhfYW-TaQXvJp6VZwDr7gNcNIJFgCYClxSzktIit0HX3pYaQhkd1YctFdQ9jjDKES149I8sxrrSKtsNxw1gn9XKPk56c1ujrXB1Ma7Z1mJ3XWlHdWydnjfPbvDfu3667nrNXTYe3NvI2ysh5je+Lu762vubc3ttsXoan0A70w92XNswetIh5T4Dl2GBgNzDbAs2oGU+mjBZlLMG+B1Iy12yndbyl5uK7TonHv8fMcC8213HZqf069-0ttIfmOjKdb25nAC2sjo52wrnMSefsIF7zs7PGJci-Gw6LYiEFgJnm2axXYnUiPYddHl1DiTEZkQlkqY2F5drbLwZlXQabt-c1wE7XfqmeJpJUBfXMSMcZpdwT3HZbQ-HNy779nDOs2R+9lVmnS+6cdoJ-3+j8e-djsT9WVPmr09p8z4Lj7M3jV58H3eQvUxfvvZN+JqXh7j2cptlIOvQEG8DCb8f1b2flcb1Vd79Vt-se9X1gdQM398xEJh82FDcgMQNX9SAGNWd2sek0dC1R8scl9J9Pc19vcsNascMF8a1cCV8I90NCcw8G1ScYkt8WcFkE898J0xcVt2CADIUr8C8i8QCW9Pty9n9cgZdsVa968i9f9T8lNS8BC28gCO91dNUwCI0ICddRDr8JA4D0EECod2BH8zddd8w6UrcSwbctC3F98f5Hc01MdMsJ8qsp8CCaDZ86DK0cCqDg8N8nCZ9qtKD0MGC480DmDWNLDD92D08z0YxpV7VSJspmBEFDFb5-kPlrQ9Y0NRgYBDMLB2AbBPAABRZofgHUPwAASVGCzFXRgHpBUGwgKFwhlDU2IBviYAcCJxlA5BwRtQIj5DkiQFfAKmFFFBAGjSYHIXcAaOsKEElGYHUDREd1gDgBmK2GMJcAWFqQWKkAAGopAli1j5j4BdiViix1j4Bz5qwBEoAhEFhSB8BosW40B1BQgowql2jDxOjuRyBJQKoBRhRcAQBKIJBPjKBhjxQmBKUcjDFyRDwYB1BsicQZQTBEBJQ3g6h0p1BNJyE15aVpVtAjA6BRhsTdhmBIToTYSFR4S8B0hZimBCRBixQGAwTpUSU15iSSAoTJgyT+AKSQBESmAUTdA0SMTr1CTVhmS6BcT8SRS9gMi6BWT2SYS4TpRKS-BqTJRaShQrkgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
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
```

Note that `name` is required when using RadioGroup.

See also [Handling state](../../handling-state.md).


<a id="reading-the-checked-state"></a>
#### Reading the checked state

To read the checked state, use `onChange`:


```jsx
<RadioGroup
  onChange={state => this.setState({ checkedValue: state.value })}
/>
```


But unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group:


<a id="setting-the-checked-state"></a>
#### Setting the checked state

Unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group.

To set the initially checked radio button, pass `defaultChecked` to the `button` option:

```javascript
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
```


or use `defaultCheckedValue` on the group:

```jsx
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
```

#### Maintaining state

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkcMAdwDmEYvjpZZAQQ7FCAVw4BhWDjRxZ3WlACeBpjFlYMcRh2sZqAawwr4a1sHQicAWg4Yb2JZABMIdyD7RzQYCKjqYjD3DDRYjCh6GHwAKzhxAD4WWXYuXgrRNDZOHn5BEXFJaTkFZTUNLV19I1NzJisbZNDUlzcPL19-QMmQ8Oo4K3jElZS09bhs4lz8wtTS8pAqmpb6xrum+IA3PghYsRAMbm5K6qeKyhAcBgsEyEHoCEQIAADIgAIxQgAcIAAvhR0NhcJDzgC6AwmMQ8PIXlgbPo+AAlDL8MAcWhYPjiSLRcSNIkQEm0MnACkYeK0ADitMM3AofAAQoZiMR6HxkXwaXSGSAdtM0kzMiy0Lj3HxueTeWDBbRhaKJVKZXLhHwVU57trqZysAARDBHPhW4CNPh8TA4RBK43EOCvGDiChevixGBgDCGKDEEyhXwwWIANQKhhg-sZEBUJDDEceGfg-uQEe9nrQ3urfCLUEz2ZAsDAxALVZrfCgGAARsDGwAZaOtyjl2Xh9sV0feusNpVcPPD8cdzs9vtK8m5-MjidjiMAXUayLtXY2fAAYo6+DAAB6MPJwClU-AmOk2VIMXUR+0cQyZTkACm4WlpAASk-Hc4GFGAOEA4C4BA0cDASfAckYd1wOXagkx8FN03rLN5UdF0jnwKMYzjBNsNw4tRyPds6O9SI8mg-8wMrGt7T4LCYGTNNi3QpC4BQo5GE0Ki+Pw0dImIYwq3-Kc+BYP4FO9Fh9T5I1hRU6tfRgYRgDAIjXQwfBdIY5dq243i8MzfSrJwiTM3Miy+HoRNcgCfT-25GcYFlMDhAqPhBJQmBiAAZREmBvK48SbII3z-OcizcTvYh9MMjhnWM-BfLgZKa1kBodxrYBZAAKj4cL2TjV0-KBKUIDQFRgtCPhFD5Phu0laUq1QvyFXpQNgyjf1ytkArqyUiBnmoE84AAOQxd5uDSbrzTQCJaCUSptNUs1er26su17KB3nCsK+EHFtNRcmtFASFMju9GBHnxOB9PYu6azcqAIF8f1WPdIKQoayK6pi+zqPwxtm2HfzntlSbCuK76WAO+hEZO4FzsujcF1u772owR7YkR173s+xHvV+-6fEBgKQcIZCwaiyG4uLRt5y3BGSos5FkerIrtN+GbUY7UXHnF70EPow97kpaInQAeQAWXwJioxgu5iBYC8sr4YW0FFT5uBAnFX2gaC8G7VdyCoIEQWIMFLDwABWABORAkVRdEcDwTQNgtvFmEhbtaFiOwMOtXl4ma-0ACYoW4a8AG55bQfBVoiA1aDCFQhW4PgAGo+CztaevoLalGj1wODUTbpW4RPk7TjPy5zvkwlS2koBLsvs46sFu-oYhe9rjB66asI4f9AAWVv07QOiAUdnjnfBPAvahFE9yoP60B8CFUBAXS8HVDQozewpuAsDQygBYxyEhLoZHkQw0G4HwVE0OkFCpWQhgsCxH-tEUiFMb532xFQYgdhVp4FqK0FEaJT4YnPlSMIsQ6TgOvrQW++JoEgCfngV+PQP5fx-oMC+mC-5AJAdQrBWAcHAjwVAh+MC4GYkBDcAkyI9zIiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If you want to maintain the radio button states yourself, for instance when using a state management solution like Meiosis or Redux, you can either:
* Set option `checked` on each Radio Button
* Set option `checkedValue` on the Radio Group

This example shows the latter method:

```jsx
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
```


<a id="shared-options"></a>
### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons.

```jsx
<RadioGroup
  name="company"
  all={{
    className: "my-class"
  }}
  buttons={[
    // ...
  ]}
/>
```

<a id="appearance"></a>
## Appearance

Both Radio Button and Radio Group can be styled using `theme`, `style` and CSS.


<a id="styling"></a>
### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { RadioButtonCSS } from "polythene-css"

RadioButtonCSS.addStyle(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<RadioButton className="themed-radio-button" />
```

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Radio Button CSS classes](../../../packages/polythene-css-classes/radio-button.js)
* [Radio Group CSS classes](../../../packages/polythene-css-classes/radio-group.js)

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/radio-button"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```jsx
<RadioButton
  style={{
    color: "#2196F3"
  }}
/>
```

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


