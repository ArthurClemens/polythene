import m from "mithril";
import switchButton from "polythene-switch-button";
import icon from "polythene-icon";
import bullseyeIcon from "mmsvg/templarian/msvg/bullseye";

switchButton.theme(".tests-switch-themed-switch", {
  label_font_size: 28,
  color_light_thumb_on: "#2196F3",
  color_dark_thumb_on: "#2196F3"
});

switchButton.theme(".tests-switch-themed-icon", {
  color_light_thumb_off: "#fff",
  color_light_thumb_on: "#fff",
  color_light_icon_on: "#EF6C00",
  color_light_icon_off: "#ddd",
  color_dark_thumb_off: "#fff",
  color_dark_thumb_on: "#fff",
  color_dark_icon_on: "#EF6C00",
  color_dark_icon_off: "#fff"
});

const sizeNames = ["small", "regular", "medium", "large"];

const sizes = (sizes, attrs) => sizes.map(size =>
  m("div", {
    style: {
      marginBottom: "1rem"
    }
  }, m(switchButton, {
    ...attrs,
    label: size,
    size
  }))
);

export const tests = [
  {
    name: "No options",
    component: switchButton
  },
  {
    name: "Option: label",
    component: switchButton,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: checked",
    component: switchButton,
    attrs: {
      checked: true
    }
  },
  {
    name: "Option: value",
    component: switchButton,
    attrs: {
      name: "worth",
      value: "notable"
    }
  },
  {
    name: "Option: size",
    component: {
      view: () => m("div", sizes(sizeNames, {
        label: "Label"
      })
    )}
  },
  {
    name: "Theme (color and font size)",
    component: switchButton,
    attrs: {
      label: "Label",
      class: "tests-switch-themed-switch"
    }
  },
  {
    name: "Option: style (colors)",
    component: switchButton,
    attrs: {
      label: "Label",
      style: {
        color: "#EF6C00"
      }
    }
  },
  {
    name: "Option: icon",
    component: {
      view: () => m("div", sizes(sizeNames, {
        label: "Label",
        class: "tests-switch-themed-icon",
        icon: m(icon, {
          msvg: bullseyeIcon
        })
      })
    )}
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: {
      view: () => [
        m(switchButton, {
          disabled: true,
          label: "Off"
        }),
        m(switchButton, {
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
        m(switchButton, {
          selectable: () => false,
          label: "Never"
        }),
        m(switchButton, {
          selectable: checked => !checked,
          label: "Only when unchecked"
        })
      ]
    }
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: switchButton,
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
        m(switchButton, {
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
        m(switchButton, {
          label: "Initiator",
          getState: state => vnode.state.checked = state.checked
        }),
        m(switchButton, {
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
        m(switchButton, {
          events: {
            onclick: () => vnode.state.checked = !vnode.state.checked
          }
        })
      ]
    }
  },

  // Dark theme

  {
    name: "Option: checked -- dark theme class",
    class: "pe-dark-tone",
    component: switchButton,
    attrs: {
      checked: true
    }
  },
  {
    name: "Option: iconButton (custom hover behaviour) -- dark theme class",
    interactive: true,
    class: "pe-dark-tone",
    component: switchButton,
    attrs: {
      iconButton: {
        wash: true,
        ink: false
      }
    }
  },
  {
    name: "Theme (colors) -- dark theme class",
    class: "pe-dark-tone",
    component: switchButton,
    attrs: {
      label: "Label",
      class: "tests-switch-themed-switch"
    }
  },
  {
    name: "Option: disabled -- dark theme class",
    class: "pe-dark-tone",
    component: {
      view: () => [
        m(switchButton, {
          disabled: true,
          label: "Off"
        }),
        m(switchButton, {
          disabled: true,
          checked: true,
          label: "On"
        })
      ]
    }
  },
  {
    name: "Dark theme class + light theme class",
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
        m(switchButton)
      )
    }
  },
  {
    name: "Dark theme class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
        },
        m(switchButton, {
          tone: "light"
        })
      )
    }
  },

];