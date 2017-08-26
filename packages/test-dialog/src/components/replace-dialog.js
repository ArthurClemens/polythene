export default ({ renderer: h, keys: k, Button, Dialog }) => {

  const dialogTwoOptions = {
    body: "Dialog Two",
    footerButtons: h(Button, {
      label: "Show One",
      events: {
        [k.onclick]: () => Dialog.show(dialogOneOptions)
      }
    })
  };

  const dialogOneOptions = {
    body: "Dialog One",
    footerButtons: h(Button, {
      label: "Show Two",
      events: {
        [k.onclick]: () => Dialog.show(dialogTwoOptions)
      }
    })
  };

  return dialogOneOptions;
};