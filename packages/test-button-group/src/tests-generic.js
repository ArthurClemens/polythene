import { ButtonCSS, ButtonGroupCSS } from "polythene-css";

export default ({ renderer: h, Button, ButtonGroup }) => {
  
  ButtonCSS.addStyle(".button-group-white-background", {
    color_light_background: "#fff"
  });

  ButtonGroupCSS.addStyle(".button-group-separator", {
    color_light_separator: "#42a5f5"
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
                className: "button-group-white-background"
              }),
              h(Button, {
                dropdown: true,
                highLabel: true,
                className: "button-group-white-background"
              })
            ]
          )
      },
    },
    {
      name: "Themed (color)",
      component: {
        view: () => 
          h(ButtonGroup,
            {
              separator: true,
              className: "button-group-separator"
            },
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

