import shared from "./components/shared";
import { ToolbarCSS } from "polythene-css";
import toolbarTitleComponentCheckbox from "./components/toolbarTitleComponentCheckbox";

const ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";
const longText = ipsum + ipsum + ipsum + ipsum + ipsum;

export default ({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer: h }) => {

  const {
    toolbarRow,
    toolbarRowIndentedTitle,
    toolbarTitleAsSpan,
    toolbarTitleComponent,
    toolbarTitleComponentAction,
    toolbarTitleComponentAtStart,
    toolbarTitleComponentCentered,
    toolbarTitleComponentCenteredBalanced,
    toolbarTitleComponentIndented,
  } = shared({ IconButton, ToolbarTitle, renderer: h });

  const ToolbarTitleComponentCheckbox = toolbarTitleComponentCheckbox({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer: h });

  ToolbarCSS.addStyle(".tests-toolbar-themed-toolbar", {
    color_light_background: "#00c853",
    color_dark_background:  "#00c853"
  });

  return [
    {
      name: "Child node",
      component: Toolbar,
      attrs: null,
      children: toolbarRow
    },
    {
      name: "Option: content",
      component: Toolbar,
      attrs: {
        content: toolbarRow
      }
    },
    {
      name: "Option: compact",
      component: Toolbar,
      attrs: {
        compact: true,
        content: toolbarRow
      }
    },
    {
      name: "ToolbarTitle",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponent
      }
    },
    {
      name: "ToolbarTitle, at start",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponentAtStart
      }
    },
    {
      name: "ToolbarTitle, indented (without left icon)",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponentIndented
      }
    },
    {
      name: "ToolbarTitle, centered",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponentCentered
      }
    },
    {
      name: "ToolbarTitle, centered, balanced with a placeholder",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponentCenteredBalanced
      }
    },
    {
      name: "Title as span",
      component: Toolbar,
      attrs: {
        content: toolbarTitleAsSpan
      }
    },
    {
      name: "Title as span, indented (without left icon)",
      component: Toolbar,
      attrs: {
        content: toolbarRowIndentedTitle
      }
    },
    {
      name: "Action",
      component: Toolbar,
      attrs: {
        content: toolbarTitleComponentAction
      }
    },
    {
      name: "Checkbox",
      component: ToolbarTitleComponentCheckbox,
    },
    {
      name: "Option: style (colors and height)",
      component: Toolbar,
      attrs: {
        content: toolbarRow,
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff",
          height: "72px"
        }
      }
    },
    {
      name: "Themed (dark tone)",
      component: Toolbar,
      attrs: {
        className: "tests-toolbar-themed-toolbar",
        content: toolbarRow,
        tone: "dark"
      }
    },
    {
      name: "Shadow",
      component: {
        view: () => h(Toolbar, { z: 1 }, toolbarRow),
      }
    },
    {
      name: "Scrolling pane (with border)",
      interactive: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                overflow: "hidden"
              }
            },
            [
              h(Toolbar, {
                border: true,
                key: "toolbar", // for React
              }, toolbarRow),
              h("div",
                {
                  key: "content", // for React
                  style: {
                    padding: "20px",
                    background: "#fff",
                    height: "300px",
                    overflowY: "auto"
                  }
                },
                h.trust(longText)
              )
            ]
          )
      }
    },

    {
      name: "Scrolling pane (RTL) (with shadow)",
      component: {
        view: () =>
          h("div",
            {
              className: "pe-rtl",
              style: {
                overflow: "hidden"
              }
            },
            [
              h(Toolbar, {
                z: 1,
                key: "toolbar", // for React
              }, toolbarRow),
              h("div",
                {
                  key: "content", // for React
                  style: {
                    padding: "20px",
                    background: "#fff",
                    height: "300px",
                    overflowY: "auto"
                  }
                },
                h.trust(longText)
              )
            ]
          )
      }
    },

    // Dark tone

    {
      name: "Option: content -- dark tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRow
      }
    },
    {
      name: "Themed -- dark tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        className: "tests-toolbar-themed-toolbar",
        content: toolbarRow
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRow,
        className: "pe-light-tone"
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRow,
        tone: "light"
      }
    },
  ];
};


