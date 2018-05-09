import { ButtonCSS } from "polythene-css";

export default ({ renderer: h, Button, ButtonGroup }) => {
  
  ButtonCSS.addStyle(".white-background-button", {
    color_light_background: "#fff"
  });

  return [
    {
      name: "Group",
      component: {
        view: () => (
          h(ButtonGroup, [
            h(Button, { label: "One" }),
            h(Button, { label: "Two" }),
            h(Button, { label: "Three" }),
          ])
        )
      }
    },
    {
      name: "Option: separator (with Button options extraWide, highLabel and dropdown)",
      component: {
        view: () => 
          h(ButtonGroup,
            { separator: true },
            [
              h(Button, {
                label: "Left",
                extraWide: true,
                highLabel: true,
                className: "white-background-button"
              }),
              h(Button, {
                dropdown: true,
                highLabel: true,
                className: "white-background-button"
              })
            ]
          )
      },
    },

    // Dark tone class
    
    {
      name: "Option: label -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () => (
          h(ButtonGroup, [
            h(Button, { label: "One" }),
            h(Button, { label: "Two" }),
            h(Button, { label: "Three" }),
          ])
        )
      }
    },
    {
      name: "Option: separator (with Button options extraWide, highLabel and dropdown) -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () => 
          h(ButtonGroup,
            { separator: true },
            [
              h(Button, {
                label: "Left",
                extraWide: true,
                highLabel: true,
              }),
              h(Button, {
                dropdown: true,
                highLabel: true,
              })
            ]
          )
      },
    },
  ];
};

