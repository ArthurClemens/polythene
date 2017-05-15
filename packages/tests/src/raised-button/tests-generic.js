
export default ({ raisedButton }) => {

  raisedButton.theme(".tests-raised-button-themed-button", {
    color_light_background: "#FF1744",
    color_light_text: "#fff"
  });

  return [
    {
      name: "Option: label",
      component: raisedButton,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: raised (with option z: 2)",
      component: raisedButton,
      attrs: {
        label: "Raised to 2",
        z: 2
      }
    },
    {
      name: "Option: raised (with option z: 5)",
      component: raisedButton,
      attrs: {
        label: "Raised to 5",
        z: 5
      }
    },
    {
      name: "Themed button (should be red)",
      component: raisedButton,
      attrs: {
        label: "Themed button",
        className: "tests-raised-button-themed-button"
      }
    },
    {
      name: "Themed button (with option disabled)",
      component: raisedButton,
      attrs: {
        label: "Disabled themed button",
        className: "tests-raised-button-themed-button",
        disabled: true
      }
    },
    {
      name: "Option: style (colors)",
      component: raisedButton,
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
      component: raisedButton,
      attrs: {
        label: "No wash",
        wash: false
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: disabled (true)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Disabled",
        disabled: true
      }
    },
    {
      name: "Option: disabled (false)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Not disabled",
        disabled: false
      }
    },
    {
      name: "Option: animateOnTap (false)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Don't animate shadow",
        animateOnTap: false
      }
    },
    {
      name: "Option: inactivate (2)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },
    {
      name: "Option: selected",
      component: raisedButton,
      attrs: {
        label: "Selected",
        selected: true
      }
    },

    {
      name: "Option: inactive (false)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Not inactive",
        inactive: false
      }
    },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: raisedButton,
      attrs: {
        label: "Inactive",
        inactive: true
      }
    },

    // Dark tone

    {
      name: "Option: label -- dark tone class (should be app's primary color)",
      component: raisedButton,
      className: "pe-dark-tone",
      attrs: {
        label: "Label"
      }
    },

    {
      name: "Option: disabled -- dark tone class",
      component: raisedButton,
      className: "pe-dark-tone",
      attrs: {
        label: "Label",
        disabled: true
      }
    },
  ];
};


