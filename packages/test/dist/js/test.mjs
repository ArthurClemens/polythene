import m from 'mithril';
import 'polythene-fastclick';
import 'polythene-material-design';
import { button, fab, icon, iconButton, ripple, shadow, styler, svg, webfontLoader } from 'polythene';
import * as polythene from 'polythene';
import { flex } from 'polythene-css-classes';
import { button as button$1 } from 'polythene-button';
import { fab as fab$1 } from 'polythene-fab';
import { icon as icon$1 } from 'polythene-icon';
import { iconButton as iconButton$1 } from 'polythene-icon-button';
import { ripple as ripple$1 } from 'polythene-ripple';
import { shadow as shadow$1 } from 'polythene-shadow';
import { svg as svg$1 } from 'polythene-svg';
import { styler as styler$1 } from 'polythene-css';

/* globals tidy_html5 */
var defaultHtmlTidyOptions = {
  "show-body-only": true,
  "indent-spaces": 4,
  "drop-empty-elements": false,
  "doctype": "omit",
  "indent": true,
  "quiet": true, // Hides "About this fork of Tidy ..."
  "show-warnings": false, // Hides "line 1 column 1 - Warning: missing <!DOCTYPE> declaration ...""
  "new-blocklevel-tags": ["svg", "defs"],
  "new-inline-tags": ["path", "polyline", "line", "polygon"]
};

var tidy = function tidy(vnodes) {
  var htmltidyOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHtmlTidyOptions;

  var htmlElement = document.createElement("div");
  m.render(htmlElement, vnodes);
  var html = htmlElement.innerHTML;
  return tidy_html5(html, htmltidyOptions);
};

/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

var bottomBorder = ".bb.b--light-gray";
var blockPadding = ".pa3";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.med-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: "" + bottomBorder + blockPadding + ".fixed.bg-white.w-100.z-1",
  interactive: ".bg-lightest-blue.b--gray",
  separator: "span.ph2.light-silver",
  tests: ".pt5",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  resultRow: ".flex.flex-row-ns.flex-column" + bottomBorder + resultHeight,
  resultTitle: ".flex.flex-one.ma3",
  result: ".result.flex.flex-one.relative.ma3.minh4",
  content: "div.relative.w-100.height-100px",
  rawResult: ".prewrap.flex.flex-one.relative.f6.ma3.b--light-gray.light-silver.minh6"
};

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
  " .vertical-blocks": [flex.layoutVertical]
}];

var blocks = [1, 2, 3, 4].map(function (num) {
  return m(".block", num);
});

webfontLoader.add("google", "Raleway:600:latin");
styler.add("polythene-css-classes", styles);

var tests = [{
  name: "Button",
  component: button,
  attrs: {
    label: "Button"
  }
}, {
  name: "FAB",
  component: fab,
  attrs: {
    icon: {
      svg: {
        content: m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>")
      }
    }
  }
}, {
  name: "Icon",
  component: icon,
  attrs: {
    svg: {
      content: m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>")
    }
  }
}, {
  name: "Icon Button",
  component: iconButton,
  attrs: {
    icon: {
      svg: {
        content: m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>")
      }
    }
  }
}, {
  name: "Ripple",
  component: ripple,
  attrs: {}
}, {
  name: "Shadow",
  component: shadow,
  attrs: {}
}, {
  name: "SVG",
  component: svg,
  attrs: {
    content: m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>")
  }
}, {
  name: "Web font loader",
  component: {
    view: function view() {
      return m("p", {
        style: {
          "font-family": "Raleway",
          "font-weight": 600
        }
      }, "Test in Raleway font");
    }
  },
  attrs: {}
}, {
  name: "CSS Classes: blocks should be aligned vertically",
  component: {
    view: function view() {
      return m(".vertical-blocks", blocks);
    }
  }
}, {
  name: "CSS Classes: blocks should be justified horizontally",
  component: {
    view: function view() {
      return m(".layout.justified", blocks);
    }
  }
}];

var component = button$1;

