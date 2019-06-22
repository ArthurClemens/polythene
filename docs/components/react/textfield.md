[Back to Polythene Text Field main page](../textfield.md)

# Text Field component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#Options)
- [Usage](#Usage)
  - [Help texts](#Help-texts)
  - [Front-end validation](#Front-end-validation)
    - [When to validate](#When-to-validate)
  - [Custom validation](#Custom-validation)
    - [Checking the field value with callback function "validate"](#Checking-the-field-value-with-callback-function-validate)
  - [Using a validation library / setting the "valid" state directly](#Using-a-validation-library--setting-the-valid-state-directly)
  - [Character counter](#Character-counter)
  - [Reading and setting the value](#Reading-and-setting-the-value)
  - [Programmatically setting focus and value](#Programmatically-setting-focus-and-value)
- [Appearance](#Appearance)
  - [Styling](#Styling)
    - [Themed component](#Themed-component)
    - [CSS](#CSS)
    - [Style](#Style)
  - [Dark or light tone](#Dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Text Field options](../textfield.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRgBYAOWgXRIDMBLJGGqCiYAtsjQA6ABYAXEfGLooMxMtQgAPPB5QA1gAIp5RFwC8AHRCyZuFAHo7mcjKkBXcmCRjYEgOY8XVwAjCR4IRxg8GRg7bAQATxdVRDtEAA9RbH47Li8YCTBIy31jeAtSGXj+KUREGUsAPnMoDTJyHmwZfRgPcutbBydAjy9VfP9AkLCIqJi4+ESaqBSYGUwofEx4aBT5xeSAWmNMMBlYhKTlo8QTmQPV9c3t5YkAKxhGjTs2jpkmlp+nW6vUs-Rg9kczjcI0Q3nGATcU3CmEidTmFyWKzWGy2O3OC0uiAOhXRBMxxMi92xTx2bw+IAaX0Bf2azQ0+B4ADd9Dx8OVKBB6gyvhzOQ1FHgkKcwrB1AwULQQABfIhCUTiEB0xSQZSqGTqHWrfTAfQAFXSMgAYjxEPB8ER9AAlTA8PD4ABCrhkMmg+iV+lM+j2hIA3KyoIaugBlOoANS2rkQAf0AAoAJQBhrG5r6fSR-TUTkJxAOqLx+CJ9jJx03U4SVx4KNrFQpyyWNNhqC5-NRACSUGwXqbmBUNa41drMnreDH6c7ueMMncXdbXdz+g0-3X6405rSVptdpz2-XNXg2HKpvi2CTcDE+hU+4dEHIQeMkX0AEEACLfp2fgA5b8AHkAFkHwgHlYEQZx9EwPMpCcW4YLfCBfHIUQRBHHgwC2eI2zXE99GgABhRCoF8RBTGAZYAHdhxUTNs0IojujjYsUzohjEAkIsK0QDtj1YtiZH7QcZG4scCncYxlGTLjmx4vsByHRT51YpUlSE9c7C3E92S5PMsEiAD1XKG8DiCL0fSgI4IFoxptO3DRnVdAhPW9aAnJPLAgltcpP3wfASkeCARAI4Tc0QTk9RgajgG8ojSO0MBdBQVMM1MLNlPEySTGk8hZJkFMEpYyL9D4xN0sqpMAGp9CbdoKIkLhKBEMinBIiB8EQFMAE4AHZ9Hq0CRykFrthfFNRpcCQMI2ML030AAqfQACYADY0zTIhEtYrgIDABt0pkchEz27clTTC6-S0sqdL0oiXJdN0PJsm7fP8ywSKQJwIsi6LYvim7c2SnC0oypictUkdECko7Cr1EqQfXGr0rbYgUdzA6jvBB8zsQFGrpuzS9t0vaNGwbpKiQeL9Cw8h-CgU0IGwdGQDW2hsDSYpNIaYAAANyyq-QABJgBqpUBaVL5sEenc7FFeWvj0wSoDu5p80-bAqcDJasv0Y8DLFbTjaMlEYFMsR+Xs-QoEFQmGW8jR4KMEw+m9AZIWGTxYTGPwEWCUJwmDckepECAYmOU47AAYjsR8ZF4W18GKNZGbqcoAH0giwPRGhjJMtjgdKAAUMWSfQDtfGtbn0A4zQtfRrRT-Rw4gL5MGVxWuWV0VzZMszLEoBynfus3PAtq2qMsGQAiQRoABlMD8+ARV753+8nwfrcsSARDiZZlEc+7c13C0W7tfRPrKSxl9X4pyfHnuTZY9fX+crfjMtoeQBHk+npfynr-OeMgF4MktNsbCFFr4r1tO-eWZ8gE7xnugA+Oxj5j2Euffcl9go33KPfW0xRcgQGgb4Ih8B9BPyei-buStTbIJ-rvP+9kAH6SYdPcooDwENAABK2iponBBm9DLb2Yag-eh89TsKenuA8KcPpwNviAAAmhAdw+hp7-WEmeC8lgACiupXxJDtuqOCMB9C0XaN6VQxEuymIoAQAIeYnCpxAGTRBG46Gmx8W-Thv9-5YI4WI7+XDZ7z0dg0UCrh4Bz2vjoRAIjx4BJYVIjBQovFn3kXgpRq9yiQLIXPGBN8oL01iXPA42hlhQXEjo-aUDikUOUTdEQFSeCL0STdEecVgBrTusJGh+k-HORGTuVJqCgleInmEkBkTGg1gAI6uB4MYYKNVkmANCcAtJYVpGYKyRuHJh5U6n3XAQyw6jNHCDEPUoipDyGUJuno8oRiVAmJqGY+8KIrE2JUF2X0ji1kuNwuQdx3TEDLNWQQTxzsxln3hRuCZNtR7TORREsBUSSINh9CICqWxeTYWgJskJ3JxHhLQfszJFNjmKLObmHqXBMAVOFqgleJE7knj4oSlQ1EapMRRvygAhKYQMNUJA+kXvZGCJEUS9WuvSk8AB+VMpVypEW5fgdKTL4B4F2oqoiMFKDkHZsBKACx9ANiTNsWiMFcJ4AQkhU4MF8icuEsTA1650pQFifAAZkVNWw0-BJdO9QzlDNGQwt+iKZk7MmWw4Jn9tkoO4fMhkXVXDGJJUmslszdnoKPtSs5OCFFHkVRckA35EDMhlG69cDymlPMVYy5lcTWWEJfLCHkuBXB4vwAgF83QXHqhkLtDxirICZvedRAAzLQf1wkjUvnKFcwwmAYr6HSGAWoPVgqmKwmkHgbS8U+pEH5V8EBxxgEQhhZ15BXXjsGdMmNMb0WsNRaI3NcbU2YsaN+V0K8kD4GzeM5NEjyjpMLbI-StKy3lQrU8x9kUOQwEAzC8Nz6o2Ro3v4sDFKpmfoHuBjFvCYxdH5Y8Kuh0GwgaQXh3+kGZGJv0mR1l1DMM4ewx-UDX6U3D1thZTY5BdAHBslEwj5K5m-ogY0nQvhYGr1TEJgwYm0y0aRfR-NVLoPOVg-g5RhCWkgCrrJiilD2NwqwwrKzdHePEffUGIkynRM7B0xpuzFKeFRP-ah3OBAlNOBUzsNTiLbNEYpYxg5NKL4nLyV9EAiGboobQ6cp9lnOPWYy8k5otdTggVAnNVQPVyCrjPtrKmul9UMuo94KclEZAGNGMod08Rez4FbKwwU7Zmgdm1HsvgMF1BBGURKW0iBpTQAEGgNaA0UAAFYGDKlVCAG5GoCiRD67qNQaBlScBANU3QU3qBqjEOoaOU4eoxW2NgWrWoSDuAUGgMEEJM3YF0L4AoYU7DnbsL2-A33JwSEu7aVmt33iKEqDedQzIlsnY1Odg4-aRBA8BtdsHAh7vkEe1YT24IHCvfe59kQAPbiI6+39knpwyfI+B2jvUd2QCQ41DDpU7AlRAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { TextField } from "polythene-react"

<TextField label="Name" />
~~~

This creates a text input field with a hint label that disappears when text is entered (functionally equal to a placeholder). 

Other types of input fields can be created using option `type` (for instance "number", "email" and so on).

To create a floating hint label that moves up when the field gets focus:

~~~jsx
<TextField label="Name" floatingLabel />
~~~

A more compact field with floating hint label:

~~~jsx
<TextField
  label="Name"
  floatingLabel
  dense
/>
~~~

Full-width field, compact field and with floating hint label:

~~~jsx
<TextField
  label="Name"
  floatingLabel
  dense
  fullWidth
/>
~~~

Create a multi-line field (textarea) with `multiLine`:

~~~jsx
<TextField
  label="Name"
  multiLine
  rows={4}
/>
~~~


<a id="help-texts"></a>
### Help texts

Pass `help` to create a help text below the field:

~~~jsx
<TextField
  label="Your Name"
  help="Enter the name as written on the credit card"
/>
~~~


To show the help text only on focus, use `focusHelp`:

~~~jsx
<TextField
  label="Your Name"
  help="Enter the name as written on the credit card"
  focusHelp
/>
~~~


A help text also function as error message when the field input is invalid.


<a id="front-end-validation"></a>
### Front-end validation

Passing `required` adds a mark `*` to the label, and uses HTML5 field validation to test for a non-empty value:

~~~jsx
<TextField
  label="Your Name"
  required
  floatingLabel
  help="Enter the name as written on the credit card"
/>
~~~


When left empty, the field will show an error status.

Other supported validation checks:

* `minLength`
* `maxLength`
* `min`
* `max`
* `pattern`

<a id="when-to-validate"></a>
#### When to validate

By default the component will validate only when a user action has been done (triggered by "onBlur"). This to make sure that required fields don't scream INVALID at initial page load.

Variations:

* To do validate immediately, use option `validateAtStart`
* Use option `valid` to bypass defaults - see "Custom validation" below
* To validate on key press before "onBlur", use option `validateOnInput`
* To reset all error messages when the field is cleared, use option `validateResetOnClear`


<a id="custom-validation"></a>
### Custom validation

There are 2 ways to validate a field:

1. By checking the field value with callback function `validate` - use this when you want to simply check the validity on input (but note that it does not get triggered on form submit)
2. By setting the "valid" state directly - use this when you need to validate the entire form, so you keep the value in local state

<a id="checking-the-field-value-with-callback-function-validate"></a>
#### Checking the field value with callback function "validate"

Option `validate` is a function that receives the current field value and is called on every `onInput`. Return an object with attributes `valid` (Boolean) and `error` (message string):


~~~jsx
<TextField
  validate={value => {
    if (value !== value.toLowerCase()) {
      return {
        valid: false,
        error: "Only use lowercase characters."
      }
    }
  }}
/>
~~~

<a id="using-a-validation-library--setting-the-valid-state-directly"></a>
### Using a validation library / setting the "valid" state directly

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arV6hR3r8wB0xGZAVZ7FBsOp3FkIHxDgB3RDkFgQch8Z6vJnNT4M-BsABumjY+EKlAglSpLyVyqq0jwSH2AVgigArChaCAAL5EHj8QQgCnSSCyeRiRQWABUmnd800wE0ADFJXwiKG2Ih4PhIwA1FbqzBiM0AUXIlHImltmn0mmMEVF4vDxgA3JofRZagGWsGACqJMQh6OxyMAJUwbDw+AAQvZ2dAc3nNBtsWX6VBa5p62mAMr1gD6AFU52n24uAHIAQQAsmmR8Zt72AMLlmvQQO7gCSm8XAAVt3O5wB1ADy7YAIouADJpzcAOL1gAEiOADME5TpeLTru2H6Lvuz7bgBaaLu2aYAIrLte6GfoeID1iI3aaOwMb4GqMB5IgACO9hsLo+BCOeUA1lgwSaHOYiNFA7gtmRmhNvI+CUXxsZBrUmiaHwEBKiwkQABSzMKibwAAlOJUCSZJbAsJo8kAIRKSp6m6GIjiacYzFaVRZnkJpRkrJBkm2rULksVObGUcueB2U6onkYJSyUZx3G8a25HABJmjKkmyxyPJMXwPYiDqZFmlaTpen6YlyXqXYlDCpoSmaCpyaptAGZZvJsHwYhc7Iah6FYThaafqpTkZbpCUrMleb6Pms4Liua4bju+6pVF1n5RAhXFaVcXppmkrycYhHEfYPm8AImgrLs+CRAJCTdqEQiaPeSBwog-oiBAEB4DtmiySwYqepoG1iltiBMSA7WTTmUVuW5rFwpR94g8Kkr4P5h1yEFHFcWoYX8WlkmJWViDdUlKUadZmUGTl2PTbNiCFfNKaLVVNUbnVDVoZh2G4b96XaV1BNCEgPF2JoSiaDed6Ps+75fr+-5AcBE3M1pRNFSTJWxeTFVLeQ8kAAYAJoQI4o7g5DUkbS0PhXSmmgXYGAAkwB8w+T6vh+35-oBIG5mAIg2OcYqUbc-Iq0z1luc5rmTs4IOaCe0DsFKYPBBD5BQ+FMNCcFCM8dDKPRfL8UE5GKzwCpyUwBLuNddlPWEzoM0y6TGcU8tVMIfO9UoXTzWMx1LN6QTmj6f1O3wLnpcwNQdjdgKUDsPypGxowhfWZo0tzdXitVatRGUfgECIDAADkLR8CmLuaJEmvZhHgbYDrsffb7Wn+-9UBA1BsAtC7iBgOo3lituMUcJgPgcF4B18yY2SpGSe+B1L6CqDjNUrNS5dx7pZEAmgABkyD05Yz6gNecS5Vzri3HuNMM9JJgKECESqy0V7rU2k6Xue0DqJGOpkM6psrou1uvdTAj0dLPV0LIN61CBBXw6rmGM9007EPCqQio5DlbcnwHoNQBBr6A0gsDdic42DuCgPYbAYYpQJzhnovg0DazkHsPsZaRDWg6LFPJa+klh6ZHer5ba+YP4uMQP5IQSk7FtznqvIQ59o663zFHGAMc45kW8STXxf1HGjwjnwMJESRxhzHvRJJF9ImxmicKeSwYwEoALCAIJ4TIa5FtMogs98g6eVDOGbCBjhKaHbGcfYQgw58AiLMPhaUoqmPMWISx0DJIwBscrex-poKPRTJw-M4itLOM+kUxBRA-qSVKRElZIBjBrMlpJd0iTkmQ22ZZSWto-HxIlPo-MGitE6KMbk-J6zNDQBPK7HiiAilxTmVAhZU0AkhE4imDGwYfnfNmTmSZzk9mz1eVAGRRSxRZjzH8l5DjAUVGBfFYMyLJRIqVlCvxMKXngpmQsP6lTLmAt8HwLwchyL5hYCsPA1KR5jJ8HS5sXYkCMpIiyxAFYrDwqmK0G6hU8XkEopgFgchsyu2VIjaxnL6UEAeqfFoqYBAA0nKM2lXh5LYwWV9bAuhlSek-HoTA9h4BiFiZLPGVzwz+BgPNOxVjJLCrnEJfxlB7DuBEJobc95rxCDDS8+JHKuUMpHFxZKfiRHwDERGmlKruUcDVfmONgrKU6vcpJXh8iJkjKmU-IM-CPpOkjJsyGkZDkZOObHYcWaAnXL4H46ckrKItpHm2jw0ilb2ustONtI4Vr7O5m29F8K5z6rEPoYAka51CD-kseSjjVK3zhVACAZM5DTutUMzpKQKiIEKBAFgLAzlws+HCySSgRBgSqHczSOiXiPtvXepQjYEjNnCtOySn1ChLKdNeu9xDVjkx4j+X+MYAPoOSgukDgj3AVE-LMuxW672IHNbIGAC7-l3ugNeHkA4kWor0vB6yyGvohHQwsQ1QgFjkFQ2IIQBNVKwvA7PJdaaQw8rVaggSTGbCsfY6Xdm8h3BcyEy-N+7iv48t-v-YojHmNiazhWjxqkqOaB0xOv2WG4W6FovRAg8G0YamAPpLtQgaNGdnpKhdtn7PwawIbAoxgNZa0+mB8DZR4DYAXSrD+mgt4W0Gjgka+D9y2i3nPCAc9N4tBo9dV+6gVYOc9Z+uF36mz+Xg0BwsWS-N3vSBAKD7gYMeYs6XBdNbL6sfo5gTD8GcOenw8AQjcLiOkbEORyBlGDN3oa4xOjGGvrqYqOJrGnHdMYvZXO-jGbyJCcm6J6bbMObScDUJ0bLq3X6e41pI73HbRZa0iZuiDFauqCszZpWmRRsXckk54Atnntudg55kA3nsyjdK3C4o2Az3FeCbHQHWkLA5dnnl39BXhuAadIUetkcSs7MRyRSDqZoPfdu4h4AqPMng8Yk1jDm62u4dCAR3TvXsBkYEhR8dx3h3hwbVkqRYhmtqY22xjjXGWf+MW3xgTq20HrZY5tiT22ZNoKJ42xi3ZDu6dO+B878GrtmfwLd9UC6HtZkyPLrJL2BJK2c49hJ7OScm-czGQoaTEmH2PtrEnkOpqRBB4UAHGPwPQ+nUoTs3YCD9kHPm7jMZwSekKD4AcQyWI++48D0HpA51u60rbn73qlhp8kkqGAv9eULt41y5bvKUFoP0k6qUB3YrrrMSlC7fuJ0vDbTDyZI7yj4B8HsLQ+YH1Pu81vXQj01j6XfU+vxplzJC8yFG1V2uJ0AH4SKd+72-F5RS23CMDu5ac25sDYDHRAqBUUlD6hh2flU-pPKbmR8YAq1QXmX9VMHYIt+BCFFTGIJA1QjHoLKmaJoMKFCGdDNGKG2nqCqDDvevqNfiDO-snpAF0msLII-sNkoEYo0k3rlhYOfn9JAQaPgbAa-jAAgZqBXDuvulSE-pwjoHoGyByECD0KCM4JHm4EMNCP4IEGOISPItJGELsPsBYAAMQWByC-pgK5BTbzrGCLg+BYAaDVDepGxJoQBFL3hIixAkSSgtJtItBbAzj5bxx8EQAvCYAX64FQGn6WGEHuStLnCfhvi7hCCFq2Kn776H7Q5cbrxgD2CuBsasZpj9CyC9iRDXj4ArQgBag6j6btRuiCjYAZrkCKDd4eZGgR6miXiKAACMAAbLkSgBaAAJx2gOggCfSKBZDBDxEegKBoB2jMAgCqAaBcAoDUCOgCCKCCFsbyLmqrDYD+GugkCOBSBoAAhAjci8j8hIEWDdEWB+H4CzF6FCC9ExgQADGehDEgBJ6KC0ilEdHOjdFbDrx8ArHtb9GDGPDSAjGKDjFcg8h8gChChHEnHzF8CLEvGChnF9HrGXFcAkA7FoB7G2iMC2hAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

An external form validation library (or component/app state) can be used to manage the form state.

* Use `valid` to mark the valid state of the form field
* Use `error` to display an error message

~~~jsx
const errors = this.form.getError()
// ...

<TextField
  name="username"
  required
  valid={!errors.username}
  error={errors.username}
/>
~~~



<a id="character-counter"></a>
### Character counter

Adding `counter` with a value adds a live counter below the field:

~~~jsx
<TextField
  label="Your Name"
  counter={30}
/>
~~~

After 30 characters, the field with show an error status, but the user will be able to type more characters.

To limit the input to 30 characters, add constraint `maxlength`:

~~~jsx
<TextField
  label="Your Name"
  counter={30}
  maxLength={30}
  error="You have exceeded the maximum number of characters."
/>
~~~

<a id="reading-and-setting-the-value"></a>
### Reading and setting the value

See also [Handling state](../../handling-state.md).

To read the input value, use `onChange`:

~~~jsx
<TextField
  onChange={newState => this.setState({ value: newState.value })} 
/>
~~~

To use the received input value, pass `value`:

~~~jsx
<TextField
  onChange={newState => this.setState({ value: newState.value })}
/>
<p>{`Value: ${value}`}</p>
~~~

<a id="programmatically-setting-focus-and-value"></a>
### Programmatically setting focus and value

The `onChange` callback returns the function `setInputState` to set the focus and value of the input element.

~~~jsx
<TextField
  label: "Your name",
  onChange={({ setInputState }) => this.setState({ setInputState })} 
/>,
<Button
  label="Set focus"
  events={{
    onClick={() => this.state.setInputState({ focus: true })}
  }}
/>
<Button
  label="Clear"
  events={{
    onClick={() => this.state.setInputState({ focus: true, value: "" })}
  }}
/>
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

<TextField className="themed-textfield" />
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

~~~jsx
<TextField
  style={{
    background: "#2196F3"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


