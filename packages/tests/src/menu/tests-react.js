import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Menu, List, ListTile, Shadow, IconButton, RaisedButton } from "polythene-react";
import genericTests from "./tests-generic";
import opener from "./components/opener-jsx";
import simple from "./components/simple-jsx";

const reactTests = ({ Menu, List, ListTile }) => {

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
      section: "React JSX tests",
    },
    {
      name: "Simple (JSX)",
      component: () =>
        <Menu
          size={5}
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
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: simple, id: "simple-jsx" })
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }))
  .concat(reactTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }));
