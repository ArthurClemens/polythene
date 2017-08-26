import React from "react"; // eslint-disable-line no-unused-vars
import { keys, renderer, List, Icon, ListTile, Notification } from "polythene-react";
import genericTests from "./tests-generic";
import { withRouter } from "react-router-dom";

const reactTests = ({ List, Icon, ListTile, Notification, renderer: h }) => {

  const createUserListTile = (title, subtitle, filename) =>
    h(withRouter(({ history }) => 
      h(ListTile, {
        title,
        key: title,
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

  const listTileJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  const listTileAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  const listTileGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  const selectTile = ({ title }) => (
    { title }
  );
  const headerTile = ({ title }) => (
    { title, header: true }
  );

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
                listTileJennifer,
                listTileAli,
                listTileGrace,
                listTileJennifer,
                listTileAli,
                listTileGrace
              ]
            }
          );
        }))
    },
    
    {
      section: "React JSX tests",
    },
    {
      name: "Options: header, tiles, indent, indentedBorders (JSX)",
      component: () =>
        <List
          indentedBorders
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
    },
    {
      name: "Keyboard control (JSX) (demo without state)",
      component: () =>
        <List
          keyboardControl
          highlightIndex={0}
          onSelect={data => (
            Notification.hide(),
            Notification.show({
              title: data.attrs.title,
              showDuration: .1,
              hideDuration: .2,
              timeout: .8
            })
          )}
          tiles={[
            headerTile({ title: "A"}),
            selectTile({ title: "Amman" }),
            selectTile({ title: "Amsterdam" }),
            selectTile({ title: "Athens" }),
            headerTile({ title: "B" }),
            selectTile({ title: "Bangkok" }),
            selectTile({ title: "Beijing" }),
            selectTile({ title: "Brussels" }),
            headerTile({ title: "C" }),
            selectTile({ title: "Canberra" }),
            selectTile({ title: "Cardiff" }),
            selectTile({ title: "Copenhagen" }),
          ]}
        />
        
    }
  ];
    
};

export default []
  .concat(genericTests({ List, Icon, ListTile, Notification, renderer, keys }))
  .concat(reactTests({ List, Icon, ListTile, Notification, renderer, keys }));
