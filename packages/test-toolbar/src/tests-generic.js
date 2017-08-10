import shared from "./shared";

export default ({ Toolbar, IconButton, Shadow, renderer: h }) => {

  const {
    toolbarRow,
    toolbarTitleAsSpan,
    toolbarTitleAtStart,
    toolbarRowIndentedTitle
  } = shared({ IconButton, renderer: h });

  Toolbar.theme(".tests-toolbar-themed-toolbar", {
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
      name: "Title as span",
      component: Toolbar,
      attrs: {
        content: toolbarTitleAsSpan
      }
    },
    {
      name: "Indented title (without icons)",
      component: Toolbar,
      attrs: {
        content: toolbarRowIndentedTitle
      }
    },
    {
      name: "Title at start",
      component: Toolbar,
      attrs: {
        content: toolbarTitleAtStart
      }
    },
    {
      name: "Option: style (colors and height)",
      className: "small-result",
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
        view: () => h("div", {
          style: {
            position: "relative"
          }
        }, [
          h(Toolbar, toolbarRow),
          h(Shadow)
        ])
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


