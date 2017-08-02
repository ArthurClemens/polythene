
export default ({ renderer: h, Search, SearchField, Shadow }) => {

  Search.theme(".tests-search-themed-search", {
    color_light_input_text: "#0D47A1",
    color_light_background: "#BBDEFB",
    color_dark_input_text: "#eee",
    color_dark_background: "#333"
  });

  const Block = {
    view: ({ attrs }) => 
      h("form", {
        style: Object.assign(
          {},
          {
            minHeight: "130px",
            overflow: "hidden" // hides top and side shadow with full width search field
          },
          attrs.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" },
          attrs.fullWidth
            ? null
            : { padding: "8px" }
        )},
        h(SearchField, attrs)
      )
  };

  return [
    {
      name: "Option: textfield",
      component: {
        view: () =>
          h(Search, {
            textfield: {
              label: "Search"
            },
            after: h(Shadow)
          })
      }
    },
    {
      name: "Option: textfield, buttons",
      component: {
        view: () =>
          h(Block)
      }
    },
    {
      name: "Option: textfield, buttons, fullWidth",
      component: {
        view: () =>
          h(Block, { fullWidth: true })
      }
    },
    {
      name: "Colored field",
      component: {
        view: () =>
          h(Block, {
            style: { background: "#BBDEFB" }
          })
      }
    },
    {
      name: "Theme",
      component: {
        view: () =>
          h(Block, {
            className: "tests-search-themed-search"
          })
      }
    },

    // Dark tone

    {
      name: "Theme -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h(Block, {
            className: "tests-search-themed-search",
            dark: true
          })
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h(Block, {
            className: "pe-light-tone",
            dark: true
          })
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () =>
          h(Block, {
            tone: "light",
            dark: true
          })
      }
    }
  ];
};
