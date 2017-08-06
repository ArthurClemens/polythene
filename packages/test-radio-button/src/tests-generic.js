import onChange from "./components/onChange";
import events from "./components/events";

const iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";

const iconStarFilledSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

export default ({ RadioButton, RadioGroup, renderer: h, keys: k }) => {

  const trustedIconStarsOutline = h.trust(iconStarOutlineSVG);
  const trustedIconStarFilled = h.trust(iconStarFilledSVG);

  RadioButton.theme(".tests-radio-button-themed-radio", {
    label_font_size:   28,
    color_light_on:    "#2196F3",
    color_light_off:   "#2196F3",
    color_dark_on:     "#2196F3",
    color_dark_off:    "#2196F3",
    color_light_label: "#2196F3",
    color_dark_label:  "#2196F3"
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  return [
    {
      name: "Option: label",
      component: RadioGroup,
      attrs: {
        name: "label",
        content: [
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
          }
        ]
      }
    },
    {
      name: "Option: defaultChecked",
      component: RadioGroup,
      attrs: {
        name: "defaultChecked",
        content: [
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
            defaultChecked: true
          }
        ]
      }
    },
    {
      name: "Option: disabled",
      component: RadioGroup,
      attrs: {
        name: "disabled",
        content: [
          {
            value: "One",
            label: "One",
            disabled: true
          },
          {
            value: "Two",
            label: "Two",
            disabled: true,
            checked: true
          }
        ]
      }
    },
    {
      name: "Option: selectable",
      interactive: true,
      component: RadioGroup,
      attrs: {
        name: "selectable",
        content: [
          {
            value: "One",
            label: "Never",
            selectable: () => false,
          },
          {
            value: "Two",
            label: "Only when unchecked",
            selectable: checked => !checked,
          }
        ]
      }
    },
    {
      name: "Option: size",
      component: RadioGroup,
      attrs: {
        name: "size",
        style: {
          display: "flex",
          alignItems: "center"
        },
        content: sizeNames.map(size => ({
          size,
          value: size,
          label: size
        }))
      }
    },
    {
      name: "Option: iconOn, iconOff (custom icon)",
      component: RadioGroup,
      attrs: {
        name: "icon",
        style: {
          display: "flex",
          alignItems: "center"
        },
        content: sizeNames.map(size => ({
          size,
          value: size,
          iconOn: { svg: trustedIconStarFilled },
          iconOff: { svg: trustedIconStarsOutline }
        }))
      }
    },
    {
      name: "Themed radio button (color and font size)",
      component: RadioGroup,
      attrs: {
        name: "themed",
        content: [
          {
            value: "One",
            label: "One",
            className: "tests-radio-button-themed-radio"
          },
          {
            value: "Two",
            label: "Two",
            className: "tests-radio-button-themed-radio",
            defaultChecked: true
          }
        ]
      }
    },
    {
      name: "Option: style (colors)",
      component: RadioGroup,
      attrs: {
        name: "style",
        content: [
          {
            value: "One",
            label: "One",
            style: { color: "#EF6C00" }
          },
          {
            value: "Two",
            label: "Two",
            style: { color: "#EF6C00" },
            defaultChecked: true
          }
        ]
      }
    },
    {
      name: "Option: iconButton (custom hover behaviour)",
      interactive: true,
      component: RadioGroup,
      attrs: {
        name: "iconButton",
        content: [
          {
            value: "One",
            label: "Hover me",
            iconButton: {
              wash: true,
              ink: false
            }
          },
          {
            value: "Two",
            label: "Hover me",
            iconButton: {
              wash: true,
              ink: false
            }
          }
        ]
      }
    },
    {
      name: "Option: Radio Group onChange",
      interactive: true,
      component: onChange({ h, RadioGroup })
    },
    {
      name: "Option: events",
      interactive: true,
      exclude: true,
      component: events({ h, k, RadioGroup })
    },

    // Dark tone

    {
      name: "Option: label -- dark tone",
      className: "pe-dark-tone",
      component: RadioGroup,
      attrs: {
        name: "label-dark",
        content: [
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
          }
        ]
      }
    },
    {
      name: "Option: disabled -- dark tone",
      className: "pe-dark-tone",
      component: RadioGroup,
      attrs: {
        name: "disabled-dark",
        content: [
          {
            value: "One",
            label: "One",
            disabled: true
          },
          {
            value: "Two",
            label: "Two",
            disabled: true,
            checked: true
          }
        ]
      }
    },
    {
      name: "Themed radio button (color and font size) -- dark tone",
      className: "pe-dark-tone",
      component: RadioGroup,
      attrs: {
        name: "themed-dark",
        content: [
          {
            value: "One",
            label: "One",
            className: "tests-radio-button-themed-radio"
          },
          {
            value: "Two",
            label: "Two",
            className: "tests-radio-button-themed-radio",
            defaultChecked: true
          }
        ]
      }
    },
    {
      name: "Dark tone class + light theme class",
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
            h(RadioGroup, {
              name: "test-dark-tone-light-class",
              content: [
                {
                  value: "One",
                  label: "One",
                },
                {
                  value: "Two",
                  label: "Two",
                  defaultChecked: true
                }
              ]
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
            h(RadioGroup, {
              name: "test-dark-tone-light",
              content: [
                {
                  value: "One",
                  label: "One",
                },
                {
                  value: "Two",
                  label: "Two",
                  defaultChecked: true
                }
              ]
            })
          )
      }
    },
  ];
};