var tests$1 = [{
  name: "No options",
  component: component,
  attrs: null
}, {
  name: "Option: id",
  component: component,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: label",
  component: component,
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: element (button)",
  component: component,
  attrs: {
    label: "button element",
    element: "button"
  }
}, {
  name: "Option: content",
  component: component,
  attrs: {
    content: m("div", "Content")
  }
}, {
  name: "Option: raised",
  component: component,
  attrs: {
    label: "Raised",
    raised: true
  }
}, {
  name: "Option: raised (with option z: 5)",
  component: component,
  attrs: {
    label: "Raised to 5",
    raised: true,
    z: 5
  }
}, {
  name: "Option: borders",
  component: component,
  attrs: {
    label: "Borders",
    class: "bordered-button",
    borders: true
  }
}, {
  name: "Option: wash (false)",
  component: component,
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  component: component,
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled",
  component: component,
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: selected",
  component: component,
  attrs: {
    label: "Selected",
    selected: true
  }
}, {
  name: "Option: formaction",
  component: component,
  attrs: {
    label: "Form action",
    formaction: "http://polythene.js.org"
  }
}, {
  name: "Option: before",
  component: component,
  attrs: {
    label: "Button",
    before: m("span", "Before")
  }
}, {
  name: "Option: after",
  component: component,
  attrs: {
    label: "Button",
    after: m("span", "After")
  }
}, {
  name: "Option: href (with option oncreate)",
  interactive: true,
  component: component,
  attrs: {
    label: "Go to /#/shadow",
    href: "/shadow",
    oncreate: m.route.link
  }
}, {
  name: "Option: href (without option oncreate)",
  interactive: true,
  component: component,
  attrs: {
    label: "Go to /shadow",
    href: "/shadow"
  }
}, {
  name: "onbeforeupdate",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.updated = 0;
    },
    view: function view(vnode) {
      return [m("div", "Updated: " + vnode.state.updated), m(component, {
        label: "Button",
        onbeforeupdate: function onbeforeupdate() {
          return vnode.state.updated++;
        }
      })];
    }
  }
}, {
  name: "Option: events (click)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.clicked = 0;
    },
    view: function view(vnode) {
      return [m("div", "onclick called: " + vnode.state.clicked), m(component, {
        label: "Button",
        events: {
          onclick: function onclick() {
            return vnode.state.clicked++;
          }
        }
      })];
    }
  }
}, {
  name: "Key down (after having focus) results in click",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.clickCount = 0;
    },
    view: function view(vnode) {
      return [m("div", "onclick called: " + vnode.state.clickCount), m(component, {
        label: "Button",
        events: {
          onclick: function onclick() {
            return vnode.state.clickCount++;
          }
        }
      })];
    }
  }
}, {
  name: "Option: inactive (false)",
  interactive: true,
  component: component,
  attrs: {
    label: "Not inactive",
    inactive: false
  }
}, {
  name: "Option: inactive (true)",
  interactive: true,
  component: component,
  attrs: {
    label: "Inactive",
    inactive: true
  }
}, {
  name: "Option: inactivate (2)",
  interactive: true,
  component: component,
  attrs: {
    label: "Inactivated for 2s",
    inactivate: 2
  }
}, {
  name: "Option: animateOnTap (false)",
  interactive: true,
  component: component,
  attrs: {
    label: "No animate",
    raised: true,
    animateOnTap: false
  }
}];

var m$1 = m;
var alarmAdd = m$1.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>');

var component$1 = fab$1;

var tests$2 = [{
  name: "No options",
  component: component$1,
  attrs: null
}, {
  name: "Option: id",
  component: component$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: icon",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Colored icon",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    style: {
      color: "yellow"
    }
  }
}, {
  name: "Colored background",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    style: {
      "background-color": "red"
    }
  }
}, {
  name: "Option: mini",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    mini: true
  }
}, {
  name: "Option: raised and animateOnTap (both false)",
  interactive: true,
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    raised: false,
    animateOnTap: false
  }
}, {
  name: "Option: href",
  interactive: true,
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    href: "/shadow",
    oncreate: m.route.link
  }
}, {
  name: "Option: before",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
}];

var m$2 = m;
var stars = m$2.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');

var component$2 = icon$1;
var svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
var trustedSvg = m.trust(svgString);

