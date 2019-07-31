import { ToolbarCSS } from "polythene-css";
import _toolbarRow from "./components/toolbarRow";
import _toolbarRowWithTitle from "./components/toolbarRowWithTitle";
import _toolbarRowWithTitleAtStart from "./components/toolbarRowWithTitleAtStart";
import _toolbarRowWithTitleAtStartIndented from "./components/toolbarRowWithTitleAtStartIndented";
import _toolbarTitleCentered from "./components/toolbarTitleCentered";
import _toolbarRowWithTitleAsSpan from "./components/toolbarRowWithTitleAsSpan";
import _toolbarRowWithTitleCenteredBalanced from "./components/toolbarRowWithTitleCenteredBalanced";
import _toolbarRowWithTitleAsSpanIndented from "./components/toolbarRowWithTitleAsSpanIndented";
import _toolbarRowWithCheckbox from "./components/toolbarRowWithCheckbox";
import _toolbarRowWithAction from "./components/toolbarRowWithAction";

const ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";
const longText = ipsum + ipsum + ipsum + ipsum + ipsum;

export default ({ Toolbar, ToolbarTitle, IconButton, Checkbox, h }) => {

  const toolbarRow = _toolbarRow({ IconButton, h });
  const toolbarRowWithTitle = _toolbarRowWithTitle({ ToolbarTitle, IconButton, h });
  const toolbarRowWithTitleAtStart = _toolbarRowWithTitleAtStart({ ToolbarTitle, IconButton, h });
  const toolbarRowWithTitleAtStartIndented = _toolbarRowWithTitleAtStartIndented({ ToolbarTitle, IconButton, h });
  const toolbarTitleCentered = _toolbarTitleCentered({ ToolbarTitle, h });
  const toolbarRowWithTitleCenteredBalanced = _toolbarRowWithTitleCenteredBalanced({ ToolbarTitle, IconButton, h });
  const toolbarRowWithTitleAsSpan = _toolbarRowWithTitleAsSpan({ ToolbarTitle, IconButton, h });
  const toolbarRowWithTitleAsSpanIndented = _toolbarRowWithTitleAsSpanIndented({ ToolbarTitle, IconButton, h });
  const toolbarRowWithCheckbox = _toolbarRowWithCheckbox({ ToolbarTitle, IconButton, Checkbox, h });
  const toolbarRowWithAction = _toolbarRowWithAction({ ToolbarTitle, IconButton, h });
  
  ToolbarCSS.addStyle(".tests-toolbar-themed-toolbar", {
    color_light_background: "#00c853",
    color_dark_background:  "#00c853"
  });

  return [
    // {
    //   name: "Option: content, before, after",
    //   component: {
    //     view: () => 
    //       h(Toolbar, {
    //         content: toolbarRow(),
    //         before: "Before",
    //         after: "After"
    //       })
    //   },
    // },
    {
      name: "Child node",
      component: {
        view: () => 
          h(Toolbar, null, toolbarRow())
      },
    },
    {
      name: "Option: content",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRow()
          })
      },
    },
    {
      name: "Option: compact",
      component: {
        view: () => 
          h(Toolbar, {
            compact: true,
            content: toolbarRowWithTitle()
          })
      },
    },
    {
      name: "ToolbarTitle",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitle()
          })
      },
    },
    {
      name: "ToolbarTitle, no icon at start",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitleAtStart()
          })
      },
    },
    {
      name: "ToolbarTitle, indented (without left icon)",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitleAtStartIndented()
          })
      },
    },
    {
      name: "ToolbarTitle, centered",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarTitleCentered()
          })
      },
    },
    {
      name: "ToolbarTitle, centered, balanced with a placeholder",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitleCenteredBalanced()
          })
      },
    },
    {
      name: "Title as span",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitleAsSpan()
          })
      },
    },
    {
      name: "Title as span, indented (without left icon)",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithTitleAsSpanIndented()
          })
      },
    },
    {
      name: "Action",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithAction()
          })
      },
    },
    {
      name: "Checkbox",
      component: {
        view: () => 
          h(Toolbar, {
            content: toolbarRowWithCheckbox()
          })
      },      
    },
    {
      name: "Shadow",
      component: {
        view: () => h(Toolbar, { shadowDepth: 1 }, toolbarRowWithTitle()),
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
                // key: "toolbar", // for React
              }, toolbarRowWithTitle()),
              h("div",
                {
                  // key: "content", // for React
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
      name: "Option: style (colors and height)",
      component: Toolbar,
      attrs: {
        content: toolbarRowWithTitle(),
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff",
          height: "72px"
        }
      }
    },

    {
      section: "Themed",
    },
    {
      name: "Themed",
      component: Toolbar,
      attrs: {
        className: "tests-toolbar-themed-toolbar",
        content: toolbarRowWithTitle(),
        tone: "dark"
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Option: content -- dark tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRowWithTitle()
      }
    },
    {
      name: "Themed -- dark tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        className: "tests-toolbar-themed-toolbar",
        content: toolbarRowWithTitle()
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRowWithTitle(),
        className: "pe-light-tone"
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: Toolbar,
      attrs: {
        content: toolbarRowWithTitle(),
        tone: "light"
      }
    },
    {
      section: "Right-to-left",
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
                shadowDepth: 1,
              }, toolbarRowWithTitle()),
              h("div",
                {
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
  ];
};


