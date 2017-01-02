import m from 'mithril';
import 'polythene-fastclick';
import 'polythene-material-design';
import { button, fab, icon, iconButton, listTile, ripple, shadow, styler, svg, webfontLoader } from 'polythene';
import * as polythene from 'polythene';
import { flex, styler as styler$1 } from 'polythene-css';
import { icon as icon$1 } from 'polythene-icon';
import { button as button$1 } from 'polythene-button';
import { fab as fab$1 } from 'polythene-fab';
import { iconButton as iconButton$1 } from 'polythene-icon-button';
import { listTile as listTile$1 } from 'polythene-list-tile';
import { ripple as ripple$1 } from 'polythene-ripple';
import { shadow as shadow$1 } from 'polythene-shadow';
import { svg as svg$1 } from 'polythene-svg';
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

var bottomBorder = ".bb.b--light-gray";
var blockPadding = ".pa3";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.med-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: "" + bottomBorder + blockPadding + ".fixed.bg-white.w-100.z-1",
  interactive: ".bg-washed-blue.b--gray",
  separator: "span.ph2.light-silver",
  tests: ".pt5",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  resultRow: ".flex.flex-row-ns.flex-column" + bottomBorder + resultHeight,
  resultTitle: ".flex.flex-one.ma3",
  result: ".result.flex.flex-one.relative.ma3.minh4.bg-black-05.pa3",
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

var m$1 = m;
var rocket = m$1.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-linejoin="round" d="M 2.80761,14.1213L 5.63604,11.2929L 8.17304,10.7855C 11.39,6.40972 17.5532,4.22183 19.7782,4.22183C 19.7782,6.44683 17.5903,12.61 13.2145,15.827L 12.7071,18.364L 9.87868,21.1924L 9.17157,17.6569C 7.75736,17.6569 7.75736,17.6569 7.05025,16.9497C 6.34315,16.2426 6.34315,16.2426 6.34315,14.8284L 2.80761,14.1213 Z M 5.63604,16.9497L 7.05025,18.364L 4.38603,21.0282L 2.97181,21.0282L 2.97181,19.614L 5.63604,16.9497 Z M 4.22182,15.5355L 5.45926,15.7123L 3.01472,18.1569L 3.01472,16.7426L 4.22182,15.5355 Z M 8.28769,18.5407L 8.46447,19.7782L 7.25735,20.9853L 5.84314,20.9853L 8.28769,18.5407 Z M 13,9.5C 12.1716,9.5 11.5,10.1716 11.5,11C 11.5,11.8284 12.1716,12.5 13,12.5C 13.8284,12.5 14.5,11.8284 14.5,11C 14.5,10.1716 13.8284,9.5 13,9.5 Z "/></svg>');

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
  name: "List Tile",
  component: listTile,
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
  interactive: true,
  component: component,
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  interactive: true,
  component: component,
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled (true)",
  interactive: true,
  component: component,
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: disabled (false)",
  interactive: true,
  component: component,
  attrs: {
    label: "Not disabled",
    disabled: false
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
  name: "Option: url (with oncreate)",
  interactive: true,
  component: component,
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
  component: component,
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

var m$2 = m;
var alarmAdd = m$2.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>');

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
  name: "Option: url",
  interactive: true,
  component: component$1,
  attrs: {
    icon: {
      msvg: alarmAdd
    },
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
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

var m$3 = m;
var stars = m$3.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');

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
  name: "Option: url",
  interactive: true,
  component: component$3,
  attrs: {
    icon: {
      msvg: stars
    },
    url: {
      href: "/shadow",
      oncreate: m.route.link
    }
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

var tests$5 = [{
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
    content: rocket
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
      msvg: rocket,
      type: "medium"
    })
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
        msvg: rocket,
        type: "medium"
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
        msvg: rocket,
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
  name: "Option: secondary (content)",
  component: listTile$1,
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      content: rocket
    }
  }
},

// Other
{
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
}];

var component$4 = ripple$1;

var tests$6 = [{
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

var tests$7 = [{
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
    element: "dl"
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

var tests$8 = [{
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

var tests$9 = [{
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

var tests$10 = [{
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

var tests$11 = [{
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
        var raw = tidy(m(test.component, test.attrs, test.children));
        return m([rules.resultRow, test.interactive ? rules.interactive : null].join(""), [m(rules.resultTitle, test.name), m(rules.result, m(rules.content, m(test.component, test.attrs, test.children))), m(rules.rawResult, raw)]);
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
  path: "/list-tile",
  name: "List tile",
  tests: tests$5
}, {
  path: "/ripple",
  name: "Ripple",
  tests: tests$6
}, {
  path: "/shadow",
  name: "Shadow",
  tests: tests$7
}, {
  path: "/svg",
  name: "SVG",
  tests: tests$8
}, {
  path: "/theme",
  name: "Custom theme",
  tests: tests$11
}, {
  path: "/css",
  name: "CSS tools",
  tests: tests$9
}, {
  path: "/css-classes",
  name: "CSS classes",
  tests: tests$10
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
