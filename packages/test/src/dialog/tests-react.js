import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile } from "polythene-react";
import genericTests from "./tests-generic";
import formPane from "./components/form-react";

const reactTests = () => {

  const Opener = (dialogAttrs, label = "Open") => renderer(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Conditional button states",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            panes: [renderer(formPane)]
          })
      }
    },
    // {
    //   section: "React JSX tests",
    // },
    // {
    //   name: "Simple (JSX)",
    //   component: () =>
    //     <Menu
    //       size={5}
    //       permanent
    //     >
    //       <List
    //         key="one"
    //         compact
    //         hoverable
    //         tiles={[
    //           Tile("Bold", "\u2318B"),
    //           Tile("Italic", "\u2318I"),
    //           Tile("Underline", "\u2318U"),
    //           Tile("Strikethrough", "Alt+Shift+5"),
    //           Tile("Superscript", "\u2318."),
    //           Tile("Subscript", "\u2318,"),
    //         ]}
    //       />
    //       <List
    //         key="two"
    //         compact
    //         hoverable
    //         tiles={[
    //           Tile("Clear formatting", "\u2318/", true),
    //           Tile("Custom spacing", "")
    //         ]}
    //       />
    //     </Menu>
    // },
    // {
    //   name: "Simple menu (demo without state) (JSX)",
    //   interactive: true,
    //   exclude: true,
    //   component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: simple, id: "simple-jsx" })
    // },
  ];
    
};

export default []
  .concat(genericTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile, renderer, keys }))
  .concat(reactTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile, renderer, keys }));
