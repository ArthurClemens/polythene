[Back to Polythene Text Field main page](../textfield.md)

# Text Field component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Help texts](#help-texts)
  - [Front-end validation](#front-end-validation)
    - [When to validate](#when-to-validate)
  - [Custom validation](#custom-validation)
    - [Checking the field value with callback function "validate"](#checking-the-field-value-with-callback-function-validate)
  - [Using a validation library / setting the "valid" state directly](#using-a-validation-library--setting-the-valid-state-directly)
  - [Character counter](#character-counter)
  - [Reading and setting the value](#reading-and-setting-the-value)
  - [Programmatically setting focus and value](#programmatically-setting-focus-and-value)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Text Field options](../textfield.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRgFYBmADgF0SAzASyRg1QUTAFtkaAHQALAC6j4xdFFmIVqEAB54vKAGsABNPKJuAXgA6IObNwoA9PczlZ0gK7kwScbEkBzXlc3ACNJXggnGDxZGHtsBABPVzVEe0QADzFsAXtubxhJMCirAxN4S1JZBIFpRERZKwA+CygWzTJyXmxZAxhPCps7R2cgz281AoCg0PDI6Nj4+CTaqFSYWUwofEx4aFTF5ZSAWlFA4344xOTVk7PO+CP1ze3d1ckAKxgmzXsOrtlmq0oO0KP9ev0rIMYA4nC53GNED5JmcQmEIpgovUFlcVmsNlsdntLktrogjkVsSTceSoo98S89h8viBGj8-t1AW18LwAG4GXj4CqUCANFk-bk8xpKPBIMCycKwDS0FC0I4ANhQACYGCAAL5EYRiCQgJlKSAqNSyDTm9YGYAGAAqGVkADFeIh4PgiAYAEqYXh4fAAITcslk0AMuoMZgMB1JAG4Wi0bT0AMr1ABqOzciGjBgAFABKaONO0tAwGFO9DaqPPAcsVgw87OIFAGKxWIgNivRACSUGwodTNdbBjcW1MugIDd1DYbJlkHigZeXjZ57oA7m2iyWV43G1Xm-Ac3mnqpJEec4nV-uq32B0OR6eR5J74PZMPMKpr-uKwulwYoj5lYEqdgY1Ddr+QFOukrrup63r1jev4VrU8DYG2VgOgk2C5nA4gGKosHehA5CxiYUQGAAggAIjRvpUQAcjRADyACyhEQPysCIC4BiYJW0jOJgcq8eREB+OQYiiF+vBgDsCSdpBKGIDylrQnuKG-tAujvm2uZmKWZ6IBeLZ5iZGzkH49SmceiDKb++oOfu0AAMJCVA1ltqsG6frWhkFs5v7Ga+9T9u+fkGQYPmRaFsjhY+X6IF2yFadWSW2SeMYxS+l72alv6FilaUVnlxVabqRVBUBViSLhRzBKG4ZQEclAbmBEEFfuQF+gGBAhmG0CIUF+5YMEHqYSAVH4PgpTPBAohKV1v6qepbZISV2lQF4cl6NuxYBW+iWqPmG2bb+eVtnlBgANQGMOnSeZI3CUKI7nOK5ED4Ig+YAJwAOy3QYbFftIz27KR+Yg64khSVsC07gAVAYmpqoWVXLWl3AQGAbgabI5A5iNjmFsTFZOZjkYY5tPX+oGA3NcNlMVmNE3tiArlIM4S3nQYq0qBpZ289AO1gHtBYHUZYUPh+I6nQY2O4-jhPJU2LaTSUlVk5G5VpVry0cKTBWGz+jazquurXpbSbbdAtpUdg2B1g266IFuEu7p13XASabWSFAIr2cQ4EOTVICYGBQu-sYpiTVCMIjPCXiIhM-gojMERxtS32iBAsSnK49z2AAxPYRGyHwHr4DzWmWdZsiTQA+sEWD6B2BX6uz6a5jscBtgACjiKQK6RwN3PwBhHI6zoGG6VcGDnEBWEb+6G7rgE+7DEDtcHXtQZv8qyEgYFWAAMpg43wMv68VmHhQLfEqwqDXKHQc6c8IZpKEWEfF9s2ff8r7EGJgKSaogEhHAFC-EmDkV6NjXpBO+bUOqhwPoEY+wcrAul2LJTyBhWZAOpvvWqkBRCP0tNA72ME4JVyZmlH+BDJrn0vpQ38eQIC4L8MwtmBMibLX1ihOBFYEHISQdvFBBU76Hwwd6KwAAJD0Tty7X1QSQh+exn7AOWm-WCH8vRf1-AwwBk0ACaEAPAGEYkaVh+40IYXZgAUQtGRZI0UjT8RgAYDcnQwxqAMBGVxFACCBErM4auIAgoCMKpBER3tarIN3qok00ig6yJAGxNw8B5T4KnCoyRm9SHkM0TfRsOiaGfyjvuIxl9JrYI4fKPBBDuKAUyfKI4OhVjcXfDYxs7DOHcPgG2XhyViaiFabwU+U4hkqxKfuNqGlNSRKEY2ZZsTSmbwSd6PecTknoNSezH0iAACObheAmFmnlPJr8CnqKfqKWZG9qF6LoVpap-8QBmIsSIcQPSKx9IaVw4xhEZnEzsZNJxqgXG1DcQRDEXifGqGXAE6FQTuQ9HkuQcJDy-zHNOec6ZfC9bLIrKsoht8NniMSfk2qKST4czxuGUQasdDbHlNAK5xCTSFI0fc6q+YnnwX0ZUxsP9vrcEwK0rMdlJoX1cr85lAokpXTMgFbW10ACEZgYx5UkOGU+29eKuQxD9YlJUAD8BZhWbSPKAhWvcRnMxWuQSg5BJosSgEsMceB8EGs8MawSwlRLkAKO3Xm5NTVpW8pk+A2KFWssQFRWWIwCX5SJbAmJZKN7xMpVspJuq9l0s+uOSFHKdn3zITynpZTnkGKqb-Gp7MaKIHZGy1oWjNr-N0IChtwzY1iolVkqVOYmGkURPyXAbgmX4AQKPGAISjSyC7O2kqkBi28TbCwegxNeIutMeYowmA1J83SGAOo31ZquJkukXgYymVQEneNMiEBuABqkkGkNET+GmtJevMRO9c3Ut2UffZVgaIBgvkgcJmbyVqIrXcqt-L36Cped-et7yBnyu5DACDBAU1LPTchNZMHfY5pDoB-NwG6Xph6NdZ4I8lalvWbBopvLtH5mo0OxA36M2-opRuOqZJtjkD0EcZq+ztlMaAzI9mdTOH4MAQWIThgxOkxANBrNXLbkUOXdcgVtDa0irQ4M9mGGdNaU7Z5AZeGv0EdXpmv9AmjhKdE3sCR1yaUFswSAMD2GW4EEU84ZTexVPqbvty+DZmqFIf01a9sRmmGAMw+Bvz+BrNpoKj+xBfH-aBzc4ZsOEdg5Rx-j-GO3A45hiGPYT4fAZpIH9vUewVE4QeE5inWA9gNxQG4HoU+sg9C-XsD0uu9Qm4t02HoduP99ydysN3fi8A+7T1grPQVI9yBMptayhUy8eMNg4C0a2QJRCSFzsW-M07cY+FkP4eoDjxgqCDAkXs+AfbClFEVaijtCzXmlB6RAcoFSCDQEwLUbA9QGhAN840hQohmmgIiq0aA9RcBAB0vQwPqCGnEBoAu5x4AAAFViwSUB4RQaB46OHHNgPQfhy32Dx-cAnmpJC0FZ61MAkg1QM-HvAU7uhTQkCqLhDQLaUe6iAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { TextField } from "polythene-mithril"

m(TextField, {
  label: "Name"
})
~~~

This creates a text input field with a hint label that disappears when text is entered (functionally equal to a placeholder). 

Other types of input fields can be created using option `type` (for instance "number", "email" and so on).

To create a floating hint label that moves up when the field gets focus:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true
})
~~~

A more compact field with floating hint label:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true,
  dense: true
})
~~~

Full-width field, compact field and with floating hint label:

~~~javascript
m(TextField, {
  label: "Name",
  floatingLabel: true,
  dense: true,
  fullWidth: true
})
~~~

Create a multi-line field (textarea) with `multiLine`:

~~~javascript
m(TextField, {
  label: "Name",
  multiLine: true,
  rows: 4
})
~~~


<a id="help-texts"></a>
### Help texts

Pass `help` to create a help text below the field:

~~~javascript
m(TextField, {
  label: "Your Name",
  help: "Enter the name as written on the credit card"
})
~~~

To show the help text only on focus, use `focusHelp`:

~~~javascript
m(TextField, {
  label: "Your Name",
  help: "Enter the name as written on the credit card",
  focusHelp: true
})
~~~

A help text also function as error message when the field input is invalid.



<a id="front-end-validation"></a>
### Front-end validation

Passing `required` adds a mark `*` to the label, and uses HTML5 field validation to test for a non-empty value:

~~~javascript
m(TextField, {
  label: "Your Name",
  required: true,
  floatingLabel: true,
  help: "Enter the name as written on the credit card"
})
~~~

When left empty, the field will show an error status.

Other supported validation checks:

* `minlength`
* `maxlength`
* `min`
* `max`
* `pattern`

<a id="when-to-validate"></a>
#### When to validate

By default the component will validate only when a user action has been done (triggered by "onblur"). This to make sure that required fields don't scream INVALID at initial page load.

Variations:

* To do validate immediately, use option `validateAtStart`
* Use option `valid` to bypass defaults - see "Custom validation" below
* To validate on key press before "onblur", use option `validateOnInput`
* To reset all error messages when the field is cleared, use option `validateResetOnClear`



<a id="custom-validation"></a>
### Custom validation

There are 2 ways to validate a field:

1. By checking the field value with callback function `validate` - use this when you want to simply check the validity on input (but note that it does not get triggered on form submit)
1. By setting the "valid" state directly - use this when you need to validate the entire form, so you keep the value in local state

<a id="checking-the-field-value-with-callback-function-validate"></a>
#### Checking the field value with callback function "validate"

Option `validate` is a function that accepts the current field value and is called on every `oninput`. Return an object with attributes `valid` (Boolean) and `error` (message string):

~~~javascript
m(TextField, {
  validate: value => {
    if (value !== value.toLowerCase()) {
      return {
        valid: false,
        error: "Only use lowercase characters."
      }
    }
  }
})
~~~

<a id="using-a-validation-library--setting-the-valid-state-directly"></a>
### Using a validation library / setting the "valid" state directly

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUSRUqhAauwNF9tEYqOoJNZmLw6H0AO4kKD4GBQOhXG4vUkFIpjQgANykhDGqVgMHYQolktyIDwHlIEHYLksTAAbEgAKwARhAAF8MNR6IwkCwLuqQLx+IJ2ExdFJncMpMApAAxfl0DD+wgkOBjYMANUmspoOr4AFEoLAoFJzVIFFIVL5ubzAyoANwFL0VX0AFTC7D9ofDwYASjRCB4xgAhIy0vhpjNSKFbIuPEtSMsJgDKZYA+gBVEcJuvjgByAEEALIJ7sqRctgDCheLfG9y4AkvPxwAFRcjkcAdQA8nWACLjgAyCfnAHEywAJbsAZn7g9nOs73HVdL0XN8E3HOsEwARUnQ9oPvdcQDLVgmykIgwzGGUwCSEgAEcjEIOQxmYXcqCzKgzDBXCR3YUoqGsassKkStBDGXDmPDH0CikKQ6BgCV8D8AAKQZOWjOAAEoeIoviZXwKQRIAQnEySZLkdgTAolRyPkvCtKgCi1Mmfs+PNAoLIHOAaKkScPCMm0uOwtjxlo+jxCYmtsOAXipElGMJgEESArgIwSBk3y5L4whFJU0LwpkwxYE5KRxKkSTY3jKgkxTETAOA0CR3AyDoLghCE3vKSzPk2KlISkgMwUTNhzHKcZznJdV0ivz9OSmBUvSzKgt1XL+RElRUPQowHNoBgpEmOQaDGPxWNCJsvGYKRT1IMFGogVgYBgDwFqkIT8B5V0pBmnk5pIMiQGq3q0z8qyrOLGz3G2mjOX5MZnLWgQ3KkOiGK8lior40KspIELJkS2T9Lq+L4YiqR+sGkhUuGuNRuTcaCrnIqSqg2D4MQp7ooU+rUeYUhGMMKRhCkI8T3PS9bwfZ9Xw-T8eqpviMbSrGMsC3HE3xqARIAAwATRgEwex+v7+JmioHEauMpF270ABJgFZs8L2vO9Hxfd8v3TA79BobUeVwk5WWlyn9Ks8zLLFKjPtwrc+CIAVT2VqB-u8wH2PcsGAch-yxeChrg0mOBJPCsB+aRuLlIapLZAG4XsdjvG8sJkDR2KiDSfKimapiuKGqkZTmoWhBk7IFBDCbNk-cIVlMPDbA0-09Gc8x-OxBGiW8smtDcLGGAyAAcgqOg4wOqQ-AV1N-e9dQg9IlQXfkt2Xqod6qP3CoDpICAJHsnlFwC4gaAcYg7FWzM4bCkhg17sYZIUXJEbUw-uFeujddIgCkAAMkgTHT+TUWqjgnNOWcC4VwJgHnxH+zAehjSllPaas0bRNyWitNaG0rDbR1vtQ6x1NZnVihdOQ-BrqEIYA9A+6YwwnWjpg7y2DPC4JEoyMY8hxAkF-jVN6-YPq2RHN3KgRh1ABgFGHYGyi6CAJLFAIw2pxoYMqIonkIkD6C2nswG6jl5qZlvpYkgzlmDiWMdXIeHcd7uF+sHbsgd3F-XsY4kxLi4hdwDrvbsvsqD+zoN4sAHiQ5YQcVjESvof5ICzCANxMS-qJHNBwyip9qJfXUfBQBfBxB2GMYAvig4go0G7Dw+SFi7qpPARgZ6fEMmxOaSAFQrSBaemCVE3eXTdJU3NM49uVg+QqMzHI6wCilGBgSZyJJZ04y1JyeMsxYBHArFpOI7s+BJgeE2R3bZDhdl+kbKQbCmZDlwGOVID0fA5iVEOqlHkKZcI0HwAIVMrAaCSk8gY85dgBDYVqVvCoOoGCvU9nxM5uyRJo3qfddQchJSunvPIGgRg4DsCcc9ZGEzmBTLoM4MAw1jH6L4h6Ec7Eh6wCMNYVgUhFynkPMwTlbTAnYJ2aC-ZmZ6LhWcZw+5jV6mmNOXyqsVyBXo20SQEVsLHhQ1DMs-Rg5fSNJtMGDpf1gzOkidE2JXZBVmNJc4wcHz+S4TNR3UlNgBGSwJVTQcpLux0AmgQfM6puUSvkvuaVqTiUIrsMwZ+4wRITKkr0we8kqAwGhkFEgXSE1JrjCQHp3K+I4vYDAdkkRPAprSTAfA+ARlxstNyz1Hwfw9LSbMiiij96xsHp6isoQqzeWDP6viTS0naphb6vpmCpi40Yk+J+YZg0KtbXGhqqTB33WsJ4e8azjFzsHiQDF-AtCVLjVIUpTJ2ypMav-JS2bB5Lv4ewNdIwkXMBGFAFd7BmBZ03QenloaZXEH2dA1ij79AvrfbTem1hGb-svtfGx98rlPxfukB9T7gPxxYbdG0UlL18UwyOtMH75JyEIsRcRM7wr4ahoFVJylrVQCsEu8jrFJanslnR1hX9L02Q1nALp8tFZ3SzbhrIcB1CpOlrfKQ899atSQR1VBq5zTz3RjAdGZAKhLs9Fka+0t8M5Pw+2yszke2Xv7dmXeAnP0xBgOO6wk6uOkfY7hhdSsfHB0dbe9dMbL3btdHu3tAaqDiHUCe1iGYAETVw-pPVrmeh3poEhoDngQOf08xF+SIbpWXN-dhf991kOJYanTQQ4GWX-qi6RJslKcOfuw5eqtuHCNERIvZhjSaqM0asGVhjNHmOfOYJ1jjU7uNpN46mMr5mD3pHUMW0zLmxjjddiluN+nO2Gf3fpEzToBnGqycOizY6dQTsG81y9TnDXEUGbNtzsWN1eZ3V4VJfm+JHqC+wU9oWL2paqVt3eN7ru5YS6+99WG0tbIy7K7LMD-vPvy6BorEGYFnZCZdirgVjHA6qweurn6GvEbGMdxzlH67tc7hE8723g5daY4x3riOLuZIpwNuzaTwmRLXhvZz9O5u7Ym34KbXSxvc4W3pkSDYmziLbB2KgRncNhn+K6LpDh2x5sKILwek3pvgGlfNwenHp0NvYtr-SEowBP2ucG0HIKf3XKgTA5SxKHUo7HlGhVGOFvPQCW67IYwHC22kJmGtqg63qmGwreecgzrTGUvvZxmltJfulWC7lAB+DCXuffX25aki1yr8nn1ZeodQdS-KAqxqkip56UDPWegH5gKV62V76TXnU7BSD1pUOo2BWVdRSE5KsbaA0eSkpbdWr1nc6C+EGPwQ38lPVFMPK7+SC-+6bprylBxipM3B4b-pJQnAvU0HrfU3fu-ZDyC6Z8eoPwmhmDl5YGwQJOiuF7BiRYIiBLeF2WsOA2gADE2gBCdo-zT6CwA5dLjgOA2SSAjK76uzBgqB0qaz3IwCpKnjohBAYT8gsy7DEBSCLBDiVghgsRv4wD7zPTL5+TYCWTSJUBkoCSMj4qzwQBGAWCvovoJgtD8Ath+CHhjBeoKhKiPTBiLgF7VSOiahXzZTkB2hoDGj6iLAyE-gWhWggB3RMBsjuCOjOhAxuh2gWi4AgBiCSBSGUAqE2hMCf57AAACgwnajoJgiAdoF+ugjIzIrI7I2gFhxAlhAATMwGgH4YsKYMwPqB4dgXAMwCsFQPiI6OrkwBSHoeaEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

An external form validation library (or component/app state) can be used to manage the form state.

* Use `valid` to mark the valid state of the form field
* Use `error` to display an error message

Example using [ludbek/powerform](https://github.com/ludbek/powerform):

~~~javascript
const errors = this.form.getError()
// ...

m(TextField, {
  name: "username",
  required: true,
  valid: !errors.username,
  error: errors.username,
})
~~~


<a id="character-counter"></a>
### Character counter

Adding `counter` with a value adds a live counter below the field:

~~~javascript
m(TextField, {
  label: "Your Name",
  counter: 30
})
~~~

After 30 characters, the field with show an error status, but the user will be able to type more characters.

To limit the input to 30 characters, add constraint `maxlength`:

~~~javascript
m(TextField, {
  label: "Your Name",
  counter: 30,
  maxlength: 30,
  error: "You have exceeded the maximum number of characters."
})
~~~


<a id="reading-and-setting-the-value"></a>
### Reading and setting the value

See also [Handling state](../../handling-state.md).

To read the input value, use `onChange`:

~~~javascript
m(TextField, {
  onChange: newState => vnode.state.value = newState.value
})
~~~

To use the received input value, pass `value`:

~~~javascript
m(TextField, {
  onChange: newState => vnode.state.value = newState.value,
  value: vnode.state.value
})
~~~

Finally, you can also use `oninput` directly:

~~~javascript
m(TextField, {
  events: {
    oninput: e => vnode.state.value = e.target.value,
  },
  value: vnode.state.value
})
~~~


<a id="programmatically-setting-focus-and-value"></a>
### Programmatically setting focus and value

The `onChange` callback returns the function `setInputState` to set the focus and value of the input element.

~~~javascript
m(TextField, {
  label: "Your name",
  onChange: ({ setInputState }) => vnode.state.setInputState = setInputState
}),
m(Button, {
  label: "Set focus",
  events: {
    onclick: () => vnode.state.setInputState({ focus: true })
  }
}),
m(Button, {
  label: "Clear",
  events: {
    onclick: () => vnode.state.setInputState({ focus: true, value: "" })
  }
})
~~~



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the TextField appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { TextFieldCSS } from "polythene-css"

TextFieldCSS.addStyle(".themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#BBDEFB",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
})

m(TextField, {
  className: "themed-textfield"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Text Field CSS classes](../../../packages/polythene-css-classes/textfield.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/textfield"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(TextField, {
  style: {
    background: "#2196F3"
  }
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


