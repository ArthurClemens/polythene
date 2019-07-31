[Back to Polythene Dialog main page](../dialog.md)

# Dialog component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Calling a Dialog](#calling-a-dialog)
    - [Dialog spawner](#dialog-spawner)
    - [Multiple dialog spawners](#multiple-dialog-spawners)
    - [Multiple dialogs](#multiple-dialogs)
    - [Showing and hiding dialogs](#showing-and-hiding-dialogs)
      - [show](#show)
      - [hide](#hide)
    - [Callbacks](#callbacks)
  - [Drawing a Dialog](#drawing-a-dialog)
    - [Example with a Toolbar as custom header and footer](#example-with-a-toolbar-as-custom-header-and-footer)
    - [Example with modal and backdrop](#example-with-modal-and-backdrop)
    - [Full screen dialog](#full-screen-dialog)
  - [Dynamic content](#dynamic-content)
    - [Passing dialog options as a function](#passing-dialog-options-as-a-function)
    - [Continuously calling Dialog.show](#continuously-calling-dialogshow)
- [Appearance](#appearance)
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

[Dialog options](../dialog.md)



<a id="usage"></a>
## Usage


<a id="calling-a-dialog"></a>
### Calling a Dialog

Other than most other components, `Dialog` is not rendered directly but invoked through function calls `show` and `hide`.

<a id="dialog-spawner"></a>
#### Dialog spawner

Dialogs will be spawned from the component invocation (`<Dialog />`). To show a dialog instance, use `Dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgZloHYBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoNTJyLmwpXRg3UstrOwd-Nw9lXN9-IJCwiKiY+HiqqCSYKUwofEx4aCTZ+cSAWkNMMClouITFg8QjqT3l1fXNxbEAKxh6tRsWtqkGpq-2zrdcy9GC2eyOFxDRCeUZ+FwTUKYcI1GZnBZLFZrDZbU5zc6IPb5VF49GE8K3TEPLYvN4gOoff4-RqNNT4LgAN10XHwpUoEFqdI+bPZdXkeCQxxCsFUACYUABGBh7OXy+UAFhAAF8iAJhKIQDT5JBFMopKpjctdMBdAAlTBcPD4ABCzikUmgRF0LrdHt0AEljd73VBPQHfQARLjY7yegAyDqkcYTABUeIhPcmIAgAg4M1n4DnyKmpEhPQBlABqAHFdJrdMZdDt8QBuRoWjrWyPRgDCZbLtfrjbRiV7ZdbUEaXc23lHYkw+HwZfKSAAFOYxAkRPg9mzo+ZPcBGrpdAEIOR8IhyAB9cjzrjOUHHp-P3QAViIR90kE21803mkV45mA2jeJQzhrCgujmAAxDK8oAJwAGwAGIMPun7fmeV5-gBSgpFIkEvlBIDQRwZHoVAmoAJTjm20CWlwxrdpseCVjWDbNOy3i6AA7tyTilDKaqFFUXD-lIgnCSAujslwiA8U6EApKUtC6KpQm6EJ7zYJgTi6Dy5gALIIboiFiGq8qxvKzBiK+8Fvro8oyo5tC2fZZkWQ5r6meZ8ouW5jnOd51kBR5fkmU5jkML5jk2XZjn2RFcWJdFnlOQAXuYNj0p8XF1OO7adBIZ5SMmqQdA25ixme0JcrgzhCPpCBnp0fi6HqiZfvRiDHDUrjtWy2AOoxWjcYgmidY6TW6Ig94wEIED4LoShCDE5BclAYDcty4EdK6uhYKehgzR0+DNcdQiYN4gjtZoACOziYGIugAKodMoXCNfOuhCFon0yR9wieg9Dq6FAEDLOQzhLakl5bSsUhSrozjwFgQiQAdmBHaDUDDcjHQbFwIPYDNKQzZgXVCAtZ1dbAiAPbpz3hs4oOYK6iBclDx1nT+G1FIg2CGAsF6tB0WgyQgzjtLpHPsuNbWIMiX48PADVNT+HOIM4ugcM4vi6WDKNYI2DhRlIrjPQAoikYAC0o-UwFoHQQGAYCYD1BtgFL3K6Qb4NQI2lDcqanowLtfNe-AOm6CDugQGRI0UxeeBQ4oP0YG1qz-dyM2WodZ4NWI5i0Zt9EdNVUDeGV+GDiuVH1nUuhrgHT6shyvxEcA1DykQMqMEQapEO+iFEMwRAABxEPBRDyvQqoz33ioz4P8qvqwYiXdgK5QGrxiN2oJPaIgsTGMAO9CJqdTADAxWONXUiah82B1FRmqfseQrt5+NHMqXsAdG7Ta40ADy2ggz0UHNQT8ahwEByPifcwgDbbwEKIdcapRuyrGQYURActFAwFPtaaAzFGLaEglOCA3hJDB1rHWbKH4W4wNdMGXQ8DSgwEwHLVBWN0HmDLJwxAOC8GREIXHKAJDgLkKjNOahF5aG6Gyo0VgJdCoUCuEoeMyxUxIEHIjEsHM97QM0aVNM79WHH1PnopAb8W7HisYgSxfhrFmNwaaAhwBDy2KfMQzQkim71z3roChVCJDBzrmYzUNjnzFTlreAISAzFaG0J+bK45jx0X-roAAgtgEmDY64Nygow4UHdW7Ci-FgcIAA5PUvIIA8TBvyQRdIzEfwpgYIwPQ3R9HBIMdw0IRg+DhIEYIoQmykgvAtKIhxjg2GgjYXc05CgrHIN4GopRAJYB0PUMs1RbpwEggABWHIsHWLUbRXGOLoPYQTpGUP0tCCAHxMClI-gsr+Xi26cncEiGANSRB1J4vUVpugvkVN+f8hx5h7E7M+hkDm9j2prBPItWIn8RQgrBT86ptTEEQFWlsRQwKvHPjUHaB0BBYEgufGgko5hgHYGUPpO53hzDUqfK4-BhD2XPh8aQyCBTDEkqIlBKQwSxA33qSuTxIqRWmDdE4xAkE+Fwp0YsyhFFZWytPPgWIyqQASL0BAV0js5Hx2ZdGZaEAKkQ3THHdagtFYwF0JbMs3YsmHMtmy4VsrqI8toeyxRwr0WvNBe8jFnzynYr+bikAlAgUtODVGypMaAXQsVfUZMVQtwWunCGzFyaIWxsgASxYRLE2yrJfaR0VKfVPlpaUBlTL1WspAP6zlIiPH+uPHyvxgrQ2yvleKyVPFpXdqfPK+x+ruznQILmjVxBx3Ph1Xq4ihq44mpoealtVqbV4E9C1R14QXVuo9V6xddbZXRshfqzcBAdwsu9Vql8frL0BrrUGoi+bPnhtDVilNkLAXEq-YWnFaaQAwrpJmbMDh2rOqqPOS8SKlocCzEocg36QMcnBWBqF6BS2mmAyKqtFLnTMOgP6ht9LGUBxbU+rVHb3EyufWIw1AqAkDrlWKllEriqjuYyx0VCGRYCqXS+NQ0GCywaOiLTjgmP5higLAmawimOsd8WQ250ZZEc0ifSRT9I2JX0Yj421bFH42CMx8Az1nAzkagHJ+TEn8yFmLEgOobnEAfEk65xVjnn3eZcw4F+DD5NPhXfqxSurNVhbOU08gkFnMwfIPSHzDhPN1GQmhy8gXksZdy1JlLYnX3PsiYGzjmHW6-rMf+ot4H41EdJaB1NeHIN1ArtxFoGAsY6Lwp1VD8XKtNew9e4t+KYhloFI5kjNb7OUZ4XSkATbaOPrbW+xj3K309vERp9jDdx1Dp4yOsdW2J0Kv0fqjr87uJ8T0hTWJsQDrQG4oipwBsw7FEezxaAAByDo3AOhVEMDFsLEXQUdfvgouooXYsDfQ7Ax8SCQFgPs28U7x4StarKx+ir1Wf0lJq81wD5gGsVvE0T2NbXDKLQ2Mhk8RxtD4EoNgIbZSRsAbGwR8t03yWzZ9BON9VGls0eu-R2VG2u2nd7Zp-tB3uPaeOwJljk7FX6upw8a7YNqj4GdakDII0AHFUYs0mHoPUWJYh+VKHpv5Nw8vAjyCSP4CgIRzbwT1MNiQSkFDdMcv5VAUZ8zr3PvitUX9dj2Vn7xN49JTHtn3yOf1fqY0pQjXW7tMMCYYE3TQR2FeNwBcSAxCLBOFkiErhmIDNgDYKA2A7pqmwBIDgDAbDLIcGsiS5hNmrGSXSXZHMNgHN0MhI2nQ1FMuCTrbk+AkDPL-XHj+FOk8Joq0v1rGa6QVkvIjN2qNHt3GAnOgIqPWeL-Z3VvDJaJuEbJ1+3nlK5uC4W42kXdG1vPol0r2V0u9tCsE4dhXPjE7MLeVZYCoJVK0MTZ8PifAJwfVGUceWgbAFIMXeTbUZkWoTA+VbArAqQMHKBdHcnc-XDUoRlB9aMPYHSRYK8K8NrKAl8WMGoXQWIY1daHAXAVhcGBpFg-qTYN2RGCjQg2PEpN3f-KQL5fzFjLNUGEQVYZ1N7DoHg9aPg3SJGdYFYXiFWE8DmPANOd0DddaFOWJGAT0VYaAWIBaB8OYOODgLqVwPAIuIQqrEQ+g9gegu3cgB3XQAg2LVuZTNhcwCjaSIXZMVwAOaAJ7fgpGIw43WkFTNxURH-LTGRUJORSJa3egj+fwixQI8iYI5-cwKpa1N7HQOIz-dTflZIyhHTeRKPMLVgUPcPKJEVOo5wj5YQ9o+PHDFrIDW-Lo0bcDNrXZBVSuZ1FtU-UFNfUoK-QlKbdlGbB-fnebAIXhYXZtVbdtVTTbQTJI2XU7AAmRRXMTeVTwZwC3BMTI5aNMdxHw3w0VNRGWYxbRRANcEAMsPjW6eAFPLgbgKIiI40JQNOLQdwaGUaToEYPwDkDmcGRGX41Q-46AQEgUKiUQsLB4jRFMNMV4gACRoV0MdkRjlm+LhIEIDgBJvxRMuOPHRMQCeKxPMFxLkQ2C+JhJ+MYnhLJMRIpMuNYGaLEPoXoNSMQHDHGkwFXTEFXkaLfQjxaNxwJ3x06LPwTwv16NX2IJ6PTX0UzVvFgEhPogmNqxILxS5zmLrQWLIyWKfxWMW2W1F3fwYy2Mlx2J20qL2LEOHSAK-y1X93N2ImxPGk2BB3k29zkL1NgEgi9MExHQFWtHGlrA4ybkjPk3wFcA5MIl0FslRPkxWNQ0MHTOPH7SbnGglWXEQDEAgB0nhkewbHoBmngBLPAI3B1JgFzMakqgg2bKwCUAYHwBXFrJlCQJSE9FoDDxAEpKcOfBDN1NJN-0bhXGLLAKLwrKOD8GrMck9AXNLKbLkNbMHGhU7Jlh7L7OHOQM9DUlHLDwnPjKzOfSFJjLrPjMKWALuOPBTNvBnKfEzKpOWmbLDNnLrIbKXMrNXMHHoEuMxzCz5JYwgpFRlKIlaLeXlI6IjVJUnyj2-UaAuWuHDGAUMjEEMDWEvGbg-hyRJgFJbjOi9k8CkB8BqEtmGEUCdFiD9F7JJzQ3MEvJoiNHGzTHIFUBzGtLFHGh6lJL4DQEQJQEQlfC1B1BAEEBEFUDyHCG4pNBUDQC1HYBAE0FKP4Dkr1FUBmRoovDlk2GwGosNBIFcDkDQBBDBHAmwBAjyHxRsEMpsAanwBcsuSMtcVMvMteHkHKEZVUEZBkt1AUrQEMp3HxTEGMvGgrL8r4EsvIGsosBzzstr0cpLU8uuCiqEDcqEA8sirOiEBip8vitNAsog1iCCrQBCs1F5KAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { Dialog } from "polythene-react"

// ...
render() {
  return (<div>
    // ... app content
    <Dialog  />
  </div>)
}
```

The Dialog component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom dialogs from anywhere in the app.

Styling side notes:

* Writing the dialog at the bottom makes for less surprises (instead of using CSS only for positioning); Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than other content.


<a id="multiple-dialog-spawners"></a>
#### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have a dialog instance spawned from a different location.

When you are using multiple spawners, differentiate them with option `spawn`:

```jsx
<Dialog spawn="special" />
```


Calls to show the that particular dialog will then also need to pass the same spawn name:

```javascript
Dialog.show(dialogOptions, { spawn: "special" })
```

<a id="multiple-dialogs"></a>
#### Multiple dialogs

Multiple dialogs can co-exist for the same spawn. Add a unique `id` to each dialog. When using an array of dialogs, differentiate with unique `key`s.

<a id="showing-and-hiding-dialogs"></a>
#### Showing and hiding dialogs

Dialog functions:

```javascript
Dialog.show(options)
Dialog.hide(options)
```

<a id="show"></a>
##### show

Shows a new dialog instance.

`Dialog.show(dialogOptions, spawnOptions) : Promise`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **dialogOptions** | required | Options object or Function that returns an options object | | See [Dialog options](../dialog.md) |

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions.id** | optional | String | "default_dialog" | Dialog instance id; use to differentiate simultaneous dialogs. |
| **spawnOptions.spawn** | optional | String | "default_dialog" | Spawn id. Use with multiple spawn locations. `spawn` must also be passed as option at the spawning Dialog. |


Examples:

```javascript
const dialogOptions = {
  body: "some text"
}

// variations:
Dialog.show(dialogOptions)
Dialog.show(dialogOptions, { id: "confirm" })
Dialog.show(dialogOptions, { spawn: "special" })
Dialog.show(dialogOptions).then(() => console.log("dialog shown"))
```

Calling `show` a second time with the same id will redraw the dialog with new options:

```javascript
Dialog.show(
  { title: "Log in" },
  { id: "login" }
)

// some time later:
Dialog.show(
  { title: "Log in again" },
  { id: "login" }
)
```


<a id="hide"></a>
##### hide

Hides the current dialog instance.

`Dialog.hide(spawnOptions) : Promise`

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions.id** | optional | String | | Dialog instance id; use to differentiate simultaneous dialogs. |
| **spawnOptions.spawn** | optional | String | | Spawn id. Use with multiple spawn locations. `spawn` must also be passed as option at the spawning Dialog. |


Examples:

```javascript
Dialog.hide()
Dialog.hide({ id: "confirm" })
Dialog.hide({ spawn: "special" })
Dialog.hide().then(() => console.log("dialog hidden"))
```

<a id="callbacks"></a>
#### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

```javascript
const dialogOptions = {
  didHide: id => history.push("/")
}
```


<a id="drawing-a-dialog"></a>
### Drawing a Dialog

A dialog pane consist of the elements:

* `header`
* `body`
* `footer`

Variations:

* The `header` can be substibuted with convenience option `title`: this draws the title text according to Material Design specs.
* The `footer` can be substibuted with convenience option `footerButtons`: this accepts an array of buttons and will be drawn  right-aligned according to Material Design specs.
* Use `fullBleed` to remove the padding from the body area
* Use `borders` to conditionally add a top and bottom border to the body


<a id="example-with-a-toolbar-as-custom-header-and-footer"></a>
#### Example with a Toolbar as custom header and footer

A dialog header can contain any content, but using a [Toolbar](../toolbar.md) is convenient to display action buttons (not according to Material Design specs, but nonetheless used in many interfaces).

```jsx
import React from "react"
import { Dialog, Toolbar, ToolbarTitle } from "polythene-react"

const dialogOptions = {
  header: <Toolbar><ToolbarTitle>Title</ToolbarTitle></Toolbar>,
  body: "Body",
  footer: <Toolbar><ToolbarTitle>Footer</ToolbarTitle></Toolbar>,
}

Dialog.show(dialogOptions)
```

<a id="example-with-modal-and-backdrop"></a>
#### Example with modal and backdrop

A modal dialog is a dialog that can only be closed with an explicit choice; clicking the background does not count as a choice.

To make this behavior explicit, a modal dialog often has a tinted backdrop. This also gives focus to the dialog contents.

```jsx
import React from "react"
import { Dialog } from "polythene-react"

const footerButtons = [
  /* Note that we are passing JSX elements in an array, hence the comma separator and keys */
  <Button key="cancel" label="Cancel" events={{ onClick: () => Dialog.hide() }} />,
  <Button key="discard" label="Discard" events={{ onClick: () => Dialog.hide() }} />
]

const dialogOptions = {
  body: "Discard draft?",
  modal: true,
  backdrop: true,
  footerButtons
}

Dialog.show(dialogOptions)
```

<a id="full-screen-dialog"></a>
#### Full screen dialog

A full screen dialog uses [Toolbar](../toolbar.md) to implement its own header (options `title` and `footer` are not used):

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgZloHYBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoNTJyLmwpXRg3UstrOwd-Nw9lXN9-IJCwiKiY+HiqqCSYKUwofEx4aCTZ+cSAWkNMMClouITFg8QjqT3l1fXNxbEAKxh6tRsWtqkGpq-2zrdcy9GC2eyOFxDRCeUZ+FwTUKYcI1GZnBZLFZrDZbU5zc6IPb5VF49GE8K3TEPLYvN4gOoff4-RqNNT4LgAN10XHwpUoEFqdI+bPZdXkeCQxxCsFUACYUABGBh7OXy+UAFhAAF8iAJhKIQDT5JBFMopKpjctdMBdAAlTBcPD4ABCzikUmgRF0AEljS63R7dH73VBPQARLjY7yegAqEAQAQcMbj8AT5GjfiQuk1umMuh2+IA3MyoBaOqGvQBBAAyAHkAOIAfQAwjWAHIAMS9NoAsjndOZjdxyEI9hxnPB4C1qlBzEWS9BLVxjU3Nng+812d5dAB3blOUoytWFKpcbzSA9HkC6dlcRDbp0QFKlWi6F+H3SH97YTBOXQ88zdvKACcugAGxiGq8pVvKzBiAArCBcG6PKMrIbQ8EgeBkG6EhSFYfKaEYchqFITBRH4chIEochDAQQRZEIZRTEMVRtHYShABe5g2PSnybnUc6lp0EgQI40apB0ubmFWonQlyuDOEIf4IKJnR+LoepSJ6FqIMcNSuBpbLYA6S5aFuiCaFpnQEMpuiIFwzgwEIED4LoShCDE5BciW3Lcs4ii6K6uhYAEsl2R0+AqYYuhCJg3iCBpmgAI7OJgYi6AAqh0yhcEpmCuUIWi5deOXCJ6KUOroUAQMs5DOK5qSIG4fg-lKgUTsIkDBZgoWtDAVUmYFHQbFwFXYHZKR2ZguiQEIzmRTNC6IClP7paGziVZgrqIFydXRZFmxeVoRSINghgLPgTXqcd7IIM47Q-jt7IWepiDIjNPDwIpymHTtiDOLoY6+D+VXjlgeYOBGUiuOlACiKRgKdSgGTAWgdBAYBgJgukg2A93cj+IPVVAeaUNypqejA-kdMdePwN+ugVboEAcNwYARn+b1NdTMUYOpqzFdydmWiFomKWIs7FkJD74LE4kpJJugABQAJQ5nUyuNLouishyvza9rwDUPKRAyowRBqkQcFEKBRDMEQAAcRBAUQ8r0Kqrtm4qruW-KcGsGIsXYErUDfcYGtqON2iILExjAKHQianUwAwCJYkSZqHzYHUKualrOs2MKvwq3OjR2LoADKunQK5bKRo0QmDlww7hpGNbtP1uZK8A+ehbLKD9iA0YSJViDPQFlXVR0sQ1J0mDPfg6UVtFsQQADVMr2vO6rB07qc0gShuSP-Vj6aAD85hEPn80bAPUh1YgV8k7oCZgNo+CUNgd8P0-2scHGShyBBgXAPag+dtZqGATOZ+BtuoBAsqUJsqxEbwHMOAg2p9FAwDjj3GBsDmZQBXEubQA9Vbq10K3TY3hJDk27lyfAA9yzVnrM2NsnYexZhVug7Wmo854J4r-A2kDXTBm4XAhB5hQwWRqIgNBeDtaYMiDgsR2toBELfqQtW4dNbyPweXEel1FpQCHEpOuVCVEG0oRAahBjEB0O5IwystZGwtg7F2XsmoVaCPwQbfR5MYr2hJmY6xFjtZWJsbQrhujtZRJ8bw9BPF87sEaJ40uUBy7dkCX+CMVC3LJlTA3Bcu98kOBtBAbcfYpAZh2tosBz81A+mgFA9B0dY4DlXLIkA6ClzQGUbomAm4B7WmNEoRQA8emEI6VmdB8S8GKOwcAXBPi1GaA0crLRGtwliFTuUpWTcW45Ose3SInprQOIoU4lhrj2EeNiQbWZ2sBH5zULGeMDh0xSEzK00oVTPmdOTr8pAmcbCvJTO86pdRBHCP9NA2B3zzAwHnp09BIUJEgArkiuRsD5l9OWZM4hmjyFbNsarGZfDHm-FYGkoSFZsDjS7hs-s9Si7oN1pydwSIYCtj1Lycp9QxFspmlgcI3KRA-OqfUdsYNOgUGnNkyMO44SdBWG-Gy+zYpVOgPKqhQo9YCuFEKzlorEClFmjERYih+XRJ1naB0BBmnWu1qiko5h27KG1SErpjq7LjyUYs0JBsVkEvWerANsCtk7O3N3MN+CxwTgrrK5Q39nCPxjbA1+79P7JtTd6nxVR8pNQHi8kpXlgwmvMOscg2hCgjNNHHd0bzyBlKjeYVsd4fWmnMLnXQTzc34L7rEItMs5YSR7frHxE7PEBoeROxJujdUilZYXPVeDBUcpFTy8wlAKlT3+QK6aBgjA9DdH0cEgx3DQhGD4OEgRgihHzKSS6zkoiHGODYAAxMu+uV4VjkG8DUUoDYAhYB0PUKuO0NhwAHgABTRIkQGqkbRXGOLoPYFDDlbifRAD4mBx0QOXYu1d4Sx3PII78RoSHrihhrN2MQhg1hNSVs82l41e3a0injTwUgfA1FhsMRQTpYhenwExkAfIBRRJLkaCAHkeBNVUAmeBcgSDil0pq6UaBmDMAVLQLUOoQCCBEKoPI4RpMmhUGgLU7AQCaB0HwFA1BdRGbQK+7jl1nqbGwFxw0JBXByDQCCME-lsDaGobNGwrmbCKXwBF5DbnT6ee868eQ5RsD6kZHppz+pXN7EikIMQ7mLIQC86aHzIA-OqEC3YYLoW8gydi9cXL9XosNeOE1-LhXEuleSyQVL6WKDfCs5qIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { Dialog, Button, Toolbar, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use <span className="flex" />

const DIALOG_CONFIRM = "confirm-fullscreen"
const iconClose = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const BodyText = () => (
  <div>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => <p key={num}>{shortText}</p>)}
  </div>
)

// Second dialog
const confirmDialogOpts = ({
  body: "This event is not yet saved. Are you sure you want to delete this event?",
  modal: true,
  backdrop: true,
  footerButtons: [
    <Button
      label="Cancel"
      events={{
        onClick: () => Dialog.hide({ id: DIALOG_CONFIRM })
      }}
    />,
    <Button
      label="Delete"
      events={{
        onClick: () => (
          
          Dialog
            .hide({ id: DIALOG_CONFIRM }) // hide confirm dialog
            .then(Dialog.hide) // hide main dialog
        )
      }}
    />
  ],
})

Dialog.show({
  fullScreen: true,
  backdrop: true,
  header: <Toolbar content={toolbarRow("New event")} />,
  body: <BodyText />
})
```


<a id="dynamic-content"></a>
### Dynamic content

There are 2 ways to keep the dialog contents up to date:

1. By passing dialog options as a function.
2. By continuously calling `Dialog.show(attrs)` with possibly changed attrs.

Examples of both are shown below.

<a id="passing-dialog-options-as-a-function"></a>
#### Passing dialog options as a function

When using static dialog content, passing a POJO as dialog options to `Dialog.show` works just fine. This falls short when the content needs to be updated with outside state changes. By passing the options as a function, you ensure that the options are read afresh with the new state:

```javascript
const optionsFn = () => {
  return {
    body: "some text"
  }
}

Dialog.show(optionsFn)
```


The more elaborate example below shows a file upload form, where the submit button is disabled until a file has been selected.


<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgZloHYBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoNTJyLmwpXRg3UstrOwd-Nw9lXN9-IJCwiKiY+HiqqCSYKUwofEx4aCTZ+cSAWkNMMClouITFg8QjqT3l1fXNxbEAKxh6tRsWtqkGpq-2zrdcy9GC2eyOFxDRCeUZ+FwTUKYcI1GZnBZLFZrDZbU5zc6IPb5VF49GE8K3TEPLYvN4gOoff4-RqNNT4LgAN10XHwpUoEFqdI+bPZdXkeCQxxCsFUACYUABGBh7OXy+UAFhAAF8iAJhKIQDT5JBFMopKpjctdMBdAAlTBcPD4ABCzikUmgRF0LrdHt0ABEuNjvJ6A0GAAqrRC6TW6Yy6Hb4gDczKg7iRMF0AGFoGypFKNqHNt4I4tdKklGsMzarscxNmhDFFoorY1dLoLVJyM5jhByAAKbCUXAAShbUDbbZgzmwiH7g4gI+T44nTgdYjuSljY4nE+4SBQumcayMWgIrYnmqXbc158Mx-7o+A57bHd0bJgmACSHwW9XuQ3iBiHuUbGKBh7Htwiz4FeE6GFIrjjn2z4TmohYQMWkbITueZSEgpQAMqIBKHSYLowFiBR5hYROAQQPgsTGMAahaNgrrUdhsQzqUwFUcuO47ty3E8IgvH8fxggiEJSCiWJE7QJmEirN4iCMSBdS6H+641PhKxKH2wDAQegErOQylSGI7IbM4iCasON58fxNh1PZslkb2QgAPLtFKMCMU+DliRJiAHuY+DQhA5hEOxE4iE4dEhSAMTLJF0VtsoYAACqccFujmEIzjwHm2ADFk7l7OsKwpQF-HQPhgRCH4Rmxup-muTugGDog7Kmn6RiYAVUh9sOMFtboGyzoN5hhhAywEAlugANQaRIa4AUBwnDalE5od4kjcogQ0jW1mkRDpmB6QZwkHlABXwLZR1iS5smak9YkcBA-Kzt67qwIxrIcr8o1qN90BbW2WABERpSZqsYBETJo1daavnAK1o1yVAmaaGA2gHkNzX+oGRZ7WFQ1g9Gr2yU5W3A66P3k++n7foxjNfgQlOuRDUNTTNArk+UXHmFOAQNXz1ViUR0KmqUAR06DIDk0jigo2j6O6PJ2O47o+PGOpO0kwdw7ky9W3U+LuhCgDHMTmy+AABL7YxOvqSd2m6Qdl37roN3wHddnUWbO6bcu9n2Y0r4AILYNgW7O7ly7-SKyGJ+2WDhAAcnqvIQAA7vU1Ep2mGdZ+YOHSXSfqxBJXBgO20AVh0O0HhG4RaN4b5E+h6vedAGZImNZFHpK0CW0n1WF2nMCZ5J5haO99QZVUZZpA2SAd0GnQSLnfdkcJh4ZBAmA-u95BCJ6OdVIYy1RsLou6LLPrjg6HcfmzP5Hnm8AD8B+j95DyidElscAgYhR6A34hPdM08VLmEgA2LYih87mzUHaB0BAQZQC2lzEo5gvIALZEGBGsklaRD8uTDWNctbO3JqYKQ+sYBbxzvpcmbZaHFUWKCXQ1A1DZjWH4fM8AdolijE5VgrDzaPSNhIim0VA4QJsMKcBbYwHJ2FKnKBJcQCUBzt7T6SCxJqFIgYIwPQ3R9HBIMdwUsvBjHhMEUICZSRhSEDNGwhxjg2AAMQKM7t4QoJkzKlAAPpflWNoeohEowbDgM3NEiQ3LkFtDWDoexCYb2cRAD4mAlEWx8WPHcqFfG6DkSozBUBqzXD9B5AAsmIO8YV+znjUFHGOTkorLnwBAMAzhPDmTMgAUWGIoJ0sQACS+AkJaI+gKKRw0jQQAbMJcgqgAifiImKIBeZe6qGYLQBUtAtQ6hAEFVQeRwjzJNCoNAWp2AgE0DoPgKBqC6hEKodx5kwrdU2NgXphoSCuDkGgEEYIjzYG0LtOBbjkk2B6fgKF1wxCfKIguX5rx5AC31IyQ5Lz9TvPKgsxFSNvmor4P88ggKLBmNBHYUF4K8gLPhccfFQgYVCDhXizpQhCVfJRaaP5IAMWqCxZqVgmogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React, { Component } from "react"
import { Button, Dialog, DialogPane } from "polythene-react"

class ConditionalDialogPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: undefined
    }
  }
  render() {
    const disabled = this.state.file === undefined
    return (
      <DialogPane
        title="Select a file..."
        body={<input
          type="file"
          id="file"
          name="file"
          onChange={e => this.setState({file: e.target.value})}
        />}
        formOptions={{
          name: "demo",
          method: "post",
          encType: "multipart/form-data",
          onSubmit: e => {
            e.preventDefault()
            alert("Posted: " + this.state.file)
            Dialog.hide()
            this.setState({file: null})
          }
        }}
        footerButtons={<div>
          <Button
            label="Cancel"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
          <Button
            disabled={disabled}
            label="Post"
            type="submit"
            element="button"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
        </div>}
        didHide={() => this.setState({file: null})}
      />
    )
  }
}

Dialog.show({
  panes: [<ConditionalDialogPane />]  
})
```

<a id="continuously-calling-dialogshow"></a>
#### Continuously calling Dialog.show

The example shows a counter that is reflected in the dialog.

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgZloHYBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoNTJyLmwpXRg3UstrOwd-Nw9lXN9-IJCwiKiY+HiqqCSYKUwofEx4aCTZ+cSAWkNMMClouITFg8QjqT3l1fXNxbEAKxh6tRsWtqkGpq-2zrdcy9GC2eyOFxDRCeUZ+FwTUKYcI1GZnBZLFZrDZbU5zc6IPb5VF49GE8K3TEPLYvN4gOoff4-RqNNT4LgAN10XHwpUoEFqdI+bPZdXkeCQxxCsFUACYUABGBh7OXy+UAFhAAF8iAJhKIQDT5JBFMopKpjctdMBdAAlTBcPD4ABCzikUmgRF0ABEuNjvLpNbpjLodviANzMqAWjowCQQRwAFVSHWD5gAMvHoVzcM4hLp8Ah450-Lo9VJPRbEMcaq5S2zsA6uGAtP7EJpy50CPmILpEFxnDAhBB8LolEIYuQuVHudznIpdK7dFgApnex0C5tDLohJhvIJS5oAI7OTBiXQAVQ6yi4ecwI6EWhvunZ1+EnuPDt0UAgy3IzhHqSIG4fiYFIUoLvAWBCJAS6YCurQwF+jYLh0GxcB+2C9ikvaYLokBCEOBZ4dAeDHqBZ5es4n6YK6iBcn+W4bkWWhFIg2CGAs+BASWLHsggzjtKBdEvu2vbInhPDwLm3abnRiDOLoHDOL4oFfs4kG4dgDi+lIrhngAoikYBsUotYwFoHQQGAYCYFWqlgAJ3Kgap35QCGlDcqanowHOHQsQ58BaboH66BAHDcM2uFcXgf7zkOkElqsT7cmJHTLvGuZiOYkbRroGZQN4SYpCmugABQAJRBnUZWNLouishyvx1XVwDUPKRAyowRBqkQACsRAAGxEMwRAABxEAAnEQ8r0Kq02dYq009fKvWsGIO7YKVUDScY1VqJh2iILExjANtQianUwCxvGUhFVImofNgdTlZqtX1TYwq-OVOVYOEF7YOsYEFVhShrIhNpXMcYgAMIQOOWzzsAb3Rn+xzxqV7EQLglVI25zU+dgQEY5Q2NvXVTgOmIdxKEGVpk81kC+Sguj0PTdVsn6ABqjYBEgzMcBseD069eN1XYugAMpxgA7guANCYhASxNuVywKFHClsW45IMRvlAVlou6OLCYSJ+jPwCOgs9gEdFRVw4VAaaxHw4s87U3RRYQ-gzjYe7BvNZ2UgAJImuQ7IbKVFVVaOpu5BEEsrEopXWozijMxTceJ4geQQL5ugANS6PKAblZ6M20LQ314yLyNwzErtSD6+DnvLSc4-T9tlRnVNZ2IHObN43PmbziDt4bdW5f3EDeAACiTiHBrjAcB2BUh8zHlN+6n5Zs81K74LEzNqPlhXJkbdRELv7PcgAEp5zNR7tG9xzUCdCcn+a+gPQ9cCP-OC3RTUVdl4Bl3j6P0VMZalSnrPeewDmoizqjXPGhg1hATKmPAOhhdLkDcg1EUu9mhaTcu4JEMAAByepjAAHJt7UMut3LeudFAPU+MQpqy81B2gdAQF0bpoBX1gjbEo5gpYQFluAge2Vx7NUQC+RQMATpLxAc1aA0NNBgG0A-SqT9GGvyzh-GBP8-66AAISMN7kYnmOsgGCM1Ig5eNgOF1SFI1N6ItkG5QAILYEwsGR+1U3r4OcfVYUeFfoUKoeYSg0t6iELCaQ8IlCRClFXkgeoXpYiCAfGAYiJp5ySOnszWGigtDOFzjAOYeENiaGBoU7wkDxGuIITI-B4SyHJMQKULQHAID1BNp+VI6QdbXWlohXC290FOFUp+Qw2QqxKBHCxBIn8IHNJCS4hJETOmlHwvXU0cSZEuJboDFs59CEfTcYbdZ9M2mJMiSk6J4ivz8kQIckBahcIGCMD0N0fRwSDHcNCEYPg4SBGCKEUMpIuJDiiIcY4NgADEly-SFBWOQbwNRSgAH1earG0PUCW1QDxwGZjPNEiRFKe0hh0PY3ov7T3zNCCAHxMAhJudc+p5y8YcsaBDa4XoADyABZMQqCuLkFKkEnxmEnGXzxgWByngpA+BqPpYYignSxCDvgKVIA+QCiruVMMRo648CAqoAIcE2xijbAsqUfA0C9TVAqWgWodQgGyfqPI4RTX5LNOIbedM8ZaXwGyAqBwuDeGkMzeU0IIxQBFraiUYESKqAYCgN1mp2AgFqdoR11BdQiFUPClVXERJY2VYaEgrg5BoBBGCOc2BtANPwjYUtNhcz4HbTSvuci2yVtNNWkA5RCaqEZO6ot+pS17ALEIPtFbsBVtePIWtqgG12CbS2nOQge3XFnXDTtQhu0zrnQugdS6h0rpIKO-UE7s2aiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


```jsx
import React, { Component } from "react"
import { Dialog, Button } from "polythene-react"

const longText = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

class Updating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      dialogVisible: false
    }
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000)
  }

  componentDidUpdate() {
    if (this.state.dialogVisible) {
      const dialogProps = {
        title: this.state.count,
        body: longText,
        didHide: () => this.setState({ dialogVisible: false })
      }
      Dialog.show(dialogProps)
    }
  }

  render () {
    return <div>
      {this.state.count}
      <Button
        raised
        label="Show Dialog"
        events={{
          onClick: () => this.setState({ dialogVisible: !this.state.dialogVisible })
        }}
      />
    </div>
  }
}
```

<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Dialog appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { DialogCSS } from "polythene-css"

DialogCSS.addStyle(".themed-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
})

<Dialog className="themed-dialog" />
```

<a id="css"></a>
#### CSS

Change CSS using:

* [Dialog CSS classes](../../../packages/polythene-css-classes/dialog.js)
* [Dialog Pane CSS classes](../../../packages/polythene-css-classes/dialog-pane.js)

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/dialog"
```

```javascript
import classes from "polythene-css-classes/dialog-pane"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
Dialog.show({
  style: {
    background: "#fff59d",
    padding: "1.5rem"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Dialog content is reversed when the dialog element either:

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


