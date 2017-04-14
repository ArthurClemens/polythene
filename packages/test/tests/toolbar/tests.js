import m from "mithril";
import toolbar, { classes as toolbarClasses } from "polythene-toolbar";
import iconButton from "polythene-icon-button";
import shadow from "polythene-shadow";
import gIconMenu from "mmsvg/google/msvg/navigation/menu";
import gIconRefresh from "mmsvg/google/msvg/navigation/refresh";
import gIconAdd from "mmsvg/google/msvg/content/add";

toolbar.theme(".tests-toolbar-themed-toolbar", {
  color_dark_background: "#00c853"
});

const btn = msvg => m(iconButton, {
  icon: {msvg}
});

const toolbarRow = [
  btn(gIconMenu),
  m("div", {class: toolbarClasses.title}, "Toolbar with a very very very very very very very very very long title"),
  btn(gIconRefresh),
  btn(gIconAdd)
];

const toolbarTitleAsSpan = [
  btn(gIconMenu),
  m("span", "Toolbar with a very very very long title"),
  btn(gIconAdd)
];

const toolbarTitleAtStart = [
  m("div", {class: toolbarClasses.title}, "Title"),
  btn(gIconAdd)
];

const toolbarRowIndentedTitle = [
  m("div", {class: toolbarClasses.indentedTitle}, "Indented title"),
  btn(gIconAdd)
];

export const tests = [
  {
    name: "Child node",
    component: toolbar,
    attrs: null,
    children: toolbarRow
  },
  {
    name: "Option: content",
    component: toolbar,
    attrs: {
      content: toolbarRow
    }
  },
  {
    name: "Option: compact",
    component: toolbar,
    attrs: {
      compact: true,
      content: toolbarRow
    }
  },
  {
    name: "Title as span",
    component: toolbar,
    attrs: {
      content: toolbarTitleAsSpan
    }
  },
  {
    name: "Indented title",
    component: toolbar,
    attrs: {
      content: toolbarRowIndentedTitle
    }
  },
  {
    name: "Title at start",
    component: toolbar,
    attrs: {
      content: toolbarTitleAtStart
    }
  },
  {
    name: "Option: shadow",
    class: "small-result",
    component: {
      view: () => m("div", {
        style: {
          position: "relative"
        }
      }, [
        m(toolbar, toolbarRow),
        m(shadow)
      ])
    }
  },
  {
    name: "Option: style (colors and height)",
    class: "small-result",
    component: toolbar,
    attrs: {
      content: toolbarRow,
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff",
        height: "72px"
      }
    }
  },

  // Dark theme

  {
    name: "Option: content -- dark theme",
    class: "pe-dark-theme",
    component: toolbar,
    attrs: {
      content: toolbarRow
    }
  },
  {
    name: "Themed",
    class: "pe-dark-theme",
    component: toolbar,
    attrs: {
      class: "tests-toolbar-themed-toolbar",
      content: toolbarRow
    }
  },
  {
    name: "Dark theme + light theme",
    class: "pe-dark-theme",
    component: toolbar,
    attrs: {
      content: toolbarRow,
      class: "pe-light-theme"
    }
  },

];
