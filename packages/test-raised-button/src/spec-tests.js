
export default ({ RaisedButton, renderer: h, keys }) => {
  return [
    {
      name: "No options",
      component: RaisedButton
    },
    {
      name: "Option: children",
      component: RaisedButton,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: RaisedButton,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: RaisedButton,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: RaisedButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: RaisedButton,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: RaisedButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: RaisedButton,
      attrs: {
        element: "button"
      }
    },
    {
      name: "Option: tabindex",
      component: RaisedButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    
  ];
};



