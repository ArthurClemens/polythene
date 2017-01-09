import m from 'mithril';
import 'polythene-fastclick';
import 'polythene-material-design';
import webfont from 'webfontloader';
import { button, fab, icon, iconButton, list, listTile, raisedButton, ripple, shadow, styler, svg } from 'polythene';
import * as polythene from 'polythene';
import { flex, styler as styler$1 } from 'polythene-css';
import { button as button$1 } from 'polythene-button';
import { fab as fab$1 } from 'polythene-fab';
import { icon as icon$1 } from 'polythene-icon';
import { svg as svg$1 } from 'polythene-svg';
import { iconButton as iconButton$1 } from 'polythene-icon-button';
import { list as list$1 } from 'polythene-list';
import { listTile as listTile$1 } from 'polythene-list-tile';
import { shadow as shadow$1 } from 'polythene-shadow';
import { isTouch, subscribe, touchEndEvent, touchStartEvent } from 'polythene-core';
import { styles, vars } from 'polythene-theme';
import { ripple as ripple$1 } from 'polythene-ripple';
import 'polythene-css-classes';

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

var bottomBorder = ".bb";
var blockPadding = ".pa3";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: ".header-row" + bottomBorder + blockPadding + ".fixed.bg-white.w-100.z-1",
  interactive: ".interactive.bg-washed-blue",
  separator: "span.ph2.light-silver",
  tests: ".pt5",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: ".result-row.flex-ns.flex-row-ns.flex-column" + bottomBorder + resultHeight,
  resultTitle: ".flex.flex-one.ma3",
  result: ".result.flex.flex-one.relative.ma3.minh4",
  content: ".component-result.flex.relative.w-100",
  rawResult: ".generated-html.prewrap.flex.flex-one.relative.ma3.light-silver"
};

var blockSize = 40;

