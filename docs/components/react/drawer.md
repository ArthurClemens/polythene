[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for React

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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAJhQAEYAMxbKXS6UAFhAAF8iDx+IIQBTpJBZPIxIoDfNNMBNAARciYADuiHIRE0ABk2PMna75gAVDiIJ0ASQNToAygA1ADiAYNACF7GIxNAnQAlTBugix+OJzReiAIHw2TRqzT6TQbbEAbnpUCsmmDXoAgkmvZoAHL10P+8P1r3+gDyLZd-rrVdNLR9SGLmgAFBaxF4kE62EHNLxmf65HwAMKqMBaNUASmLn00miUnrE48QtRPJ7nYiQ+mAd6QauvN5YlFkj6Ugeg1LD4aaAachfsAS7QEWFjUhYv5QFUr5QDe2gQMyDqYD4SBvieq5sO4mBztAmg1koJYJkBuxyJomArpgzK4fhYqtMUmGITeiCobIMCPsAWGaIYCZQNuS7qCgNFrhuQm7rxaoIfxUGVlAtSjq2tH0QRUDnpOM5ieu4KSXuh76J8-Fnm6dKsSZl68fxq66VuO7qI+tkSQ5CFIbe86IIU-pQD4EAJMYvEnuBUDfjAzLuJotrsnYhQSsquRlLh4hxQlICaHRiC2tG-mFLQmj5fFmjxc82D4SImgcsYACy0oAJyaLKAASypCHVdVgFs0pCEqBVdW1AAcQgDXV-V1QNxXOrKmj1WA+Xdd1A0TRKM1tQ1EpNbNC0FcVWxtbtEqhgArHN-VKnto0SgqCoAF58PNEoiFsypzatABsb39bKR2NVs02yjAf1fcqQPNa17XHZtdXMtKtA3cYUE0hF8G8VBvFKFZrEnjZtF2fpTm4y5wlue5z5ecYwYLOQuj4IFWM3iFYURVFMUiKliWIMlYjs+lmXZblxj5YVyrFWl1JlXYlWFLVK3SgA7EIEpy860pDarxXSvA-VvSDCu0LKzoSitdWK8qWsK-Ve1vdKKsrcbPUNUNb3Tfb8XwEdQjKm9mitXLBsewNdvSvDICI68yMkyeaP0xjvrWWIzl6Q5BPiUnxNBZoZOFMGRqaHwqbwHT7lsgaTORdF+CxcYJXpUl7gpdXaUZWwWU5QkeU7UVNfi+VUs1RKQi0NKGuG9N0p24Pw8uzNtDwNKP1XfPxUh2H4XuCj9PR0hscsUhOOp-Zwkp3jrkZ1nxjWpgLChEX7mM8A9TMxXVcgDX2ic-X3ON7kfNtx3wui1Kr3KqIBqoSm6u1TQA1TpCDlldIQso5ZfSOhdEG3VlbjxmsVNqP03oIM3APWUE08FvQXpoBWEplpQJhrQV6C19p22KiIaUb0wDbUKhdA6WtJ5dThjLGaBtZSwJFgrAaItMGyngENCU3tWpiNtgIle0E14byQlvU8FhzxVAUrUGsABRFslpWztk7N2PsA5nRDi9FWGsdZGzNjbB2LsPZ+yaAAOr+i9E1bMvZezOmjI2Ec0AzQhWqvIewAFJyP3LqzHm78uZxN-gLEAQtRaAN5BLCqIDqpjwGswgazIFRNVlMyCUd1aBbCOvkwpG0SllPulsOWpT8mhjesUpRSN146KgMpJoMB7B8CidgKozoIC6EGX0gZlUEBjNaF4KiAgxBOlNIgfYFRHBUSZNgN0S41CRUQKoJZrQCDTM0JzewMA+AQHwJncEERyBsh6eydk9hZCaDjJoLAfldBnJaPgGZPz87uF4FRVQABHewmAhCaAAKotHkGwQZmAbl8DUIijKCL+BOghW6FcEB5jkHsDcxIDowBeAYoRew8AsB8EgJ89CYzcVQB2e8loKw2A4uwGchIZzqKQD4Fc-5QFgmIAhfhaFlp7C4swHGRAbJCU-P+asB5ag8iIGwLoGY+AHTzNVcyBA9hmj4TlahQ5Zz4RAQ4PAKZSqxlysQPYTQLB7CeHwiuKlWBSw2DYPhRw0K9EJDAOquQGyYBqBaBAMAYBMCrPFS8YZCllK3HcF6RILQSyMhZFUMCuABlqhzf0vgao+RZu6fowxxinFmNcR4rxPi-EBKTCOLAwQVJ0TwupblIF8AwE0EmM4+whCbggHwCIsw3k8UUqxUchL9hjKnBqiAuBDyTqQv07ADoF2UGXQpJCdg3RCCuJREsq73IwBEBAW0okWArDwNJXdhYqwnl0EsTdK63z8WUonQ+u4tKGSqJnEQB6QiU2NTOc9l7r23sQAeB9J5lIJjzDYJMl7JzUAzj+GMcYBIZ34uoRAkRCghVvnvOcpdgAWjXqJC0wEjSiVCeEyJRYZIZxPOxI0XEKOsb4gJfSokpz-sA8BiooG5DaQg1ezQABCfdmQj2IEPRe20hZ9zcZY-TKOVQiAYf5LhsQ+HCPGDJiRm8n6W0wBbNqQoG6tiIfgPmcgAB9RzxmQAZyqD6e8iAS0Cl4owODaqxCOEQlOeOmbWTzBKF5LjGmbwoQdOkSDfETDsm1YpNzsWZLHncpZXM9mCzfO1eQbNdmHModtMWiwOYkPFe4+FpiUXuLcZPBEMN6lRLGHyAxVCxhtOxaQvF8giXJP-FS-IXram1TZeLiZfkDWHwxeLsXJkMAUiYEiB1kA6REgTf6+5Ou4hNvfVoNgAKxBms3nzLudwlBXn4E2wAYhYM93bS33KQGVY92U32TPFyyxdkyl97TkAu9jMQwAhCQ9k0IRduBI5vZvBJx80P5OKcvfDhHlV2RNXZNFgTR4hNyZEwsMTlGlNQfgHgFTGOlvTYRyZSz7aKUaTMqD0zCdCZp13I+fHRlCeHuJ2BsnSWb2U7lQeGnb31GY5eEDh0dO3v1ciwt09mOTyDeG5toD+A0uvbVyebbCRgw6DUCJAqfX9cG6QAkcMlBJP0DZyeZ+IhNuw1oAAUj15j-7e3SNK+YtF1Xluyo672ZtiUJ2zuO8LFN6P-FgDJtTQkMQkuls+YV2niw-IM-byz1mureffOxfT7xfcD6Sa1DVA+3RFhawNibJoesAAFJvVokz1jcXoptU7nBwl7fWbA2A5cPLTfIHtfaB1iCHSOsdudJ1vhnfYOd5At1LpgO++m67N2w-XwFlHJO5UnozhJind76ZV7fLJViL6iv46D7oIL5AQs6fz3tpQKY0z4AzDh339KfAHOziU1+3cnY04ia1-3V0Egcn40ExR0F1J1aHJ0zkJXF1U1-3Uylxz1PGHwuwhyhyA0yB31TxPCRyfAIMPQPzRwqwuyZHwBx21R51gPIJAwP3EyQNFypwl24ywIZ1Ug7TFE0m-XxmAF5wAzgLEFE0QDYJF2g2pyIiwNlxtGBwzxL3pjL0v0rxsVrwMSMWb1b0tHb07272xh6WCRaAHy5RLFEL4lYnCzp3q172CEswEE5FQygG5CvCpAw2oh0D0A6HjC6GBF6GcHBAGA8ChF8H8ECDLEJG1SuTCF2H2AsAeyzyUIdFyCpncAqEKEcwwkWHUGqBzjlVvQgFEibyRFiCdVmX7XOE0C2CtDSIeTiIgBeEwHsML3sLm0cIsys060vWqBf1ZG6OcPJhAFcyqCbwdHznHT+UaNUOLgcPMxGMKH5Vn1kAGLfxwN-w3XIGmKNAu3PWRUvUtGDTZmAGlFjz214KZ3Uk0ml3ckULtHlwww6PRleJji6KWN6JADtw2IWM+L72WKM08mqAsMqjmPeP+JZCAi+JcOMFWLWHWK8LfwsK2Mx3YASAIAuyu3UHwG3QOJECONtBOOaDOIuPkJeOzzeKpI+OhOGO+N+ORKhKGNhNGPGKbwuSyQhJpOZJhMBO+IRJmL+LT0ZzUjFGxLGSKwu2wE5IpOL0hJvHmMVIBKcIZP6KZIeJVJ6LhLGJBKpGqjRXBKePICVO3i1KBPQFHURJ5AUNFP4OgAlPIClO2M5Iu1RWZTlIWIVJPCVNUNqBqP2EtF7GqiEBv03TfCUDBKggt2mTAAGSNA8AqD0X6FkGjEiH9HwFCx+NzB5DQLL31Bn19HIEUHzH-ykBIGFFWXUi4DQBYSlHAXVE1BAF4AEEUCyGCALMNAUDQHVGYBAFUA0BrOoC1FbLQESKn21VNSXVcCn0eGkEcCkDQABCBFeWwHUHcCyBHQsHHIsAGXwG3MnyEEnIOWnITLnJIGKA3UUFpEbJHJ1HHK2H+T4CPPY1WGwBnL1BIAXMUGXKsFXPXM3L4APPOEfK3L3OAv2FAufOPLfI-PPLGMiCvLQBvLVEYDVCAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

~~~javascript
import React from "react"
import { Dialog, List } from "polythene-react"

const NavigationList = () =>
  <List>
    {/* see Try Out example */}
  </List
})

