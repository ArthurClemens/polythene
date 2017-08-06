import { classes } from 'polythene-core-toolbar';
import { IconButton, Shadow, Toolbar, renderer } from 'polythene-mithril';
import React from 'react';
import { IconButton as IconButton$1, Shadow as Shadow$1, Toolbar as Toolbar$1, renderer as renderer$1 } from 'polythene-react';

var iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";
var iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>";
var iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";

var shared = (function (_ref) {
  var IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;


  var trustedIconMenu = h.trust(iconMenuSVG);
  var trustedIconRefresh = h.trust(iconRefreshSVG);
  var trustedIconAddSVG = h.trust(iconAddSVG);

  var toolbarButton = function toolbarButton(key, svg) {
    return h(IconButton$$1, {
      key: key,
      icon: { svg: svg }
    });
  };

  var toolbarRow = [toolbarButton("menu", trustedIconMenu), h("div", { key: "title", className: classes.title }, "Toolbar with a very very very very very very very very very long title"), toolbarButton("refresh", trustedIconRefresh), toolbarButton("add", trustedIconAddSVG)];

  var toolbarTitleAsSpan = [toolbarButton("menu", trustedIconMenu), h("span", { key: "title" }, "Toolbar with a very very very long title"), toolbarButton("add", trustedIconAddSVG)];

  var toolbarTitleAtStart = [h("div", {
    className: classes.title,
    key: "title"
  }, "Title"), toolbarButton("add", trustedIconAddSVG)];

  var toolbarRowIndentedTitle = [h("div", {
    className: classes.indentedTitle,
    key: "title"
  }, "Indented title"), toolbarButton("add", trustedIconAddSVG)];

  return {
    toolbarRow: toolbarRow,
    toolbarTitleAsSpan: toolbarTitleAsSpan,
    toolbarTitleAtStart: toolbarTitleAtStart,
    toolbarRowIndentedTitle: toolbarRowIndentedTitle
  };
});

var genericTests = (function (_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow,
      toolbarTitleAsSpan = _shared.toolbarTitleAsSpan,
      toolbarTitleAtStart = _shared.toolbarTitleAtStart,
      toolbarRowIndentedTitle = _shared.toolbarRowIndentedTitle;

  Toolbar$$1.theme(".tests-toolbar-themed-toolbar", {
    color_dark_background: "#00c853"
  });

  return [{
    name: "Child node",
    component: Toolbar$$1,
    attrs: null,
    children: toolbarRow
  }, {
    name: "Option: content",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow
    }
  }, {
    name: "Option: compact",
    component: Toolbar$$1,
    attrs: {
      compact: true,
      content: toolbarRow
    }
  }, {
    name: "Title as span",
    component: Toolbar$$1,
    attrs: {
      content: toolbarTitleAsSpan
    }
  }, {
    name: "Indented title (without icons)",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRowIndentedTitle
    }
  }, {
    name: "Title at start",
    component: Toolbar$$1,
    attrs: {
      content: toolbarTitleAtStart
    }
  }, {
    name: "Option: style (colors and height)",
    className: "small-result",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff",
        height: "72px"
      }
    }
  },

  // Dark tone

  {
    name: "Option: content -- dark tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow
    }
  }, {
    name: "Themed -- dark tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      className: "tests-toolbar-themed-toolbar",
      content: toolbarRow
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      className: "pe-light-tone"
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      tone: "light"
    }
  }];
});

var mithrilTests = function mithrilTests(_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      Shadow$$1 = _ref.Shadow,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow;

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: shadow",
    className: "small-result",
    component: {
      view: function view() {
        return h("div", {
          style: {
            position: "relative"
          }
        }, [h(Toolbar$$1, toolbarRow), h(Shadow$$1)]);
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Toolbar: Toolbar, IconButton: IconButton, Shadow: Shadow, renderer: renderer })).concat(mithrilTests({ Toolbar: Toolbar, IconButton: IconButton, Shadow: Shadow, renderer: renderer }));

var iconMenuSVG$1 = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
);
var iconRefreshSVG$1 = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
);
var iconAddSVG$1 = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
);

var reactTests = function reactTests(_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow;

  var ToolbarButton = function ToolbarButton(_ref2) {
    var svg = _ref2.svg;
    return (// eslint-disable-line no-unused-vars
      React.createElement(IconButton$$1, { icon: { svg: svg } })
    );
  };

  return [{
    section: "React specific tests"
  }, {
    name: "Option: shadow",
    className: "small-result",
    component: function component() {
      return h("div", { style: { position: "relative" } }, [h(Toolbar$$1, toolbarRow), h(Shadow$1)]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Child node, option compact (JSX)",
    component: function component() {
      return React.createElement(
        Toolbar$$1,
        { compact: true },
        toolbarRow
      );
    }
  }, {
    name: "JSX toolbar row (JSX)",
    component: function component() {
      return React.createElement(
        Toolbar$$1,
        null,
        React.createElement(ToolbarButton, { key: "menu", svg: iconMenuSVG$1 }),
        React.createElement(
          "span",
          { key: "title" },
          "Title"
        ),
        React.createElement(ToolbarButton, { key: "refresh", svg: iconRefreshSVG$1 }),
        React.createElement(ToolbarButton, { key: "add", svg: iconAddSVG$1 })
      );
    }
  }, {
    name: "Option: style (colors and height) (JSX)",
    className: "small-result",
    component: function component() {
      return React.createElement(Toolbar$$1, {
        content: toolbarRow,
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff",
          height: "72px"
        }
      });
    }
  }, {
    name: "Option: shadow (JSX)",
    component: function component() {
      return React.createElement(
        "div",
        { style: { position: "relative" } },
        React.createElement(
          Toolbar$$1,
          null,
          React.createElement(ToolbarButton, { key: "menu", svg: iconMenuSVG$1 }),
          React.createElement(
            "span",
            { key: "title" },
            "Title"
          ),
          React.createElement(ToolbarButton, { key: "refresh", svg: iconRefreshSVG$1 }),
          React.createElement(ToolbarButton, { key: "add", svg: iconAddSVG$1 })
        ),
        React.createElement(Shadow$1, null)
      );
    }
  }];
};

var testsReact = [].concat(genericTests({ Toolbar: Toolbar$1, IconButton: IconButton$1, Shadow: Shadow$1, renderer: renderer$1 })).concat(reactTests({ Toolbar: Toolbar$1, IconButton: IconButton$1, Shadow: Shadow$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
