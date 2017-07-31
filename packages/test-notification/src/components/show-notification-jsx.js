import React from "react";
import { Notification, Dialog, Button, RaisedButton } from "polythene-react";

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    <Button
      label="Cancel"
      events={{
        onClick: () => {
          Dialog.hide();
          Notification.unpause();
        }
      }}
    />,
    <Button
      label="OK"
      events={{
        onClick: () => {
          Dialog.hide();
          Notification.hide();
        }
      }}
    />
  ],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

export default () =>
  <RaisedButton
    label="Show notification"
    events={{
      onClick: () =>
        Notification.show({
          title: "This is the message",
          layout: "vertical",
          action: <Button
            label="Let me think about it"
            events={{
              onClick: () => {
                Notification.pause();
                Dialog.show(dialogOptions);
              }
            }}
          />
        })
    }}
  />;
