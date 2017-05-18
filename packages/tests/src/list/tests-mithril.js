import { keys, renderer, List, Icon, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ List, Icon, ListTile, renderer: h }) => {

  const createUserListTile = (title, subtitle, filename) =>
    h(ListTile, {
      title,
      key: title,
      subtitle,
      front: h(Icon, {
        src: `http://arthurclemens.github.io/assets/polythene/examples/${filename}.png`,
        avatar: true,
        type: "large"
      }),
      url: {
        href: "/",
        oncreate: h.route.link
      }
    });

  const listTileJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  const listTileAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  const listTileGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Options: header, tiles with urls",
      interactive: true,
      component: {
        view: () => [
          h(List, {
            header: {
              title: "Friends"
            },
            borders: true,
            tiles: [
              listTileJennifer,
              listTileAli,
              listTileGrace
            ]
          }),
          h(List, {
            header: {
              title: "Friends"
            },
            borders: true,
            tiles: [
              listTileJennifer,
              listTileAli,
              listTileGrace
            ]
          })
        ]
      }
    },
    {
      name: "Options: header.sticky",
      interactive: true,
      component: {
        view: () => h(".scrollable-list", [0,1,2,3,4].map(num => {
          return h(List, {
            header: {
              title: `Subheader ${num}`,
              sticky: true
            },
            tiles: [
              listTileJennifer,
              listTileAli,
              listTileGrace,
              listTileJennifer,
              listTileAli,
              listTileGrace
            ]
          });
        }))
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ List, Icon, ListTile, renderer, keys }))
  .concat(mithrilTests({ List, Icon, ListTile, renderer, keys }));
