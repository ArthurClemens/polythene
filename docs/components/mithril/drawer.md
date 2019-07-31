[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Invoking a Drawer](#invoking-a-drawer)
  - [Types of drawer](#types-of-drawer)
    - [Standard drawer](#standard-drawer)
    - [Modal drawer](#modal-drawer)
    - [Bottom drawer](#bottom-drawer)
    - [Other options](#other-options)
  - [Responsive drawer](#responsive-drawer)
- [Appearance](#appearance)
  - [Navigation style](#navigation-style)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Drawer options](../drawer.md)

<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQCYCsB2AXQxADMBLOAUzGRVADsBDAW0uRADoALAF2cWIQY9HpRHsAPHDL0A1gAIuUSiQC8AHRC8eABzBIA9AcZQeXAK5QIVVvTAcA5mTPmARhzIxjYMJR5gDHXgATzMxSgNKAA8WHSoAkht7CB9NeWU4DXAeYPiuSj9NAD51elKJSCgyHR55MCss7T1DY1MLKxsxeycXd09vX39AkLD6CLAeRnoAE0Y4YQiguFD8sYBaZmclCmHl0coNraq4NYmp2fmxjgArMGKJA0rqnhKy+groZ7qGzSb9IxMLg6lFs3S2bg8XkYPj8ASWK3Cj0mMzmC12CPWKThI1WByxp2RFwWNzuICKDyeNVe5WmZAAbvIyNMsrAYDx7gZaXSiiBiL4qBAeJ47Ow0Eg0GsAGxILAARhAAF8MAwWGwkJxbryQEIRGIeOwdRN5MB5AAhcw8HjCDDyAAiUEYAHdKFAbQAZMgTd2engAFQolBtAEkdcGdebLdb5L6YPBXCZ5Ar5Kp5PD9gBuUqlIzyADKvoAggAlX3yAByBYAakGAOIF31BgDyZfkbqD+az9ENtTIhuTxtK8nk0wdJH8SHkmgqdIc8ii-DsGnUv0tOhajo3HEdAGYODAoA4DFg0CfHjPl2lHUyzEvNFgACwXkCKShkBy8W8gB9P+R0siUR1TRgKJPzQeQwIfeRv2XMkJB0RgzGHT8AFk5Q4ABOdD5AADggCUODwLA1g4bc8DWWUSJwYj0PvciCLdWUsHkWUoIwnB5ElEiAGEsBI7COI4SV2KYvAOCwfimOwulZTQPDmI4CisKY5SuFlSUIAoliIOoqC1iwE4ODQWVyLQAAvZDGOY7c3V3PB73kUTsPsyztzgbCxMleR7w4JyGKY2Vt1Mp8DHJM8HBKXlB0ZehXGAicpzAGc5wXMBPyaddNx3PcDyPE80DCn8r2mG8n2gtJ8jfD9SsfGDf3-QDgNA8CoPssrYPgxDmSfCysO3AAJbzMIgOjZS0uj0Pc7D0PGiSbOY9C5M0nyJPkzCoL62UFs05qiIw3SsErHA8JG4yML086sFM5gwMYrg1nvRbBMlOjt3Y7c1m3eRtzAD6Xto97+sG9DDo29DpLM4LQsS8LNAwKKzigeKQGnWd5zgRcn3SowN0dLdd33Q9j1PaHCuvLhPzal9Kp4CmarSP8AKAkCnzAiDWrp9qEK4JDuss2VRKwPAGPc2UJNlE4KMlWjRLQaysCY9CxPvE5RM24jJVlPyoPkRXNpwwTPoVpW4BwDh7087y8Gs03sOU2UgpgkKKRnCK4foIdfBmJGUeS9HUsx1cMtxrKCdy4nz1qoqSpgymKvfGnqp-BmGuZmDWZalqn3JDrua6mDUMMli5TdLBPss3ijK+7WZLgWVhPI4SHc0J2woi0oFUzN5u3kJg-wcBDhQ9I0U17oNRGYLjpAgBRVCKeRmAACiHngbWAKKhXiCcUCi9QeDX92h0PoUeCoJGgxi4DYaiw-GR1Cde2EewZFiqI3ZvpVr4HA+b+P0-JxAXMkwoDKGmFfb+h8H70HvoaDgCM36Hw-uA-eN8hy-0oEjXMep56MAoGAlBt9hDQMfrAsQ0x4FDkQTfZBKC0FI3tIwMcpJyEQLvgQuwHARwMP8MwhUUUCAcGYIwHQC8F4mjQTaSBiYACUyY547z4EvH0-oqCr0-qg5wKi1HyBILAEQE5F4hijNQ-B0MJwmh1KIPR88OA8CgOYCYC9IEyN4eAihUjmFDi4DAOkLpGCuD-rY8wgYtG9zfAPQh8hAmBnkDmCQKYrTyGgJQBClB5CMB7owPu4T3YTFyJQLRlAfEiH0F-fBQ5hDWF7LICco9x6TyqVolx78pFRRafQBUUjO7ZgMPIAAomWW05Yqy1nrE2FsbYOxvBzPmYspYKzVjrA2Zs8gADqQZfR9WjI2RsbpTTFk7N3SByExDmFzJWGs-YEpJSjuTROtU45VRjhzOqjNGosx2uzLOcEuY83zmXbCqkpJ6T6tuOkl1rprBwICukwLQXgolHgMFgLKyShBU3EALdoYRS6V2R+PY9DmGYJc5GOgihun3CCRkBKiXTHgPuOozg0msBXokx+lBBR+EsGk2kOhPS9hkLOSg0gWW+GmMOGA8hXz2OYDAMV48ghQGihAJkTJzAiHkBaeQcA-EUslbUWl8xlDYIcEwNJ0gACO5hGAcHkAAVVqGIMgRLGBis2PQJ1v5HUsBtJaz0PcYATDsWK6ILplWTCFMIDVCAWBCC1TqqoYAe58o1bUOYZBfU6ElVESV6ShDMBlbS1ldhKCWoQja205g-WMAtKksgdijUGvpTIdIlAdDKFWNMF0jLm10ngOYGoKTPXCslTCRJFA4CEvFYa1JlBzDaPME4BCPdzDRtTCYMgCFLA2t6VECArbRBcrADIWoMAIAQEYOystDxSWaE7t3S4DhfTRFqCmZgNi7EOOqGASdABqKl37mCdIOXi8smSwkRvdimfeu9hAyGcBOOk9BZWpNnqUycPBEPIdgeGygsCvGOn7CQOYvgoqIN3snCcoi6g4ZtAhWxiaOmyLQ7vbutSQT1Onv2BeMjUNnFEHhmABGUxEbgL4TuN9u5WjjCYIsgn+zb1cfPBehj6ARitPQDxh9jFlMgWYuoM49MWL1Po999ieCOJ1Mc+gpzznOMTJpm+hS9QlO02U+QFSp7VPkNxpjfHcNgHw-2AAhH5gTjotHv0nIpihWj3FaMXpoLkeCynmO1T4MsqokY6AOFJuA8YoAAH0CtoLSJQspmh-Qn3ySAWLzCCDifQ8oHglh3YJZAElyK4Dd6ufQ7kv+PWhwwZ8VARIgmkZcCZJ2soNXouJk-rvMrg2eAKfwbvReMZpOugi1p7bN9YpQE7YjSJdj8mzYoQ5o+sY8sycE9tuLs22sdYu0OAbKC+voLQ25m+QQj0QaRhkAePjktfcPt4l0o3HTjcm2IYHX3FtlPh-gx79JYdudeyYnI-XdtlNpGAOIjBghI0SNEVHIOqbxyRq9NAOgoik5B-GaeDhYBqumEjAAxCQTndOvtCENez7cAvNDY-fsL+zouVtk6HIvehzpXTyEbK4a47KeAcGhEek1C9RdUMR2TujUAwDPZS1rlBRmrGhP7hB5eC82MT08-dyXJj8MTlCwFwThu3O0mmH1JkH2fO8Zw2FwjxHTsO4QcbqR9uHfI7pNztHxub7vbMfHlBYORvzEh--Cb0wpux7J8TqIuZthyAnJgZPN9881lgBn0vZ2yc3KRjJNAABSXPbmmmh7F7XpHmv2so86x3nbXevuJ8+wPw+8Fs8CqRseGnQuh9t7L53sfWrhCPufcntpofN9k4INj7fS3d776HAQbfLiXHdL6QMoZCzRnLLWRsrZOy9lFmA3YWoBYdA6Bly6LjPG57UO7j837GMVdwzxExIwPg7h3gPiaxa1Hwo28xND1wYz-1HyHFY0yTHnY081-18wD1AKD1E0oAaxvlgKgHdgl27zUyMWx21VcCFQwXw1zwdE9EoFZ2OyCUNyc2KSTyHw8yqUo1QJd0C3iRO2x3b3wQ6Qu2lwdFlxtAVyV0FFVx8DfHoE11r2AB1xvmQMN3R0PlNx4BqTAwt0Hh9Gt0wLqTt3dzqCd2oxSTC2sM92907UELwPsIIOE2DxiR6TAGCC7DsNEHkCvEQjzSCDGBEHELuyP2PxILm0gM7igK7hAw-0zSgyigQL9znkoKU00A4Crw4CQ1EFhnkGyKlx70YGKNeyUBUHG1XH+FaCBGsBBC6EcHBD6C8DTFxDWE7RlQCE2DMGOAMDZ05FkJdG5yAQcD8CRgK38SmFkDn0kJtE0EwVSWIxgAnAAAUcRwhtF6VkIjgKB5A1g7RRjFUeiYBNAj8T9mE2s8jbteQSj4se8bENFqsliQANiXRBFwj9VTjLjNNbjQiFgIj+8ykZCnQXRVFZtd5ssoBvjjMODgla8AsXVBNbR90uAJxZRDcDCjCslLczDI9JDoj5AriiScjOAq9ijSiKSXiqtijNAUjhw-iQBySyjcigSfjudF4Ujv85dXtd5yAog2CJwolDcGdZARwYA1xETDcUTaVHR0SahMTmJtsOlYtP5rjP5biqSHiaTbiSsHjNANj7Fc4WS2TaTOS9RuSF4Mt8ThQoS3MYTTTRSTtxT9xDtXTOC1SSSySbjnjdSbR9TnjDT3j9j3VmSISoB-iniOSYBmAwjrTQTu87TwMHS0DD5nSAsvSkT6cPSXQczDc3UyBCyfSNTwEtSD5d92kcU30ZU1VzNaUIBCU9RHA-BelOgRBTRgggxpge9WR2RWSbQUigN6AtR+RldhQaB1RNptwZR7xFRlQQAmBWB2AOAsQtQDD2BFQiAQBpA5Bpy6BlzVR2B+jtg4AAABMYKIfUYgSwRAdUP4FoNVHQWQBwdc+MgwM844C8iuQyNYKwQSL8g4uAARGQEkLUHIbLdgSkfUBUAgBUIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

```javascript
import m from "mithril"
import { Drawer, List } from "polythene-mithril"

const navigationList = m(List, {
  tiles: [] // see Try Out example
})

m(Drawer, {
  content: navigationList,
  permanent: true
})
```


<a id="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

```javascript
import m from "mithril"
import { Drawer, List, ListTile, Button } from "polythene-mithril"

const navigationList = navItemClick =>
  m(List, {
    tiles: [] // see Try Out example
  })

const AppDrawer = {
  oninit: vnode => {
    vnode.state.show = false
  },
  view: ({ state }) => {
    const navItemClick = () => state.show = false
    return [
      // For simplicity use a regular button to show the drawer
      // usually this would be the app bar's menu button
      m(Button, {
        raised: true,
        label: "Show",
        events: {
          onclick: () => state.show = true
        }
      }),
      m(Drawer, {
        content: navigationList(navItemClick),
        fixed: true, // global drawer on top of everything
        backdrop: true,
        show: state.show,
        didHide: () => state.show = false // sync state with component
      })
    ]
  }
}
```


<a id="types-of-drawer"></a>
### Types of drawer

The Material Design specification (version 2) describes 3 types of navigation drawer:

* Standard drawer
* Modal drawer
* Bottom drawer

The Polythene Drawer component offers the possibility to deviate from this, for example by combining options to create different drawers - for example a sliding drawer with a backdrop but no modal behavior.

<a id="standard-drawer"></a>
#### Standard drawer

Presented on the same plane as the content.
Can be permanently visible or dismissible. To be used on tablet and desktop only; use a modal drawer on mobile.

How to create this:

* Use option `permanent: true` to keep the drawer on the page; by default this creates a side menu with a height of 100%
* Use option `push: true` to make the drawer push the content next to it; structurally the drawer must be placed next to the content - for example in a flex container
* Optionally use:
  * `border: true` - to demarcate the drawer from the content
  * `mini: true` - instead of `push`, that will show a small part of the drawer (a strip of icons), and reveals the full menu when expanding (MD1); this assumes you have a navigation list with icons as "front"
  * `floating: true` - to display the drawer as a "floating" block (instead of full height) (MD1)

<a id="modal-drawer"></a>
#### Modal drawer

Presented floating on top of most of the UI. An overlay blocks interaction with the content below.

How to create this:

* Use option `cover: true`
* Use `modal: true` to prevent clicking on the background (technically: the touch layer, which does not have a color)
* Optionally use:
  * `fixed: true` - to show the drawer on top of all other content (except for dialogs and notifications); the drawer can be created at a deeper level than the root component by giving it a CSS style `position:fixed`
  * `backdrop: true` - to show a tinted backdrop
  * `shadowDepth` - a number between 0 and 5 to set the shadow depth; 1 is a good default value

<a id="bottom-drawer"></a>
#### Bottom drawer

Not implemented

#### Other options

* `anchor: "end"` - places the drawer at the right/opposite side


<a id="responsive-drawer"></a>
### Responsive drawer

Changing drawer type based on screen size

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAZhAgM7IDaoAdgIZiJIgYAWALmLCAQMYD21NvEHIQAHlI8AThAAObAASkpPALwAdEOzazSSAPT6ptAO4BzCGwz8w+gIJS2LAK5SAwggbVS+2X1gAnk7C8PrU8AAebL60PADWtGbwPn6BweEAtJBOMrD6UBCk0alBLCFZliy5GUW01FC0sALwGABWpJoAfGL6kjLynerUEtJyispqmtq6BkamFlY29o4u7p7CKf6lIWGRxbEJSZtpZZk8pD4FRb5b6fAZ56Q1bHUNTeFtHSDdvaMDQ0NuCBSPAEDw2BABOQmFgkAA2AAMIAAvngaPRGMx2kD+IJhGxRIYIGA-I4FMAFAARYwmeBSPAKABCzjYbAEDIAkriGQAZQpsXn8gAqJHgCmRCkIUj4YAUmhKdwqORImiGuKK5KpNLpDOZrPZCi5Br5RUFRRFCHFClUCgVp3gAG4hsTSYo6AA3CBmWgQgQmxRSmVy5hhWie72+6gZWD8zRO6hqqHjNhSeD0a0KMAYIqp+jx9WKOSkZyym2aMSyTo8vip2VFksKKD+GtKSwKDEChTq+Dg+BsVztgqyQoQHgQahmBSgywMkFQRt8KcQZykMB8edCEkt8djgpQZyCBQshSwWgAIxrYr7C6aqcziTo7ZjAEdnLQMAoAKqKYTEweZ8c-3dX96AZV9CgUag+BzZx50iOkxxeSMj1gU8wH4E9zxrCDqBHI9FEaCBwNkKcIinWguxlNcm0o7x4FfH0P0pZwINoFkxQgKRXDFJtbwUccFFTWRU1OKA6TbAT3X8Zx5B9MVgJjH8LjFMdUIbXjLynZxJWcCwfUg5xUIo2RaBkH1XA-ABRCIeHgeR4AHUhx0UPgeB4Wge0YnpKzjRNvEUd4zCFPYMyzFMVzYAAKetZQAan43QG3imKAEp4z8jU7FkEibWAIYFAUARALYJAFHdKCxOtTpyXygraI1UgWD4ExqVMOkMxzNMwEiwhGhBNLaoKgB5M9Wh7KxaAuL1qEi8r1xaWohAZPLqDqurGua1raXpQbxQG1bxTwWrPXgExSsiilFrFZEUqqmqDoKgslCalrtSkDqkIWl6trpSL9rW1N+ykVbus0DATKSTQGV2grQeYKA3oeAQhEEDITGMbK6ShhQKBhurup++l7rWkmu1PC4ADkMVKzRV0aWAamkeBhCR4CpAyBG2vehgChLRnUxZyBcI5t7MKkJJ+eZqNCCaH1xzMEWuahvG1tkOkwDqfFSvC+Ajoe0nnua0qNterm9YNurcRRkrILDL05b9fkLpVkmWFeBAPFHOJztu1Rqqu7Nvrenq+vgFKXYKm7zYtxtoAACWgeAfbugOTcJkPYH6hRDCUAJqB4JRPoUExKkordwkEF2o5duHrGR-Fsdx-XSe6vU2WoZaI7q4xCngKBta43Wu4K6AaeBF7Fe2jIzxZdvlebg3TzPUEx4AZRe+eY7q+BgMEPRia3uqBB4GN4mTv3C7kwPNuDnXw4X0nUWH2PSHPBB+8N03tq76uH-xyKphYGxpoEUbAECaBStHC2cMCjumxoFYKUR74WwALrIJJmg3a-1xRDGROlagWY1wHiik2HgJZ8QYAvFAAIDIsqyH2oCXgMphwICkKIM855QRAhBGCSM0IQAIiQAAJgAKwojRCAOgDBRDBAYJ8HE9cRBMBzi6GsigKSEzcKvVeVpAyynlLce0DwLiqnzkmTUmjtFWhtHaEIWjV74KemeXMcQAAKfBnKrw1qhDMKAAAcCJ8zmOcWmNxHjBCEy8fTDMcIRGBIyooEJtAwnOUJgAWT7suUsCg0AIniQmagljV4YFoDAVebAAgIAAQdMGdNUKSxZvwNmk8sbcFqitNaTS6QD2cEPfWHD4gIz4LIHpfS1oXikGJKQpVeqZzGYddpu0eYQFoAARV6VIAIpUAAGAABZZFFomvAUJFDWEQ0bQCcKVAAJMAJJKSIlvSiahZEsgIgpW2bVZEQx9pFJKWUipVTapg2WXzPoUsKjC05t-NpB0On40AqMqBCgJlTKRV86O8LYaZLWRsrZCg9kHKfLAds9QTlCwuVAK5Chbn3Pcakp53iSXxSwK895pL5ynNoOckuVKWA3LuS4+ljyuYZN5mANlHyvk-PjH80pUBymVPgNUgqYNTzi3uOClmMs+BywnC0qQm8D4FTVlIDWFcbY62RTqvVZh0X6wAF6lSwMi1FdIAD6xheb7xQBixZ+sDnrLpPiwlOLiUcvJeOSl1LaVCvCWwdJmSkoKFZW8qVB1vnUH2tw0E41ITeFEIIhEGQUBFvEeiaRTAPT20jNGfk8imF4iUSAFRW4ySyj0cGbIVQVQgCCf5TURoO4KH9GaNgFproZlseERx5jRxQgzPCzmhA2D73LKQd0k4IicG8BodQUxWQjMMCYE9GATAAGYMA1jMPoIReSES9E3fuzQxdLksD3ZoIRvr90gAUGUL07AP0gC-c+39J0TCMj4BEIDCIFCwa-QoEDP7ugmScI2IDaShFYAwGgNACg-E8GLRgHAQiMgYHPTgDI2Hz0iLI2gFAVHiM8iwEIlNiGcMiIUHCcjbghHkb8VxjAsTEMKBwBgIRAnWN+PdFgBEhGU3YBwyJ1jQiWBYDhDwbDWA4OIbo7poRDMMAIiwFRhEDq0ksZTeenkl6cAoFExgPx9nLPntgH48TcIFAoEcygZjrGsDnodaB-QPwN1mEGLCke1ALwRDHhITdCht2wF3aB6YswT0mDPZe69t772PrMKB19fKgNIZff+swgHQOlbAxAU6kHoOgdg-B+z1WUM+hYOh0DFm8Pnrjt53DPBGNYG08W7DaB3N+LQIx8biGbMprQPJrTjnJMKdw4huOWAFtaZ06RpTpGhEADURGEaGyZnDGR9sXYdWAWDLGWAlsW0JuEjGaMKHPRkc9b2njveowx97vX+toCOxttAMmzPBdC5uiL0dajTODPFrdO7SBAbS8e09F6r3i1y3k-LhXeVOBK9+sr8AANsEJ4V8D9WYM7Za0T74FZ2udZ-RZ-zYmhE4GY+5rAkmsAM2w3CBjYmETWaEaxzAX6GZic22RuEWA-MicwJt-DQnPti-EygWAIiMAoE895nA1mtd+JU1gILP6Qs9DC9D2qIJ6hxbC4lpHKPD3pfR9lrHd6cdhbx2+8nP6-0k4q2TqrdOyq1Yg1B6nzXEN07a2hqAGG+PGcQ3LoRn3LOJ+06rlNCJYBYE46RvPiHTeaHN-liLuD8GRFdI2eAvVDKKAun+928BPbxD2ndFatUnoQktDaRvEIwG634tyfi9RIjt79ksyK-oJ2dwXgPhAyKCqBkEKVbqQ658WzC6VCkVstaZgwOFIo0VcS3UzY-SBeMmpszfknBQVq8bVojPm+1pMd74n3likmx9T7eyb-UD2X-PGc-OqG6fBR6cxagEsUgDMCgLAFBcAwSPsVwEGaffkTfOqa-OkW-V-OqHvZIUqCgFBOufORiWgbKQISKIghkKAsAUgDADWWQSKSKWghkccMSdlC+KgvGL-NadgyIJfPAywBAMeDkaLKDI1UmedagUqaQ+g8cGLQQp+BeXguqfgiIQQgqBfO-TQcpUyVMKASQkmaQ2Q9UbMF4HaBeZQ0mVQqLDgzQ+-YQnQkAVefEe8XtBwkw4fKEbMYQKAJQwQ2w0fewl2bQseVqFdL4Tw3EUwnw5dVdJQ3aNBFKFKBg8gyKfA9BMAivRhYEXNcEfNfhWTYRNActSRDEUQawC4BRJtAkJgcGRIMUeFClfHflN7O9N5eMAqPgNmHVM6P9aAMSagLo20aCSwF-JA08CEYCeMTNDAaFOkJGWotGDGU1A+K4WQU8fFGWSIEY8rdgZ1PJd0FgEY1ow4hEd0EwEYgZOIMwaUA8D+AAYkIARBeJeNmKGBIOtgPhMhgHllKg6IiBGLOWjTaP8QRE6NwSGH2TDVOSjTOJyTyTTQPnBnuAWPei-w1nFnHABIhKBOlQOkeJNgNWnlngEGNRfk2NoHxSghnQJMzRzV4UKMLSQGLVT1ZJRBQQIBjGoDiGhCoHKMrXAEqFyF2SmOSAJAIFcC4CYGmD0EMAPFkFuLrlsG7VFKWzhH0DVJIAbRAAqTVlED6DGDKKkUxG1IZk6noDFLkiKCBGlNEDlNmEVOVKWHNOeFzDAF2SWwfUtKzGxAIH1MxCNPkE5ORCAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If we want to make a drawer that is optimized for 3 breakpoints, we need to pass it 3 behaviors. For example:

* Small screen: cover
* Medium screen: push or mini
* Large screen: standard or floating

One way to create this drawer is to create 3 separate Drawer instances and only show them at the appropriate breakpoint, either with CSS with show/hide classes or with a conditional in the JavaScript code that toggles with screen size changes.

A simpler approach is to create a theme CSS for each breakpoint using Polythene's theme functions.

If we focus on the small screen first, we pass the theme options `cover` and `backdrop`, alongside a `mediaQuery` option:

```javascript
import { DrawerCSS } from "polythene-css"

const breakPointSmall = 480

DrawerCSS.addStyle(
  ".small-screen-cover-drawer",
  {
    cover: true,
    backdrop: true,
  },
  {
    mediaQuery: `@media all and (max-width: ${breakPointDrawerSmall}px)`
  }
)
```

We do the same for the other breakpoints:

```javascript
const breakPointDrawerSmall = 650
const breakPointDrawerMedium = 900

DrawerCSS.addStyle(
  ".medium-screen-mini-drawer",
  {
    mini: true,
    border: true,
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerSmall + 1}px) and (max-width: ${breakPointDrawerMedium}px)`
  }
)
DrawerCSS.addStyle(
  ".large-screen-floating-drawer",
  {
    permanent: true,
    floating: true,
    shadowDepth: 1,
    border_radius: 4
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerMedium + 1}px)`
  }
)
```

We pass the classnames to the Drawer. And because we need the drawer to be available all the time, we pass `permanent` to the Drawer instance:

```javascript
m(Drawer, {
  className: "small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer",
  permanent: true,
  // ...
})
```

For small and medium screen sizes we still need a button to invoke the drawer.

You can find a full working example at the Try Out button.

<a id="appearance"></a>
## Appearance


<a id="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation: true` to [List Tile](./list-tile.md) elements.



<a id="styling"></a>
### Styling

Below are examples how to change the Drawer appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(".themed-drawer", {
  color_light_background:          "rgba(69, 45, 157, 1)",
  color_light_text:                "#fff",
  color_light_backdrop_background: "rgba(69, 45, 157, .5)"
})

m(Drawer, {
  className: "themed-drawer",
  // ...
})
```

As demonstrated in [responsive drawer](#responsive-drawer) above, some behaviors can be set using a theme (replacing component options):

```javascript
DrawerCSS.addStyle(
  ".themed-mini-drawer",
  {
    mini:         true,
    border:       false,
    shadow_depth: 3,
  }
)
```


<a id="css"></a>
#### CSS

Change CSS using the [Drawer CSS classes](../../../packages/polythene-css-classes/drawer.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/drawer"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Drawer, {
  style: {
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Drawer content and animations are reversed when the Drawer is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

