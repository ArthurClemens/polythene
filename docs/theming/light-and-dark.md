[Back to Theme main page](../theming.md)

# Light and dark tone

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Mithril example](#mithril-example)
- [React JSX example](#react-jsx-example)

<!-- /MarkdownTOC -->

A component is rendered light or dark with option `tone`.

* When not set, the component is rendered normally, assuming a light background.
* `dark`: the component is displayed inverse, with light details on a dark background; this sets CSS class `pe-dark-tone`.
* `light`: dark tone is overridden so that the component is rendered normally; this sets CSS class `pe-light-tone`.

Note: Because the background is not part of any Polythene component, you need to set the background color yourself. Then either add option tone: "dark" to components, or add class `pe-dark-tone` to a component parent (or the background).

<a id="mithril-example"></a>
## Mithril example

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEAMwEskZUBtUKTAW2TQDoALAF0fmPSk6IBqEAB4YYAE7lsnAAQxJYALwAdEF064UAeh2TMAdwDm5Tq0iMdAQUmd2AV0kBhJM1g7sCAJ72hiHUZMGEFJT0wwAGtMY0QYTx8-KEQAWkYzdml4HXxyEIT4X3Z-NIyslJDMKHxMeGhEVgArGHUAPlEdCWlZVtUocSkZeUUVdU1tPQMTMwsIK1t7J1dEd3ivQqSAoJDEMOwI6Ni1xOLklLAYeNz89aKSi5gKziqauuSmlpB2zsGevr48EgwJxyNBqGgAEwoAAMIAAvkR6EwWCAPnxIAIhJwRHo5ORGF47HJgHIAEIOTicaByOFyUiSOZydS3TalexZdQAbj6GJCxLJFKpUBpcmUchZp0Q3KgPLB8ms2GwouJfTkcgAbuREIYUHIABQASlFrSZwrVckYevUrGwqQARoLoCkGYZ1EQ5DRVea1Zb1DB9lAbakapJIikhYg3V7vT69eTKdB3cBozG1QY8gRdZxJA5EEQU6msHbEPBdeoACKYUNRs2puEGgtyA352vmy3xoVJxtpzAZ-BZnN57tyIslssgSvV4jDiPjkORdSN+st1Ptx1QLut73pvD9uTZ3Mr1MjzDF0tMkAAGXIxi4NeP+-q4-gN7vICXDdbAF1P3DpX1GFYRgIAcAQ9XwCAwAcdxzDtCB8G8d0FWwA1pXROZsEoXYRDtU8SwBEtEGBUFYBEABGAB2FAyIAFnhREQAYZgRAsS50MxYQ0DghCVTNXComMBlQPwc4EAgSRdQAYgAZlk6U4T6WYOPkZMzUgOoJLkSTSB0+SCKBEEwREGjqLouEvxIF8oEicE6EY5ERHSdlKD4JxeDQcYYF0HRQOwSJjFmKwnMySgAAEyNYCKADZAjKSg0RIThvFtEQuiGeEvzhIA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To render a button on a dark background:

```javascript
m(".pe-dark-tone",
  m(Button, {
    label: "Button"
  })
)
```

or:

```javascript
m(".some-dark-background",
  m(Button, {
    label: "Button",
    tone: "dark"
  })
)
```

To render a normal button on a dark background:

```javascript
m(".pe-dark-tone",
  m(Button, {
    label: "Button",
    tone: "light"
  })
)
```


<a id="react-jsx-example"></a>
## React JSX example

To render a button on a dark background:

```jsx
<div className="pe-dark-tone">
  <Button label="Button" />
</div>
```

or:

```jsx
<div className="some-dark-background">
  <Button label="Button" tone="dark" />
</div>
```

To render a normal button on a dark background:

```jsx
<div className="pe-dark-tone">
  <Button label="Button" tone="light" />
</div>
```





