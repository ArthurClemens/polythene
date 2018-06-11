import { RaisedButtonCSS } from "polythene-css";

export default ({ renderer: h, RaisedButton }) => {

  RaisedButtonCSS.addStyle(".tests-raised-button-themed-button", {
    color_light_background: "#FF1744",
    color_light_text:       "#fff",
    letter_spacing:         0,
    text_transform:         "initial",
    font_size:              16
  });

  RaisedButtonCSS.addStyle(".tests-raised-button-bordered-button", {
    color_light_background: "#fff",
    color_light_text:       "#673ab7",
    color_light_border:     "#673ab7",
  });

  RaisedButtonCSS.addStyle(".tests-raised-button-hover-button", {
    color_light_hover:            "#fff",
    color_light_hover_background: "#673ab7",
    animation_duration:           "100ms",
  });

  return [
    {
      name: "Option: label",
      component: RaisedButton,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: raised (with option z: 2)",
      component: RaisedButton,
      attrs: {
        label: "Raised to 2",
        z: 2
      }
    },
    {
      name: "Option: raised (with option z: 5)",
      component: RaisedButton,
      attrs: {
        label: "Raised to 5",
        z: 5
      }
    },
    {
      name: "Themed button (color, font size, letter spacing, text transform)",
      component: RaisedButton,
      attrs: {
        label: "Colored button",
        className: "tests-raised-button-themed-button"
      }
    },
    {
      name: "Themed button (border)",
      component: RaisedButton,
      attrs: {
        label: "Bordered button",
        border: true,
        className: "tests-raised-button-bordered-button"
      }
    },
    {
      name: "Themed button (with option disabled)",
      component: RaisedButton,
      attrs: {
        label: "Disabled themed button",
        className: "tests-raised-button-themed-button",
        disabled: true
      }
    },
    {
      name: "Themed button (hover color)",
      component: RaisedButton,
      attrs: {
        label: "Hover button",
        className: "tests-raised-button-hover-button",
      }
    },
    {
      name: "Option: style (colors)",
      component: RaisedButton,
      attrs: {
        label: "Styled",
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },
    {
      name: "Option: wash (true)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Wash",
        wash: true
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: disabled (true)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Disabled",
        disabled: true
      }
    },
    {
      name: "Option: disabled (false)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Not disabled",
        disabled: false
      }
    },
    {
      name: "Option: animateOnTap (false)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Don't animate shadow",
        animateOnTap: false
      }
    },
    {
      name: "Option: inactivate (2s)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },
    {
      name: "Option: selected",
      component: RaisedButton,
      attrs: {
        label: "Selected",
        selected: true
      }
    },

    {
      name: "Option: inactive (false)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Not inactive",
        inactive: false
      }
    },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Inactive",
        inactive: true
      }
    },
    {
      name: "Button row",
      component: {
        view: () => 
          h(".pe-button-row",
            [
              h(RaisedButton, {
                key: "one", // for React
                label: "One"
              }),
              h(RaisedButton, {
                key: "two", // for React
                label: "Two"
              }),
              h(RaisedButton, {
                key: "three", // for React
                label: "Three"
              })
            ]
          )
      }
    },

    // Dark tone

    {
      name: "Option: label -- dark tone class (should be app's primary color)",
      component: RaisedButton,
      className: "pe-dark-tone",
      attrs: {
        label: "Label"
      }
    },

    {
      name: "Option: disabled -- dark tone class",
      component: RaisedButton,
      className: "pe-dark-tone",
      attrs: {
        label: "Label",
        disabled: true
      }
    },

  ];
};




