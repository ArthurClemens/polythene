import { ButtonCSS } from "polythene-css";

export default ({ renderer: h, Button, ButtonGroup }) => {
  
  ButtonCSS.addStyle(".button-group-themed-white", {
    color_light_background: "#fff",
    color_dark_background:  "#42a5f5",
    color_dark_separator:   "rgba(255,255,255,.35)",
  });

  ButtonCSS.addStyle(".button-group-themed-round", {
    border_radius:          8,
    color_light_background: "#42a5f5",
    color_light_text:       "#fff",
    color_light_icon:       "rgba(255,255,255,.7)",
    color_light_separator:  "#fff",
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
          h(ButtonGroup, [
            h(Button, {
              label: "Left",
              extraWide: true,
              highLabel: true,
              className: "button-group-themed-white"
            }),
            h(Button, {
              dropdown: true,
              highLabel: true,
              className: "button-group-themed-white",
              separatorAtStart: true
            })
          ])
      },
    },
    {
      name: "Themed (color, border radius, separators)",
      component: {
        view: () => 
          h(ButtonGroup,
            [
              h(Button, {
                label: "Left",
                extraWide: true,
                highLabel: true,
                className: "button-group-themed-round",
              }),
              h(Button, {
                label: "Middle",
                extraWide: true,
                highLabel: true,
                className: "button-group-themed-round",
                separatorAtStart: true,
              }),
              h(Button, {
                dropdown: true,
                highLabel: true,
                className: "button-group-themed-round",
                separatorAtStart: true,
              })
            ]
          )
      },
    },
    {
      name: "Option: separator (with Button options extraWide, highLabel and dropdown) (RTL)",
      component: {
        view: () => 
          h(".pe-rtl", null,
            h(ButtonGroup, [
              h(Button, {
                label: "Left",
                extraWide: true,
                highLabel: true,
                className: "button-group-themed-white"
              }),
              h(Button, {
                dropdown: true,
                highLabel: true,
                className: "button-group-themed-white",
                separatorAtStart: true
              })
            ])
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
          h(ButtonGroup, [
            h(Button, {
              label: "Left",
              extraWide: true,
              highLabel: true,
              className: "button-group-themed-white"
            }),
            h(Button, {
              dropdown: true,
              highLabel: true,
              className: "button-group-themed-white",
              separatorAtStart: true
            })
          ])
      },
    },
  ];
};

