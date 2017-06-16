
import stream from "mithril/stream";

const index = stream(0);

export default ({ renderer: h, keys: k, Button }) => () => {
  const currentIndex = index();
  const options = [
    {
      body: "Pane One",
      footer: h(Button, {
        label: "Show Two",
        events: {
          [k.onclick]: () => index(currentIndex + 1)
        }
      })
    },
    {
      body: "Pane Two",
      footer: h(Button, {
        label: "Show One",
        events: {
          [k.onclick]: () => index(currentIndex + 1)
        }
      })
    }
  ];
  return options[index() % 2];
};