var tests$3 = [{
  name: "No options",
  component: component$2,
  attrs: null
}, {
  name: "Option: id",
  component: component$2,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$2,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: content (svg trusted content)",
  component: component$2,
  attrs: {
    svg: {
      content: trustedSvg
    }
  }
}, {
  name: "Option: content (svg content mmsvg)",
  component: component$2,
  attrs: {
    svg: {
      content: stars
    }
  }
}, {
  name: "Option: msvg",
  component: component$2,
  attrs: {
    msvg: stars
  }
}, {
  name: "Option: src",
  component: component$2,
  attrs: {
    src: "img/ic_arrow_back_black_18dp.png"
  }
}, {
  name: "Colored",
  component: component$2,
  attrs: {
    msvg: stars,
    style: {
      color: "red"
    }
  }
}, {
  name: "Option: type (small)",
  component: component$2,
  attrs: {
    msvg: stars,
    type: "small"
  }
}, {
  name: "Option: type (regular)",
  component: component$2,
  attrs: {
    msvg: stars,
    type: "regular"
  }
}, {
  name: "Option: type (medium)",
  component: component$2,
  attrs: {
    msvg: stars,
    type: "medium"
  }
}, {
  name: "Option: type (large)",
  component: component$2,
  attrs: {
    msvg: stars,
    type: "large"
  }
}, {
  name: "Option: avatar (type large)",
  component: component$2,
  attrs: {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }
}, {
  name: "Option: before",
  component: component$2,
  attrs: {
    msvg: stars,
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: component$2,
  attrs: {
    msvg: stars,
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
}];

var component$3 = iconButton$1;

var tests$4 = [{
  name: "No options",
  component: component$3,
  attrs: null
}, {
  name: "Option: id",
  component: component$3,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$3,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: icon",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    }
  }
}, {
  name: "Colored",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    style: {
      color: "red"
    }
  }
}, {
  name: "Option: compact",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    compact: true
  }
}, {
  name: "Option: raised and animateOnTap",
  interactive: true,
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    raised: true,
    animateOnTap: true
  }
}, {
  name: "Option: href",
  interactive: true,
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    href: "/shadow",
    oncreate: m.route.link
  }
}, {
  name: "Option: type (small)",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars,
      type: "small"
    }
  }
}, {
  name: "Option: type (regular)",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars,
      type: "regular"
    }
  }
}, {
  name: "Option: type (medium)",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars,
      type: "medium"
    }
  }
}, {
  name: "Option: type (large)",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars,
      type: "large"
    }
  }
}, {
  name: "Option: before",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
}];

var component$4 = ripple$1;

var tests$5 = [{
  name: "No options",
  component: component$4,
  attrs: null
}, {
  name: "Option: id",
  component: component$4,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$4,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: disabled",
  interactive: true,
  component: component$4,
  attrs: {
    disabled: true
  }
}, {
  name: "Option: constrained (true)",
  interactive: true,
  component: component$4,
  attrs: {
    constrained: true
  }
}, {
  name: "Option: constrained (false)",
  interactive: true,
  component: component$4,
  attrs: {
    constrained: false
  }
}, {
  name: "Option: center",
  interactive: true,
  component: component$4,
  attrs: {
    center: true
  }
}, {
  name: "Option: initial opacity (0.5)",
  interactive: true,
  component: component$4,
  attrs: {
    initialOpacity: 0.5
  }
}, {
  name: "Option: initial opacityDecayVelocity (0.1)",
  interactive: true,
  component: component$4,
  attrs: {
    opacityDecayVelocity: 0.1
  }
}, {
  name: "Appended to an element",
  interactive: true,
  component: {
    view: function view() {
      return m("div", {
        style: {
          position: "relative",
          width: "100px",
          height: "100px"
        }
      }, m(component$4));
    }
  }
}, {
  name: "Option: start (after click)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.started = 0;
    },
    view: function view(vnode) {
      return [m(component$4, {
        before: m("div", "start called: " + vnode.state.started),
        start: function start() {
          return vnode.state.started++, m.redraw();
        }
      })];
    }
  }
}, {
  name: "Option: end (after click)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.ended = 0;
    },
    view: function view(vnode) {
      return [m(component$4, {
        before: m("div", "end called: " + vnode.state.ended),
        end: function end() {
          return vnode.state.ended++, m.redraw();
        }
      })];
    }
  }
}];