var styles$1 = [{
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

var m$1 = m;
var rocket = m$1.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-linejoin="round" d="M 2.80761,14.1213L 5.63604,11.2929L 8.17304,10.7855C 11.39,6.40972 17.5532,4.22183 19.7782,4.22183C 19.7782,6.44683 17.5903,12.61 13.2145,15.827L 12.7071,18.364L 9.87868,21.1924L 9.17157,17.6569C 7.75736,17.6569 7.75736,17.6569 7.05025,16.9497C 6.34315,16.2426 6.34315,16.2426 6.34315,14.8284L 2.80761,14.1213 Z M 5.63604,16.9497L 7.05025,18.364L 4.38603,21.0282L 2.97181,21.0282L 2.97181,19.614L 5.63604,16.9497 Z M 4.22182,15.5355L 5.45926,15.7123L 3.01472,18.1569L 3.01472,16.7426L 4.22182,15.5355 Z M 8.28769,18.5407L 8.46447,19.7782L 7.25735,20.9853L 5.84314,20.9853L 8.28769,18.5407 Z M 13,9.5C 12.1716,9.5 11.5,10.1716 11.5,11C 11.5,11.8284 12.1716,12.5 13,12.5C 13.8284,12.5 14.5,11.8284 14.5,11C 14.5,10.1716 13.8284,9.5 13,9.5 Z "/></svg>');

var SVG = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>");

styler.add("polythene-css-classes", styles$1);

// Testing the web font loader that we use to load Roboto
webfont.load({
  google: {
    families: ["PT Sans:400"]
  },
  typekit: {
    id: "patua-one",
    api: "//use.edgefonts.net"
  }
});

button.theme(".tests-polythene-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

fab.theme(".tests-polythene-themed-fab", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

var tests = [{
  name: "Button",
  component: button,
  attrs: {
    label: "Button"
  }
}, {
  name: "Button (theme: red)",
  component: button,
  attrs: {
    class: "tests-polythene-themed-button",
    label: "Button"
  }
}, {
  name: "Raised button",
  component: raisedButton,
  attrs: {
    label: "Raised button"
  }
}, {
  name: "Raised button (theme: red)",
  component: raisedButton,
  attrs: {
    class: "tests-polythene-themed-button",
    label: "Raised button"
  }
}, {
  name: "FAB",
  component: fab,
  attrs: {
    icon: {
      svg: {
        content: SVG
      }
    }
  }
}, {
  name: "FAB (theme: red)",
  component: fab,
  attrs: {
    class: "tests-polythene-themed-fab",
    icon: {
      svg: {
        content: SVG
      }
    }
  }
}, {
  name: "Icon",
  component: icon,
  attrs: {
    svg: {
      content: SVG
    }
  }
}, {
  name: "Icon Button",
  component: iconButton,
  attrs: {
    icon: {
      svg: {
        content: SVG
      }
    }
  }
}, {
  name: "List",
  component: list,
  attrs: {
    header: {
      title: "Friends"
    },
    borders: true,
    tiles: [m(listTile, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: m(icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      })
    }), m(listTile, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      front: m(icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
        avatar: true,
        type: "large"
      })
    })]
  }
}, {
  name: "List Tile",
  component: listTile,
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: m(icon, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: rocket,
        type: "medium"
      },
      url: {
        href: "/",
        oncreate: m.route.link
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
    content: SVG
  }
}, {
  name: "Web font loader (Google Fonts: PT Sans)",
  component: {
    view: function view() {
      return m("p.pt-sans", {}, "The sky was cloudless and of a deep dark blue.");
    }
  },
  attrs: {}
}, {
  name: "Web font loader (Adobe Edge Web Fonts: Patua One)",
  component: {
    view: function view() {
      return m("p.patua-one", {}, "The sky was cloudless and of a deep dark blue.");
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

button$1.theme(".tests-button-themed-button", {
  color_light_background: "#2196F3",
  color_dark_background: "#2196F3",
  color_light_text: "#fff"
});

button$1.theme(".tests-button-bordered-button", {
  color_light_text: "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text: "yellow",
  color_dark_border: "yellow"
});

var tests$1 = [{
  name: "Child node",
  component: button$1,
  attrs: {},
  children: ["Child"]
}, {
  name: "Option: label",
  component: button$1,
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: content",
  component: button$1,
  attrs: {
    content: m("div", "Content")
  }
}, {
  name: "Themed button: (option: borders)",
  component: button$1,
  attrs: {
    label: "Borders",
    class: "tests-button-bordered-button",
    borders: true
  }
}, {
  name: "Themed button",
  component: button$1,
  attrs: {
    label: "Themed button",
    class: "tests-button-themed-button"
  }
}, {
  name: "Themed button (theme file)",
  component: button$1,
  attrs: {
    label: "Theme primary button",
    class: "my-button--primary"
  }
}, {
  name: "Option: wash (false)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled (true)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: disabled (false)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Not disabled",
    disabled: false
  }
}, {
  name: "Option: selected",
  component: button$1,
  attrs: {
    label: "Selected",
    selected: true
  }
}, {
  name: "Option: formaction",
  component: button$1,
  attrs: {
    label: "Form action",
    formaction: "http://polythene.js.org"
  }
}, {
  name: "Option: url (with oncreate)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Go to /#/shadow",
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
  }
}, {
  name: "Option: url (without oncreate)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Go to /shadow",
    url: {
      href: "/shadow"
    }
  }
}, {
  name: "onbeforeupdate",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.updated = 0;
    },
    view: function view(vnode) {
      return [m("div", "Updated: " + vnode.state.updated), m(button$1, {
        label: "Button",
        onbeforeupdate: function onbeforeupdate() {
          return vnode.state.updated++;
        }
      })];
    }
  }
}, {
  name: "Option: events (onclick)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.clicked = 0;
    },
    view: function view(vnode) {
      return [m("div", "onclick called: " + vnode.state.clicked), m(button$1, {
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
      return vnode.state.clickCount = 0;
    },
    view: function view(vnode) {
      return [m("div", "onclick called: " + vnode.state.clickCount), m(button$1, {
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
  component: button$1,
  attrs: {
    label: "Not inactive",
    inactive: false
  }
}, {
  name: "Option: inactive (true)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Inactive",
    inactive: true
  }
}, {
  name: "Option: inactivate (2)",
  interactive: true,
  component: button$1,
  attrs: {
    label: "Inactivated for 2s",
    inactivate: 2
  }
},

// Common
{
  name: "No options",
  component: button$1,
  attrs: null
}, {
  name: "Option: id",
  component: button$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: button$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element (button)",
  component: button$1,
  attrs: {
    label: "button element",
    element: "button"
  }
}, {
  name: "Option: before",
  component: button$1,
  attrs: {
    label: "Button",
    before: m("span", "Before")
  }
}, {
  name: "Option: after",
  component: button$1,
  attrs: {
    label: "Button",
    after: m("span", "After")
  }
},

// Dark theme

{
  name: "Option: label -- dark theme",
  class: "pe-dark-theme",
  component: button$1,
  attrs: {
    label: "Label"
  }
}, {
  name: "Themed button -- dark theme",
  class: "pe-dark-theme",
  component: button$1,
  attrs: {
    label: "Themed button",
    class: "tests-button-themed-button"
  }
}, {
  name: "Themed button: (option: borders) -- dark theme",
  class: "pe-dark-theme",
  component: button$1,
  attrs: {
    label: "Borders dark theme",
    class: "tests-button-bordered-button",
    borders: true
  }
}, {
  name: "Themed button (theme file) -- dark theme",
  class: "pe-dark-theme",
  component: button$1,
  attrs: {
    label: "Dark theme primary button",
    class: "my-button--primary"
  }
}];

var m$2 = m;
var alarmAdd = m$2.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>');

var tests$2 = [{
  name: "Child node",
  component: fab$1,
  attrs: null,
  children: m(icon$1, { msvg: alarmAdd })
}, {
  name: "Option: icon",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Option: content",
  component: fab$1,
  attrs: {
    content: m(icon$1, { msvg: alarmAdd })
  }
}, {
  name: "Colored icon",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    style: {
      color: "#333"
    }
  }
}, {
  name: "Option: style (should be red)",
  component: fab$1,
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
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    mini: true
  }
}, {
  name: "Option: z (0)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    z: 0
  }
}, {
  name: "Option: z (5)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    z: 5
  }
}, {
  name: "Option: animateOnTap (false)",
  interactive: true,
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    animateOnTap: false
  }
}, {
  name: "Option: url",
  interactive: true,
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
  }
},

