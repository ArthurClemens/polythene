import { IconButtonCSS } from "polythene-css";

const iconLock = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/></svg>";
// const iconCheckbox = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>"

export default ({ IconButton, Icon, SVG, renderer: h, keys: k }) => {

  const trustedIconLock = h.trust(iconLock);
  // const trustedIconCheckbox = h.trust(iconCheckbox);
  
  IconButtonCSS.addStyle(".tests-icon-button-themed-icon-button", {
    padding: 24,
    color_light_background: "purple",
    color_dark_background: "orange",
    color_light: "white"
  });

  IconButtonCSS.addStyle(".tests-icon-button-themed-hover", {
    color_light_hover:            "#fff",
    color_light_label_hover:      "#673ab7",
    color_light_hover_background: "#673ab7",
    animation_duration:           "100ms",
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  const FavIcon = h(Icon, null,
    h(SVG, null, trustedIconLock)
  );

  const sizes = (sizes, attrs) => sizes.map(size =>
    h(IconButton, {
      icon: Object.assign(
        {},
        attrs,
        { size }
      ),
      size,
      label: size
    })
  );

  return [
    {
      name: "Child node (icon component)",
      component: IconButton,
      attrs: null,
      children: FavIcon
    },
    {
      name: "Option: icon",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        }
      }
    },
    {
      name: "Option: icon, label",
      component: IconButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconLock }
        }
      }
    },
    {
      name: "Option: compact",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        compact: true
      }
    },
    {
      name: "Option: wash (true)",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        wash: true
      }
    },
    {
      name: "Option: style (colors)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        style: {
          color: "#FFCCBC",
          backgroundColor: "#4E342E"
        }
      }
    },
    {
      name: "Themed (colors and padding)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        className: "tests-icon-button-themed-icon-button"
      }
    },
    {
      name: "Themed (hover color)",
      component: IconButton,
      interactive: true,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        label: "Hover",
        wash: true,
        className: "tests-icon-button-themed-hover"
      }
    },
    {
      name: "Option: ripple (center)",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        ripple: {
          center: true
        }
      }
    },
    {
      name: "Option: size",
      component: {
        view: () =>
          h(".multiple",
            sizes(sizeNames, {
              svg: { content: trustedIconLock }
            })
          )
      }
    },
    {
      name: "Option: disabled",
      component: IconButton,
      attrs: {
        disabled: true,
        label: "Label",
        icon: {
          svg: { content: trustedIconLock }
        }
      }
    },
    {
      name: "Option: events.onclick",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        label: "Label",
        events: {
          [k.onclick]: () => console.log("onclick") // eslint-disable-line no-console
        }
      }
    },
    {
      name: "Option: label (RTL)",
      component: {
        view: () => h("div",
          { className: "pe-rtl" },
          h(IconButton,
            {
              label: "ضع الكلمة المناسبة",
              icon: {
                svg: { content: trustedIconLock }
              },
            }
          )
        )
      }
    },

    // Dark tone

    {
      name: "Child node (icon component) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: null,
      children: h(Icon, {svg: { content: trustedIconLock }})
    },
    {
      name: "Option: wash (true) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        wash: true
      }
    },
    {
      name: "Themed (color and size) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconLock }
        },
        className: "tests-icon-button-themed-icon-button"
      }
    },
  ];
};
