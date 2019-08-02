[Back to Polythene Dialog main page](../dialog.md)

# Dialog component for Mithril

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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgFloDYBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqloKFo+2YKAATABGEAAXyIAmEohA9PkkEUyikqhNK10wF0ACVMFw8PgAELOKRSaBEXSu92e3QASRNPo9UC9ABEuHjvF6ADKOqSx+MAFR4iC9SYgCACDnTmfg2fIKakSF0Wt0xl0uyJAG5GpbOjaI1GAMIAZVbpfLlcxiTbrdr-ybW28fbEmHw+Fb5SQAApzGIEiJ8PsOVHzF7gI1dLoAhByPhEOQAPrkcdcZwQ7dX6+6ACsRC3ukgW2Pmm80iP2bA2m8lGc6xQXRzAAYg1ABOZgADEAGZ10fZ89yPN8PyUFIpEAm8gJAYCOFwuCoC1ABKAc62gK0uBNZstjwVsADUAHEu3MFpOW8XQAHdeScMxTHMVUGF4woqi4d8pB4viBN4kBdE5LhEHY50IBScSQFoXQ1P43R+ME4VsEwJxdD5HSAFl1TA3RmDEBh1RjdUAHYxFvczb10dVVVc2hHPMyzrLvPyfPVDyvNc9yXPs4KAtc8y3Nc6CrMC8KnKi5LEuiuLfLcgAvHSbCZL5WIaEASKgesugkPcpCTVJOgrZjsDqGM9zhHlcGcIRDIQPcuj8XR9QTJ8yMQaUalcXqOWwR0KK0NjEE0fqnQ63REHPGAhAgfBdCUIQYnIHkSt5Xl-06N1dCwXdDCWzp8E6i6hEwbxBF6zQAEdnEwMRdAAVU6ZQuHa8ddCOKA-pk37hC9V7HV0KAIBWchnA21JDzAPx9NlXRnHgLAhEgU7MHOqHgZgLgMc6TYuEh7AlpSJbMAGoQ1uugbYEQV79I+sNnChzA3UQHl4Yu66Xz2opEGwQxFgPNpOi0GSEGcDp9L5zlZp6xA0SfHh4DajqXz5xBnF0DhnF8fTocxrBKwcSMpFcD6AFEUjAMWlFG4nFF0CAwDATAhrNsAFd5fSzZhqBK0oXkzS9GAjpFgP4D03RIc93Cprpg88Hhj21qxnq1hB3klqtM69zasRPnq8wB1Kp5vCqtCu2odUiFVIhoMYIh72YIg7KIAAOIgwKIdV6HVZu3OH9v1QYYfb1YMQ7uwGcZ0I8s6jKir66kQjXggLQ5xAcxiNI2BOh9krZoAeW0YMyK7TcmikWT5MAle190ahH1MGQZ1v0NrUfNeM6s1ALmGbGsZ28B8KYUQCrRQl4H6YW3NAdwFFtCv1XsYdeQ4IDeEkJHFegCrxaiIURB8YcrxCF-m6EMG4iHbmAfAUBIBWyYBVtAm8sCzQIPoVeFBmhvwYPfjgvBEgCGEV4SQih24iKPlYI0LU1cyJn0MErOMKwUwlgrDKYsfMsGPioeoyqqY6HSM2n4JA5DrxcPgYBRBN5+FoKEVg3QIj8EHkIWYnURDyoq1PAEJAgEpDwzTEQrQ6DNohMfERYqpUACC2AqYVnsc-diuhnHr0-hQ7+VD5yUHYmIGGSh1wfyITkg+mASn2O3N-b+BgjDMPBJCQYMJ3BwlGD4REkxQhVgpAeNaUQjhOBuDYYCNhVzDg4ZhVY5BvA1GYZ+LAOhzCNG-teHUWFWzVCenAQCAAFHsSwjZdWMtcHguh9iuMjMOQycIIBHyIawQiVjKEHzEPkkpWTrzlPnDopAJTzCtj+hkPmfy+YPB3OtWIR8XnXlyYaSA21tiKABWYuFM57SOgIH-WFN5v7VKQQw-GICsKX2wMoQy1zcFTMJUtOBkQ7G8MJY4wRug34uIJbSq8biYDlXYjOTlXKrxguYUC7aJYJnUuIEyoVu58CxGYVRNBns3TEwPCnSlUZNoQCfNRNMntdri3VjAXQ9tWzNjiXs+2Ky0VCpiTKzCUihWlgdS62124JG2s9deJ5uL4XvIgOxT5ZSf6-IsYgAFIAkxVCXJqyZIBnm8P9YimISwUXECAu6wGGKHROhxTK-FrqiUBBJeYMlFLJXeBpYSmxDKAFZswiyiJ7L16Cq5TyvlAqi1IJFVhZsN0CBxqlbi51245UKr7QIvQEBVWRw1ZW7VurYb6q6ka8IprzWWutdKhttL3CohgAAOX1MwxcBAVxUqrYfXdjrj43uId2p1tKn2YW9TeN925fVEP9R8jNXyrw-MNGCyNGYswOF6iaqo45Dy9XWMcwUh4YVJreSm5FQovQyqoZivNNDPQFqkG2m8jDmHlrDpW6tSDa08PvcgkqU6Mn1tHdyy9YheWBq7TRm8UGpaASoaB-MOZGNMZvOdHjkTnChM45hE0ShFCAX-cJgDP9AzQHzVJ2lhHFPbgotAOxXRWK8YXPDFYM4dNQCosuui9FV7ePU1yqjjK7NCqbYBNxYiDzdqYy+rT6zPO0sTU59F-GCxFksdaTa1VmGhYjdJWRgXdDyKc2Qvz15x3MMUvK1FPmOCZiUOQXjM5guCc00KmTZp5MpaQXxvMIXw0bgi2hZhkFcuIdix+rTiWfNxcU-azj3nCX9ZvINj1vD2tfrMT+wNwazGAYXOGyNjUoBsVaBgfGJZUL9Rywh8gSHbXJogEitN6HM2Eqw7m7FuHQz4ZK8W0tIBSNDqvSOyj9LqNMZc2yzBrbKsdvYzdnt4bmGLbYguziBk6Z+NiKdaAbEwWbQkGbGOxQofsWgAAck6NwToVRDAUedWlwGRmLxSBnLXLeAXsstfIH-S8VDz6QOvjT9rzretecfa64buhmdc8eRT15eSpt-pDf64DGbzDGXWpsWDG0vzaHwJQbAu3ML7cO2aLLVWc1YpdJd57NSCPduI6S8lZHL1484a9xz726NOM++-f715fv8vtzeXt4vJfwEe9Dao+ATWpAyFNM+5UKIxd17KqFhngnE9JzD8noeuVbbyzTgr9Or430uzAPninGabCCSEuPSnalSFl-LiA2Bc8Scq6z0dnPfO7s59zsbmfs0C6DULmboagPzbFyAWih4ZQ+yxlD+435B0BHT0rm8KvU1q7F1ms7Wu1OEsLfew3ZbjePbN9Yi3QnnUfZbTv0djuOM+ZWBURAlufMcS4hIZhqo+60GwCkG1XX8+EoJwprT-ryUXqjPsPSSwjwjxRcMMQAYwahdBYgZ1docBcBdBtAYY0lIDRotgfYZRoAJ8fN4VRQQMxETURA1gTUnAzYkDdoUC0ZoBDJg4r8sYdw+Y8APYPQVVdpM4-EYAvQ1hoBYg1oLx5gNVIBXA8AxAHknN2BKttwE9Dwk9Sl4sqEcUD8fNV8o1XAw4KCyC0Cw4WDg8GRX8hUHN5DL898vsrkox3FEBPFL8H14tksZDqFfR-5ndCVFDD0dUiCdBtCxDzduEL8LDaNUFWV983NxEPDa9C9QjahwiwjusOtK8702d70a83VCUG9ec-U3lf0vQP9ZtgDNkagZQlsTVyME1nsp80N1dldNccM7DQ9l9nVFCHtCidC9DndDC7cfsWM2MncPDPBnACsjFTELCZReAKt4ttwKBEA1FkxUwD5Ww+UnoPcikuBuBUD0YysPYtB3AEZpouhRg-AuQ+YFiljyCw5VihQm8fMxiJiNEpjzAAAJOdeg4mGUFWaGQURYiiI45mWTU4nQrlC4pQIxTRMw24udTYeY14w49Qz4mfbnJjTrLTawnzdzRAMMWaTACdMQdUW8GIgcOIlnDnGVZIsxcbdFFvabb5DvObXREDU8WAXYsiDA-nBFA7afdNDDOfCoi7Ko67A3YlJhI3CtU3HdZ1JovzFojlNokwjo4-LTAnW42aLYTfWlYJAguk2AbwrTDo1+G0WaUsIw6Uiw-AVwI4jCXQRyH42lEtHLQwE07cffGcWaVjacRAMQUvTAFGcoLsegJaeAR0s-IzAgq09qWqEAZU2ALAJQaCfAGcL01UB-FIL0WgCRIo4I4VGkx42UBje0n00-JAF0vSd0qHCsZub0303M0MmAQMpiEMtM8MxASM6MhMx-L0dSJMmE6vM44TJErU703U9+fUy-Q008dQk0s0lM7ccs1UhjB0nM5010gsz08029DwhI29HE6vdnOvAk0bFI79GcERN9RLRRVZKAIQBeGdRQGca6AOTwKQHwGoe2EYRQZ0WIf0KM8wAUb43QBJbAO9RoCUWaIadQvgNAfiaCFATE7UXUEAQQEQVQPIcIY0aAL41QbUdgEATQNw-gaC-UVQIZE4OQEgVwOQNAJpOwf8bAH8PIA7GwPCm4AAAVVDEE8mghorOR9KBiNBIHKHJVUBZHNC1FYC1CAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


