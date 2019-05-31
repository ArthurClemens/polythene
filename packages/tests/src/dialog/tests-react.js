import React from "react";
import { Dialog, DialogPane, Button, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import ConditionalDialogPane from "./components/form-react";
import fullScreenOptions from "./components/full-screen-react";
import fullScreenJsxOptions from "./components/full-screen-react-jsx";
import Updating from "./components/updating-react-jsx";
import Spawns from "./components/spawns-react-jsx";

const reactTests = ({ Dialog, Button }) => {

  const Opener = ({ dialogAttrs, label = "Open" }) =>
    <Button
      raised
      label={label}
      events={{
        onClick: () => Dialog.show(dialogAttrs)
      }}
    />;

  const modalDialogOptions = {
    body: "Discard draft?",
    modal: true,
    backdrop: true,
    footerButtons: [
      <Button key="cancel" label="Cancel" events={{ onClick: Dialog.hide }} />,
      <Button key="discard" label="Discard" events={{ onClick: Dialog.hide }} />
    ]
  };

  const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const cancelOkButtons = [
    <Button key="cancel" label="Cancel" events={{ onClick: Dialog.hide }} />,
    <Button key="save" label="Save" events={{ onClick: Dialog.hide }} />
  ];

  const LongText = () => (
    <div>
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => <p key={num}>{shortText}</p>)}
    </div>
  );

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Full screen (hyperscript)",
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
      name: "Option: title and body (long text) (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={{
          title: "Long dialog with a very long title that surely won't fit here",
          body: <LongText />,
          footerButtons: cancelOkButtons
        }} />
    },
    {
      name: "Option: modal with backdrop (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={modalDialogOptions} />
    },
    {
      name: "Full screen",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={fullScreenJsxOptions} />
    },
    {
      name: "Conditional button states (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <Opener dialogAttrs={{
          panes: [<ConditionalDialogPane />]
        }} />
    },
    {
      name: "Updating dialog (JSX)",
      interactive: true,
      exclude: true,
      component: () => <Updating />
    },
    {
      name: "Spawns and ids (JSX)",
      interactive: true,
      exclude: true,
      component: () => <Spawns />
    },
  ];
    
};

export default []
  .concat(genericTests({ Dialog, DialogPane, Button, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, h, a }))
  .concat(reactTests({ Dialog, DialogPane, Button, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, h, a }));
