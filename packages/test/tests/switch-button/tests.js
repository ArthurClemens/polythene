import m from "mithril";
import { switchButton as component } from "polythene-switch-button";
import { icon } from "polythene-icon";
import bullseyeIcon from "mmsvg/templarian/msvg/bullseye";

component.theme(".tests-switch-themed-switch", {
  label_font_size: 28,
  color_light_thumb_on: "#2196F3",
  color_dark_thumb_on: "#2196F3"
});

component.theme(".tests-switch-themed-icon", {
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
  }, m(component, {
    ...attrs,
    label: size,
    size
  }))
);

export const tests = [
  {
    name: "No options",
    component,
    attrs: null
  },
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
    name: "Option: size",
    component: {
      view: () => m("div", sizes(sizeNames, {
        label: "Label"
      })
    )}
  },
  {
    name: "Themed checkbox (color and font size)",
    component,
    attrs: {
      label: "Label",
      class: "tests-switch-themed-switch"
    }
  },
  {
    name: "Option: style (colors)",
    component,
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
        m(component, {
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
      class: "tests-switch-themed-switch"
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
  }

];