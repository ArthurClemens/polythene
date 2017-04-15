import m from "mithril";
import search from "polythene-search";
import searchfield from "./searchfield";

search.theme(".tests-search-themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text: "#eee",
  color_dark_background: "#333"
});

const block = {
  view: ({attrs}) => 
    m("form", {
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
      m(searchfield, attrs)
    )
};

export const tests = [
  {
    name: "Option: textfield, buttons",
    component: {
      view: () => m(block)
    }
  },
  {
    name: "Option: textfield, buttons, fullWidth",
    component: {
      view: () => m(block, {fullWidth: true})
    }
  },
  {
    name: "Colored field",
    component: {
      view: () => m(block, {
        style: {
          background: "#BBDEFB"
        }
      })
    }
  },
  {
    name: "Theme",
    component: {
      view: () => m(block, {
        class: "tests-search-themed-search"
      })
    }
  },

  // Dark theme

  {
    name: "Theme -- dark theme class",
    class: "pe-dark-theme",
    component: {
      view: () => m(block, {
        class: "tests-search-themed-search",
        dark: true
      })
    }
  },
  {
    name: "Dark theme class + light theme class",
    class: "pe-dark-theme",
    component: {
      view: () => m(block, {
        class: "pe-light-theme",
        dark: true
      })
    }
  },
  {
    name: "Dark theme class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => m(block, {
        tone: "light",
        dark: true
      })
    }
  }
  
];
