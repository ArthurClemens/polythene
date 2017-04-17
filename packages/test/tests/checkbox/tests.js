import m from "mithril";
import checkbox from "polythene-checkbox";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import iconStar from "mmsvg/google/msvg/toggle/star";

checkbox.theme(".tests-checkbox-themed-checkbox", {
  label_font_size: 28,
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

const sizeNames = ["small", "regular", "medium", "large"];

const sizes = (sizes, attrs) => sizes.map(size =>
  m(checkbox, {
    ...attrs,
    label: size,
    size
  })
);

export const tests = [
  {
    name: "Option: label",
    component: checkbox,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: checked",
    component: checkbox,
    attrs: {
      checked: true
    }
  },
  {
    name: "Option: value",
    component: checkbox,
    attrs: {
      name: "worth",
      value: "notable"
    }
  },
  {
    name: "Option: size",
    component: {
      view: () => m("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      },
      sizes(sizeNames, {
        label: "Label"
      })
    )}
  },
  {
    name: "Themed checkbox (color and font size)",
    component: checkbox,
    attrs: {
      label: "Label",
      class: "tests-checkbox-themed-checkbox"
    }
  },
  {
    name: "Option: style (colors)",
    component: checkbox,
    attrs: {
      label: "Label",
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
      }, 
      sizes(sizeNames, {
        label: "Label",
        iconOn: {
          msvg: iconStar
        },
        iconOff: {
          msvg: iconStarOutline
        }
      })
    )}
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: {
      view: () => [
        m(checkbox, {
          disabled: true,
          label: "Off"
        }),
        m(checkbox, {
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
        m(checkbox, {
          selectable: () => false,
          label: "Never"
        }),
        m(checkbox, {
          selectable: checked => !checked,
          label: "Only when unchecked"
        })
      ]
    }
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: checkbox,
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
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m("div", {
          style: {
            marginBottom: "1rem"
          }
        },`Checked: ${vnode.state.checked}`),
        m(checkbox, {
          getState: state => vnode.state.checked = state.checked
        })
      ]
    },
  },
  {
    name: "Setting the value from outside",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m(checkbox, {
          label: "Initiator",
          getState: state => vnode.state.checked = state.checked
        }),
        m(checkbox, {
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
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.checked = false,
      view: vnode => [
        m("div", {
          style: {
            marginBottom: "1rem"
          }
        },`Checked: ${vnode.state.checked}`),
        m(checkbox, {
          events: {
            onclick: () => vnode.state.checked = !vnode.state.checked
          }
        })
      ]
    }
  },

  // Dark tone

  {
    name: "Option: checked -- dark theme class",
    class: "pe-dark-tone",
    component: checkbox,
    attrs: {
      checked: true
    }
  },
  {
    name: "Themed checkbox (colors) -- dark theme class",
    class: "pe-dark-tone",
    component: checkbox,
    attrs: {
      label: "Label",
      class: "tests-checkbox-themed-checkbox"
    }
  },
  {
    name: "Option: disabled -- dark theme class",
    class: "pe-dark-tone",
    component: {
      view: () => [
        m(checkbox, {
          disabled: true,
          label: "Off"
        }),
        m(checkbox, {
          disabled: true,
          checked: true,
          label: "On"
        })
      ]
    }
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
          class: "pe-light-tone"
        },
        m(checkbox, {
          label: "On"
        })
      )
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          }
        },
        m(checkbox, {
          tone: "light",
          label: "On"
        })
      )
    }
  },

];