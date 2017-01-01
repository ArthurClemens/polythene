import m from "mithril";
import { fab } from "polythene-fab";
import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

const component = fab;

export const tests = [
  {
    name: "No options",
    component,
    attrs: null
  },
  {
    name: "Option: id",
    component,
    attrs: {
      id: "id-x"
    }
  },
  {
    name: "Option: class",
    component,
    attrs: {
      class: "class-x"
    }
  },
  {
    name: "Option: icon",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Colored icon",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      style: {
        color: "yellow"
      }
    }
  },
  {
    name: "Colored background",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      style: {
        "background-color": "red"
      }
    }
  },
  {
    name: "Option: mini",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      mini: true
    }
  },
  {
    name: "Option: raised and animateOnTap (both false)",
    interactive: true,
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      raised: false,
      animateOnTap: false
    }
  },
  {
    name: "Option: url",
    interactive: true,
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      url: {
        href: "/shadow",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      before: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      after: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "After")
    }
  }
];
