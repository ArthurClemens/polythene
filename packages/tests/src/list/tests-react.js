import React from "react"; // eslint-disable-line no-unused-vars
import { List, Icon, ListTile, Notification } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import { withRouter } from "react-router-dom";

const reactTests = ({ List, Icon, ListTile, h }) => {

  const createUserListTile = (key, title, subtitle, filename) =>
    h(withRouter(({ history }) => 
      h(ListTile, {
        title,
        subtitle,
        front: h(Icon, {
          src: `http://arthurclemens.github.io/assets/polythene/examples/${filename}.png`,
          avatar: true,
          size: "large"
        }),
        url: {
          href: "/",
          onClick: e => (e.preventDefault(), history.push("/shadow"))
        }
      })
    ), { key });

  const listTileJennifer = key => createUserListTile(key, "Jennifer Barker", "Starting post doc", "avatar-1");
  const listTileAli = key => createUserListTile(key, "Ali Connors", "Brunch this weekend?", "avatar-2");
  const listTileGrace = key => createUserListTile(key, "Grace VanDam", "Binge watching...", "avatar-3");

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Options: header, tiles with urls",
      interactive: true,
      component: () =>
        h("div", [
          h(List, {
            key: "one",
            header: {
              title: "Friends"
            },
            border: true,
            tiles: [
              listTileJennifer("urls 1"),
              listTileAli("urls 2"),
              listTileGrace("urls 3")
            ]
          }),
          h(List, {
            key: "two",
            header: {
              title: "Friends"
            },
            border: true,
            tiles: [
              listTileJennifer("urls 4"),
              listTileAli("urls 5"),
              listTileGrace("urls 6")
            ]
          })
        ])
    },
    {
      name: "Options: header.sticky",
      interactive: true,
      exclude: true,
      component: () =>
        h(".scrollable-list", ["one", "two", "three", "four", "five"].map(ord => {
          return h(List,
            {
              header: {
                title: `Sub header ${ord}`,
                sticky: true
              },
              tiles: [
                listTileJennifer(ord + "1"),
                listTileAli(ord + "2"),
                listTileGrace(ord + "3"),
                listTileJennifer(ord + "4"),
                listTileAli(ord + "5"),
                listTileGrace(ord + "6")
              ]
            }
          );
        }))
    },
    
    {
      section: "React tests",
    },
    {
      name: "Options: header, tiles, indent, indentedBorder",
      component: () =>
        <List
          indentedBorder
          header={{
            title: "Friends",
            indent: true
          }}
        >
          <ListTile key="one" indent title="Jennifer Barker" subtitle="Starting post doc" front={
            <Icon
              src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
              avatar
              size="large"
            />}
          />
          <ListTile key="two" indent title="Ali Connors" subtitle="Brunch this weekend?" front={
            <Icon
              src="http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png"
              avatar
              size="large"
            />}
          />
          <ListTile key="three" indent title="Grace VanDam" subtitle="Binge watching..." front={
            <Icon
              src="http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png"
              avatar
              size="large"
            />}
          />
        </List>
    }
  ];
    
};

export default []
  .concat(genericTests({ List, Icon, ListTile, Notification, h, a }))
  .concat(reactTests({ List, Icon, ListTile, Notification, h, a }));
