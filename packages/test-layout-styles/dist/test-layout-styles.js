(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-mithril'), require('polythene-react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-mithril', 'polythene-react'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-mithril'],global['polythene-react']));
}(this, (function (exports,polytheneCoreCss,polytheneMithril,polytheneReact) { 'use strict';

  var blockSize = 40;

  var styles = [{
    " .block": {
      "min-width": blockSize + "px",
      "min-height": blockSize + "px",
      color: "#fff",
      "text-align": "center",
      "line-height": blockSize + "px",

      "&:nth-child(1)": {
        background: "#311B92"
      },
      "&:nth-child(2)": {
        background: "#4527A0"
      },
      "&:nth-child(3)": {
        background: "#512DA8"
      },
      "&:nth-child(4)": {
        background: "#5E35B1"
      },
      "&.fixed-height": {
        height: "90px",
        position: "relative"
      }
    },
    " .vertical-blocks": [polytheneCoreCss.flex.layoutVertical]
  }];

  var createBlocks = function createBlocks(renderer) {
    return [1, 2, 3, 4].map(function (num) {
      return renderer(".block", num);
    });
  };

  polytheneCoreCss.styler.add("css-classes", styles);

  var genericTests = (function (_ref) {
    var h = _ref.renderer,
        layoutComponent = _ref.layoutComponent,
        createBlocks$$1 = _ref.createBlocks;

    var blocks = createBlocks$$1(h);

    return [{
      name: "Should be aligned horizontally",
      component: layoutComponent(h(".layout", null, blocks))
    }, {
      name: "Should be aligned vertically",
      component: layoutComponent(h(".vertical-blocks", null, blocks))
    }, {
      name: "Should be stacked vertically and inline",
      component: layoutComponent(h(".layout.vertical.inline", null, blocks))
    }, {
      name: "Should be reversed",
      component: layoutComponent(h(".layout.horizontal.reverse", null, blocks))
    }, {
      name: "Should be justified horizontally",
      component: layoutComponent(h(".layout.justified", null, blocks))
    }, {
      name: "Should fill the space",
      component: layoutComponent(h(".fixed-height", null, h(".block.pe-fit")))
    }];
  });

  var layoutComponent = function layoutComponent(content) {
    return {
      view: function view() {
        return content;
      }
    };
  };

  var mithrilTests = function mithrilTests() {
    return [];
  };

  var testsMithril = [].concat(genericTests({ renderer: polytheneMithril.renderer, layoutComponent: layoutComponent, createBlocks: createBlocks })).concat(mithrilTests({ renderer: polytheneMithril.renderer, layoutComponent: layoutComponent, createBlocks: createBlocks }));

  var layoutComponent$1 = function layoutComponent(content) {
    return function () {
      return content;
    };
  };

  var reactTests = function reactTests() {
    return [];
  };

  var testsReact = [].concat(genericTests({ renderer: polytheneReact.renderer, layoutComponent: layoutComponent$1, createBlocks: createBlocks })).concat(reactTests({ renderer: polytheneReact.renderer, layoutComponent: layoutComponent$1, createBlocks: createBlocks }));

  exports.mithrilTests = testsMithril;
  exports.reactTests = testsReact;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-layout-styles.js.map
