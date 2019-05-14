
import stream from "mithril/stream";

const index = stream(0);

export default ({ h, a, Button }) => () => {
  const currentIndex = index();
  const options = [
    {
      body: "Pane One",
      style: {
        background: "yellow"
      },
      footerButtons: h(Button, {
        label: "Show Two",
        events: {
          [a.onclick]: () => index(currentIndex + 1)
        }
      })
    },
    {
      body: "Pane Two",
      style: {
        background: "white"
      },
      footerButtons: h(Button, {
        label: "Show One",
        events: {
          [a.onclick]: () => index(currentIndex + 1)
        }
      })
    }
  ];
  return options[index() % 2];
};