export default ({ rootPath, a, h, Button }) => ({
  path: rootPath,
  name: "Button",
  component: {
    view: () => [
      // default
      h(
        "div",
        { key: "button-default" },
        h(Button, {
          label: "default",
          testId: "button-default",
        })
      ),

      // element
      h(
        "div",
        { key: "button-element" },
        h(Button, {
          label: "element",
          element: "button",
          testId: "button-element",
        })
      ),

      // content
      h(
        "div",
        { key: "button-content" },
        h(Button, {
          content: "content",
          testId: "button-content",
        })
      ),

      // aria
      h(
        "div",
        { key: "button-aria" },
        h(Button, {
          label: "aria",
          aria: {
            role: "link",
          },
          testId: "button-aria",
        })
      ),

      // border
      h(
        "div",
        { key: "button-border" },
        h(Button, {
          label: "border",
          border: true,
          testId: "button-border",
        })
      ),

      // contained
      h(
        "div",
        { key: "button-contained" },
        h(Button, {
          label: "contained",
          contained: true,
          testId: "button-contained",
        })
      ),

      // disabled
      h(
        "div",
        { key: "button-disabled" },
        h(Button, {
          label: "disabled",
          disabled: true,
          testId: "button-disabled",
        })
      ),

      // dropdown
      h(
        "div",
        { key: "button-dropdown" },
        h(Button, {
          label: "dropdown",
          dropdown: true,
          testId: "button-dropdown",
        })
      ),

      // dropdown.open
      h(
        "div",
        { key: "button-dropdown-open" },
        h(Button, {
          label: "dropdown.open",
          dropdown: {
            open: true,
          },
          testId: "button-dropdown-open",
        })
      ),

      // extraWide
      h(
        "div",
        { key: "button-extraWide" },
        h(Button, {
          label: "extraWide",
          extraWide: true,
          testId: "button-extraWide",
        })
      ),

      // type.submit
      h(
        "div",
        { key: "button-type" },
        h(Button, {
          label: "type",
          type: "submit",
          testId: "button-type",
        })
      ),

      // formAction
      h(
        "form",
        {
          key: "button-formAction",
          action: "/default",
          method: "GET",
        },
        h(Button, {
          label: "formAction",
          [a.formaction]: "/#",
          element: "button",
          type: "submit",
          testId: "button-formAction",
        })
      ),

      // highLabel
      h(
        "div",
        { key: "button-highLabel" },
        h(Button, {
          label: "highLabel",
          highLabel: true,
          testId: "button-highLabel",
        })
      ),

      // inactivate
      h(
        "div",
        { key: "button-inactivate" },
        h(Button, {
          label: "inactivate",
          inactivate: 1,
          testId: "button-inactivate",
        })
      ),

      // ink.false
      h(
        "div",
        { key: "button-no-ink" },
        h(Button, {
          label: "no ink",
          ink: false,
          testId: "button-no-ink",
        })
      ),

      // wash.false
      h(
        "div",
        { key: "button-no-wash" },
        h(Button, {
          label: "no wash",
          wash: false,
          testId: "button-no-wash",
        })
      ),

      // ripple
      h(
        "div",
        { key: "button-ripple" },
        h(Button, {
          label: "ripple",
          ripple: {
            persistent: true,
            endOpacity: 1,
          },
          testId: "button-ripple",
        })
      ),

      // selected
      h(
        "div",
        { key: "button-selected" },
        h(Button, {
          label: "selected",
          selected: true,
          testId: "button-selected",
        })
      ),

      // textStyle
      h(
        "div",
        { key: "button-textStyle" },
        h(Button, {
          label: "textStyle",
          textStyle: {
            color: "red",
          },
          testId: "button-textStyle",
        })
      ),

      // url
      h(
        "div",
        { key: "button-url" },
        h(Button, {
          label: "url",
          url: {
            href: "/",
          },
          testId: "button-url",
        })
      ),

      // // separatorAtStart
      // h(
      //   "div",
      //   h(Button, {
      //     label: "separatorAtStart",
      //     separatorAtStart: true,
      //     testId: "button-separatorAtStart",
      //     key: "button-separatorAtStart",
      //   })
      // ),
    ],
  },
});
