import React from "react"; // eslint-disable-line no-unused-vars
import { Drawer, List, ListTile, Icon, Toolbar, IconButton, Button } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import AppDrawer from "./components/app-drawer-jsx";
import navigationList from "./components/navigation-list";

const reactTests = () => {

  const createContent = ({ repeats, onClick }) => navigationList({ h, a, Icon, List, ListTile, repeats, onClick });

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
  .concat(genericTests({ h, a, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }))
  .concat(reactTests({ h, a, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }));
