import RadioGroup from "./components/radio-group";

const iconStarOutlineSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";

const iconStarFilledSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

export default ({ RadioButton, renderer: h, keys: k }) => {
  
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
      component: RadioGroup({ h, k, RadioButton, count: 2 })
    },
    {
      name: "Option: defaultChecked",
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [null, { defaultChecked: true }] })
    },
    {
      name: "A default checked value",
      component: RadioGroup({ h, k, RadioButton, count: 2, groupOptions: { defaultCheckedValue: "two"} })
    },
    {
      name: "Option: disabled",
      interactive: true,
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [{ disabled: true }, { disabled: true, defaultChecked: true }] })
    },
    {
      name: "Option: size",
      component: RadioGroup({ h, k, RadioButton, count: 4, options: sizeNames.map(size => ({ size }))  })
    },
    {
      name: "Option: iconOn, iconOff (custom icon)",
      component: RadioGroup({ h, k, RadioButton, count: 4, options: sizeNames.map(size =>
        ({
          size,
          iconOn: {
            svg: trustedIconStarFilled
          },
          iconOff: {
            svg: trustedIconStarsOutline
          }
        })
      )})
    },
    {
      name: "Themed radio button (color and font size)",
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [
        { className: "tests-radio-button-themed-radio" },
        { className: "tests-radio-button-themed-radio" }
      ] })
    },
    {
      name: "Option: style (colors)",
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [
        {
          style: {
            color: "#EF6C00"
          }
        },
        {
          style: {
            color: "#EF6C00"
          },
          defaultChecked: true
        }
      ] })
    },
    {
      name: "Option: selectable (true)",
      interactive: true,
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [
        {
          label: "Always",
          selectable: () => true
        },
        {
          label: "Always",
          selectable: () => true,
          defaultChecked: true
        }
      ] })
    },
    {
      name: "Option: iconButton (custom hover behaviour)",
      interactive: true,
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [
        {
          label: "Hover me",
          iconButton: {
            wash: true,
            ink: false
          }
        },
        {
          label: "Hover me",
          iconButton: {
            wash: true,
            ink: false
          }
        }
      ] })
    },
    {
      name: "Option: onChange",
      interactive: true,
      component: RadioGroup({ h, k, RadioButton, count: 4, groupOptions: { showState: true } })
    },

    // Dark tone

    {
      name: "Option: label -- dark tone",
      className: "pe-dark-tone",
      component: RadioGroup({ h, k, RadioButton, count: 2 })
    },
    {
      name: "Option: disabled -- dark tone",
      className: "pe-dark-tone",
      interactive: true,
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [{ disabled: true }, { disabled: true, defaultChecked: true }] })
    },
    {
      name: "Themed radio button (color and font size) -- dark tone",
      className: "pe-dark-tone",
      component: RadioGroup({ h, k, RadioButton, count: 2, options: [
        { className: "tests-radio-button-themed-radio" },
        { className: "tests-radio-button-themed-radio" }
      ] })
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => 
          h("div", {
            style: {
              background: "#fff",
              padding: "20px"
            },
            className: "pe-light-tone"
          },
          h(RadioGroup({ h, k, RadioButton, count: 2 }))
        )
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => 
          h("div", {
            style: {
              background: "#fff",
              padding: "20px"
            }
          },
          h(RadioGroup({ h, k, RadioButton, count: 2 }))
        )
      }
    },
  ];
};
