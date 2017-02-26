import m from "mithril";
import * as polythene from "polythene";

export const shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

export const longText = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => shortText).join("");

export const cancelOkButtons = [
  m(polythene.button, {
    label: "Cancel",
    events: {
      onclick: () => polythene.dialog.hide()
    }
  }),
  m(polythene.button, {
    label: "Discard",
    events: {
      onclick: () => polythene.dialog.hide()
    }
  })
];

export const commonDialogProps = {
  footer: cancelOkButtons
};
