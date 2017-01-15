import m from 'mithril';
import 'polythene-fastclick';
import 'polythene-material-design';
import { classes, toolbar } from 'polythene-toolbar';
import { iconButton } from 'polythene-icon-button';
import webfont from 'webfontloader';
import { button, fab, icon, iconButton as iconButton$1, list, listTile, raisedButton, ripple, shadow, styler, svg, tabs, toolbar as toolbar$1 } from 'polythene';
import * as polythene from 'polythene';
import { flex, styler as styler$1 } from 'polythene-css';
import { button as button$1 } from 'polythene-button';
import { fab as fab$1 } from 'polythene-fab';
import { icon as icon$1 } from 'polythene-icon';
import { svg as svg$1 } from 'polythene-svg';
import { list as list$1 } from 'polythene-list';
import { listTile as listTile$1 } from 'polythene-list-tile';
import { raisedButton as raisedButton$1 } from 'polythene-raised-button';
import { ripple as ripple$1 } from 'polythene-ripple';
import { shadow as shadow$1 } from 'polythene-shadow';
import { tabs as tabs$1 } from 'polythene-tabs';
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

var tidy = function tidy(html) {
  var htmltidyOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHtmlTidyOptions;

  return tidy_html5(html, htmltidyOptions);
};

var m$1 = m;
var arrowBack = m$1.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');

/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

var bottomBorder = ".bb";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: ".header-row" + bottomBorder + ".fixed.w-100.z-3",
  interactive: ".interactive.bg-washed-blue",
  separator: "span.ph2.light-silver",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: ".result-row.flex-column" + bottomBorder + resultHeight + ".pv2",
  resultTitle: ".flex.flex-row-ns.f5.ma3",
  resultData: ".flex.flex-column.flex-row-l.mv3",
  resultDataRendered: ".result.relative.flex-none.flex-l.flex-one.ma3.minh4",
  content: ".component-result.relative.w-100",
  resultDataRaw: ".flex-none.flex-l.flex-one.ma3",
  resultDataRawHtml: ".generated-html.prewrap.relative.light-silver.h-100"
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

var m$2 = m;
var rocket = m$2.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-linejoin="round" d="M 2.80761,14.1213L 5.63604,11.2929L 8.17304,10.7855C 11.39,6.40972 17.5532,4.22183 19.7782,4.22183C 19.7782,6.44683 17.5903,12.61 13.2145,15.827L 12.7071,18.364L 9.87868,21.1924L 9.17157,17.6569C 7.75736,17.6569 7.75736,17.6569 7.05025,16.9497C 6.34315,16.2426 6.34315,16.2426 6.34315,14.8284L 2.80761,14.1213 Z M 5.63604,16.9497L 7.05025,18.364L 4.38603,21.0282L 2.97181,21.0282L 2.97181,19.614L 5.63604,16.9497 Z M 4.22182,15.5355L 5.45926,15.7123L 3.01472,18.1569L 3.01472,16.7426L 4.22182,15.5355 Z M 8.28769,18.5407L 8.46447,19.7782L 7.25735,20.9853L 5.84314,20.9853L 8.28769,18.5407 Z M 13,9.5C 12.1716,9.5 11.5,10.1716 11.5,11C 11.5,11.8284 12.1716,12.5 13,12.5C 13.8284,12.5 14.5,11.8284 14.5,11C 14.5,10.1716 13.8284,9.5 13,9.5 Z "/></svg>');

var m$3 = m;
var menu = m$3.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');

var m$4 = m;
var add = m$4.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');

var SVG = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>");

