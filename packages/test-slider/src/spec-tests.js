
export default ({ Slider, renderer: h }) => {
  return [
    {
      name: "No options",
      component: Slider
    },
    
    {
      name: "Option: content",
      component: Slider,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: Slider,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Slider,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Slider,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Slider,
      attrs: {
        element: "span"
      }
    },
    
  ];
};