<a id="calling-a-dialog"></a>
### Calling a Dialog

Other than most other components, `Dialog` is not rendered directly but invoked through function calls `show` and `hide`.

<a id="dialog-spawner"></a>
#### Dialog spawner

Dialogs will be spawned from the component invocation: `m(Dialog)`. To show a dialog instance, use `Dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components.

```javascript
import m from "mithril"
import { Dialog } from "polythene-mithril"

const app = {
  view: () => [
    // ... app content
    m(Dialog)
  ]
}
```

The Dialog component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom dialogs from anywhere in the app.

Style side notes:

* Writing the dialog at the bottom makes for less surprises (instead of using CSS only for positioning); Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than other content.


<a id="multiple-dialog-spawners"></a>
#### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have a dialog instance spawned from a different location.

When you are using multiple spawners, differentiate them with option `spawn`:

```javascript
m(Dialog, { spawn: "special" })
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
| **spawnOptions.id** | optional | String | "default_dialog" | Dialog instance id; use to differentiate simultaneous dialogs. |
| **spawnOptions.spawn** | optional | String | "default_dialog" | Spawn id. Use with multiple spawn locations. `spawn` must also be passed as option at the spawning Dialog. |

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
  didHide: id => m.route.set("/")
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

```javascript
import m from "mithril"
import { Dialog, Toolbar, ToolbarTitle } from "polythene-mithril"

const dialogOptions = {
  header: m(Toolbar, {
    content: [
      m(ToolbarTitle, { text: "Title" })
    ]
  }),
  body: "Body", 
  footer: m(Toolbar, {
    content: [
      m(ToolbarTitle, { text: "Footer" })
    ]
  })
})

Dialog.show(dialogOptions)
```