styler.add("polythene-css-classes", styles);

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
raisedButton.theme(".tests-polythene-themed-raised-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

fab.theme(".tests-polythene-themed-fab", {
  color_light_background: "#FF1744",
  color_light: "#fff"
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
    class: "tests-polythene-themed-raised-button",
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
  component: iconButton$1,
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
  name: "Tabs",
  component: tabs,
  attrs: {
    autofit: true,
    content: [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }]
  }
}, {
  name: "Toolbar",
  component: toolbar$1,
  attrs: {
    content: [m(iconButton$1, {
      icon: { msvg: menu }
    }), m("span", "Title"), m(iconButton$1, {
      icon: { msvg: add }
    })]
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

button$1.theme(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
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
  name: "Themed button (colors)",
  component: button$1,
  attrs: {
    label: "Themed button",
    class: "tests-button-themed-button"
  }
}, {
  name: "Option: style (colors)",
  component: button$1,
  attrs: {
    label: "Styled",
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
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
  name: "Themed button blue on dark -- dark theme",
  class: "pe-dark-theme",
  component: button$1,
  attrs: {
    label: "Blue on dark button",
    class: "blue-on-dark-button"
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
}];

var m$5 = m;
var alarmAdd = m$5.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>');

fab$1.theme(".tests-fab-themed-fab", {
  color_light_background: "#2196F3",
  color_dark_background: "#0097A7",
  color_light: "#fff",
  color_dark: "#B2EBF2"
});

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
  name: "Themed FAB (colors)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    class: "tests-fab-themed-fab"
  }
}, {
  name: "Option: style (colors)",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    style: {
      color: "#FFCCBC",
      backgroundColor: "#4E342E"
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
    before: m("div", { style: {
        fontSize: "16px",
        lineHeight: "1rem"
      } }, "Before")
  }
}, {
  name: "Option: after",
  component: fab$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    after: m("div", { style: {
        fontSize: "16px",
        lineHeight: "1rem"
      } }, "After")
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
}, {
  name: "Themed FAB -- dark theme",
  component: fab$1,
  class: "pe-dark-theme",
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    class: "tests-fab-themed-fab"
  }
}];

var m$6 = m;
var stars = m$6.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');

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
  name: "Option: style",
  component: icon$1,
  attrs: {
    msvg: stars,
    style: {
      color: "#EF6C00"
    }
  }
}, {
  name: "Themed (color and size)",
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

var m$7 = m;
var favoriteBorder = m$7.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>');

iconButton.theme(".tests-icon-button-themed-icon-button", {
  padding: 32,
  color_background: "purple",
  color_light: "white"
});

var tests$4 = [{
  name: "Child node (icon component)",
  component: iconButton,
  attrs: null,
  children: m(icon$1, { msvg: favoriteBorder })
}, {
  name: "Option: icon",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder
    }
  }
}, {
  name: "Option: compact",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    compact: true
  }
}, {
  name: "Option: style (colors)",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    style: {
      color: "#FFCCBC",
      backgroundColor: "#4E342E"
    }
  }
}, {
  name: "Themed (colors and padding)",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    class: "tests-icon-button-themed-icon-button"
  }
}, {
  name: "Option: ripple (center)",
  interactive: true,
  component: iconButton,
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
  component: iconButton,
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
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "small"
    }
  }
}, {
  name: "Option: type (regular)",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "regular"
    }
  }
}, {
  name: "Option: type (medium)",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder,
      type: "medium"
    }
  }
}, {
  name: "Option: type (large)",
  component: iconButton,
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
  component: iconButton,
  attrs: null
}, {
  name: "Option: id",
  component: iconButton,
  attrs: {
    id: "id-x"
  }
}, {
  name: "Option: class",
  component: iconButton,
  attrs: {
    class: "class-x"
  }
}, {
  name: "Option: element",
  component: iconButton,
  attrs: {
    element: "div"
  }
}, {
  name: "Option: tabindex",
  component: iconButton,
  attrs: {
    tabindex: 3
  }
}, {
  name: "Option: before",
  component: iconButton,
  attrs: {
    icon: {
      msvg: favoriteBorder
    },
    before: m("div", { style: { "font-size": "16px", "line-height": "1rem" } }, "Before")
  }
}, {
  name: "Option: after",
  component: iconButton,
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
  component: iconButton,
  class: "pe-dark-theme",
  attrs: null,
  children: m(icon$1, { msvg: favoriteBorder })
}];