var component$5 = shadow$1;

var tests$6 = [{
  name: "No options",
  component: component$5,
  attrs: null
}, {
  name: "Option: id",
  component: component$5,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$5,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: component$5,
  attrs: {
    element: "blockquote"
  }
}, {
  name: "Option: content",
  component: component$5,
  attrs: {
    content: m("div", "CONTENT")
  }
}, {
  name: "Add to a Mithril element",
  component: {
    view: function view() {
      return [m("div", "Some element"), m(component$5)];
    }
  }
}, {
  name: "Interactive option: animated",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      vnode.state.z = 1;
    },
    oncreate: function oncreate(vnode) {
      vnode.dom.addEventListener("click", function () {
        var newZ = (vnode.state.z + 1) % 6;
        vnode.state.z = newZ;
        m.redraw();
      });
    },
    view: function view(vnode) {
      return [m(rules.content, "Click me"), m(component$5, {
        animated: true,
        z: vnode.state.z
      })];
    }
  }
}, {
  name: "Option: z (0)",
  component: component$5,
  attrs: {
    z: 0
  }
}, {
  name: "Option: z (1)",
  component: component$5,
  attrs: {
    z: 1
  }
}, {
  name: "Option: z (2)",
  component: component$5,
  attrs: {
    z: 2
  }
}, {
  name: "Option: z (3)",
  component: component$5,
  attrs: {
    z: 3
  }
}, {
  name: "Option: z (4)",
  component: component$5,
  attrs: {
    z: 4
  }
}, {
  name: "Option: z (5)",
  component: component$5,
  attrs: {
    z: 5
  }
}];

var component$6 = svg$1;
var svgString$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
var trustedSvg$1 = m.trust(svgString$1);

var tests$7 = [{
  name: "No options",
  component: component$6,
  attrs: null
}, {
  name: "Option: id",
  component: component$6,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: component$6,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: component$6,
  attrs: {
    element: "div",
    content: m.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"></svg>")
  }
}, {
  name: "Option: content (trusted svg)",
  component: component$6,
  attrs: {
    content: trustedSvg$1
  }
}, {
  name: "Option: content (mmsvg)",
  component: component$6,
  attrs: {
    content: stars
  }
}, {
  name: "Option: before",
  component: component$6,
  attrs: {
    content: stars,
    before: m("span", "Before")
  }
}, {
  name: "Option: after",
  component: component$6,
  attrs: {
    content: stars,
    after: m("span", "After")
  }
}];

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var styles$1 = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}];
styler$1.add("secondary-button", styles$1);

var secondaryButton = {
  view: function view(vnode) {
    return m(button$1, _extends({
      class: "secondary-button",
      borders: true,
      raised: false
    }, vnode.attrs));
  }
};

var myStyle = [{
  ".my-component": {
    "background-color": "#FF1744"
  }
}];

styler$1.add("my-component", myStyle);

var buttonStyles = [{
  ".send-button .pe-button__content": {
    "background-color": "#FF1744",
    color: "white"
  },
  ".info-button .pe-button__content": {
    "background-color": "#2196f3",
    color: "white"
  }
}];

styler$1.add("app-buttons", buttonStyles);

var colors = {
  send: "#FF1744",
  info: "#2196f3"
};
var makeButton = function makeButton(name) {
  return {
    " .pe-button__content": {
      "background-color": colors[name],
      color: "white"
    }
  };
};
var mixinButtonStyles = [{
  ".send-button-x": makeButton("send"),
  ".info-button-x": makeButton("info")
}];

styler$1.add("app-buttons-x", mixinButtonStyles);

var tests$8 = [{
  name: "Element should have a red background",
  component: {
    view: function view() {
      return m("div", {
        class: "my-component",
        style: {
          width: "100px",
          height: "100px"
        }
      });
    }
  },
  attrs: null
}, {
  name: "Buttons should have different background colors",
  component: {
    view: function view() {
      return [m(button$1, {
        label: "Send",
        class: "send-button"
      }), m(button$1, {
        label: "Info",
        class: "info-button"
      }), m(button$1, {
        label: "Send",
        class: "send-button-x"
      }), m(button$1, {
        label: "Info",
        class: "info-button-x"
      })];
    }
  }
}, {
  name: "Custom button",
  component: secondaryButton,
  attrs: {
    label: "Secondary button"
  }
}];

