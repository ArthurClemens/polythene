import m from "mithril";
import dialog from "polythene-dialog";
import raisedButton from "polythene-raised-button";
import list from "polythene-list";
import listTile from "polythene-list-tile";

const tile = (title, selected, disabled) =>
  m(listTile, {
    title,
    selected,
    disabled,
    ink: true,
    events: {
      onclick: () => {
        if (!disabled) {
          dialog.hide();
        }
      }
    }
  });

const settingsMenuDialog =  {
  menu: m(list, {
    hoverable: true,
    tiles: [
      tile("Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him", true, false),
      tile("and whatsoever comes athwart his affection ranges", false, false),
      tile("evenly with mine. How canst thou cross this marriage?", false, true)
    ]
  }),
  hideDelay: .240
};

export default {
  view: () => 
    m(raisedButton, {
      label: "Open",
      events: {
        onclick: () => dialog.show(settingsMenuDialog)
      }
    }
  )
};