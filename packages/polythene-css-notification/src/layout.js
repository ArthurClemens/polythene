import { flex, sel } from "polythene-core-css";

const title_single_padding_v_title_padding_h = (selector, vars) =>
  sel(selector, {
    " .pe-notification__title": {
      padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px",
    },
  });

export const customLayoutFns = {
  animation_hide_css: (selector, vars) => [
    sel(selector, vars.animation_hide_css)
  ],
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-notification--visible": [
        vars.animation_show_css
      ],

    })
  ],
  width: (selector, vars) => [
    sel(selector, {
      " .pe-notification__content": {
        width: vars.width + "px",
      },
    })
  ],
  animation_delay: (selector, vars) => [
    sel(selector, {
      transitionDelay: vars.animation_delay,
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      transitionDuration: vars.animation_duration,
    })
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      transitionTimingFunction: vars.animation_timing_function,
    })
  ],
  side_padding: (selector, vars) => [
    sel(selector, {
      " .pe-notification__content": {
        padding: "0 " + vars.side_padding + "px",
      },
    })
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      " .pe-notification__content": {
        borderRadius: vars.border_radius + "px",
      },
    })
  ],
  title_single_padding_v: (selector, vars) => [
    title_single_padding_v_title_padding_h(selector, vars)
  ],
  title_padding_h: (selector, vars) => [
    title_single_padding_v_title_padding_h(selector, vars)
  ],
  font_size: (selector, vars) => [
    sel(selector, {
      " .pe-notification__title": {
        fontSize: vars.font_size + "px",
      },
    })
  ],
  line_height: (selector, vars) => [
    sel(selector, {
      " .pe-notification__title": {
        lineHeight: vars.line_height + "px",
      },
    })
  ],
  title_multi_padding_v: (selector, vars) => [
    sel(selector, {
      ".pe-notification--horizontal": {
        " .pe-notification__title--multi-line": {
          paddingTop: vars.title_multi_padding_v + "px",
          paddingBottom: vars.title_multi_padding_v + "px"
        },
      },
      ".pe-notification--vertical": {
        " .pe-notification__title--multi-line": {
          paddingTop: vars.title_multi_padding_v + "px",
        },
      }
    })
  ],
};

const varFns = Object.assign(
  {},
  {
    general_styles: selector => [
      sel(selector, [
        flex.layoutCenter,
        {      
          pointerEvents: "all",
          justifyContent: "center",
          margin: "0 auto",
          transitionProperty: "all",
          opacity: 0,
          
          " .pe-notification__title": {
            flex: "1 0 auto",
          },

          " .pe-notification__action": {
            " .pe-button": {
              margin: 0
            }
          },

          " .pe-notification__content": {
            maxWidth: "100%"
          },

          ".pe-notification--horizontal": {
            " .pe-notification__content": flex.layoutHorizontal,
            " .pe-notification__title": [
              flex.flex(),
              {
                alignSelf: "center",
              }
            ],
            " .pe-notification__action": flex.layoutCenter
          },
          ".pe-notification--vertical": {
            " .pe-notification__content": [
              flex.layoutVertical
            ],

            " .pe-notification__title": {
              paddingBottom: "6px"
            },
            " .pe-notification__action": [
              flex.layoutEndJustified,
              {
                width: "100%"
              }
            ]
          }
        },
      ])
    ],
  },
  customLayoutFns
);

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