list$1.theme(".tests-lists-themed-list", {
  color_light_background: "#F57C00",
  color_light_border: "#F57C00",
  color_dark_background: "#5D4037",
  color_dark_border: "#5D4037",
  padding: 32
});
listTile$1.theme(".tests-lists-themed-list-tile", {
  color_light_title: "#fff",
  color_light_subtitle: "rgba(255,255,255,.8)",
  color_light_background: "#EF6C00",
  color_dark_title: "#D7CCC8",
  color_dark_subtitle: "#BCAAA4",
  color_dark_background: "#4E342E"
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
}, {
  name: "Themed list (colors and padding)",
  component: list$1,
  attrs: {
    borders: true,
    class: "tests-lists-themed-list"
  },
  children: [m(listTile$1, {
    title: "Jennifer Barker",
    subtitle: "Starting post doc",
    class: "tests-lists-themed-list-tile"
  }), m(listTile$1, {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?",
    class: "tests-lists-themed-list-tile"
  })]
}, {
  name: "Option: style (colors)",
  component: list$1,
  attrs: {
    header: { style: { color: "rgba(255,255,255,.8)" }, title: "Friends" },
    tiles: [m(listTile$1, { style: { color: "#fff" }, title: "One" }), m(listTile$1, { style: { color: "#fff" }, title: "Two" }), m(listTile$1, { style: { color: "#fff" }, title: "Three" })],
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
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
}, {
  name: "Themed list (colors and padding) -- dark theme",
  component: list$1,
  class: "pe-dark-theme",
  attrs: {
    borders: true,
    class: "tests-lists-themed-list"
  },
  children: [m(listTile$1, {
    title: "Jennifer Barker",
    subtitle: "Starting post doc",
    class: "tests-lists-themed-list-tile"
  }), m(listTile$1, {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?",
    class: "tests-lists-themed-list-tile"
  })]
}];

listTile$1.theme(".tests-list-tile-themed-list-tile", {
  color_light_title: "#424242",
  color_light_background: "#FFECB3",
  color_dark_title: "#FFECB3",
  color_dark_background: "#5D4037",
  font_size_title: 21
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
  name: "Themed (color and font size)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    front: m(icon$1, {
      msvg: stars,
      type: "medium"
    }),
    class: "tests-list-tile-themed-list-tile"
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
}, {
  name: "Themed (color and font size) -- dark theme",
  component: listTile$1,
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    front: m(icon$1, {
      msvg: stars,
      type: "medium"
    }),
    class: "tests-list-tile-themed-list-tile"
  }
}];

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
  name: "Option: style (colors)",
  component: raisedButton$1,
  attrs: {
    label: "Styled",
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
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
  name: "Option: style (color)",
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
  view: function view(vnode) {
    return [m(".absolute.absolute--fill", {
      onclick: function onclick() {
        var newZ = (vnode.state.z + 1) % 6;
        vnode.state.z = newZ;
      }
    }, "Click me"), m(shadow$1, {
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
}, {
  name: "Option: style (color)",
  component: svg$1,
  attrs: {
    content: stars,
    style: {
      color: "#EF6C00"
    }
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

var m$8 = m;
var heart = m$8.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z "/></svg>');

var m$9 = m;
var bell = m$9.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z "/></svg>');

var m$10 = m;
var settings = m$10.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z "/></svg>');

// import iconMenu from "mmsvg/google/msvg/navigation/menu";
// import iconSearch from "mmsvg/google/msvg/action/search";
// import iconMore from "mmsvg/google/msvg/navigation/more-vert";

// import arrowBack from "mmsvg/google/msvg/navigation/arrow-back";
// import arrowForward from "mmsvg/google/msvg/navigation/arrow-forward";

tabs$1.theme(".tests-tabs-fixed-width", {
  tab_max_width: 120,
  tablet_tab_min_width: 120,
  tab_min_width: "none"
});

tabs$1.theme(".tests-tabs-custom_color", {
  color_light: "#00BCD4",
  color_light_selected: "#F44336",
  color_light_tab_indicator: "#F44336",
  color_dark: "#00BCD4",
  color_dark_selected: "#F44336",
  color_dark_tab_indicator: "#F44336"
});

var threeButtons = [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }];

var longLabels = [{ label: "New" }, { label: "A very long label that does not fit" }, { label: "Saved" }];

var iconButtons = [{
  icon: { msvg: heart }
}, {
  icon: { msvg: bell }
}, {
  icon: { msvg: settings }
}];

var iconTextButtons = [{
  icon: { msvg: heart },
  label: "Favs"
}, {
  icon: { msvg: bell },
  label: "Notifs"
}, {
  icon: { msvg: settings },
  label: "Custom"
}];

// const longList = [{
//   label: "Web"
// }, {
//   label: "Shopping"
// }, {
//   label: "Videos"
// }, {
//   label: "Images"
// }, {
//   label: "Books"
// }, {
//   label: "More"
// }];

var tests$11 = [{
  name: "Child node",
  component: tabs$1,
  attrs: null,
  children: threeButtons
}, {
  name: "Option: content",
  component: tabs$1,
  attrs: {
    content: threeButtons
  }
}, {
  name: "Option: buttons (text buttons)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons
  }
}, {
  name: "Option: autofit (true)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true
  }
}, {
  name: "Option: centered (no autofit)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    centered: true
  }
}, {
  name: "Option: largestWidth (no autofit)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    largestWidth: true
  }
}, {
  name: "Theme: small fixed width",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    class: "tests-tabs-fixed-width",
    centered: true
  }
}, {
  name: "Option: selectedTab (1)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    selectedTab: 1
  }
}, {
  name: "Theme: custom colors",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    class: "tests-tabs-custom_color"
  }
}, {
  name: "Long labels: wrap to second line",
  component: tabs$1,
  attrs: {
    buttons: longLabels,
    autofit: true,
    class: "tests-tabs-fixed-width"
  }
}, {
  name: "Option: hideIndicator",
  interactive: true,
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    hideIndicator: true
  }
}, {
  name: "Option: noIndicatorSlide",
  interactive: true,
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    noIndicatorSlide: true
  }
}, {
  name: "Option: tabsOpts (ink: false)",
  interactive: true,
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    tabsOpts: {
      ink: false
    }
  }
}, {
  name: "Option: tabsOpts (style - colors)",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    tabsOpts: {
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  }
}, {
  name: "Tabs with icons",
  class: "small-result",
  component: tabs$1,
  attrs: {
    buttons: iconButtons,
    autofit: true
  }
}, {
  name: "Tabs with icons and text",
  class: "small-result",
  component: tabs$1,
  attrs: {
    buttons: iconTextButtons,
    autofit: true
  }
}, {
  name: "Option: getState",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state = {};
    },
    view: function view(vnode) {
      return [m("ul", {
        style: {
          margin: "0 0 1rem 0",
          padding: 0,
          maxHeight: "7rem",
          overflow: "hidden"
        }
      }, [m("li", "" + vnode.state.index), m("li", "" + JSON.stringify(vnode.state.data)), m("li", vnode.state.el ? "" + JSON.stringify(vnode.state.el.innerHTML) : "")]), m(tabs$1, {
        buttons: threeButtons,
        autofit: true,
        getState: function getState(s) {
          return vnode.state = s;
        }
      })];
    }
  }
},

