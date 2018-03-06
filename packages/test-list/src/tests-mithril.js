import { keys, renderer, List, Icon, ListTile, Notification } from "polythene-mithril";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const mithrilTests = ({ List, Icon, ListTile, renderer: h }) => {

  const trustedIconStars = h.trust(iconStars);

  const createUserListTile = (title, subtitle, filename, showSecondary) =>
    h(ListTile, {
      title,
      key: title,
      subtitle,
      hoverable: true,
      front: h(Icon, {
        src: `http://arthurclemens.github.io/assets/polythene/examples/${filename}.png`,
        avatar: true,
        size: "large"
      }),
      url: {
        href: "/#primary",
        oncreate: h.route.link
      },
      secondary: showSecondary ? {
        icon: {
          svg: { content: trustedIconStars },
          size: "medium"
        },
        url: {
          href: "/#secondary",
          oncreate: h.route.link
        }
      } : null
    });

  const listTileJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  const listTileAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  const listTileGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  const listTileWithSecondaryJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1", true);
  const listTileWithSecondaryAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2", true);
  const listTileWithSecondaryGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3", true);

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
            border: true,
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
            border: true,
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
      name: "Options: header, tiles with urls, secondary",
      interactive: true,
      component: {
        view: () => [
          h(List, {
            header: {
              title: "Friends"
            },
            border: true,
            tiles: [
              listTileWithSecondaryJennifer,
              listTileWithSecondaryAli,
              listTileWithSecondaryGrace
            ]
          }),
          h(List, {
            header: {
              title: "Friends"
            },
            border: true,
            tiles: [
              listTileWithSecondaryJennifer,
              listTileWithSecondaryAli,
              listTileWithSecondaryGrace
            ]
          })
        ]
      }
    },
    {
      name: "Options: header.sticky",
      interactive: true,
      component: {
        view: () => h(".scrollable-list", ["one", "two", "three", "four", "five"].map(ord => {
          return h(List, {
            header: {
              title: `Sub header ${ord}`,
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
  .concat(genericTests({ List, Icon, ListTile, Notification, renderer, keys }))
  .concat(mithrilTests({ List, Icon, ListTile, Notification, renderer, keys }));
