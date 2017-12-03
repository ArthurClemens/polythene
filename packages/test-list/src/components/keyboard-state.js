import { ListTileCSS } from "polythene-css";

import stream from "mithril/stream";

export default ({ h, List }) => {

  ListTileCSS.addStyle(".tests-list-keyboard-list-tile", {
    color_light_selected_background: "#80d8ff"
  });

  const cityTile = ({ title, selectedTitle }) => (
    {
      title,
      key: title,
      selected: title === selectedTitle,
      className: "tests-list-keyboard-list-tile"
    }
  );

  const headerTile = ({ title }) => (
    {
      title,
      key: title,
      header: true
    }
  );

  return {
    oninit: vnode => {
      const selected = stream();
      vnode.state = {
        selected,
        redrawOnUpdate: stream.merge([selected]) // for React
      };
    },
    view: vnode => {
      const state = vnode.state;
      const selectedTitle = state.selected();
      return h(List, {
        borders: true,
        defaultHighlightIndex: 0,
        onSelect: data => 
          state.selected(data.attrs.title),
        tiles: [
          headerTile({ title: "A"}),
          cityTile({ title: "Amman", selectedTitle }),
          cityTile({ title: "Amsterdam", selectedTitle }),
          cityTile({ title: "Athens", selectedTitle }),
          headerTile({ title: "B" }),
          cityTile({ title: "Bangkok", selectedTitle }),
          cityTile({ title: "Beijing", selectedTitle }),
          cityTile({ title: "Brussels", selectedTitle }),
          headerTile({ title: "C" }),
          cityTile({ title: "Canberra", selectedTitle }),
          cityTile({ title: "Cardiff", selectedTitle }),
          cityTile({ title: "Copenhagen", selectedTitle }),
        ]
      });
    }
  };
};
