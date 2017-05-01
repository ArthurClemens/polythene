
export default ({ shadow }) => {
  return [
    {
      name: "Child node",
      component: shadow,
      attrs: {},
      children: ["Child"]
    },
    {
      name: "Option: content",
      component: shadow,
      attrs: {
        content: "Content"
      }
    },
    {
      name: "Option: z (0)",
      component: shadow,
      attrs: {
        z: 0
      }
    },
    {
      name: "Option: z (1)",
      component: shadow,
      attrs: {
        z: 1
      }
    },
    {
      name: "Option: z (2)",
      component: shadow,
      attrs: {
        z: 2
      }
    },
    {
      name: "Option: z (3)",
      component: shadow,
      attrs: {
        z: 3
      }
    },
    {
      name: "Option: z (4)",
      component: shadow,
      attrs: {
        z: 4
      }
    },
    {
      name: "Option: z (5)",
      component: shadow,
      attrs: {
        z: 5
      }
    },
  ];
};