// Common
{
  name: "No options",
  component: fab$1,
  attrs: null
}, {
  name: "Option: id",
  component: fab$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: fab$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: fab$1,
  attrs: {
    element: "div"
  }
}, {
  name: "Option: before",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
},

// Dark theme

{
  name: "Option: icon -- dark theme",
  component: fab$1,
  class: "pe-dark-theme",
  attrs: {
    icon: {
      msvg: alarmAdd
    }
  }
}];

var m$3 = m;
var stars = m$3.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');

var trustedSvg = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>");

icon$1.theme(".tests-icon-themed-icon", {
  size_regular: 50,
  color_light: "purple"
});

var tests$3 = [{
  name: "Child node (svg children mmsvg)",
  component: icon$1,
  attrs: null,
  children: m(svg$1, [stars])
}, {
  name: "Option: content",
  component: icon$1,
  attrs: {
    content: stars
  }
}, {
  name: "Option: content (svg trusted content)",
  component: icon$1,
  attrs: {
    svg: {
      content: trustedSvg
    }
  }
}, {
  name: "Option: content (svg content mmsvg)",
  component: icon$1,
  attrs: {
    svg: {
      content: stars
    }
  }
}, {
  name: "Option: msvg",
  component: icon$1,
  attrs: {
    msvg: stars
  }
}, {
  name: "Option: src (image file)",
  component: icon$1,
  attrs: {
    src: "img/arrow-back.png"
  }
}, {
  name: "Option: src (svg file)",
  component: icon$1,
  attrs: {
    src: "img/arrow-back.svg"
  }
}, {
  name: "Option: style (should be red)",
  component: icon$1,
  attrs: {
    msvg: stars,
    style: {
      color: "red"
    }
  }
}, {
  name: "Themed (should be larger and purple)",
  component: icon$1,
  attrs: {
    msvg: stars,
    class: "tests-icon-themed-icon"
  }
}, {
  name: "Option: type (small)",
  component: icon$1,
  attrs: {
    msvg: stars,
    type: "small"
  }
}, {
  name: "Option: type (regular)",
  component: icon$1,
  attrs: {
    msvg: stars,
    type: "regular"
  }
}, {
  name: "Option: type (medium)",
  component: icon$1,
  attrs: {
    msvg: stars,
    type: "medium"
  }
}, {
  name: "Option: type (large)",
  component: icon$1,
  attrs: {
    msvg: stars,
    type: "large"
  }
}, {
  name: "Option: avatar (type large)",
  component: icon$1,
  attrs: {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }
},

// Common
{
  name: "No options",
  component: icon$1,
  attrs: null
}, {
  name: "Option: id",
  component: icon$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: icon$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: icon$1,
  attrs: {
    element: "a"
  }
}, {
  name: "Option: before",
  component: icon$1,
  attrs: {
    msvg: stars,
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: icon$1,
  attrs: {
    msvg: stars,
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
},

// Dark theme

{
  name: "Child node (svg children mmsvg) -- dark theme (color set with style option)",
  component: icon$1,
  class: "pe-dark-theme",
  attrs: {
    style: {
      color: "#fff"
    }
  },
  children: m(svg$1, [stars])
}];

var m$4 = m;
var favoriteBorder = m$4.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>');

iconButton$1.theme(".tests-icon-button-themed-icon-button", {
  padding: 32,
  color_background: "purple",
  color_light_text: "white"
});

var tests$4 = [{
  name: "Child node (icon component)",
  component: iconButton$1,
  attrs: null,
  children: m(icon$1, { msvg: favoriteBorder })
}, {
  name: "Option: icon",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    }
  }
}, {
  name: "Option: compact",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    compact: true
  }
}, {
  name: "Option: style (should be red)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    style: {
      color: "red"
    }
  }
}, {
  name: "Themed (should be purple and have large padding)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    class: "tests-icon-button-themed-icon-button"
  }
}, {
  name: "Option: ripple (center)",
  interactive: true,
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    ripple: {
      center: true
    }
  }
}, {
  name: "Option: url",
  interactive: true,
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
  }
}, {
  name: "Option: type (small)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "small"
    }
  }
}, {
  name: "Option: type (regular)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "regular"
    }
  }
}, {
  name: "Option: type (medium)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "medium"
    }
  }
}, {
  name: "Option: type (large)",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "large"
    }
  }
},