<a id="example-with-modal-and-backdrop"></a>
#### Example with modal and backdrop

A modal dialog is a dialog that can only be closed with an explicit choice; clicking the background does not count as a choice.

To make this behavior explicit, a modal dialog often has a tinted backdrop. This also gives focus to the dialog contents.

```javascript
import m from "mithril"
import { Dialog, Button } from "polythene-mithril"

const footerButtons = [
  m(Button,
    { label: "Cancel" }
  ),
  m(Button,
    { label: "Discard" }
  )
]

const dialogOptions = {
  body: "Discard draft?",
  modal: true,
  backdrop: true,
  footerButtons
})

Dialog.show(dialogOptions)
```

<a id="full-screen-dialog"></a>
#### Full screen dialog

A full screen dialog uses [Toolbar](../toolbar.md) to implement its own header (options `title` and `footer` are not used).

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ACVMGw8PgAEL2MRiaBETQASUNTpdbs0PtdUHdABE2Fj3O6ACoQBA+GxRmPwOPkSNeJCadWafSaTZ4gDctVqZtaMBEEFskcSrWzxiU2CqABly1CObh7HxNPgEOW2l5NDqxO6zYhxRVHP2Wdg7WwwGp3JpEKpB20CJ2IAu2PYYHwIPhNHI+BFyByoLOWfh7LJNM7NFgfM2F60u2tdJo+Jh3Lx+6oAI72TBCJoACqrTyGwHaYHuexQOBmismB-Dun+dqaFAEALOQ9h7okiBOF4mAStA17wFgfCQLemD3k0MCodO16tKsbDIdgC4JAumCaJAfA7l2nHQHgf4EYBwb2ChmDOogHKYa+z49moeSINguizPguF9vJrIIPYLQEZJ8FLguSKcRw8DtmuL6SYg9iaCw9ieARqH2CRHHYDYYZiI4gEAKIJGAilyOOMBqK0EBgGAmAjg5YDaZyBEOWhUA5pQnLGu6MCXq08nRfArmaMhmgQCw7Czhxql4JhV47iRfZLLBnKGa0d7lu2QivPWxgFqe-GNdA7iVgk1aaNQKpEEqRAAMxEAALEQACsRDykQADsRAABxEAAnEQKr0CqI0qmNKqTSqM0qrNjBCO+2AABTXQAlFmVRtGWFZVndjwQGo13GMYd2dcWmjBh6ACCDYAPIAOIAPoAMJgwAcgAYh6VoALJZpoxiGuw5B8NstkkY05R1CA-3dZxax4AAygAahDGO1jArLzgA7pydhGIYxhKlNXO5GUbDuOInPc7zXMgHBbCICzDoQAkIsgLQmhKzzmg83z-KuXYnYK6jKobZo8pCFNKoNiqS1CLNBuzZoB227QlsG0bJuaDbNvOyq9uO7bSqu7bFtW4bxue-rPu2+Nwf+97ocxwHBtHZHB0AF4axYdJvMzNSk4WXWwK0BPwFTFDE9GsY2FaEAsxjEpiOm+hPdQtSaG+11etAAZ+sATfNxyhooBabTM-3fBCGImELNdzjoYgtMQw9mrd83iDwbIIIWovPfQM4M7qP392PYDYZrO4QilpXk-QDjfChuGYMtDA7qWpy-dA6DkOwwjyNoxmd0b+q3fqjukQbufBrqlyTDYVMtdECP33FWfuNd0yAOAYlFuHcgzr1Qc3O8i5+7GCppgeCxgUE9wXCvUI-cu5YM3qeVQYBd6aH3vXQ+4ZRApXun-ABv8oCME6kWcm2M2C4xvsfO+oQMbXSoc3e8+BIh4JAJGEQKFl7Gg5DRNCrRIgVDaIQgggFgavkiBAay6VDHGM0CzJYrRXSdkXBUSSdhlHkIAPzEJAbuVYCDMIwO7nGeh+BKDYC8fYHxqCWAxjkOQdBa9G7UNAegx+G9sGUVwZjEAMMlh+XgG46hS9yFrykaQmh296F7weswkREAT5KNUpIjk+AX4g3BtDOGSMUbo0AUkjMf8gEb3ic6QMiTckUR8Kk4wwY7FyByUUshxoCldOblvOhDCmFPW+sM0hVhtApT4lAK+nYj5VIWT3Sp1T2FPwaYDJp79Wlfw6b0jZPctk1Mku+eSLJwzHObqcthtTuEzObv8op-9qGdNQcwWogC+G53NMDbALFsyFNZFLKuZSD6xNIaA4wQhKAs2IUNDehgJDfT1IgxA+LjCIycvANoxd5AHPDBY-YbRFj0NXII3GBFJQMuPr9EhRSsV6i4hEOYsgKWPNATaO0BAEnHKJYUgFPccHwHkXfelHzeXEC+T3FRq9KHatIUsneaLmEKsVUUn5Z8WaSMJZUO1RKHV2oLkXXQ8hgmhPNeasokFcLDzAYmZMQzPWesDIgeRKxyDqGmQCx1sa7WGjkLIfuzq6VQHAcmCu1rjDw2lrMsVIAgWkLjXG5BBqAUyLkW+Ue48xDXTuH1N6ZbSFQqbd0x5zbtUgsVYWnuPbGAPMxSSnFlchAaPJcQAl1CiWCswPis1jqdB6HkcCUEvQITOChIMDwsJRiBFzCSVSO4wh7DsBcCwABiCwGqjlaseYscg7gKjyKhj4LAGgfp1FaD3TUaSqblG-HAfuAAFVEsQbI9lRucDgmhtgsOPrYncv0N79v5c3UBpygWMEhdCkeO4MrXS7NFVwYgPAVC8gMWQDpIgenwCSnkfIgGaDhdgP6OcRR2PFJKLgaAloqhQEtDUWoQC8AEIoLIwQDTQETSaNAGpmAgFUBobj1BtSibQCeg4UgSCOCkGgFdVhLzYHUCfLiFgNMXAAAJKiEA7caZmoPwEumofUJBijYF1AyE06pGDqiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Button, Toolbar, IconButton } from "polythene-mithril"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use m(".flex")

const shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
const longText = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => shortText).join("")
const DIALOG_CONFIRM = "confirm-fullscreen"
const closeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"

const fullScreenToolbarRow = title => [
  m(IconButton, {
    icon: { svg: { content: m.trust(closeSVG) } },
    events: {
      onclick: () => Dialog.show(confirmDialogOpts, { id: DIALOG_CONFIRM })
    }
  }),
  m("span.flex", title),
  m(Button, {
    label: "Save",
    events: {
      onclick: () => Dialog.hide()
    }
  })
]

const confirmDialogOpts = ({
  body: "This event is not yet saved. Are you sure you want to delete this event?",
  modal: true,
  backdrop: true,
  footerButtons: [
    m(Button, {
      label: "Cancel",
      events: {
        onclick: () => Dialog.hide({ id: DIALOG_CONFIRM })
      }
    }),
    m(Button, {
      label: "Delete",
      events: {
        onclick: () => (
          Dialog
            .hide({ id: DIALOG_CONFIRM }) // hide confirm dialog
            .then(Dialog.hide) // hide main dialog
        )
      }
    })
  ],
})

Dialog.show({
  header: m(Toolbar,
    { content: fullScreenToolbarRow("New event") }
  ),
  body: m.trust(longText)),
  fullScreen: true
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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ACVMGw8PgAEL2MRiaBETROl1uzQAETYWPcmnVmn0mk2eIA3LVambWiyAwAxKAhtqLOQhqqaAAUAEoM9ngLVNJoJWIkChNMYAMqIMWtTCadhIIQt4xEIuaHwQfCRCt8LPGNTYZ1ti0d4vFbCICvGJuINvjjn4GcgOcL5PFzS8AQrtfERfQMAiJbuaeaRD565yIRzlOIISLcinsRCVmrezzjfqnPtjcsCDkHwADyLSSiCY4bsW25nsY+BQhA66bpoAh2N2K4RAsiGbvI4qRFOK58PY8AStgvRpABfDbCsixYcW0AwL4exiBWF76JmhaQdhQjYLorLGj6eiYERYi5lGnHFrGjYUXeD42M+YlIcWqyILYA4gAAChACwECumgANRSYBN4cPeb7wB+OYKYpfoBqInKIKJi7Fle963qGUBEfAVnFuqHaah2-68ipnqurAFbUIu-Yhd6HGKZoWA+LWK4AMJLGAta0dhfGyOBsVxZoh6qGA6gVrm+Y2Ws7h2XBuZOUGi7fr+SFRc6oXunlSEsjAmA+Egy6ppg15ufoob2MsehqAQTWKQlSWVhpWl8tNSG1lCxorj4rXQJlE54TBpCMV4xgNTmHbMB2LL4AAEvZpV5mxA1DSZKZjXB7BzPgtTfmJMb0a0PqRNubBgBVECBqGZUPXlkkuSmHWNiZFavRNH1+VZHa6GIjjJvDrJsIgADud0ZnV-Y2naBDRVAy2KfDcWzfAK4gfImjxpVO2KYg2WhBWdP5YVwMldm92ZqDVUwCIEAE1mbNg0mWYuTmp3iYpvkqz5dXKxrUDqj9UCSQAgtg2Bwx2eOE8TD0RZx-bGEIlAE6O1txbbeqlkgo7GADQNgJohpyLIvr+pVFbqYiMBqIGsuBhAoH0ZoiIJ42Y3ipKxg-qTan+FA-6eyAAAqZTnkkfApBe0dtJLBMwEnt72CkECYPghl8O6BNlLoJZFwxPhMZ2W3JnarN2j1fWaGNErwLXz3HjXiUs6KiDigQQjpzTxau1kECl+ssie+ryFZt7-DA2LWuKefxaMBnNtZw7QhQEFTuLoYEhqZgo7w6-r86HoK7AqCXoEJnBrTcMMBwoxAjhhJHBPgWkLBMQOPACwABiCw0cOYTjkhUFcAB9XqSx1DHTqK0Tcmp5o1gvKsOAodUSxEMpoAAsucDgmhthBwDKzeC6dFzXxpv2M+Z0vp6z4EIOBE8ZYQDAPYVwL5nwAFEBiyAdJEAAkvgNSPI+Q-k0EbbAllagilWqneiih5QAFYUAAHYNRahANBRQWRggGmgAHE0aANTMBAKoDQXAUDUG1AIRQiCLjSEcFINAACrBjWwOoKqkA+AIJYfAAAAkqIQtAhAAGYkl2AuGItQ+oSCTl1AyE06pGDqiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Dialog, Button } from "polythene-mithril"
import stream from "mithril/stream"

