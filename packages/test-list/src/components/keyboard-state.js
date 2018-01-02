import { ListTileCSS } from "polythene-css";

import stream from "mithril/stream";

const rawData = [
  {
    group: "A",
    cities: [
      "Amman",
      "Amsterdam",
      "Athens"
    ]
  },
  {
    group: "B",
    cities: [
      "Bangkok",
      "Beijing",
      "Brussels"
    ]
  },
  {
    group: "C",
    cities: [
      "Canberra",
      "Cardiff",
      "Copenhagen"
    ]
  },
];

// Create a flat list of tile rawData
const tileData = rawData.reduce((acc, current) => {
  acc.push({
    header: true,
    title: current.group
  });
  current.cities.forEach(city => acc.push({
    title: city
  }));
  return acc;
}, []);

// Create a list of all valid indices (headers excluded)
const validIndices = tileData
  .map((item, index) => item.header ? null : index)
  .filter(item => item !== null);

export default ({ h, k, List, ListTile }) => {
  
  ListTileCSS.addStyle(".tests-list-keyboard-list-tile", {
    color_light_selected_background: "#90caf9"
  });

  const createTile = ({ title, header, selected, hoverable, onSelect }) =>
    h(ListTile, {
      title,
      key: title,
      header,
      selected,
      hoverable,
      className: header
        ? ""
        : "tests-list-keyboard-list-tile",
      events: {
        [k.onclick]: onSelect
      }
    });

  return {
    oninit: vnode => {
      const cityIndex = stream();

      const handleKey = e => {
        const index = cityIndex();
        if (e.key === "ArrowDown" || e.key === "Down") { // "Down" for IE11
          e.preventDefault();
          const newIndex = Math.min(index + 1, validIndices.length - 1);
          cityIndex(newIndex);
        } else if (e.key === "ArrowUp" || e.key === "Up") { // "Up" for IE11
          e.preventDefault();
          const newIndex = Math.max(0, index - 1);
          cityIndex(newIndex);
        } else if (e.key === "Escape" || e.key === "Esc") { // "Esc" for IE11
          cityIndex(-1);
        }
      };

      Object.assign(vnode.state, {
        cityIndex,
        handleKey,
        redrawOnUpdate: stream.merge([cityIndex]) // for React
      });
    },
    view: vnode => {
      const state = vnode.state;
      const higlightIndex = validIndices[state.cityIndex()];
      return h("div",
        // The container catches all keyboard events
        { [k.onkeydown]: state.handleKey },
        h(List, {
          borders: true,
          tiles: tileData.map((item, index) => createTile(Object.assign(
            {},
            item,
            {
              selected: index === higlightIndex,
              hoverable: !item.header,
              onSelect: item.header
                ? null
                : () => {
                  const cityIndex = validIndices.indexOf(index);
                  state.cityIndex(cityIndex);
                }
            }
          )))
        })
      );
    }
  };
};
