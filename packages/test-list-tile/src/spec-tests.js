
const iconStars = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

export default ({ ListTile, Icon, renderer: h }) => {

  const trustedIconStars = h.trust(iconStars);

  return [
    {
      name: "No options",
      component: ListTile
    },
    {
      name: "Option: id",
      component: ListTile,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: ListTile,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: ListTile,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: ListTile,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Child node",
      component: ListTile,
      attrs: null,
      children: h(Icon, {svg: trustedIconStars})
    },
    {
      name: "Option: content",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        content: h(Icon, {svg: trustedIconStars})
      }
    },
    {
      name: "Option: secondary (content)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        secondary: {
          content: h(Icon, { svg: trustedIconStars })
        }
      }
    },
    
  ];
};

