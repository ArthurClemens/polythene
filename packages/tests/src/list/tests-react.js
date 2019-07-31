import React from "react"; // eslint-disable-line no-unused-vars
import { List, Icon, ListTile, Notification } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import { withRouter } from "react-router-dom";

const reactTests = ({ List, Icon, ListTile, h }) => {

  const createUserListTile = (title, subtitle, filename) =>
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
    ));

  const listTileJennifer = () => createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  const listTileAli = () => createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  const listTileGrace = () => createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Options: header, tiles with urls (JSX)",
      interactive: true,
      component: () =>
        <div>
          <List
            header={{
              title: "Friends"
            }}
            border
            tiles={[
              listTileJennifer(),
              listTileAli(),
              listTileGrace()
            ]}
          />
          <List
            header={{
              title: "Friends"
            }}
            border
            tiles={[
              listTileJennifer(),
              listTileAli(),
              listTileGrace()
            ]}
          />
        </div>
    },
    {
      name: "Options: header.sticky (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <div
          className="scrollable-list"
        >
          {["one", "two", "three", "four", "five"].map(ord =>
            <List
              key={ord}
              header={{
                title: `Sub header ${ord}`,
                sticky: true
              }}
              tiles={[
                listTileJennifer(),
                listTileAli(),
                listTileGrace(),
                listTileJennifer(),
                listTileAli(),
                listTileGrace()
              ]}
            />
          )}
        </div>
    },

    {
      name: "Options: header, tiles, indent, indentedBorder (JSX)",
      component: () =>
        <List
          indentedBorder
          header={{
            title: "Friends",
            indent: true
          }}
        >
          <ListTile indent title="Jennifer Barker" subtitle="Starting post doc" front={
            <Icon
              src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
              avatar
              size="large"
            />}
          />
          <ListTile indent title="Ali Connors" subtitle="Brunch this weekend?" front={
            <Icon
              src="http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png"
              avatar
              size="large"
            />}
          />
          <ListTile indent title="Grace VanDam" subtitle="Binge watching..." front={
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
