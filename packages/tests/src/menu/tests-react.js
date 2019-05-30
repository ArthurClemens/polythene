import React from "react";
import { withRouter } from "react-router-dom";
import { Menu, List, ListTile, Shadow, IconButton, Button, Icon, Dialog } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import SimpleJSX from "./components/simple-jsx";
import SettingsJSX from "./components/settings-dialog-jsx";
import Links from "./components/links-react";

const reactTests = ({ h, Menu, List, ListTile }) => {

  const Tile = (left, right, disabled = false) =>
    <ListTile
      key={left}
      title={left}
      secondary={{ content: right }}
      hoverable
      disabled={disabled}
    />;

  return [
    {
      section: "React specific tests"
    },
    {
      name: "Menu with links",
      interactive: true,
      exclude: true,
      component: withRouter(({ history }) => 
        h(Links, { history })
      )
    },
    {
      section: "React tests",
    },
    {
      name: "Permanent",
      component: () =>
        <Menu
          width={5}
          permanent
        >
          <List
            key="one"
            compact
            tiles={[
              Tile("Bold", "\u2318B"),
              Tile("Italic", "\u2318I"),
              Tile("Underline", "\u2318U"),
              Tile("Strikethrough", "Alt+Shift+5"),
              Tile("Superscript", "\u2318."),
              Tile("Subscript", "\u2318,"),
            ]}
          />
          <List
            key="two"
            compact
            tiles={[
              Tile("Clear formatting", "\u2318/", true),
              Tile("Custom spacing", "")
            ]}
          />
        </Menu>
    },
    {
      name: "Simple menu (demo without state)",
      interactive: true,
      exclude: true,
      component: () => <SimpleJSX />
    },
    {
      name: "Dialog with option 'menu' (demo without state)",
      interactive: true,
      exclude: true,
      component: () => <SettingsJSX />
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, h, a }))
  .concat(reactTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, h, a }));
