
export default ({ RaisedButton }) => {

  // RaisedButton.theme(".tests-raised-button-themed-button", {
  //   color_light_background: "#FF1744",
  //   color_light_text: "#fff"
  // });

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
      name: "Themed button (should be red)",
      component: RaisedButton,
      attrs: {
        label: "Themed button",
        className: "tests-raised-button-themed-button"
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
      name: "Option: wash (false)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "No wash",
        wash: false
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


