
export default ({ SVG, renderer: h }) => {
  return [
    {
      name: "No options",
      component: SVG
    },
    {
      name: "Option: children",
      component: SVG,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: SVG,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: SVG,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: SVG,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: SVG,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: SVG,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: SVG,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