<Drawer permanent> 
  <NavigationList />
</Drawer>
~~~


<a id="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

~~~javascript
import React from "react"
import { Drawer, List, ListTile, Button } from "polythene-react"

const NavigationList = ({ navItemClick }) =>
  <List>
    {/* see Try Out example */}
  </List
})

class AppDrawer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <Button
          raised
          label="Show"
          events={{
            onClick: () => this.setState({ show: true })
          }}
        />
        <Drawer
          show={this.state.show}
          didHide={() => this.setState({ show: false })}
        >
          <NavigationList
            navItemClick={() => this.setState({ show: false })}
          />
        </Drawer>
      </div>
    )
  }
}
~~~


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

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAHAOgGxoDQgDMIEBnZAbVADsBDMRJEDACwBcxYR8BjAeytbwByEAB4S3AE4QADqwAEJSdwC8AHRBtWMkkgD0eyTQDuAcwisMfMHoCCk1swCukgMIJ6VEnpm9YAT0cheD0qeAAPVh8abgBrGlN4b18AoLCAWkl4GKioCBIolMDmYMzs7lZ0gpoqKBpYfngMACsSDQA+UT0JaTl2tSpxKVkFJVUNLR19QxNzS2s7B2c3DyFkv2Lg0IjCmPjE9dSSjO4SbzyCnw20+HTTkirWGrqGsJa2kE7u4b6BgdE8gA3eTQdQgGgyGQdLpA9pcEAkeAICoQfhkRgARiQWAADCAAL64ah0BhMVrwvgCISsEQGCBgXwOeTAeQAESMxngklw8gAQk5WKx+DyAJKUnkAGXyrEl0oAKsR4PJ8fICJJeGB5BoijcyjkNANKQVmWyOVyefzBcL5GLrVKCrKCgqEDyAMoANQA4sr5Cp5DrjvAANwDemMhS0QEQUw0Vioqj2hRqjVapihGhRmNx-jpWDSjQhqiGtEKWQkJyav2iGTtCW8LKassV+RQPz1xQWeQkmXyI3wCrwVguLt5GT5CDcCBUUzyJEWHmIqAt3iziBOEhgXhLwQM9tTyd5KBOATyAXyWA0ABG9aVg+XDSy8jACVoXbzAEcnDQMPIAKoKIR6RHJ8pyAwFALoHlP3yeQqF4ApJCcJcIi5ScnmzKhT1gC8wD4c8r3rGCqHHU8FHqCBoJkWdwlnGhew1TdW3orx4E-WMf1ZJwYJoAUlQgRDH1bB8QUwrIZCyY4oC5Tsp3kQE-CcORYyVcC8wAs4lUnbDmyEm9ZycVUnHMWNYKcbC6JkGhpFjFwfwAUXCbh4DkeBhxIKcFF4bhuBoft2K6GtCyNBRXlMOUdl9eQAQgQF2mAJswHxeKdArJKEvxGEYvaQtDQvM55FsSFqMEWoSHkAAlcpLFcDVfDCE9gD+TDmIQpwKnrAAKcTeB0ABKZkBnkIbFEUrkuvVPrC2G+RHHyDBqkESLGua6aSGYXhjHZEwuSQVV6kRQbhvxKblSaoaslqMb+uW6bgsUdbNrNSRItmkh5vQpo1o2rbOUkE7zsHFxMI6w7pui4FuDykgADkSTBSzEg6UHpqioFeyh2H6DBKAnrufgSsqYwjEhLkkZWlGhtEH7SfJimhshmgzkx+AwQ3epYCqKR4CEPHwMkdIce2576DyCtOayHnIGIgWnvwyREnF7mqHSAgGljKdTBloWDVpumZC5Z96tYZG6fujaVGAL7HqF-ETbpykCYtyNo3V-hEw6m7TZR5hngQdwJ1iXaOv6lR2hm5g5sRVhXQ+j2zet37doIfalXxXq7YptPbd1inDwACWgFngGD30w9e+bBxj5S46t6nJCTlPlV6lUDEUfwqG4RQPvkYwLGYejdyNjPhr0foc+G8H0cZmG4Y0B3qTJr2J8tIUi3HimjHyeAoGHinQQ0K2td+9JLwFVedaX6aL0vJEwVdB6L8vob4HAgQSAtz2n6G-h-biIOQ7LhHN6Ucq6CBrg9Ouu1WCIVTundeKN8TZy-i2fIV4EBQAtrXJ6SDL6j13hPZgGJ2gKlYAgLohCx5P2AKFcKkQcGm0yrFYejDKEoxYcjXqJ1s7Z2LF4BQm5jysGhluJUfpWzcArNSDAn4uT+FdEifsQpJAgxAAAYghFCEAnCBiVRyKyAA8gAWQwBdKSyjRCFSoqPHkAiBDCKktoqgFJaqKkkCIS8V4kTwkRMiDC6IQA4iQAAJgAKwEiJCAWg9ARDOyzPGXM0p3jOKpMIRgd0WS2ioI6HsiZnTwDdF6H0foAzBByh3EsIIjRLUOoLAgrBdBRRIICGc4QOBeDBJMaYxhukYGMAAZgwPWUweggk4jGd0ZpGge7QEcGCIJKApklGjGwOZCyQByQgPAYwvJeDhDBDieQBz5nyHmdCSyjgWxgkMUEjEGAACcdz5BoG4DidIGAADsQS3l9PeekW5fSQlvLuSgP5HyJQYiCfIDEJz7khPkFgDAfTXBBMRWgeF2A4WQveRgIJaLIVoEBBiHELyoUYFuY8yFlLCFYG4Lc6FRygUnPSEEjmGAcQYj+TiAAXoYiFUK+kSgGe8lA8hsVoBFXyvpsBMBBKwPIFAGBxXgshRiPpXKNCjy6E00w7RcCHSnNecIu1xDNPkK02A7SJiChkF0np-TBnyxGWMnEEzTBTN7lAWZGhTnrKWaYFZ3q1kbK2TsvZGgDlHJFT6zo5z+4YI0Lyx5fS84KoedwUFGJ6WgruZgNAdzs14sFVCu5JK6WKrxaSh5Jy84YhLXSw5TL7lMqCe6EJLyM0cvucy7tQSuVgAORC5g6QUCluwFgUFAL5B9PSH0qdDxp3-JBdO5Nqa7mtprXcwl3KNVfG1bqw61R66NNNeay1mhrW2uML0gZQynXjO1e6mZzBVmLPgMs1gL71lRhDbs-ZDbjnRurLGONVy+UYmxUE954LMAYjxRiDmtysAguxTiAVQTIV3JxSgDm2La1vKwBiZVJz5CYdrU87As6MNYdgCEjAKA5UKveQK2jaBKUYnVSATVrr93NURLUY12qzVtPfla7Ql7r0OuGaM+9kz1keq9SAH18g-UBsU0G792zf3hv-VGtZMbgOXITSi9lJzCNBNnXy4z0LKNQpxLADEmK-mYo41xvdAxjpNQiOGFs8Bk5mQUHHH2tQ-Z5jiE3UuA0170wqXGBAkU45xlIfkyp1opxSRomnUuyNRC5MVHbRLCALYFfgPQ4asR4D+CKxYBApWhrJgEBbUQmTOgek9HFCc-AMp6Fa18ZrtXlO8D5mg+AdtYmuyiyjF+1J37AE-ijH+oXA7Kd9vAX+sQ7aIORngibd0qAVjKn6cgGIAC6ZSAZDkkJhHL+ZybrSG5eBAyNYtJAtuQY7Vh+A+UsBogIHU3s8j22AN6z4ZAdQ6oDnkaWIgAPkH9u2c3ppQ-CHq8exXdoaBFFQQ1GgUemw61QXa+O3oGt2bjhBZPpoI+GkjinKM0epirpILIO8uDD3x4To070rK06GoSeHbPLrI+HvTjQ8iTzPmIDjtnlIOdogrrUHnypFdU6GjT4X1X4Do5AFtOpHxFeq5lylrwGBan1MV6V47vUrcYBBx1Z7zdDqj0LB5pxPAXEIDcYwDxN9OD4B8Yo+M-i7nBLueE4k0TGBBHoEkt3KSaSMFbmGesCgWR11cK6V0Ppkyam1NcQMdwzg63SaaIW6fM8qmKXn4IZeyl3UvFkGgsQAAKvAPKumfNhSK6AcRBQqfX7IzfW8CDru39mkUsAhJ77w40-fG8t48nXQx281yVhI2MspaeM8YBoDAGO-gEAg2ahoeaHeOY9CVrzLkR9Sas+anNvgfMoEwNpx4uIOMepP6cPk5G15JBmIbrAIiGTnznfsjCLBADQAAIpf6SD+C7QAAGAAAuAXRGPs8LDs+OEOkPJswLtAACTACz6D4L5PSj7YT4gyDhC9TwGHTZyOKb6ujb676sD77wCH5DTH7gFizn6SygTX6SBS6gHkxSwQCf7f7ky-7-4zTP60Fk5zYoHQGyIIHIHL6oGd7oEdRSzYFPr4GEEN7EHD6kGn7yAADUUKFBVBXYtQGBNAWBOBuhRB8+hhQsS+osiUlB1BtBAw9BT0ZeTBUAe+B+h0x+F48stwPBysqsvA6s04-BghQ0c2+skghs1IYhtOURMRpgaRyMXKu0GIL+9YZiAA+kYKLA0gss1CAQkWAaoYobAcoSgW+LAFYUuJoVONoZ6rgfIAQY4UPqwIvsvs2GYRiBYZ4ZUd4YWN4goiiGiCICgIEniISOHqSFYGcMkgTCIBgAjEqJ7FofYVOqMpQSdINlyFEcYLtBHDAEICdL4O5BhLtFkBeHGOBM7gMCbrjPPAINgcTEkZFkNBcDIBeHAaqAgOECdCpqwHkWMoCMwCdPsUSjiICMYCdK-rEKYOqMeFALtKogQDiLibia8VQB9nHn8f6DvnkNOLtIcWCYdJgR0Y4LtN3kce5gMCoXkHRG0crPsXcmMh4aSVsbcILL9KSUNM+PLFOFSTiMyeMc1KoofEKVfqfFaJhHNgCUCbtHBGEFwiya7giNMX4iIOZkgIscdvgHmFQLEOiJQJEiSCIA3hUCblNg0DIJ4JYOSPgC4JwIwJMLoAYMeDIGiR9jYPaVEBWFAIYFVI6apD1K6THiACwfrCID0CMGHjaRHiACGQLBqFGUiDGVIu6SAJ6SID6dMP6YGQsJma2DYGGRGTkFmWADmc6bGQWQmaSMmXIASMdviEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If we want to make a drawer that is optimized for 3 breakpoints, we need to pass it 3 behaviors. For example:

