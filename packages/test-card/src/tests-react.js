import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Card, List, ListTile, Button, IconButton } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Card, Button }) => { // eslint-disable-line no-unused-vars

  const titleLineText = "Title";
  const infoLineText = "Subhead";
  const avatarImageUrl = fileName => `http://arthurclemens.github.io/assets/polythene/examples/avatar-${fileName}`;
  const IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
  const holidayImage = IMG_URL + "3.jpg";

  const twoButtonRow = [
    <Button label="Action 1" key="one" />,
    <Button label="Action 2" key="two" />
  ];

  return [
    {
      section: "React specific tests",
    },
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
                content: twoButtonRow
              }
            }
          ]}
        />
    },
    

  ];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, renderer, keys }))
  .concat(reactTests({ Card, List, ListTile, Button, IconButton, renderer, keys }));
