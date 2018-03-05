import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton } from "polythene-react";
import genericTests from "./tests-generic";
import AppDrawer from "./components/app-drawer-jsx";
import navigationList from "./components/navigation-list";

const reactTests = () => {

  const createContent = ({ repeats, onClick }) => navigationList({ renderer, keys, Icon, List, ListTile, repeats, onClick });

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "App drawer (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <AppDrawer fixed backdrop createContent={createContent} />
    },
  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }))
  .concat(reactTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }));