// Common
{
  name: "No options",
  component: iconButton$1,
  attrs: null
}, {
  name: "Option: id",
  component: iconButton$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: iconButton$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: iconButton$1,
  attrs: {
    element: "div"
  }
}, {
  name: "Option: tabindex",
  component: iconButton$1,
  attrs: {
    tabindex: 3
  }
}, {
  name: "Option: before",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: iconButton$1,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    after: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "After")
  }
},

// Dark theme

{
  name: "Child node (icon component) -- dark theme",
  component: iconButton$1,
  class: "pe-dark-theme",
  attrs: null,
  children: m(icon$1, { msvg: favoriteBorder })
}];

list$1.theme(".tests-lists-themed-list", {
  color_light_border: "#2196F3"
});

var listTileJennifer = m(listTile$1, {
  title: "Jennifer Barker",
  subtitle: "Starting post doc",
  front: m(icon$1, {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: m.route.link
  }
});

var listTileAli = m(listTile$1, {
  title: "Ali Connors",
  subtitle: "Brunch this weekend?",
  front: m(icon$1, {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: m.route.link
  }
});

var tests$5 = [{
  name: "Child nodes",
  component: list$1,
  attrs: {
    borders: true
  },
  children: [m(listTile$1, {
    title: "Jennifer Barker",
    subtitle: "Starting post doc"
  }), m(listTile$1, {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?"
  })]
}, {
  name: "Option: header",
  component: list$1,
  attrs: {
    header: {
      title: "My header"
    }
  }
}, {
  name: "Option: tiles",
  component: list$1,
  attrs: {
    borders: true,
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    })]
  }
}, {
  name: "Options: tiles, indent, indentedBorders",
  component: list$1,
  attrs: {
    indentedBorders: true,
    header: {
      title: "Friends",
      indent: true
    },
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      indent: true
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      indent: true
    })]
  }
}, {
  name: "Options: header, tiles with urls",
  interactive: true,
  component: {
    view: function view() {
      return [m(list$1, {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli]
      }), m(list$1, {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli]
      })];
    }
  }
}, {
  name: "Option: hoverable",
  interactive: true,
  component: list$1,
  attrs: {
    hoverable: true,
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    })]
  }
}, {
  name: "Option: selectable",
  interactive: true,
  component: list$1,
  attrs: {
    selectable: true,
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    })]
  }
}, {
  name: "Option: compact",
  component: list$1,
  attrs: {
    compact: true,
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [listTileJennifer, m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      front: m(icon$1, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
        avatar: true,
        type: "large"
      })
    })]
  }
}, {
  name: "Options: header.sticky",
  interactive: true,
  component: {
    view: function view() {
      return m(".scrollable-list", [0, 1, 2, 3, 4].map(function () {
        return m(list$1, {
          header: {
            title: "Subheader",
            sticky: true
          },
          tiles: [listTileJennifer, listTileAli, listTileJennifer, listTileAli]
        });
      }));
    }
  }
},

// Common
{
  name: "No options",
  component: list$1,
  attrs: null
}, {
  name: "Option: id",
  component: list$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: list$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: list$1,
  attrs: {
    element: "blockquote"
  }
}, {
  name: "Option: before",
  component: list$1,
  attrs: {
    header: {
      title: "My header"
    },
    before: m("div", "Before")
  }
}, {
  name: "Option: after",
  component: list$1,
  attrs: {
    header: {
      title: "My header"
    },
    after: m("div", "After")
  }
},

// Dark theme

{
  name: "Option: hoverable -- dark theme",
  interactive: true,
  class: "pe-dark-theme",
  component: list$1,
  attrs: {
    hoverable: true,
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    })]
  }
}];

listTile$1.theme(".tests-list-tile-red-list-tile", {
  color_light_title: "red"
});

var tests$6 = [{
  name: "Child node",
  component: listTile$1,
  attrs: null,
  children: m(icon$1, { msvg: stars })
}, {
  name: "Option: title",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice"
  }
}, {
  name: "Option: content",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    content: m(icon$1, { msvg: stars })
  }
}, {
  name: "Option: subtitle",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
  }
}, {
  name: "Option: highSubtitle",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
  }
}, {
  name: "Option: highSubtitle and compact",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    compact: true
  }
}, {
  name: "Option: href",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    url: {
      href: "/",
      oncreate: m.route.link
    }
  }
}, {
  name: "Option: front (avatar)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    front: m(icon$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    })
  }
}, {
  name: "Option: front (icon)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    front: m(icon$1, {
      msvg: stars,
      type: "medium"
    })
  }
}, {
  name: "Themed (should be red)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    front: m(icon$1, {
      msvg: stars,
      type: "medium"
    }),
    class: "tests-list-tile-red-list-tile"
  }
},

// Combined 

{
  name: "Option: highSubtitle and front",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: m(icon$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: stars
      },
      url: {
        href: "/",
        oncreate: m.route.link
      }
    }
  }
},

// Appearance options

