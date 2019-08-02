[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for Mithril

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

* [Radio Button options](../radio-button.md)
* [Radio Group options](../radio-group.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ACVMCyIAAhexiMTQIjW20BADilHs2E06s0+k0mzxAG5ambWpabXbHc7oABhADKSf9geDqNiyaT4e+MYCcZdUGzQlt+CTxSQAApjEIYgJ8NtyB6INsfE6i8Y3cBappNJA1uQAPqqdziIfQFB9vvGADELBYKoA7AAWFdd3v9hAQYej8cQBdTmcgeeL1fr4ibgc7kdsMdiEeYHyIeBTucL5drjdQPvX4crch1AnKAj2nOcwAAVhVFV5SVb9f23f8bCAg8WFAzRwKgmC4MvH8t0HIcAKArBn1fY9TxYYxanVABKXMI2gc02ENCsbAAeSdVQ5iTAA1T102MBpWXcTQAHdOTsIxDGMJV12kkBtEQO9xCkmS5NyVk2EQUT7QgBJVJAWhNCM2ShFoEyVzM2hpNyeQnyQNtMDAdR3B9ZYDLmUTjO80zzM0XzrPkulsEwOxNHYeAChsk9zNiwLcgiy4IBCsAvEiAyVWitoxEodR8XE-BJOi2ghDg+Tsty-EuMQB4IDUAy3PwLKuWigBZTRoKEABOHqVyIFUIKEABmLqVyGgAZTQAA5SqG+U+uXIR5XmibNC62aVQWobhqmobVsGrraFG-qSog2gINWlUSqVKbjquoQVSVLrLpVbreqIeUzOepUl0mlVtqXI6FpKx7nr+mbaFu4GhDOi6-sspd5VXfrtqG3bLsGxHZP6pclpW9rVTe471tkpUfvhoQpshvqZtgiClXlP7Xp6u63qm8m1oew6aaWpV6cZjqib6kmVzJ37NFxlcILXFHuvlMHNEGqaVWOpUSp63amaFnHSsBy6ZuXVX1a6zWOs+6WZf+uWFcJlnhdK0Wfs0AAtDD5IsOk3mEmoQFzSMORYxZyAAMQ4JByz4gTlBgYSxIkkQDNkrKymUsRE-UhTNO03T9OKnyV38jPgtCkRNBa+TWsejrcfJlUDam-yVUuV75u2XHaAmsnOdky5cZV7YlpVcaq6VTmVempahv87uV3gQaV3lTQEYmpXR9VAAvaKPfpb3jHoqB-bY4sRCWdxEHTKsaMDKoLVqQwxH9645HTHs8N-MpnIIHjVnsRA3xAI+iAqJ4XVLmGceFdBiEcD+V+05NBZ1ElOVkUAID4HPvoG+sC4FblgK0MAH88r4G-vAX+6Yn6ICyAQr+P9EBgOwZA6Bmg+A1hAIKLsmhqCbmwUwlhbDcLcLgZaBYJQ-4WiYTYTwUBdLxj4P-FUug+C5ADJqLhAiAAGxDf5TgACTAHwYgT+RCaGBn0EGewyw9BqAIJoAA-BhEAAA5XkbQKi5CnPowxmjEDqjUaouBNEiB+OnMw-MEBvQQF9N2IJcDeACH-omE+UAz7wQEX2BJp9RFVktKyYxtFr7ZVChQjxhCvHphySQxAgS34CMNHIWQU5OHVNSVg1JcDylaPsYAlJrTpwkRfP-Lp-CenTjQSwTA9h4BiATFQ-AU4cq-yqcM-0izhktOGe00RxgAAqokIDdOGX0si2zdn7NSeqaJ05GAXNokExgdFVHnJAbmUBd8D6MVaAAQWwH6IMWCEFTkvvkxpcDmG1koKJIQKC5DsOBdg0FIBMDsLWXAnQeh-7AlBL0CEzgoSDA8LCUYgQQwkjQXwCAYQ9h2AuBYWcFhmx2jbB2aApzpxBzPmIf+Q4fBYA0MA7hmp7FJnKJoVYcApwAAVMxzHCjuTQrVzgcE0Nsd0dpNCFmgGXKEeyQA0VUXclZfZ4VCHBTCoJRqJRiCQOw4wAARPQ4zJn9hmcYAJZqWFZAgHwCIcxZAsvviEls4TIkXPvq-e+PTYmbNYfaiZUznVDJ6bU40DSLncOResmhAy5gsp6YcrNQCE3DJUU01p6aekbP-js7VBqlmaDzfYqtObWmjIdXGgxhC5nkF-qm7BjyllXJLXAvtAjdUltHXA-VqijUmuIBwt1tYLVWtnbatgMB7IEBdTWw17rIBevWL6wtM4JBVlCUG7AW6wJiDDa0Vpkb-4sjXdyjdh6BGrDImW7B98H3rtmZoeZQDB29ovdwpN9S52AbTT27hFbOnZpfbmp8-TYMFqg9OYttbb4QYETB451bUNwPrbhptqSW2xume2ggnbu1YaHahgdPTh3cPHdg5jfZJ3VOnRAUSpqS3mq8Eut0xgEz2AWJ6gOzKdUXqNbu71xo-XHtPT6c9Iar13xvaku99iwAiZdHwbYzEJPAewW+qcH64H3wM1AI+pm2jCSnHwOsXaFhVks6xEOYcCC8U9FfdDtbLNsUPGImO7h7OOZ0y5wO7FOJWK8z51DvnE3QDqRy8DGGzPYczch4jAjCMALg-h5ZBX0vQcy0R+DrTcuNvKyRmNkzyOGKowBjDjHWn0daS1-xQTWOaHYyC91M63Swr6wu-jBbBN5adRkzd869Qyf3XyC9-qqxH2mRk7rfZuu9eCf1rjPHuF8ctWNwVlZn2ut4zuz1smD2LYU4GpTRnQ1qYjTqf+wjw7Zb7CZzDSz75vdEZaP8-9Twm3Mko+LRm4GgZS0N1ZBW+w4by2NuHdbENHMR3y2tCXYc0ewQjqrEOcuo8rSc6rAjSN1ZmY1grHWBFtbORc9bmhNtneG3qAbqW4XusXUd7ZZQGzTfO7WObPqFtBKW4piJynAOPbqOpgRmnjD1mfQTz7kVTMFecIiGADiXv2KV42elARGXxjqCAcHqGocppx32YruPSvo9J9w3Lgzqcq+nLbtp9v8fI8qyTt3cDydtoa3+rtTXMd0Z7TTjbXW9Us+22CrjQhsD4iItsIsR2YfbpG4d61IA7VjNjU6ij+BNBViIn+9YurJMzY9XukX8mA12jPQ91TsvntxPsYH+rhDthEQ+zg5LVu0vI4R4M-3vSidZcd2h8fHvpx479z7yfZXx99i75TkP1HmsR6w1HpnMfqlbaz2zxPyfe-ITT+sPbnPs8CfsTa1dP7S-l-T1XuPrPa9XdFyW8Xd3Jct+vXbyjW-SfUbD72ny+znxAPDipxxyx1SUtw5yWTn3h3tzHyX1InzQxyWXgNLRHy90X2twn0wIbUIIwzX1qyDw7U3zDxwJ3wYwZwPwnXfx4QTwhTP1T3T2vw-251zy2T52sTL2QgrzmDfykwuzrzkxfV-yb3uxU0ANvV10VwELAOQn70gI1ywGCB1w72UNxQNxbGN07DNzgLd0QMzzwKINQIqSwOnwI2Xwd1dyK3wJsNILwysJRxIJX2R3X2L1gO3xxzpwET30Z2ZxWQHReW+AczJXMTEDLwgG01cDEA8AqAAFEBhZB7RIgABJfAFhHkPkAJTQL5bAOiEUF8AxCURiRQIaGUeUNUTUbUAQRQLIYIA0JLY0Fos-WpSgeAJPfEQ3VsHohATQAAak0H6IJCS16MmMGKmNkF6O+3EXIEkW2CQBYBSxXFoGwASGeVqHKLFCqKlDQCGllA1GYBAC4nUC4BQGoCaN1EpQOCkBIEcCkDQAxSsHMWwBclrwsEeIuAAAElQzJho-iFU+i9goB9QSBihk9FAGQTR1RGB1QgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Radio buttons always come in groups. To simply show 2 radio buttons, without handling their state, does not make much sense:

```javascript
import m from "mithril"
import { RadioButton } from "polythene-mithril"

// Inferior solution
m("div", [
  m(RadioButton, {
    name: "company",
    value: "1",
    label: "One",
  }),
  m(RadioButton, {
    name: "company",
    value: "2",
    label: "Two",
  })
])
```


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

```javascript
import m from "mithril"
import { RadioGroup } from "polythene-mithril"

// Better solution
m(RadioGroup, {
  name: "company",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
```

Note that `name` is required when using RadioGroup.

See also [Handling state](../../handling-state.md).

<a id="reading-the-checked-state"></a>
#### Reading the checked state

To read the checked state, use `onChange`:

```javascript
m(RadioGroup, {
  onChange: state => vnode.state.checkedValue = state.value
})
```

<a id="setting-the-checked-state"></a>
#### Setting the checked state

Unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group.

To set the initially checked radio button, pass `defaultChecked` to the `button` option:

```javascript
m(RadioGroup, {
  name: "company",
  buttons: [
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
})
```

or use `defaultCheckedValue` on the group:

```javascript
m(RadioGroup, {
  name: "company",
  defaultCheckedValue: "1",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
```

#### Maintaining state

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgJgFYB2AXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1LQULQDgA2FAMACMIAAvkRBCIxCAGQpIEoVNI1KbVnpgHoAEqYTkQADilBc2CIegAQi5pNJoHptXoTHo9sSmk0rV0AGIQcjCYN6AAUAEpg-UbU09Hoo3pOHHhAARTBrRPALPZvRCUQoPQWCC+mB8xAWIgV7P4YyYFzwaQAYWqYB0BAAalsXIhay4NsZtAQ21BK3ouePEJC9NR25Xy4ul5WV-AJ7WLEhOMKF3vK1hAoh4MeQAAZYznrfZ3WvzO7y8Ho91kDtHwZFbD9s2vW97ztbhAJfL9K3fWC2ArbUAG4K1zB5lDLLcwEHYd8DHQ9JzzAtizWcRO04btewHRAh1HVckNQ3cKyMaQ3EXHcly5bhEAAd1rVN00-S9WPYvRhCTCwxVbDcQPEpMHSdV0Gw9YTL0rasiPzeNSMwcRNIvdTsxw2i8II38MMQfJcPowjDKM6AB3WHwiKTW0f0QQM0xMDNLOs0zbInRMPPs9TTWUJRa20osSz0jyPlgpdtRTUKl3sPQAGVuGEHsS08yJZSgHw9ESYpHVCPRAl9f1F0svNKATBsombFA5IkixxGwEkqr9aADkoXiZM3RK9wkn1eqgT1OKMq9MBvO8-wy2o9CfM9gJGkTMG4PB8FraRyAnVL1MQLlzXXaaZsraAPG4IcBO83y1mUfy6Pw1dExPZ91sut85LfFK-vk8aaqmwHQLm8DFuWyDoO+n7yC2na9oOxAjsvE6ztrC6fuurQ7uTB7uieqyTNe8zPJDCwAKA4gwcDQHkrktgUw-Zmt21JCmg5gFcwAQWwbAsN3bi+PuoThqXdqjQG-ShRbYhZJGqXMBk7Gl0MYx7whKEhlhDx4TGXwkSmMIw0pTthAgaJjmcW5bAAYlsBGnQOHqarhy81nIFzpHvAB9QIsF0CwP11KHPK2OBawABSxJJiPIPQAFkbl4PQDntcqIG9aqAwtiALBZhCAdgqXxAGoaPzL2VpCQGSLCWv1tGK52KrdgM6s4Bq9CaptO0Lo6y8gYRYmWJQPdGpNY3jIvL1nys2d3RCoBQiMoGEcRLenaQk3wCAwBcLxpF8WoAFFRiUL04gASXwST-wgIUB70fnsBTJjJVvWjZWgfg0A1AALCgAAHDqPUIBNJqHyBEE00AIoWgkF1fqWcDg+DdILAA1HoTq3Vc5QH6hAXialhCOD8Pg-02BawMFoNgVITFuY4OQS7cKlB4B6CwYw1uEBSRwNYcQ0h2gDinl9noABNC6Fc0-tKH+8o0BMBQFqbUHAQBaF0H-ag+pRBqBtqceQJA3DyDQNrew05sA6B8PkCAwhbA6NuAAAQYOIWg4gADMNjU7wE3toY0JAKhdTUKyC0SjtRAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If you want to maintain the radio button states yourself, for instance when using a state management solution like Meiosis or Redux, you can either:
* Set option `checked` on each Radio Button
* Set option `checkedValue` on the Radio Group

This example shows the latter method:

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { RadioGroup, Button } from "polythene-mithril"

const Form = () => {
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
  return {
    oninit: ({ state }) => {
      const checkedValue = stream(formData.defaultCheckedValue);
      Object.assign(state, {
        checkedValue,
      })
    },
    view: ({ state }) => {
      const checkedValue = state.checkedValue();
      return m("div", [
        m(RadioGroup, {
          name: formData.name,
          checkedValue,
          onChange: ({ value }) => state.checkedValue(value),
          content: formData.values
        }),
        // Simulate setting the radio button state from outside:
        m(".pe-button-row", [
          m(Button, {
            label: "Set Left",
            raised: true,
            events: {
              onclick: () => state.checkedValue("left"),
            }
          }),
          m(Button, {
            label: "Set Right",
            raised: true,
            events: {
              onclick: () => state.checkedValue("right"),
            }
          })
        ])
      ])
    }
  }
}
```


<a id="shared-options"></a>
### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons:

```javascript
m(RadioGroup, {
  name: "company",
  all: {
    className: "my-class"
  },
  buttons: [
    // ...
  ]
})
```



<a id="appearance"></a>
## Appearance

Both Radio Button and Radio Group can be styled. 



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

m(RadioButton, {
  className: "themed-radio-button"
})
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

```javascript
m(RadioButton, {
  style: { color: "#2196F3" }
})
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



