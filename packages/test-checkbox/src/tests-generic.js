import onChange from "./components/onChange";
import events from "./components/events";
import toggleButton from "./components/toggle-button";
import { CheckboxCSS } from "polythene-css";

const iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";

const iconStarFilledSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

export default ({ Checkbox, RaisedButton, renderer: h, keys: k }) => {
  
  const trustedIconStarsOutline = h.trust(iconStarOutlineSVG);
  const trustedIconStarFilled = h.trust(iconStarFilledSVG);

  const themeColor = "#ff1744";
  CheckboxCSS.addStyle(".tests-checkbox-themed-checkbox", {
    label_font_size: 28,
    color_light_on:    themeColor,
    color_light_off:   themeColor,
    color_dark_on:     themeColor,
    color_dark_off:    themeColor,
    color_light_label: themeColor,
    color_dark_label:  themeColor
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  const sizes = (sizes, attrs) => sizes.map(size =>
    h(Checkbox, Object.assign(
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
      name: "Option: label",
      component: Checkbox,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: defaultChecked",
      component: Checkbox,
      attrs: {
        defaultChecked: true
      }
    },
    {
      name: "Option: size",
      component: {
        view: () => h("div",
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
      name: "Styled Checkbox",
      component: Checkbox,
      attrs: {
        label: "Label",
        defaultChecked: true,
        style: {
          color: "#ff0000"
        }
      }
    },
    {
      name: "Themed Checkbox (color and font size)",
      component: Checkbox,
      attrs: {
        label: "Label",
        className: "tests-checkbox-themed-checkbox"
      }
    },
    {
      name: "Option: iconOn, iconOff (custom icon)",
      component: {
        view: () => h("div", 
          {
            style: {
              display: "flex",
              alignItems: "center"
            }
          }, 
          sizes(sizeNames, {
            label: "Label",
            iconOn: {
              svg: { content: trustedIconStarFilled }
            },
            iconOff: {
              svg: { content: trustedIconStarsOutline }
            }
          })
        )
      }
    },
    {
      name: "Option: disabled",
      interactive: true,
      component: {
        view: () =>
          h("div", [
            h(Checkbox, {
              disabled: true,
              label: "Off"
            }),
            h(Checkbox, {
              disabled: true,
              defaultChecked: true,
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
            h(Checkbox, {
              selectable: () => false,
              label: "Never"
            }),
            h(Checkbox, {
              selectable: checked => !checked,
              label: "Only when unchecked"
            })
          ])
      }
    },
    {
      name: "Option: iconButton (custom hover behaviour)",
      interactive: true,
      component: Checkbox,
      attrs: {
        iconButton: {
          wash: true,
          ink: false
        }
      }
    },
    {
      name: "Option: onChange",
      interactive: true,
      exclude: true,
      component: onChange({ h, Checkbox })
    },
    {
      name: "Option: events",
      interactive: true,
      exclude: true,
      component: events({ h, k, Checkbox })
    },
    {
      name: "Setting the checked state",
      interactive: true,
      exclude: true,
      component: toggleButton({ h, k, RaisedButton, Checkbox })
    },

    // Dark tone

    {
      name: "Option: defaultChecked -- dark tone class",
      className: "pe-dark-tone",
      component: Checkbox,
      attrs: {
        defaultChecked: true
      }
    },
    {
      name: "Themed Checkbox (colors) -- dark tone class",
      className: "pe-dark-tone",
      component: Checkbox,
      attrs: {
        label: "Label",
        className: "tests-checkbox-themed-checkbox"
      }
    },
    {
      name: "Option: disabled -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h("div", [
            h(Checkbox, {
              disabled: true,
              label: "Off"
            }),
            h(Checkbox, {
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
            h(Checkbox, {
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
            h(Checkbox, {
              tone: "light",
              label: "Label"
            })
          )
      }
    },
  ];
};
