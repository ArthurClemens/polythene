[Back to Polythene Button Group main page](../button-group.md)

# Button Group component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Variations](#variations)
  - [Styling](#styling)

<!-- /MarkdownTOC -->

<a id="options"></a>
## Options

Button Group does not have any options. Buttons are passed as child nodes.


<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAZhAgM7IDaoAdgIZiJIgYAWALmLCAQMYD21NvEHIQAHlI8AThAAObAASkpPALwAdEOzazSSAPT6ptAO4BzCGwz8w+gIJS2LAK5SAwggbVS+2X1gAnk7C8PrU8AAebL60PADWtGbwPn6BweEAtJBOMrD6UBCk0alBLCFZliy5GUW01FC0sALwGABWpJoAfGL6kjLynerUEtJyispqmtq6BkamFlY29o4u7p7CKf6lIWGRxbEJSZtpZZk8pD4FRb5b6fAZ56Q1bHUNTeFtHSDdvaMDQ0NuCBSPAEDw2BABOQmFgkAA2AAMIAAvngaPRGMx2kD+IJhGxRIYIGA-I4FMAFAARYwmeBSPAKABKtEK8CgACFnGw2AIGQBJXEMgAyhTYwtFABUSPAFMiFIQpHwwApNCU7hUciRNENcUVyQpOdyBABxRXOWQMw086gMuLwAKkBlSYRQOl02UKVQKNWneAAbiGhgUxNJigpVoEbgAylGPQqlSqQD7yo9tdRdWGDVzrdHY3KvcnwrmA9QhhHqLmMLQYFG2AEEAAKTQYABG2YEGTMZtkGWCDCgvb4ZjMCE0DOAQwU8oEbAA+qQIAAveBIKdr9cbzcKLAADjwk+nglntIgZnYq63l7XOARCP31Cn-CaUlnsFP7FnLYOXb4znqF83TQAGJCFAscDyfPgXzfM851iCEADd4E-b8zX-RMgPgLDwOoZEAEoSx1KFFDbI1qAAeXkUhPQUCgDwnB812gVdNEsRoIB4HD11gWgW1BFiQD5Li1yKesV3JA910IGdazEgS2LfTiQEk2UD1ReiVOYxMW38KBhKnHi+NgAT2X0pQ6wQVcGM3aTBAAdXgd82FXNBbxU5E1PvKdrKYqABL-V0pDfcIzMM-jEwAVTM0TLIkxj1x0qRAvZPgjTAASACZZAiJR-GgBQeFcZ1BDcfwoLMqcwFoKQLGoFK0oEjIsoiNN1w8xj1MYnypy0zRIKkULePCzQ7GiizxO6td+oE509OU+LVI6+8AF1CPTYiFDsWRZBonyBAgahLFXBDqD4V1PU6OL1wzJRQXgcE2XLGiwAwIpnXoBtgHwkt13IltWnuqxaAuU9qAbE6zpaWohHHFSpxBMEhA5dsbXcgjPIPBCIHgExV0+8zaCEWU8IulSwAbctTV-C0FFI61KLYUgMCq2QGz4KjSYWyqKZR2GubXMLjIUdnGYwQWvK3PZjDs6BxLYKRnHgCXN0SwLV3lxXlY3A64lXQhGhBLXrp4i4ADkMQEumOx-c1ezKftB2HUduDhtchCiWTYpFpmYqV134buh6-OFqiMHy1QI4JoRXsDpHywbPCw6gI213gJDBD0K6rwEHhFN1hQE4uqOodjx6UbZqi8P9xbN3wlS8Kr3C1pesBf0EBsoD4QqvCsHSoACBkttkdHqBxJVZGlKRRC-IygQRwHIW8UQsARJAAGYUTREA6AYURrAuMe8REJgUWWghgriaEqG3jFRGyKoSAAAR4oQiiBVwuCYaY9EMP9ZDiMw1glT6HvrkR+WBsAYDhCAyouRPhAjrLITEfQxib3RLvJgoCSDPHemAZ+hNkgEgIB-UQ39Zh-wAUA2wWDYA4PgPQcBkCES9HlvQl62ICCIOQX8AkyJlrIiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


```javascript
import m from "mithril"
import { Button, ButtonGroup } from "polythene-mithril"

m(ButtonGroup, [
  m(Button, { label: "One" }),
  m(Button, { label: "Two" }),
  m(Button, { label: "Three" }),
])
```

<a id="variations"></a>
### Variations

Button options that are relevant to Button Group:

* Create a wide button with `extraWide: true`
* Create a high label with `highLabel: true`
* Add a separator with `separatorAtStart: true` (normally placed at the left, with RTL languages at the right side)

Note that Buttons contained within a Button Group don't have a minimum width.


<a id="styling"></a>
### Styling

Button Group does not have styling options. Use themed/styled Buttons instead.