const file = stream(null)
file.map(m.redraw) // redraw whenever the file steam changes value

// Return a function so that the component attributes are not rendered statically
Dialog.show(() => 
  ({
    title: "Select a file...",
    body: m("input", {
      type: "file",
      id: "file",
      name: "file",
      onchange: e => file(e.target.value)
    }),
    formOptions: {
      name: "demo",
      method: "post",
      enctype: "multipart/form-data",
      onsubmit: e => {
        e.preventDefault()
        const form = e.target
        alert("Posted: " + form.file.value)
        Dialog.hide()
        file(null)
      }
    },
    footerButtons: [
      m(Button, {
        label: "Cancel",
        events: {
          onclick: () => Dialog.hide()
        }
      }),
      m(Button, {
        disabled: file() === null,
        label: "Post",
        element: "button",
        type: "submit"
      })
    ],
    didHide: () => file(null)
  })
)
```

<a id="continuously-calling-dialogshow"></a>
##### Continuously calling Dialog.show

The example shows a counter that is reflected in the dialog.

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ACVMGw8PgAEL2MRiaBETQAETYWPcmnVmn0mk2eIA3LVambWjARBBbAAVRKtQPGJTYKoAGVjUI5uHsfE0+AQsbaXk0OrE7rNiHFFUcZZZ2DtbDAal9iFUFbaBALEE0iDY9hgfAg+E0cj4EXIHKgLZZ+Hssk0zs0WB8Wb7rULa10mj4mHcvDLqgAjvZMEJNABVVryNj5zCjvZQO+aVm3-ju092zRQCALcj2KOiSIE4XiYBK0BLvAWB8JAK6YGuTQwD+TZLq0qxsF+2B9gkfaYJokB8MOhYEdAeCnuBF4evY36YM6iAcgBO5bsWah5Ig2C6LM+AgaWbGsgg9gtOBDFvh2fZIgRHDwHmPbbgxiD2JoLD2J44E-vY0H4dgNjemIjgXgAogkYAcXIdYwGorQQGAYCYNW6lgEJnLgepv5QEGlCcsa7owAurRsU58A6ZoX6aBALDsC2+E8XgAGLsO0GlksL6chJrSrrGeZCK8abGGG3yRiu0DuAmCRJpo1AqkQSpEAAzEQAAsRAAKxEPKRAAOxEAAHEQACcRAqvQKrVSqtUqg1KrNSqLWMEIe7YAAFEtACUAZVG0Mbxomq2PBAahLcYxirQVEZka0l7YCsEpQL6gZrRtFq1JopGwFGixyAGz0ea9Bbems7gAGpNj4SAoMpqx4EQL1-ZA-kQ-QsPqgVr1WJoADKMYAO5LtdInIT4kS7ogSzIRFZYlhOSCkf5IFCLD6NxiI37w-Ao5Q72PgMTFbCRSBxqkRO6yLtcX3Fu4aw+KsFhWgQ9i4WLiAM79IQAJJGuQrKrCt636JtwCw69StZBA-maAA1IGKqo39fBCLo+DkJg2NrbbmqaMNtC0Kd4a-bo+nkB5hu-a9rJsIg2MQ49+s-X9f185oS0myyPog5ZYOIOtIfx-HRWp4DAAKlC4N9Oe5-HEpiODbSfcr8OyDDocV5oa74JEEP22IAELEtdylbtTct39c4ABLedHeubSnAMQMDoM04GLBQ4gRu5yja-x16PpCNGECuwXc-FxAuC+83r3qpv7GBx5fBHSAgrGO61BX69d-GDAOlQKb-lP7XIk-1kKtIeLc742jtAQJ0Lo3Rx2HvBbm8AIbGCxvvT0s93BP1fn9RAb5ZAglgXA8KM5VBgHUJPJ6M804LwYoGAAhJQwG6c2CZywRfLB6pVpX0YGfeOl9fobygAI8671NAAEFsDYUDOXcOkdNDkNji-Zu789SUGxn-RR8dDASHvkIKuSA-7GA9JEXgewwBvTkIubegMIYAGFoC3XsGbGA0wCKrFUHdNBO895qJAMAq+yj-BQBYBAAxIBmbfkSMkGm3jkL4QbnIKcdh1Lfl0OkaschRxsRiP9HeJ0QHxwCYRCIcxZAGPPnbJaV0bqtk4eU2p8duH5N3Do1RQhfxyHUWvLRyjMB-3Lq9LRWidB6CQSYF03QwR9GcFCQYHhYSjECMGEkPFhxhD2HYC4FgADEFhD4YOIFgxY5B3AVFGQAfTBksdQx06itD+h7ZB5QjxwAhoXVEsRlLFgALLnA4JobYnjAYFihCE3xa9GlrzvlYue9TNCMFqEIqA9thz+SWoWJyrgxAeAqIZAYsgHSRDVvge+PI+TALERIs+Ip2zpMlFwNAjV+ooE6hqLUIATG6iyMEA09jjSKEAa0cuOl8AsjutsJo7hxAQxVFCAq6pqVigglKNAKoUAqh6hqZgIB3HqHpdQbUAhFDrIOFIEgjgpBoGBKCBc2B1DuFNnwCwxqLgAAElRCFoEIOqTrfnwAWmofUJBijYF1AyE06pGDqiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { Dialog, Button } from "polythene-mithril"

const longText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

const Updating = {
  oninit: vnode => {
    const dialogVisible = stream(false)
    dialogVisible.map(m.redraw) // redraw whenever this changes
    const count = stream(0)
    count.map(m.redraw) // redraw whenever this changes
    vnode.state = {
      dialogVisible,
      count
    }
    setInterval(() => count(count() + 1), 1000)
  },
  view: ({ state }) => {
    const dialogVisible = state.dialogVisible()
    if (dialogVisible) {
      const dialogProps = {
        title: state.count(),
        body: m.trust(longText),
        didHide: () => state.dialogVisible(false)
      }
      Dialog.show(dialogProps)
    }
    return m("div", [
      m("span", state.count()),
      m(Button, {
        raised: true,
        label: "Show Dialog",
        events: {
          onclick: () => state.dialogVisible(!dialogVisible)
        }
      })
    ])
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

m(Dialog, {
  className: "themed-dialog"
})
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

