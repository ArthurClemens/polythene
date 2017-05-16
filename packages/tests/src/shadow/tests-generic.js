
export default ({ Shadow }) => {
  return [
    {
      name: "Child node",
      component: Shadow,
      attrs: {},
      children: ["Child"]
    },
    {
      name: "Option: content",
      component: Shadow,
      attrs: {
        content: "Content"
      }
    },
    {
      name: "Option: z (0)",
      component: Shadow,
      attrs: {
        z: 0
      }
    },
    {
      name: "Option: z (1)",
      component: Shadow,
      attrs: {
        z: 1
      }
    },
    {
      name: "Option: z (2)",
      component: Shadow,
      attrs: {
        z: 2
      }
    },
    {
      name: "Option: z (3)",
      component: Shadow,
      attrs: {
        z: 3
      }
    },
    {
      name: "Option: z (4)",
      component: Shadow,
      attrs: {
        z: 4
      }
    },
    {
      name: "Option: z (5)",
      component: Shadow,
      attrs: {
        z: 5
      }
    },
  ];
};