// Dark theme

{
  name: "Option: buttons (text buttons) -- dark theme",
  class: "pe-dark-theme",
  component: tabs$1,
  attrs: {
    buttons: threeButtons
  }
}, {
  name: "Theme: custom colors -- dark theme",
  class: "pe-dark-theme",
  component: tabs$1,
  attrs: {
    buttons: threeButtons,
    autofit: true,
    class: "tests-tabs-custom_color"
  }
}, {
  name: "Tabs with icons -- dark theme",
  class: "small-result pe-dark-theme",
  component: tabs$1,
  attrs: {
    buttons: iconButtons,
    autofit: true
  }
}];

var m$11 = m;
var refresh = m$11.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>');

toolbar.theme(".tests-toolbar-themed-toolbar", {
  color_dark_background: "#00c853"
});

var btn = function btn(msvg) {
  return m(iconButton, {
    icon: { msvg: msvg }
  });
};

var toolbarRow = [btn(menu), m("div", { class: classes.title }, "Toolbar with a very very very very very very very very very long title"), btn(refresh), btn(add)];

var toolbarTitleAsSpan = [btn(menu), m("span", "Toolbar with a very very very long title"), btn(add)];

var toolbarTitleAtStart = [m("div", { class: classes.title }, "Title"), btn(add)];

var toolbarRowIndentedTitle = [m("div", { class: classes.indentedTitle }, "Indented title"), btn(add)];