{
  name: "Option: indent",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    indent: true
  }
}, {
  name: "Option: selected",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    selected: true
  }
}, {
  name: "Option: disabled url",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    url: {
      href: "/",
      oncreate: m.route.link
    },
    disabled: true
  }
}, {
  name: "Option: ink",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    ink: true
  }
}, {
  name: "Option: ink with ripple options",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    ink: true,
    ripple: {
      opacityDecayVelocity: 0.1
    }
  }
}, {
  name: "Option: hoverable",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    hoverable: true
  }
}, {
  name: "Option: selectable",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    selectable: true
  }
},

// Secondary content options

{
  name: "Option: secondary (element)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      element: "dl"
    }
  }
}, {
  name: "Option: secondary (icon)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      icon: {
        msvg: stars,
        type: "medium"
      }
    }
  }
}, {
  name: "Option: secondary (url)",
  interactive: true,
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      icon: {
        msvg: stars,
        type: "medium"
      },
      url: {
        href: "/",
        oncreate: m.route.link
      }
    }
  }
}, {
  name: "Option: secondary (content)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      content: m(icon$1, { msvg: stars })
    }
  }
},

// Common
{
  name: "No options",
  component: listTile$1,
  attrs: null
}, {
  name: "Option: id",
  component: listTile$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: listTile$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: listTile$1,
  attrs: {
    element: "blockquote"
  }
}, {
  name: "Option: before",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    before: m("div", "Before")
  }
}, {
  name: "Option: after",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    after: m("div", "After")
  }
},

// Dark theme

{
  name: "Option: highSubtitle and front -- dark theme",
  component: listTile$1,
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: m(icon$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: stars
      },
      url: {
        href: "/",
        oncreate: m.route.link
      }
    }
  }
}, {
  name: "Option: disabled url -- dark theme",
  component: listTile$1,
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    disabled: true
  }
}];

var rgba = vars.rgba;

var vars$1 = {
  color_light_background: "#E0E0E0",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_background: rgba(vars.color_primary),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: vars.color_primary_active,
  color_dark_focus_background: vars.color_primary_active,
  color_dark_active_background: vars.color_primary_dark,
  color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

var style = function style(componentVars, scope, selector, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [defineProperty({}, scope + selector, {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      "background-color": componentVars["color_" + tint + "_background"],
      "border-color": normalBorder
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_disabled_background"],
        "border-color": disabledBorder
      }
    },

    "&.pe-button--selected": {
      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_active_background"],
        "border-color": activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    },

    "&.pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        "background-color": componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(componentVars, scope, selector, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [defineProperty({}, scope + selector + ":hover", {
    "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      "background-color": componentVars["color_" + tint + "_hover_background"],
      "border-color": hoverBorder
    }
  })];
};

var createStyles = function createStyles(componentVars) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  var selector = className + ".pe-button--raised";
  return [style(componentVars, "", selector, "light"), style(componentVars, ".pe-dark-theme ", selector, "dark"), // inside dark theme
  noTouchStyle(componentVars, "html.pe-no-touch ", selector, "light"), noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme ", selector, "dark")];
};

var color = function color(componentVars) {
  return styler$1.createStyles(componentVars, createStyles);
};

// No layout
var key = "raised-button";
var className = "pe-button--raised";

var styleComponent = function styleComponent(className, styles$$1) {
  return styler$1.styleComponent(className, styles$$1, key, vars$1, color);
};

var customTheme = function customTheme(className, vars$$1) {
  return (
    // Inject additional styles as use the className as key
    styleComponent(className, styler$1.addComponentStyle(className, styles, key, vars$$1))
  );
};

styleComponent(className, styles);

var classes = {
  component: "pe-button pe-button--text pe-button--raised"
};

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

subscribe(touchEndEvent, function () {
  return tapEndAll();
});

var animateZ = function animateZ(state, attrs, name) {
  var zBase = state.zBase;
  var increase = attrs.increase || 1;
  var z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    m.redraw(); // show shadow animation
  }
};

