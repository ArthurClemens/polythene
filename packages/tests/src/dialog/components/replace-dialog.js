export default ({ h, a, Button, Dialog }) => {

  const dialogTwoOptions = {
    body: "Dialog Two",
    footerButtons: h(Button, {
      label: "Show One",
      events: {
        [a.onclick]: () => Dialog.show(dialogOneOptions)
      }
    })
  };

  const dialogOneOptions = {
    body: "Dialog One",
    footerButtons: h(Button, {
      label: "Show Two",
      events: {
        [a.onclick]: () => Dialog.show(dialogTwoOptions)
      }
    })
  };

  return dialogOneOptions;
};