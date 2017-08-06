import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile } from "polythene-react";
import genericTests from "./tests-generic";
import formPane from "./components/form-react";
import fullScreenOptions from "./components/fullscreen-react";
import fullScreenJsxOptions from "./components/fullscreen-react-jsx";

const reactTests = ({ renderer: h, Dialog, RaisedButton }) => {

  const Opener = ({ dialogAttrs, label = "Open" }) =>
    <RaisedButton
      label={label}
      events={{
        onClick: () => Dialog.show(dialogAttrs)
      }}
    />;

  const modalDialogOptions = {
    body: "Discard draft?",
    modal: true,
    backdrop: true,
    footer: [
      <Button key="cancel" label="Cancel" events={{ onClick: Dialog.hide }} />,
      <Button key="discard" label="Discard" events={{ onClick: Dialog.hide }} />
    ]
  };

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
            dialogAttrs: {
              panes: [h(formPane)]
            }
          })
      }
    },
    {
      name: "Full screen",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            dialogAttrs: fullScreenOptions
          })
      }
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: modal with backdrop (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={modalDialogOptions} />
    },
    {
      name: "Full screen (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={fullScreenJsxOptions} />
    },
  ];
    
};

export default []
  .concat(genericTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile, renderer, keys }))
  .concat(reactTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile, renderer, keys }));