var tests$12 = [{
  name: "Child node",
  component: toolbar,
  attrs: null,
  children: toolbarRow
}, {
  name: "Option: content",
  component: toolbar,
  attrs: {
    content: toolbarRow
  }
}, {
  name: "Option: compact",
  component: toolbar,
  attrs: {
    compact: true,
    content: toolbarRow
  }
}, {
  name: "Title as span",
  component: toolbar,
  attrs: {
    content: toolbarTitleAsSpan
  }
}, {
  name: "Indented title",
  component: toolbar,
  attrs: {
    content: toolbarRowIndentedTitle
  }
}, {
  name: "Title at start",
  component: toolbar,
  attrs: {
    content: toolbarTitleAtStart
  }
}, {
  name: "Option: shadow",
  class: "small-result",
  component: {
    view: function view() {
      return m("div", {
        style: {
          position: "relative"
        }
      }, [m(toolbar, toolbarRow), m(shadow$1)]);
    }
  }
}, {
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
}, {
  name: "Themed",
  class: "pe-dark-theme",
  component: toolbar,
  attrs: {
    class: "tests-toolbar-themed-toolbar",
    content: toolbarRow
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
  ".pe-button.send-button .pe-button__content": {
    "background-color": "#FF1744",
    color: "white"
  },
  ".pe-button.info-button .pe-button__content": {
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
  ".pe-button.send-button-x": makeButton("send"),
  ".pe-button.info-button-x": makeButton("info")
}];

styler$1.add("app-buttons-x", mixinButtonStyles);

var tests$13 = [{
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

var tests$14 = [{
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
Testing 2 theming methods:
1. Style variables
2. Deriving components
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
  color_light: "#fff"
});

iconButton.theme(".tests-custom-theme-large-icon-button", {
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
    return m(button$1, _extends({
      class: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton$1.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var tests$15 = [{
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
  name: "Theme with style variables: icon button (should have large padding)",
  component: iconButton,
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

// import iconApps from "mmsvg/google/msvg/navigation/apps";
var generatedHtml = {
  oninit: function oninit(vnode) {
    return vnode.state.open = false, vnode.state.toggle = function () {
      return vnode.state.open = !vnode.state.open;
    };
  },
  view: function view(vnode) {
    return m(rules.resultDataRawHtml, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle
    }, [m(".html", { id: vnode.attrs.id }, ""), m(".ellipsis", "...")]);
  }
};

var testsPage = function testsPage(name, tests$$1) {
  return {
    oncreate: function oncreate() {
      return document.title = name;
    },
    view: function view() {
      return [m(rules.headerRow, m(toolbar, {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      }, [m(iconButton, {
        icon: { msvg: arrowBack },
        url: {
          href: "/",
          oncreate: m.route.link
        },
        style: {
          color: "#0091EA"
        }
      }), m("span", name)])), m([rules.results].join(" "), {
        class: "tests-" + name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()
      }, tests$$1.map(function (test, index) {
        var testName = "test-" + test.name.replace(/[\:\-\[\]\(\)]/g, "").replace(/ /g, "-").toLowerCase();
        var uid = "id-" + index;
        return m([rules.resultRow, test.interactive ? rules.interactive : null].join(""), {
          key: testName,
          class: [testName, test.class || null].join(" ")
        }, [m(rules.resultTitle, {
          class: "result-title"
        }, test.name), m(rules.resultData, [m(rules.resultDataRendered, m(rules.content, {
          oncreate: function oncreate(vnode) {
            document.querySelector("#" + uid).textContent = tidy(vnode.dom.innerHTML);
          }
        }, m(test.component, test.attrs, test.children))), m(rules.resultDataRaw, m(generatedHtml, { id: uid }))])]);
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
  path: "/tabs",
  name: "Tabs",
  tests: tests$11
}, {
  path: "/toolbar",
  name: "Toolbar",
  tests: tests$12
}, {
  path: "/theme",
  name: "Custom theme",
  tests: tests$15
}, {
  path: "/css",
  name: "CSS tools",
  tests: tests$13
}, {
  path: "/css-classes",
  name: "CSS classes",
  tests: tests$14
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