var inactivate = function inactivate(state, attrs) {
  state.inactive = true;
  m.redraw();
  setTimeout(function () {
    state.inactive = false;
    m.redraw();
  }, attrs.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, state, attrs) {
  var tapHandler = function tapHandler(state, attrs, name) {
    if (name === "down") {
      downButtons.push({
        state: state,
        attrs: attrs
      });
    } else if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    var animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !isTouch) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = function tapStart() {
    return tapHandler(state, attrs, "down");
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (btn) {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(touchStartEvent, tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(touchStartEvent, tapStart);
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = vnode.children.length && vnode.children || attrs.children;
  return m(button$1, _extends({}, {
    parentClass: [attrs.parentClass || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: m(shadow$1, { z: state.z, animated: true }),
    children: children
  }, attrs));
};

var raisedButton$1 = {
  theme: customTheme, // accepts (className, vars)
  oninit: function oninit(vnode) {
    var z = vnode.attrs.z !== undefined ? vnode.attrs.z : 1;
    vnode.state = {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false
    };
  },
  oncreate: function oncreate(vnode) {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: function onremove(vnode) {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view: view
};

raisedButton$1.theme(".tests-raised-button-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

var tests$7 = [{
  name: "Option: label",
  component: raisedButton$1,
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: content",
  component: raisedButton$1,
  attrs: {
    content: m("div", "Content")
  }
}, {
  name: "Child node",
  component: raisedButton$1,
  attrs: {},
  children: ["Child"]
}, {
  name: "Option: raised (with option z: 2)",
  component: raisedButton$1,
  attrs: {
    label: "Raised to 2",
    z: 2
  }
}, {
  name: "Option: raised (with option z: 5)",
  component: raisedButton$1,
  attrs: {
    label: "Raised to 5",
    z: 5
  }
}, {
  name: "Themed button (should be red)",
  component: raisedButton$1,
  attrs: {
    label: "Themed button",
    class: "tests-raised-button-themed-button"
  }
}, {
  name: "Themed button (with option disabled)",
  component: raisedButton$1,
  attrs: {
    label: "Disabled themed button",
    class: "tests-raised-button-themed-button",
    disabled: true
  }
}, {
  name: "Option: wash (false)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled (true)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: disabled (false)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Not disabled",
    disabled: false
  }
}, {
  name: "Option: animateOnTap (false)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Don't animate shadow",
    animateOnTap: false
  }
}, {
  name: "Option: selected",
  component: raisedButton$1,
  attrs: {
    label: "Selected",
    selected: true
  }
}, {
  name: "Option: url (with oncreate)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Go to /#/shadow",
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
  }
}, {
  name: "Option: events (onclick)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.clicked = 0;
    },
    view: function view(vnode) {
      return [m("div", "onclick called: " + vnode.state.clicked), m(raisedButton$1, {
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
  name: "Option: inactive (false)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Not inactive",
    inactive: false
  }
}, {
  name: "Option: inactive (true)",
  interactive: true,
  component: raisedButton$1,
  attrs: {
    label: "Inactive",
    inactive: true
  }
},

// Common
{
  name: "No options",
  component: raisedButton$1,
  attrs: null
}, {
  name: "Option: id",
  component: raisedButton$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: raisedButton$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element (button)",
  component: raisedButton$1,
  attrs: {
    label: "button element",
    element: "button"
  }
}, {
  name: "Option: before",
  component: raisedButton$1,
  attrs: {
    label: "Button",
    before: m("span", "Before")
  }
}, {
  name: "Option: after",
  component: raisedButton$1,
  attrs: {
    label: "Button",
    after: m("span", "After")
  }
},

// Dark theme

{
  name: "Option: label -- dark theme (should be app's primary color)",
  component: raisedButton$1,
  class: "pe-dark-theme",
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: disabled -- dark theme",
  component: raisedButton$1,
  class: "pe-dark-theme",
  attrs: {
    label: "Label",
    disabled: true
  }
}];

ripple$1.theme(".tests-ripple-themed-ripple", {
  color_light: "#F44336"
});

var tests$8 = [{
  name: "Option: constrained (true)",
  interactive: true,
  component: ripple$1,
  attrs: {
    constrained: true
  }
}, {
  name: "Option: constrained (false)",
  interactive: true,
  component: ripple$1,
  attrs: {
    constrained: false
  }
}, {
  name: "Option: center",
  interactive: true,
  component: ripple$1,
  attrs: {
    center: true
  }
}, {
  name: "Option: start opacity (0.5)",
  interactive: true,
  component: ripple$1,
  attrs: {
    startOpacity: 0.5
  }
}, {
  name: "Option: end opacity (0.1)",
  interactive: true,
  component: ripple$1,
  attrs: {
    endOpacity: 0.1
  }
}, {
  name: "Option: duration (3.0)",
  interactive: true,
  component: ripple$1,
  attrs: {
    duration: 3.0
  }
}, {
  name: "Option: initial opacityDecayVelocity (0.1)",
  interactive: true,
  component: ripple$1,
  attrs: {
    opacityDecayVelocity: 0.1
  }
}, {
  name: "Option: disabled",
  interactive: true,
  component: ripple$1,
  attrs: {
    disabled: true
  }
}, {
  name: "Option: style (blue)",
  interactive: true,
  component: ripple$1,
  attrs: {
    startOpacity: 0.7,
    style: {
      color: "#2196F3"
    }
  }
}, {
  name: "Themed (should be red and permanent)",
  interactive: true,
  component: ripple$1,
  attrs: {
    class: "tests-ripple-themed-ripple",
    endOpacity: 1.0,
    persistent: true
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
      }, m(ripple$1));
    }
  }
}, {
  name: "Option: start (after click)",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.started = 0;
    },
    view: function view(vnode) {
      return [m(ripple$1, {
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
      return vnode.state.ended = 0;
    },
    view: function view(vnode) {
      return [m(ripple$1, {
        before: m("div", "end called: " + vnode.state.ended),
        end: function end() {
          return vnode.state.ended++, m.redraw();
        }
      })];
    }
  }
},

// Common
{
  name: "No options",
  component: ripple$1,
  attrs: null
}, {
  name: "Option: id",
  component: ripple$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: ripple$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: ripple$1,
  attrs: {
    element: "a"
  }
},

// Dark theme

{
  name: "Option: style (white) -- dark theme",
  interactive: true,
  class: "pe-dark-theme",
  component: ripple$1,
  attrs: {
    constrained: true,
    style: {
      color: "#fff"
    }
  }
}];

var interactiveTest = {
  oninit: function oninit(vnode) {
    return vnode.state.z = 1;
  },
  oncreate: function oncreate(vnode) {
    vnode.dom.addEventListener("click", function () {
      var newZ = (vnode.state.z + 1) % 6;
      vnode.state.z = newZ;
      m.redraw();
    });
  },
  view: function view(vnode) {
    return [m(rules.content, "Click me"), m(shadow$1, {
      animated: true,
      z: vnode.state.z
    })];
  }
};

var tests$9 = [{
  name: "Child node",
  component: shadow$1,
  attrs: {},
  children: ["Child"]
}, {
  name: "Option: content",
  component: shadow$1,
  attrs: {
    content: "Content"
  }
}, {
  name: "Add to a Mithril element",
  component: {
    view: function view() {
      return [m("div", "Some element"), m(shadow$1)];
    }
  }
}, {
  name: "Interactive option: animated",
  interactive: true,
  component: interactiveTest
}, {
  name: "Option: z (0)",
  component: shadow$1,
  attrs: {
    z: 0
  }
}, {
  name: "Option: z (1)",
  component: shadow$1,
  attrs: {
    z: 1
  }
}, {
  name: "Option: z (2)",
  component: shadow$1,
  attrs: {
    z: 2
  }
}, {
  name: "Option: z (3)",
  component: shadow$1,
  attrs: {
    z: 3
  }
}, {
  name: "Option: z (4)",
  component: shadow$1,
  attrs: {
    z: 4
  }
}, {
  name: "Option: z (5)",
  component: shadow$1,
  attrs: {
    z: 5
  }
},

// Common
{
  name: "No options",
  component: shadow$1,
  attrs: null
}, {
  name: "Option: id",
  component: shadow$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: shadow$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: shadow$1,
  attrs: {
    element: "dl"
  }
}, {
  name: "Option: before",
  component: shadow$1,
  attrs: {
    before: "Before"
  }
}, {
  name: "Option: after",
  component: shadow$1,
  attrs: {
    after: "After"
  }
},

// Dark theme

{
  name: "Interactive option: animated -- dark theme",
  interactive: true,
  class: "pe-dark-theme",
  component: interactiveTest
}];

var svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
var trustedSvg$1 = m.trust(svgString);

var tests$10 = [{
  name: "Child node (trusted svg)",
  component: svg$1,
  attrs: null,
  children: [trustedSvg$1]
}, {
  name: "Child node (mmsvg)",
  component: svg$1,
  attrs: null,
  children: [stars]
}, {
  name: "Option: content (trusted svg)",
  component: svg$1,
  attrs: {
    content: trustedSvg$1
  }
}, {
  name: "Option: content (mmsvg)",
  component: svg$1,
  attrs: {
    content: stars
  }
},

// Common
{
  name: "No options",
  component: svg$1,
  attrs: null
}, {
  name: "Option: id",
  component: svg$1,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: svg$1,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: svg$1,
  attrs: {
    element: "a",
    content: m.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"></svg>")
  }
}, {
  name: "Option: before",
  component: svg$1,
  attrs: {
    content: stars,
    before: m("span", "Before")
  }
}, {
  name: "Option: after",
  component: svg$1,
  attrs: {
    content: stars,
    after: m("span", "After")
  }
}];

var _extends$1 = Object.assign || function (target) {
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

var styles$2 = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}];
styler$1.add("secondary-button", styles$2);

var secondaryButton = {
  view: function view(vnode) {
    return m(button$1, _extends$1({
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

var tests$11 = [{
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

styler$1.add("css-classes", styles$1);

var tests$12 = [{
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

/*
Testing 3 theming methods:
1. Style variables
2. Deriving components
3. Theme file
*/

// [1]

button$1.theme(".tests-custom-theme-blue-button", {
  color_light_background: "#2196F3",
  color_light_text: "#fff"
});

button$1.theme(".tests-custom-theme-red-button", {
  color_light_background: "#ff0000",
  color_light_text: "#fff"
});

icon$1.theme(".tests-custom-theme-red-icon", {
  color_light: "red"
});

fab$1.theme(".tests-custom-theme-red-fab", {
  color_light_background: "#ff0000",
  color_light_text: "#fff"
});

iconButton$1.theme(".tests-custom-theme-large-icon-button", {
  padding: 50,
  color_background: "#fff"
});

list$1.theme(".tests-custom-theme-blue-list", {
  color_light_border: "#2196F3"
});

listTile$1.theme(".tests-custom-theme-red-list-tile", {
  color_light_title: "red"
});

// [2]

var secondaryButton$1 = {
  theme: button$1.theme,
  view: function view(vnode) {
    return m(button$1, _extends$1({
      class: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton$1.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

// [3]
// Set in theme file ./theme.js:
// classes: my-button--primary and my-icon


var tests$13 = [{
  name: "Theme with style variables: button (should be blue)",
  component: button$1,
  attrs: {
    class: "tests-custom-theme-blue-button",
    label: "Blue button"
  }
}, {
  name: "Theme with style variables: button (should be red)",
  component: button$1,
  attrs: {
    class: "tests-custom-theme-red-button",
    label: "Red button"
  }
}, {
  name: "Theme with deriving component: button (should be bordered with white background)",
  component: secondaryButton$1,
  attrs: {
    label: "Bordered button"
  }
}, {
  name: "No theme: normal button",
  component: button$1,
  attrs: {
    label: "Unaffected button"
  }
}, {
  name: "Theme with theme file: button (text should be purple)",
  component: button$1,
  attrs: {
    label: "Primary button",
    class: "my-button--primary"
  }
}, {
  name: "Theme with theme file (global primary color): FAB (should be orange)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Theme with style variables: FAB (should be red)",
  component: fab$1,
  attrs: {
    class: "tests-custom-theme-red-fab",
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Theme with style variables: icon (should be red)",
  component: icon$1,
  attrs: {
    class: "tests-custom-theme-red-icon",
    msvg: alarmAdd
  }
}, {
  name: "Theme with theme file: icon (should have larger sizes)",
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
}, {
  name: "Theme with style variables: icon button (should have large padding)",
  component: iconButton$1,
  attrs: {
    class: "tests-custom-theme-large-icon-button",
    icon: {
      msvg: alarmAdd
    }
  }
}, {
  name: "Theme with style variables: list (should have blue borders)",
  component: list$1,
  attrs: {
    class: "tests-custom-theme-blue-list",
    borders: true,
    tiles: [m(listTile$1, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), m(listTile$1, {
      title: "Mike Eden",
      subtitle: "Watch a game"
    })]
  }
}, {
  name: "Theme with style variables: list tile (should have red titles)",
  component: list$1,
  attrs: {
    tiles: [m(listTile$1, {
      class: "tests-custom-theme-red-list-tile",
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), m(listTile$1, {
      class: "tests-custom-theme-red-list-tile",
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), m(listTile$1, {
      class: "tests-custom-theme-red-list-tile",
      title: "Mike Eden",
      subtitle: "Watch a game"
    })]
  }
}];

var generatedHtml = {
  oninit: function oninit(vnode) {
    return vnode.state.open = false, vnode.state.toggle = function () {
      return vnode.state.open = !vnode.state.open;
    };
  },
  view: function view(vnode) {
    var test = vnode.attrs.test;
    var raw = tidy(m(test.component, test.attrs, test.children));
    return m(rules.rawResult, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle
    }, [m(".html", {}, raw), m(".ellipsis", "...")]);
  }
};

var testsPage = function testsPage(name, tests$$1) {
  return {
    oncreate: function oncreate() {
      return document.title = name;
    },
    view: function view() {
      return [m(rules.headerRow, [m(rules.link, {
        href: "/",
        oncreate: m.route.link
      }, "Components"), m(rules.separator, "/"), m("span", name)]), m([rules.tests, rules.results].join(" "), {
        class: "tests-" + name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()
      }, tests$$1.map(function (test) {
        var resultId = "test-" + test.name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase();
        return m([rules.resultRow, test.interactive ? rules.interactive : null].join(""), {
          key: resultId,
          class: [resultId, test.class || null].join(" ")
        }, [m(rules.resultTitle, {
          class: "result-title"
        }, test.name), m(rules.result, m(rules.content, m(test.component, test.attrs, test.children))), m(generatedHtml, { test: test })]);
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
  path: "/raised-button",
  name: "Raised button",
  tests: tests$7
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
  path: "/list",
  name: "List",
  tests: tests$5
}, {
  path: "/list-tile",
  name: "List tile",
  tests: tests$6
}, {
  path: "/ripple",
  name: "Ripple",
  tests: tests$8
}, {
  path: "/shadow",
  name: "Shadow",
  tests: tests$9
}, {
  path: "/svg",
  name: "SVG",
  tests: tests$10
}, {
  path: "/theme",
  name: "Custom theme",
  tests: tests$13
}, {
  path: "/css",
  name: "CSS tools",
  tests: tests$11
}, {
  path: "/css-classes",
  name: "CSS classes",
  tests: tests$12
}];

var index = {
  oncreate: function oncreate() {
    return document.title = "Polythene components";
  },
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
