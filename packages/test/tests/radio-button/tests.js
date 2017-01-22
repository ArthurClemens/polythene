import m from "mithril";
import { radioButton as component } from "polythene-radio-button";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import iconStar from "mmsvg/google/msvg/toggle/star";

component.theme(".tests-radio-button-themed-radio", {
  label_font_size: 28,
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

const sizeNames = ["small", "regular", "medium", "large"];

const group = (attrs1, attrs2 = attrs1) => {
  const name = attrs1.name || `name-${Math.round(Math.random() * 100000)}}`;
  return {
    view: () => [
      m(component, {
        ...attrs1,
        name
      }),
      m(component, {
        ...attrs2,
        name
      })
    ]
  };
};

const radioGroup = {
  view: () => [
    m(component, {
      name: "setting",
      label: "Label"
    }),
    m(component, {
      name: "setting",
      label: "Label",
      checked: true
    })
  ]
};

export const tests = [
  {
    name: "Option: label",
    component: radioGroup
  },
  {
    name: "Option: checked",
    component: group(
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Option: value",
    component: group(
      {
        label: "Label",
        name: "worth",
        value: "notable"
      }
    )
  },
  {
    name: "Option: size",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(component, options),
          m(component, options)
        ]);
      }))
    }
  },
  {
    name: "Themed radio button (color and font size)",
    component: group(
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: style (colors)",
    component: group(
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        }
      },
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        },
        checked: true
      }
    )
  },
  {
    name: "Option: iconOn, iconOff (custom icon)",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size,
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(component, options),
          m(component, options)
        ]);
      }))
    }
  },

  // // Interactive

  {
    name: "Select with TAB and ENTER",
    interactive: true,
    component: {
      view: () => {
        const options = {
          label: "Label",
          name: "enter"
        };
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, "On desktop, TAB can be used to give focus, ENTER to select."),
          m(component, options),
          m(component, options)
        ];
      }
    },
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: group(
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },
  {
    name: "Option: selectable (true)",
    interactive: true,
    component: group(
      {
        label: "Always",
        selectable: () => true
      }
    )
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: group(
      {
        label: "Hover me",
        iconButton: {
          wash: true,
          ink: false
        }
      }
    )
  },
  {
    name: "Option: getState",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.radio = {},
      view: vnode => {
        const options = (label, value) => ({
          name: "getState",
          value,
          label,
          getState: state => vnode.state.radio = state
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.radio.value}`),
          m(component, options("First", "first")),
          m(component, options("Second", "second"))
        ];
      }
    },
  },
  {
    name: "Setting the value from outside",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(component, {
              label: "Initiator 1",
              name: "initiator",
              value: "first",
              getState: state => vnode.state.value = state.value
            }),
            m(component, {
              label: "Initiator 2",
              name: "initiator",
              value: "second",
              getState: state => vnode.state.value = state.value
            })
          ]),
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(component, {
              label: "Receiver 1",
              name: "receiver",
              value: "first",
              disabled: true,
              checked: () => vnode.state.value === "first"
            }),
            m(component, {
              label: "Receiver 2",
              name: "receiver",
              value: "second",
              disabled: true,
              checked: () => vnode.state.value === "second"
            })
          ])
        ];
      }
    },
  },
  {
    name: "Option: events",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        const options = (label, value) => ({
          name: "events",
          value,
          checked: () => vnode.state.value === value,
          events: {
            onclick: () => vnode.state.value = value
          }
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.value}`),
          m(component, options("First", "first")),
          m(component, options("Second", "second"))
        ];
      }
    },
  },

  // // Dark theme

  {
    name: "Option: checked -- dark theme",
    class: "pe-dark-theme",
    component: group(
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Themed radio button (colors) -- dark theme",
    class: "pe-dark-theme",
    component: group(
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: disabled -- dark theme",
    class: "pe-dark-theme",
    interactive: true,
    component: group(
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },

  // {
  //   name: "Option: disabled -- dark theme",
  //   class: "pe-dark-theme",
  //   component: {
  //     view: () => [
  //       m(component, {
  //         disabled: true,
  //         label: "Off"
  //       }),
  //       m(component, {
  //         disabled: true,
  //         checked: true,
  //         label: "On"
  //       })
  //     ]
  //   }
  // },


];