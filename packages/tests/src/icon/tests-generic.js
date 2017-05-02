const iconStars = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

export default ({ icon, svg, renderer: h }) => {
  
  const trustedIconStars = h.trust(iconStars);

  icon.theme(".tests-icon-themed-icon", {
    size_regular: 50,
    color_light: "purple",
    color_dark: "orange"
  });

  return [
    {
      name: "Child node (trusted svg children)",
      component: icon,
      attrs: null,
      children: h(svg, [trustedIconStars])
    },
    {
      name: "Option: content",
      component: icon,
      attrs: {
        content: trustedIconStars
      }
    },
    {
      name: "Option: content (trusted svg content)",
      component: icon,
      attrs: {
        svg: { content: trustedIconStars }
      }
    },
    {
      name: "Option: content (svg content mmsvg)",
      component: icon,
      attrs: {
        svg: { content: trustedIconStars }
      }
    },
    
    {
      name: "Option: src (image file)",
      component: icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
      }
    },
    {
      name: "Option: src (svg file)",
      component: icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/recycle.svg"
      }
    },
    {
      name: "Option: avatar (type large)",
      component: icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }
    },

    // Dark tone

    {
      name: "Child node (trusted svg children) -- dark theme class (color set with style option)",
      component: icon,
      className: "pe-dark-tone",
      attrs: {
        style: {
          color: "#fff"
        }
      },
      children: h(svg, [trustedIconStars])
    },
  ];
};

