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

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQHYBMOC6GIAZgJZwCmYyKoAdgIYC2FyIAdABYAuTiREGHW4VhbADxxSdANYACTlArEAvAB0QPbgAcwSAPT6GUbpwCuUCJRZ0w7AOalTZgEbtSMI2DAVuYfdrwAJ6mohT6FAAezNqU-sTWdhDeGnJKcOrg3EFxnBS+GgB8anQl4pBQpNrccmCWmVq6BkYm5pbWonaOzm4eXj5+AcGhdOFg3Ax0ACYMcELhgXAheaMAtExOiuRDSyMU65uVcKvjkzNzo+wAVmBF4voVVdzFpXTl0E+19RqNeobGznaFBsXU2rncngY3l8-kWyzCDwm01m8x28LWyVhwxW+0xJyR53m11uIEK90e1ReZSmpAAbnJSFNMrAYNw7voabTCiAiD5KBBuB5bGw0Eg0KsAGxIHAARhAAF8MPRmKwkBwbjyQIJhKJuGxteM5MA5AAhMzcbhCDByAAiUAYAHcKFBrQAZUjjN0e7gAFXIFGtAEltUHtWaLVa5D6YPAXMY5PK5Co5HC9gBuEolQxyADKPoAggAlH1yABy+YAaoGAOL5n2BgDypbkrsDeczdANNVIBqTRpKcjkU3txD8SDkGnKtPsckifFs6jUPwt2maDvX7AdAGZ2DAoPZ9Dg0MeHtOl6kHYzTIuNDgACznkAKCikew8G8ge+PuS00gUB0mjAkQfmgcigfechfkupLiNoDCmEOH4ALKyuwACcaFyAAHBA4rsLgqzsFuWCrDKREAKyEWhd6kfhroyjgcgypB6HkXIEpEQAwjgRFYex7ASmxjFYOwOB8YxWG0jKaC4Ux7BkZhjFKZwMoShAZHMeBVGQasODHOwaAyqRaAAF5IQxTFbq6O5YHecgiVhdkWVucBYaJEpyHe7COfRjEyluJmPvoZKnvYxQ8gODJ0C4QHjpOYDTrO85gB+jRrhu267vuh7HmgoXfpeUzXo+UGpHkr7viVD7QT+f4AUBIFgZBdmlTBcEIUyj7mZhW4ABJeRhEC0TKmm0WhblYWhY3idZTFobJGneeJckYZBvUyvNGlNTg2k7TgFbkbhw1GehulnTgJlMKBDGcKsd4LQJEq0VubFbqsW5yFuYDvc9NFvX1A1oQd61oVJplBSFCVhRoGCRacUBxSAU4znOcALo+aWGOuDqbjue4HkeJ5QwVV6cB+rXPhV3Dk9VqS-v+gHAY+oHgS1tNtfBnCIV1FkyiJOBYPRbkyuJMrHGREo0SJaBWXgchoaJd7HCJG2ERKMq+ZB8vyZhbkSh9jEK-ecDkewd4eV5WBWabWFKTKgXQcF5LTuFsN0IOPjTIjyNJWjKUYyu6U45l+M5UTZ41YVxXQRT5VvtTVXfvT9VM9BLPNc1j5ku1XOddBKEGcxsqujgH0WTxhmfVr0lwDKQmkUJDsaE7oXhSU8oZq8XZyIwv72PBQruoaya94GIhMJxUgQPIKiFHITAABRD9w1rAJFgpxOOKCRWo3Br+7g6H4K3CUIjgbRUBMORYfDLauOPZCHY0gxZEbs34q1-9gfN-H6fE4gDmCYUAlBTCvt-Q+D86D3wNOweGb9D4f3AfvG+g5f4UERjmXU88GDkDASg2+QhoGP1gaIKY8DByIJvsglBaDEZ2gYKOEk5CIF3wIbYdgw4GF+GYfKSK+B2BMAYNoBeC9jRoOtJAhMABKJMc8d68CXt6P0lBV6f1QU4FRai5DEFgMIcci9gyRmofgqG45jTahEHo+e7BuBQDMOMBekCZG8PARQqRzDBycBgLSZ0DAXB-1sWYAMWje6vgHoQuQgSAxyGzOIZMlo5DQAoPBCgcgGA9wYH3cJ7txg5AoFoigPjhB6C-vgwcQgrA9hkOOUe49J5VK0S49+UjIotLoPKKRncsz6DkAAUVLDaMslYax1kbM2Vs7ZXjZjzEWEs5Yqy1nrE2OQAB1QMPpepRgbA2V0Joiwdm7pApCogzA5grNWPs8VEpRzJonGqcdKox3ZrVBmDVmbbTZlnWCnNub5zLlhFSkldK9S3LSC6V1VjkUBbSYFoLwXiiwGCwFFYJQgqbiAFuUNwpdM7I-bsugzBMEuUjbQhRXR7mBAyAlRKpjwD3LUJwaSWAr0SY-CgApfAWDSTSbQHoezSBnBQKQLKfBTCHDAOQL57FMBgGK8egQoBRQgIyRkZhhByHNHIOAfiKWSpqLSuYShsH2EYGkqQABHMwDB2ByAAKo1FEKQIlDAxUbDoE6n8jrmDWktR6HuMBxh2LFVEZ0yqJiCiEBqhAzBBBap1ZUMAPc+UapqLMUgvrtCSsiJK9JggmAytpay2wFBLXwRtTaMwfqGDmlSaQOxRqDX0ukGkCg2glArCmM6RlzbaTwDMNUFJnrhWSuhIk8gcBCXisNakigZhtFmEcPBHuZho0pmMKQeCFgbW9MiBAVtIguVgGkDUGAEAIAMHZWW+4pKNCd27hcewPoog1GTEwGxdiHFVDAJOgA1FS79TBOkHLxWWTJYSI3u2TPvXeQhpBOHHLSOgsrUmz1KRObgiHkOwPDRQWBXiHR9mILMHwkVEG72TuOURtQcPWngrYxNHTZFod3t3WpwJ6nTz7AvGRqHTgiDwzAAjyYiNwB8J3G+3dLSxmMIWQTfZt6uPngvQxdBwyWjoB4w+xiymQLMbUacemLG6n0e++x3BHHamOXQU55znEJk0zfQpuoSnabKXICpU9qlyG40xvjuGwD4b7AAQj8wJh0Wj34TkUxQrR7itGLw0JyPBZTzHau8KWFUiNtD7Ck3AOMUAAD6BW0GpEoWUjQfoT75JALF5h+BxPoaUNwCw7sEsgCSxFcBu9XPodyX-Hrg4YM+KgAkQTiNOCMk7aUGr0WEyf13mVwb3AFP4N3ovaM0mXQRa09tm+MUoCdoRpEux+TZsUIc0fGMeWZOCe23F2bbWOsXcHANlBfX0FobczfQIR6IOI3SAPHxyWvuH28c6UbDpxuTdEMDr7i2ynw-wY9uksO3OvZMdkfru2yk0jALEBgQREYJCiKjkHlN46IxemgbQkRScg7jNPewsA1VTERgAYmIJzunX3BCGvZ1uAXGhsfv2F-Z0XK2yeDkXvQp0Lo5ANhcFcdl3B2BQiPSaheouqGI7J3RqAYBnspa1ygozVjQn9wg8vBebGJ6efu5Lkx+HxyhYC4Jw3bmaRTF6oyD7PneM4bC4R4jp2HcION1I+3Dvke0m52j43N93tmPjygsHI25iQ--hNqYU3Y9k+J5EHMWxZDjkwMnm++fqywAz6Xs7ZObmI2kmgAApLntzTTQ9i9r0jzX7WUedY7ztrvX3E+fYH4fOC2eBWIyPDToXQ+29l872PrVQhH3PuT200Pm+yf4Gx9vpbu99+DnwNvlxLjul9IGUMhZozllrI2VsnZezCzAdsDUfM2htAy+dFxnjc9qHdx+Z9jGKu4Z4iYkYHwdw7wHxNYtaj4UbebGh64MZ-6j6DisaZJjzsaea-6+YB6gFB6iYUANY3ywFQDuwS7d5qZGLY7aouBCoYL4a572gegUCs7HZBKG5ObFJJ5D4eZVKUaoEu6BbxInbY7t74IdIXbS72iy7WgK5K4Ciq7eCvh0Ca617AA643zIGG7o6Hym7cA1JgYW6DzejW6YF1J27u61BO7UYpJhbWGe7e6dqCF4H2EEHCbB4xI9JgBBCdh2EiByCXgIR5qBCjDCDiF3ZH7H4kFzaQGdxQFdwgYf6ZpQaRQIF+5zyUFKYaDsBV7sBIYiAwxyDZFS494MDFGvaKDKDjYrh-AtCAhWDAidAOBgi9CeCpg4irCdoyr+AbCmBHD6Bs4ciyHOjc5AL2C+CIwFb+KTAyBz6SHWgaCYKpLEYwDjgAAK2IYQ2i9KSEhw5AcgqwtooxiqPRMAGgR+J+zCbWeRt2PIJR8WPeNiGi1WSxIAGxzogi4R+qpxlxmmtxoR8wER-eZSMhjozoqis2u82WUA3xxmHBwSteAWLqgmNo+6nA44MohuBhRhWSluZhkekh0RcgVxRJORHAVexRpRFJLxVWxRGgKRQ4fxIA5JZRuRQJPx3Oi8KR3+cur2u8ZAkQbB44UShuDOMgw4MAq4iJhuKJtKDo6J1QmJTE22HSsWn81xn8txVJDxNJtxJWDxGgGx9iucLJbJtJnJuo3JC8GW+JQoUJbmMJppopJ24pe4h2rpnBapJJZJNxzxup1o+pzxhp7x+x7qzJEJUA-xTxHJMATAYR1poJ3edp4GDpaBh8zpAWXpSJ9OHpzoOZhubqpAhZPpGp4CWpB8u+7SOKb6Mqaq5mtKEAhKuoDgvgvSHQwgJoQQgYUwPeLIbIrJ1oKRQGdAmofIyuQo1AaoG0UoWACoSoIAjALAbA7AmImoBhbACohAIAUgsg05tAS5KobA-RWw-AIAFgiAaovwzQaq2gMg9ga58Z+gp5RwAAAhXERC+QcXAAItIMSJqNkNlmwBSHqPKPgPKEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAxgPYB2AzsQskVbAIYAO58UIB5hATncgNoAGPAIC6BAGYQE5fqFL0wiJCAwALAC5hY7WqXXw9NADywIpANYACVV3jiAvAB0QG9cyQB6D-S7rVAVy5CBEUKDABzCD9-ACMMCGJvchZ1cg9GKgBPPwN4D3gADwVGaQ9xEPIMQmTnS1tYJxBydUzpVXh4dWcAPkdSPqNOLghGdUtyIMbXdy8faKCQg0rI6LiEpJS0jNhs9tI85vpSKHpYMjzt3dyAWkg-Ydh0rJz926ibKWvD49PzjAArcg9IweIYjdS9fqkQbccHjSbOabkTzeXwBBbwULLd6xeKJejJTpbZ57A7qI4nM77J47F7wa7VYm00kM5Jfck-KnwAFAkDdEFg0aQgZQCAAN0s0EaPGIXT5INFYu6OhYCEI6gSFBoADYkAAmLAgAC+eDkCiUKkBOhIegM6hoXggYAyvkswEsABEuPQAO7wLh4SwAIX86nUZEDAEkbYGADIQZpxhPqAAqUngliNlnEPDAlmclzpb3uUmcfRtzTdnu9foDwdD4dIUZjlnjidbybTCEzlnslkLpIA3H0nS6xvIxRBwvQNWQ22Mc8Q884MB4J1OZ5rrqZms5h1CK2MRuR-Hm+84jIxurHiLY88fT5YoFRb+MopZzepAxX4OrOoEP1FRgEwgQgzHCSx4FML9xlYJ9iEgiB-HIMBiCgSx9GdV8zDA0UoH8PRLFDSwGBiW8M06eCzlsSwwHocJ5A-UwAEd-HoDBLAAVTGAwnUA2izD4sVeIUQNWITSxSGIZouH8dDCn9MDyVnUgiNgBgwBIEj6DI4ZyEkkCiLGU4IHExhIIKSD6EsEgwFQ58bLIFhWJnDiPX8CT6FDDMIFkmjn2oyVVNsRhbD2KB-XfMxLDFKh-FGGcM2E6DIMJGypFgR8AvIyD-GzfxIhnST-HU6zGB8CAZ0CDiAFECkIeBRngADyDMMZiEIQh6F-VyQSvPdyycsYqXCFNCjGPswAwdRZOaAAKB88wAaklZhHxWxaAEp90GigxgAJXgcgMgocV4C9X1-V7Sw5s23tujdPpLEcvbxmUjM+2AJ7nvGVRiB9C7ayQbNThYb6jX3Z7vtsdRAlUr7VJ+yd4B9YHbvux7EZ+up-y4VSwDmldyvCeBnEDb7seegmVygGt-QZMh9D0a4fW9RhGH9MnLD4CnKapubAf9QMEb5vnggJcgADlzWB5wUNOWAvm4DpSAZ4SuGuWnLq4WjWCQsAldsAw3lICBNbpnWGC4EnDZV65ymITdSHCc3tbJ3nRf7f06P2PRgZm-x4DwD3RfIP7UbexKMDD-7BYDEOxcZu1gfXacVPnOaRc9ynVApBAAGFTEIcw0bu+wHsOfRo-DuPrvEUHSax7OjU24Om89vCAAloHgUuMcJ9vs8r7kY4Bi264bywvHGTJSEISP9EsH13kcrDfa6Qe+c2hOfpbtvs9owmVBtJm5UDHnN8pgmQzDCNMYP7HvQTVh-dkoOd756BZaacPXdra4YgNjIO7S+fNSJQW-gAZXDiAh+P14DCT0Mie+cCfpkGCKBEuN0y4PQHqgymw9q6x3Hn2AOjd8HPW3qAymJoP6U1FOQHSCAoDA0IaPOOdDnp704YfREWAubODTOoBAzhW48OpiARUXMRpjQKOoKhB8RAKNFkokO21eZGnBvuCGfRdqVgAILs2ulnZGEd0bl25rzCRGAeA+gwFJfQXML58wkfQLmWc+Y2DsN-JEKI5jomCJiJYEQcRrESAOG4EVUJpDuB8R4ABiDwWtaywNFuSa2nRv4AH0YgMAsGWQeJp8wgEgR0JilBgYAAUSS5GzK+AAsu8B4lhrjVm1k+TExBRG8yUfvH61jbFOJDtYjUwjSbsGKYdY6TkzptNrERVqzsMLtEUJYfOkDIEtJxq1AAXhmIYKsMIIRYBmOi6hCCqHApYGI8Bc6TlvKIvp2NrG2ROnaARl8CZTJOq1YScdlHYwBZYXp30RB9B0VCKaqECLqDms+Qgp47QYDIlATIgZDGMHUVCa0S5gIIC4DQGIOkoIqigr+FSMhlBYBQEgXA1xqX6kNCaM0igaA5EUDyHFtpDDKGnqOW8Yx3Rx3WZsrMi5lwgAia8RkBTDxVmFRsnsfYpXwBFTtOeQ1rm2HoOYapbVIF0XUtdFAAAOAQ+45UxG1bq4gbU44GoVtdbUABWc1eixhWvgDqvVeg471L1o+PsaABBuqhAqyBGB6AwEgS0BAeDinR0NYrA5xsSDqz-pzdg30PGOXVq-QOTzrn0GLrTYgjB83vybrpCKXBgb11gCwPptDEY5sUKKegABFQOXBMjAwAAYAAE22VSYrAD8xwbp0QKCzaAfhgYABJgCeu9ba31FsHXqSNIwAom0+3gz6Fi8Nkbo2xvgPGlcw7Ty22NpAU2GauCpNbYJCthbq3+hfeDPpra9adu7b2ywg7h3WUdRSSdZgZ1QDnZYRdy6bV2vXUmywK0sBbp3eO9Cc0p0QagzB61Pr1B+oDWAVDu792kEPRbEVx6oAxtaGe76K4rY2xTarB2TsXbJMzV+3mHMuA+2ThhN+ha2Mamdh+puOzgZYFfbeGtWTvSimQsDFAn7s1WJ-V2-0-7AM-tHehsDqtl6QdUAupdeHV0EYtv6xTy1LAoe3aRxGmjyP7lJWqClNAsBIBNfS2lOBjSmhAPIVlyhU6bjINuZMnKCAnztA6DwkosKujzOK4psSHgDQ1a9d00Y77ziTM0LsGYszKpqfsdVcrQJOWMd9LW4hUjf0GGKCCBQtAUCcI4REYZy1eB9H1jAPoADMGBbzhA8HqENAhQTNc67UIzfgOvOD1CpzrIBrDwCnBoRbIBluzbW6YoMxACjbYEJYU7y3LC7dW-ycqfgnzbfqQaDAaA0CWBNYQAQ1wMA4D1F9wbOB6UYEG86r7aAUCA5wLGLAeo7OXee86yw2ogf5z1EDk1iOMAusu5YHAGA9To5hyasUWABAfbs9gZ72OYd6lUFgbUhAsDYDO5d0HLO9SKwwAILA9KBA7PqdDuzg3YzDZwCgHHGATVi4F4N2AJq8faksCgCXKAocw6wINnZe2PD8mm+EXoWbEZmDIgURr5BmuWFa7Adre3pgoj63YobI3rbjcm7rvbS9Z2qG21d2o7RNvqG9yt2oB2jsneZxdn38pbuqHu3t-nr3BudyVy9wggOsBYDO4DtAcuTVoCzwT4Xdm0Bk8Z4zk1BPycvcu53LAxfS-h9Z79vUAA1Z1H20-c+e9cJv3edlgFO9D1Q1wUAl8x9qQHwPLCDeuINqf5AZ8T-B9PxPye0Ct5r2gYnvOtc67N3r1Jhxa3FKay1tr5Btu296-1x3o2Xchrd6tj3xnA-u79+ELbe3I8xQgCjQ7x29unbnZi6R43Yzgx5QAPYC64B46Q5YBy5wGXZYCKyM7ajg644CBC56gw6YDLaKy4615fbahYCq7Y6YC15vaY6z7YF44oCwDOoYAoAK5K44BC70EmrU5YCa6rba4CjNb659IsDHCm7m6W7W6raX4eD24DbDa34Tb3577u7zZe6f5B5rZv4f6rZf4h7-6raAGXbAGqGgF3YQFx6o5c6IGxh6iz4C5mEZ5UF2YCCwBYAI6-bOGXZcHOA8G6767grqqFBjgdL1wlRjCZzWB5yqpFxWAtwYwIzfRyoajdh9ihGjIICBhVZNhBQRSWTRHlxWJzTzhFbCwhwpGVp8yLh+yHy5YZE5rYx77AzuixYVFTQBzzTpF3TOZ8zcKDx-TqxMK9yCYFohxhYqTiZ8wIJ2jII1FoJzyRHAy5zHAFyREhwdG7xYpxGaqkCnj6R9h8BYAiDqrPQwxwyHz5YoLPQ9H+h9GjE-QJFHTAx8AiBVDoKuRMAlCZBzQPGBibFgCVB0SMBzRzTfFpHHCFA4I3TOKUxTHPRmBZGFrYwlHfyRikDG6pKfw2jAzpGVBG5HZwmZi4lQmZGFC4nPQInFIxo+C2BQComUzpEYkVjRzpK4nNp8wEkwlEk7yknOClKER0SlgG6ey0mSj0mCFQBMn4k7xskFDEkYRRAIDfwXT1a8jSmCmYkYB1apBMk9KbTakYB-FzS3HKItzaKuYcBkrqiaiUogAk76hoABYsoWhVDJBcqnw0AYDEwZhZy3rYYmZT4TbbqQyWDEDqwOwRyXIwAGABkZCtQjE4wMAajCQBl0TWxmDAynb0raj+ngp9BqkWwMzcrqAsxsy8YoIMIlD0D-rlCFABnqHqBSYhpiiqABlKF1kCBig+jaLZmNGCrfTlQwDgTAx+kFCJn0DTrNmK5mqZmkDOZDq6aYbgZjnBoCAOYoJun0icY6yto+CRCkADlLlDlkbPTxKjz3oAJALwy8ylkMD-pSTlZkbOZubkoWk0A0pwHGhiAgCmAWCUp8D2k0DpZSA6CBDaDKC+JeAESMDmDhBPFgAeD-mwADpmFA6wVNJSC6lmDRYgAtAcw0CCj2hGgiBGhAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

