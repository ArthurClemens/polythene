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

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAZhAgM7IDaoAdgIZiJIgYAWALmLCAQMYD21NvEHIQAHlI8AThAAObAASkpPALwAdEOzazSSAPT6ptAO4BzCGwz8w+gIJS2LAK5SAwggbVS+2X1gAnk7C8PrU8AAebL60PADWtGbwPn6BweEAtJBOMrD6UBCk0alBLCFZliy5GUW01FC0sALwGABWpJoAfGL6kjLynerUEtJyispqmtq6BkamFlY29o4u7p7CKf6lIWGRxbEJSZtpZZk8pD4FRb5b6fAZ56Q1bHUNTeFtHSDdvaMDQ0NuCBSPAEDw2BABOQmFgkAA2AAMIAAvngaPRGMx2kD+IJhGxRIYIGA-I4FMAFAARYwmeBSPAKABKtEK8CgACFnGw2AIGQBJXEMgAyhTYwtFABUSPAFMiFIQpHwwApNCU7hUciRNENcUVyQpOdyBABxRXOWQMw086gMuLwAKkBlSYRQOl02UKVQKNWneAAbiGhgUxNJigpVoEbgAylGPQqlSqQD7yo9tdRdWGDVzrdHY3KvcnwrmA9QhhHqLmMLQYFG2AEEAAKTQYABG2YEGTMZtkGWCDCgvb4ZjMCE0DOAQwU8oEbAA+qQIAAveBIKdr9cbrAADjwk+nglntIgZnYq4355wCIRu+oU-4TSks9gx-Ys5bBy7fGc9VXmgAxIQgFjkMyIAJQljqUKKG2RrUAA8vIpCegoFB7hOt5rtAv4gJYjQQDwwEYVOsC0C2oLYXyhHrkU9YruSe7roQM61rR2G4c+BEgAxsp7qiaHcVhiYtv4UBUWuJFkbA2HsmJU40Qgq7oeeTGCAA6vAL5sKuaBXtxyK8TeU5KZhUDYd+rpSM+4SyQoEnkYmACqNnyXRxnrsJUgWeyfBGmA2EAEyyBESj+NACg8K4zqCG4-h8FINlTmAtBSBY1Deb52EZIFERpuu+kYXxGFucGpmJvecU2XZUmJnYzl1gp9FEWu5VSNhzqiVxTX5VOhUALoQemUEKHYsiyMhxkCBA1CWKuABu1B8K6nqdI164ZkooLwOCbLlshYAYEUzr0A2wBgSW65wS2rRbVYtAXMe1ANvNi0tLUQjjtxcmbdtHLtjaengQZe6zRA8AmKuJ1KC8QiyqBy3cWADblqaX4WgoMHWghbCkBgSWyA2fCIfDTWJUjf0fST4mkfZhPYxgVWGeeCh7MYqnQHRbBSM48CM+eHkWaunPc7zG5TXEq6EI0IIi2tJEXAAchi2EYx2n7mr2ZT9oOw6jtwn1rkIUQsQ1tM4y5MtriCYJCKVpsYGFqiO1DtBCAd302+WDagfbUAW1O8CzfieirUzU4CDwHHiwoXvLc7rtWzdO1-QTiGgfrPX62B3GgWn1DIgN+1gF+ggNlAfARV4VjCVAAQMiNsiA9QOJKrI0pSKI76SUCCfgpC3iiAArFuSBYAAzCiaIgHQDCiNYFzN3iIhMCivUEFZcTQlQU8YqI2RVCQAACJFCEUQKuFwTDTHohjfrIcRmNYSr6HvuQH1g2AYHCz+VLknxAnWshMR9DGBPdEM8mAvxIM8I6YAj4u2SASAg59RBX1mLfe+j9bCQNgNA+A9A34fwRL0TmeD9rYgIAAoBfwCTIl6siIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


~~~javascript
import m from "mithril"
import { Button, ButtonGroup } from "polythene-mithril"

m(ButtonGroup, [
  m(Button, { label: "One" }),
  m(Button, { label: "Two" }),
  m(Button, { label: "Three" }),
])
~~~

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
