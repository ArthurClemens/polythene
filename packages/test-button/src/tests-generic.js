import { ButtonCSS } from "polythene-css";

export default ({ renderer: h, Button }) => {
  
  ButtonCSS.addStyle(".tests-button-small-button", {
    contained: true,
    border: true,
    font_size: 13,
    padding_h: 4,
    label_padding_v: 8,
    color_light_text: "#333",
    color_dark_text: "#fff",
  });

  ButtonCSS.addStyle(".tests-button-themed-button", {
    contained:              true,
    color_light_background: "#2196F3",
    color_dark_background:  "#2196F3",
    color_light_text:       "#fff",
    letter_spacing:         0
  });

  ButtonCSS.addStyle(".blue-on-dark-button", {
    contained:       true,
    color_dark_text: "#2196F3"
  });

  ButtonCSS.addStyle(".tests-button-bordered-button", {
    border:             true,
    border_width:       2,
    color_light_text:   "#673ab7",
    color_dark_text:    "#2196F3",
    color_light_border: "#673ab7",
    color_dark_border:  "#2196F3",
  });

  ButtonCSS.addStyle(".tests-button-contained-button", {
    contained:              true,
    color_light_background: "#fff",
  });

  ButtonCSS.addStyle(".tests-button-shadow-button", {
    shadow_depth:           1,
    color_light_background: "#fff",
  });

  ButtonCSS.addStyle(".tests-button-hover-button", {
    contained:                    true,
    color_light_hover:            "#fff",
    color_light_hover_background: "#673ab7",
    animation_duration:           "100ms",
  });

  ButtonCSS.addStyle(".tests-button-media-query",
    {
      contained:              true,
      color_light_background: "#673ab7",
      color_light_text:       "#fff",
      shadow_depth:           1,
    },
    {
      mediaQuery: "@media all and (max-width: 480px) and (min-width: 360px), (min-width: 760px)"
    }
  );

  ButtonCSS.addStyle(".tests-button-sentence-case", {
    contained:              true,
    color_light_background: "#6200ee",
    color_light_text:       "#fff",
    text_transform:         "none"
  });
  
  return [
    {
      name: "Option: label",
      component: Button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: wash (false)",
      interactive: true,
      component: Button,
      attrs: {
        label: "No wash",
        wash: false
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: Button,
      attrs: {
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: ripple",
      interactive: true,
      component: Button,
      attrs: {
        label: "Custom ripple",
        ripple: {
          endOpacity: 1,
          persistent: true,
          style: {
            color: "#2196F3"
          }
        }
      }
    },
    {
      name: "Option: disabled",
      component: Button,
      attrs: {
        label: "Disabled",
        disabled: true
      }
    },
    {
      name: "Option: selected",
      component: Button,
      attrs: {
        label: "Selected",
        selected: true
      }
    },
    {
      name: "Option: dropdown with label (not interactive) -- see Menu examples",
      component: Button,
      attrs: {
        label: "Dropdown",
        dropdown: {
          open: false
        },
      }
    },
    // {
    //   name: "Option: dropdown without label (not interactive)",
    //   component: Button,
    //   attrs: {
    //     dropdown: {
    //       open: false
    //     },
    //   }
    // },
    {
      name: "Button row",
      component: {
        view: () => 
          h(".pe-button-row",
            [
              h(Button, {
                key: "one", // for React
                label: "One"
              }),
              h(Button, {
                key: "two", // for React
                label: "Two"
              }),
              h(Button, {
                key: "three", // for React
                label: "Three"
              })
            ]
          )
      }
    },
    // {
    //   name: "Option: formaction",
    //   component: Button,
    //   attrs: {
    //     label: "Form action",
    //     formaction: "http://polythene.js.org"
    //   }
    // },
    // {
    //   name: "Option: inactive (false)",
    //   interactive: true,
    //   component: Button,
    //   attrs: {
    //     label: "Not inactive",
    //     inactive: false
    //   }
    // },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Inactive",
        inactive: true
      }
    },
    {
      name: "Option: inactivate (2)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },
    {
      name: "Option: contained",
      component: Button,
      attrs: {
        label: "Contained",
        contained: true
      }
    },
    {
      name: "Option: raised",
      component: Button,
      attrs: {
        label: "Raised",
        raised: true,
      }
    },
    {
      name: "Option: border",
      component: Button,
      attrs: {
        label: "Border",
        border: true,
      }
    },
    {
      name: "Option: style (colors)",
      component: Button,
      attrs: {
        label: "Styled",
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },

    {
      section: "Themed",
    },
    {
      name: "Themed Button (colors, letter spacing)",
      component: Button,
      attrs: {
        label: "Themed Button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Themed Button (colors, sentence case)",
      component: Button,
      attrs: {
        label: "Sentence case",
        className: "tests-button-sentence-case",
      }
    },
    {
      name: "Themed Button (border)",
      component: Button,
      attrs: {
        label: "Border",
        className: "tests-button-bordered-button",
      }
    },
    {
      name: "Themed Button (border, small)",
      component: Button,
      attrs: {
        label: "Small",
        className: "tests-button-small-button",
      }
    },
    {
      name: "Themed Button (contained)",
      component: Button,
      attrs: {
        label: "Contained",
        className: "tests-button-contained-button",
      }
    },
    {
      name: "Themed Button (shadow)",
      component: Button,
      attrs: {
        label: "Shadow",
        className: "tests-button-shadow-button",
      }
    },
    {
      name: "Themed Button (hover)",
      component: Button,
      interactive: true,
      attrs: {
        label: "Hover Button",
        className: "tests-button-hover-button"
      }
    },
    {
      name: "Themed Button (media query - resize screen to see toggled style)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Media Query Button",
        className: "tests-button-media-query"
      }
    },
    {
      name: "Themed Button: (disabled)",
      component: Button,
      attrs: {
        label: "Disabled",
        className: "tests-button-bordered-button",
        disabled: true
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Option: label -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Themed Button -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Themed Button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Themed Button blue on dark -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Blue on dark Button",
        className: "blue-on-dark-button"
      }
    },
    {
      name: "Themed Button (border) -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Border dark tone",
        className: "tests-button-bordered-button",
      }
    },
    {
      name: "Themed Button (border, small) -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Small dark tone",
        className: "tests-button-small-button",
      }
    },
  ];
};

