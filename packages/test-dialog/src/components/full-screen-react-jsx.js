import React from "react";
import { Dialog, Button, Toolbar, IconButton } from "polythene-react";

const DIALOG_CONFIRM = "confirm-fullscreen";
const iconClose = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>;
const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const BodyText = () => (
  <div>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => <p key={num}>{shortText}</p>)}
  </div>
);

// Toolbar.theme(".tests-dialog-react-jsx-themed-toolbar", {
//   color_dark_background:  "#00c853"
// });

const confirmDialogOpts = ({
  body: "This event is not yet saved. Are you sure you want to delete this event?",
  modal: true,
  backdrop: true,
  footerButtons: [
    <Button
      label="Cancel"
      events={{
        onClick: () => Dialog.hide({ id: DIALOG_CONFIRM })
      }}
    />,
    <Button
      label="Delete"
      events={{
        onClick: () => (
          // hide confirm dialog
          Dialog.hide({ id: DIALOG_CONFIRM }),
          // hide main dialog
          Dialog.hide()
        )
      }}
    />
  ],
});

const toolbarRow = title => [
  <IconButton
    key="close"
    icon={{
      svg: iconClose
    }}
    events={{
      onClick: () => Dialog.show(confirmDialogOpts, { id: DIALOG_CONFIRM })
    }}
  />,
  <span className="flex" key="spacer">{title}</span>,
  <Button
    key="save"
    label="Save"
    events={{
      onClick: () => Dialog.hide()
    }}
  />
];

export default {
  fullScreen: true,
  backdrop: true,
  header: <Toolbar
    content={toolbarRow("New event")}
    className="tests-dialog-react-jsx-themed-toolbar"
    tone="dark"
  />,
  body: <BodyText />
};