* Small screen: cover
* Medium screen: push or mini
* Large screen: standard or floating

One way to create this drawer is to create 3 separate Drawer instances and only show them at the appropriate breakpoint, either using CSS with show/hide classes or with a conditional in the JavaScript code that toggles with screen size changes.

A simpler approach is to create a theme CSS for each breakpoint using Polythene's theme functions.

If we focus on the small screen first, we pass the theme options `cover` and `backdrop`, alongside a `mediaQuery` option:

~~~javascript
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
~~~

We do the same for the other breakpoints:

~~~javascript
const breakPointDrawerSmall = 650;
const breakPointDrawerMedium = 900;

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
~~~

We pass the classnames to the Drawer. And because we need the drawer to be available all the time, we pass `permanent` to the Drawer instance:

~~~jsx
<Drawer
  className="small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer"
  permanent
  // ...
/>
~~~

For small and medium screen sizes we still need a button to invoke the drawer.

You can find a full working example at the Try Out button.


<a id="appearance"></a>
## Appearance


<a id="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation` to [List Tile](./list-tile.md) elements.



<a id="styling"></a>
### Styling

Below are examples how to change the Drawer appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(".themed-drawer", {
  color_light_background:          "rgba(69, 45, 157, 1)",
  color_light_text:                "#fff",
  color_light_backdrop_background: "rgba(69, 45, 157, .5)"
})

<Drawer
  className="themed-drawer"
  // ...
>
~~~

As demonstrated in [responsive drawer](#responsive-drawer) above, some behaviors can be set using a theme (replacing component options):

~~~javascript
DrawerCSS.addStyle(
  ".themed-mini-drawer",
  {
    mini:         true,
    border:       false,
    shadow_depth: 3,
  }
)
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Drawer CSS classes](../../../packages/polythene-css-classes/drawer.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/drawer"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
<Drawer
  style={{
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }}
>
~~~


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