styler$1.add("css-classes", styles);

var tests$9 = [{
  name: "Should be aligned horizontally",
  component: {
    view: function view() {
      return m(".layout", blocks);
    }
  }
}, {
  name: "Should be aligned vertically",
  component: {
    view: function view() {
      return m(".vertical-blocks", blocks);
    }
  }
}, {
  name: "Should be stacked vertically and inline",
  component: {
    view: function view() {
      return m(".layout.vertical.inline", blocks);
    }
  }
}, {
  name: "Should be reversed",
  component: {
    view: function view() {
      return m(".layout.horizontal.reverse", blocks);
    }
  }
}, {
  name: "Should be justified horizontally",
  component: {
    view: function view() {
      return m(".layout.justified", blocks);
    }
  }
}, {
  name: "Should fill the space",
  component: {
    view: function view() {
      return m(".fixed-height", m(".block.pe-fit"));
    }
  }
}];

var tests$10 = [{
  name: "Theme: button (should be purple)",
  component: button$1,
  attrs: {
    label: "Button",
    class: "my-button--primary"
  }
}, {
  name: "Theme: FAB (should be orange)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Theme: Icon (should have larger sizes)",
  component: {
    view: function view() {
      return [m(icon$1, {
        class: "my-icon",
        msvg: alarmAdd,
        type: "small"
      }), m(icon$1, {
        class: "my-icon",
        msvg: alarmAdd,
        type: "regular"
      }), m(icon$1, {
        class: "my-icon",
        msvg: alarmAdd,
        type: "medium"
      }), m(icon$1, {
        class: "my-icon",
        msvg: alarmAdd,
        type: "large"
      })];
    }
  }
}];

var testsPage = function testsPage(name, tests$$1) {
  return {
    view: function view() {
      return [m(rules.headerRow, [m(rules.link, {
        href: "/",
        oncreate: m.route.link
      }, "Components"), m(rules.separator, "/"), m("span", name)]), m(rules.tests, { class: "test-" + name.replace(/ /g, "-").toLowerCase() }, tests$$1.map(function (test) {
        var raw = tidy(m(test.component, test.attrs));
        return m([rules.resultRow, test.interactive ? rules.interactive : null].join(""), [m(rules.resultTitle, test.name), m(rules.result, m(rules.content, m(test.component, test.attrs))), m(rules.rawResult, raw)]);
      }))];
    }
  };
};

var pages = [{
  path: "/polythene",
  name: "Polythene",
  tests: tests
}, {
  path: "/button",
  name: "Button",
  tests: tests$1
}, {
  path: "/fab",
  name: "FAB",
  tests: tests$2
}, {
  path: "/icon",
  name: "Icon",
  tests: tests$3
}, {
  path: "/icon-button",
  name: "Icon Button",
  tests: tests$4
}, {
  path: "/ripple",
  name: "Ripple",
  tests: tests$5
}, {
  path: "/shadow",
  name: "Shadow",
  tests: tests$6
}, {
  path: "/svg",
  name: "SVG",
  tests: tests$7
}, {
  path: "/theme",
  name: "Custom theme",
  tests: tests$10
}, {
  path: "/css",
  name: "CSS styling",
  tests: tests$8
}, {
  path: "/css-classes",
  name: "CSS classes styling",
  tests: tests$9
}];

var index = {
  view: function view() {
    return m(rules.page, [m(rules.pageTitle, "Polythene components"), m(rules.list, pages.map(function (link) {
      return m(rules.listItem, m(rules.link, {
        href: link.path,
        oncreate: m.route.link
      }, link.name));
    }))]);
  }
};

m.route.prefix("#");
var mountNode = document.querySelector("#app");
var routes = {
  "/": index
};
pages.forEach(function (page) {
  return routes[page.path] = testsPage(page.name, page.tests);
});
m.route(mountNode, "/", routes);
