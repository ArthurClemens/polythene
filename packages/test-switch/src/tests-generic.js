import onChange from "./components/onChange";
import events from "./components/events";
import toggleButton from "./components/toggle-button";
import { SwitchCSS } from "polythene-css";

const bullsEyeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"1.33333\" stroke-linejoin=\"miter\" d=\"M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.58172,20 4,16.4183 4,12C 4,7.5817 7.58172,4 12,4 Z M 12,6C 8.68629,6 6,8.6863 6,12C 6,15.3137 8.68629,18 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z M 12,8C 14.2091,8 16,9.7909 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.7909 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z \"/></svg>";

export default ({ Switch, Icon, RaisedButton, renderer: h, keys: k }) => {
  
  const trustedBullsEyeIcon = h.trust(bullsEyeSVG);

  const orange = "#ef6c00";
  const blue = "#2196F3";
  
  SwitchCSS.addStyle(".tests-switch-themed-switch", {
    label_font_size: 28,
    color_light_off_label: orange,
    color_light_on_label:  blue,
    color_dark_off_label:  orange,
    color_dark_on_label:   blue,
    color_light_thumb_off: orange,
    color_light_thumb_on:  blue,
    color_dark_thumb_off:  orange,
    color_dark_thumb_on:   blue
  });

  SwitchCSS.addStyle(".tests-switch-themed-icon", {
    color_light_thumb_off: "#fff",
    color_light_thumb_on:  "#fff",
    color_light_icon_on:   orange,
    color_light_icon_off:  "#ddd",
    color_dark_thumb_off:  "#fff",
    color_dark_thumb_on:   "#fff",
    color_dark_icon_on:    orange,
    color_dark_icon_off:   "#fff"
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  const sizes = (sizes, attrs) => sizes.map(size =>
    h(Switch, Object.assign(
      {},
      attrs,
      {
        label: size,
        size
      }
    ))
  );

  return [
    {
      name: "No options",
      component: Switch
    },
    {
      name: "Option: label",
      component: Switch,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: checked",
      component: Switch,
      attrs: {
        defaultChecked: true
      }
    },
    {
      name: "Option: size",
      component: {
        view: () =>
          h("div",
            {
              style: {
                display: "flex",
                alignItems: "center"
              }
            },
            sizes(sizeNames, {
              label: "Label"
            })
          )
      }
    },
    {
      name: "Themed Switch (color and font size)",
      component: Switch,
      attrs: {
        label: "Label",
        className: "tests-switch-themed-switch"
      }
    },
    {
      name: "Option: style (colors)",
      component: Switch,
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
        view: () =>
          h("div", sizes(sizeNames, {
            label: "Label",
            className: "tests-switch-themed-icon",
            icon: h(Icon, {
              svg: trustedBullsEyeIcon
            })
          }))
      }
    },
    {
      name: "Option: disabled",
      interactive: true,
      component: {
        view: () =>
          h("div", [
            h(Switch, {
              disabled: true,
              label: "Off"
            }),
            h(Switch, {
              disabled: true,
              checked: true,
              label: "On"
            })
          ])
      }
    },
    {
      name: "Option: selectable",
      interactive: true,
      component: {
        view: () => 
          h("div", [
            h(Switch, {
              selectable: () => false,
              label: "Never"
            }),
            h(Switch, {
              selectable: checked => !checked,
              label: "Only when unchecked"
            })
          ])
      }
    },
    {
      name: "Option: iconButton (custom hover behaviour)",
      interactive: true,
      component: Switch,
      attrs: {
        iconButton: {
          wash: true,
          ink: false
        }
      }
    },
    {
      name: "Option: zOff (0), zOn (2)",
      interactive: true,
      component: Switch,
      attrs: {
        zOff: 0,
        zOn: 2
      }
    },
    {
      name: "Option: onChange",
      interactive: true,
      exclude: true,
      component: onChange({ h, Switch })
    },
    {
      name: "Option: events",
      interactive: true,
      exclude: true,
      component: events({ h, k, Switch })
    },
    {
      name: "Setting the checked state",
      interactive: true,
      exclude: true,
      component: toggleButton({ h, k, RaisedButton, Switch })
    },

    // Dark tone

    {
      name: "Option: defaultChecked -- dark tone class",
      className: "pe-dark-tone",
      component: Switch,
      attrs: {
        defaultChecked: true,
        label: "Label"
      }
    },
    {
      name: "Themed Switch (colors) -- dark tone class",
      className: "pe-dark-tone",
      component: Switch,
      attrs: {
        label: "Label",
        className: "tests-switch-themed-switch"
      }
    },
    {
      name: "Option: disabled -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h("div", [
            h(Switch, {
              disabled: true,
              label: "Off"
            }),
            h(Switch, {
              disabled: true,
              defaultChecked: true,
              label: "On"
            })
          ])
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => 
          h("div",
            {
              style: {
                background: "#fff",
                padding: "20px"
              },
              className: "pe-light-tone"
            },
            h(Switch, {
              label: "Label"
            })
          )
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => 
          h("div",
            {
              style: {
                background: "#fff",
                padding: "20px"
              }
            },
            h(Switch, {
              tone: "light",
              label: "Label"
            })
          )
      }
    },
  ];
};
