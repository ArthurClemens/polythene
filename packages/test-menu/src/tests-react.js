import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { withRouter } from "react-router-dom";
import { renderer, keys, Menu, List, ListTile, Shadow, IconButton, Button, Icon, Dialog } from "polythene-react";
import genericTests from "./tests-generic";
import SimpleHyperscript from "./components/simple-react-hyperscript";
import SimpleJSX from "./components/simple-jsx";
import SettingsJSX from "./components/settings-dialog-jsx";
import Links from "./components/links-react";

const reactTests = ({ renderer: h, Menu, List, ListTile }) => {

  const Tile = (left, right, disabled = false) =>
    <ListTile
      key={left}
      title={left}
      secondary={{ content: right }}
      hoverable={true}
      disabled={disabled}
    />;

  return [
    {
      section: "React specific tests"
    },
    {
      name: "Simple menu (demo without state) (hyperscript)",
      interactive: true,
      exclude: true,
      component: () =>
        h(SimpleHyperscript)
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
      section: "React JSX tests",
    },
    {
      name: "Permanent (JSX)",
      component: () =>
        <Menu
          width={5}
          permanent
        >
          <List
            key="one"
            compact
            hoverable
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
            hoverable
            tiles={[
              Tile("Clear formatting", "\u2318/", true),
              Tile("Custom spacing", "")
            ]}
          />
        </Menu>
    },
    {
      name: "Simple menu (demo without state) (JSX)",
      interactive: true,
      exclude: true,
      component: () => <SimpleJSX />
    },
    {
      name: "Dialog with option 'menu' (demo without state) (JSX)",
      interactive: true,
      exclude: true,
      component: () => <SettingsJSX />
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, renderer, keys }))
  .concat(reactTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, renderer, keys }));
