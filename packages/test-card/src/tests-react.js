import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Card, List, ListTile, Button, IconButton, Tabs } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Card, Button }) => { // eslint-disable-line no-unused-vars

  const titleLineText = "Title";
  const infoLineText = "Subhead";
  const avatarImageUrl = fileName => `http://arthurclemens.github.io/assets/polythene/examples/avatar-${fileName}`;
  const IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
  const holidayImage = IMG_URL + "3.jpg";

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Header with icon, media, actions (JSX)",
      component: () => 
        <Card
          content={[
            {
              header: {
                title: titleLineText,
                subtitle: infoLineText,
                icon: {
                  size: "large",
                  avatar: true,
                  src: avatarImageUrl("1.png")
                }
              }
            },
            {
              media: {
                content: <img src={holidayImage} />
              }
            },
            {
              actions: {
                content: <div>
                  <Button label="Action 1" key="one" />
                  <Button label="Action 2" key="two" />
                </div>
              }
            }
          ]}
        />
    },
    {
      name: "Embedded video (JSX)",
      component: () => 
        <Card
          content={[
            {
              media: {
                content: (
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Fe7lxMJTgZ4"
                    frameborder="0"
                  />
                )
              }
            },
            {
              actions: {
                content: <div>
                  <Button label="Action 1" key="one" />
                  <Button label="Action 2" key="two" />
                </div>
              }
            }
          ]}
        />
    },
    

  ];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, Tabs, renderer, keys }))
  .concat(reactTests({ Card, List, ListTile, Button, IconButton, Tabs, renderer, keys }));
