
const tabs = [
  { label: "New" },
  { label: "My Favorites" },
  { label: "Saved" }
];

export default ({ Tabs }) => {
  return [
    {
      name: "Option: id",
      component: Tabs,
      attrs: {
        id: "id-x",
        tabs
      }
    },
    {
      name: "Option: class",
      component: Tabs,
      attrs: {
        className: "class-x",
        tabs
      }
    },
    {
      name: "Option: className",
      component: Tabs,
      attrs: {
        className: "className-x",
        tabs
      }
    },
    {
      name: "Option: all (className)",
      component: Tabs,
      attrs: {
        tabs,
        all: {
          className: "className-x"
        }
      }
    },
  ];
};

