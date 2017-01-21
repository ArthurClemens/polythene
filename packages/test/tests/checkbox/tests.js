import m from "mithril";
import { checkbox as component } from "polythene-checkbox";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import iconStar from "mmsvg/google/msvg/toggle/star";

component.theme(".tests-checkbox-themed-checkbox", {
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

export const tests = [
  {
    name: "Option: label",
    component,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: checked",
    component,
    attrs: {
      checked: true
    }
  },
  {
    name: "Option: value",
    component,
    attrs: {
      name: "worth",
      value: "notable"
    }
  },
  {
    name: "Option: sizes",
    component: {
      view: () => m("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, [
        m(component, {
          size: "small",
          label: "Label"
        }),
        m(component, {
          size: "regular",
          label: "Label"
        }),
        m(component, {
          size: "medium",
          label: "Label"
        }),
        m(component, {
          size: "large",
          label: "Label"
        })
      ])
    }
  },
  {
    name: "Themed checkbox (colors)",
    component,
    attrs: {
      label: "Label",
      class: "tests-checkbox-themed-checkbox"
    }
  },
  {
    name: "Option: style (colors)",
    component,
    attrs: {
      label: "Styled",
      style: {
        color: "#EF6C00"
      }
    }
  },
  {
    name: "Option: iconOn, iconOff (custom icon)",
    component: {
      view: () => m("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, [
        m(component, {
          size: "small",
          label: "Label",
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        }),
        m(component, {
          size: "regular",
          label: "Label",
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        }),
        m(component, {
          size: "medium",
          label: "Label",
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        }),
        m(component, {
          size: "large",
          label: "Label",
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        })
      ])
    }
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: {
      view: () => [
        m(component, {
          disabled: true,
          label: "Off"
        }),
        m(component, {
          disabled: true,
          checked: true,
          label: "On"
        })
      ]
    }
  },
  {
    name: "Option: selectable (false)",
    interactive: true,
    component: {
      view: () => [
        m(component, {
          selectable: () => false,
          label: "Never"
        }),
        m(component, {
          selectable: checked => !checked,
          label: "Only when unchecked"
        })
      ]
    }
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component,
    attrs: {
      iconButton: {
        wash: true,
        ink: false
      }
    }
  },
  {
    name: "Option: getState",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m("div", {
          style: {
            marginBottom: "1rem"
          }
        },`Checked: ${vnode.state.checked}`),
        m(component, {
          getState: state => vnode.state.checked = state.checked
        })
      ]
    },
  },
  {
    name: "Setting the value from outside",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m(component, {
          label: "Initiator",
          getState: state => vnode.state.checked = state.checked
        }),
        m(component, {
          label: "Result",
          disabled: true,
          checked: () => vnode.state.checked
        }),
      ]
    }
  },
  {
    name: "Option: events",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m("div", {
          style: {
            marginBottom: "1rem"
          }
        },`Checked: ${vnode.state.checked}`),
        m(component, {
          events: {
            onclick: () => vnode.state.checked = !vnode.state.checked
          }
        })
      ]
    }
  },

  // Dark theme

  {
    name: "Option: checked -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      checked: true
    }
  },
  {
    name: "Themed checkbox (colors) -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      label: "Label",
      class: "tests-checkbox-themed-checkbox"
    }
  },
  {
    name: "Option: disabled -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () => [
        m(component, {
          disabled: true,
          label: "Off"
        }),
        m(component, {
          disabled: true,
          checked: true,
          label: "On"
        })
      ]
    }
  },


];