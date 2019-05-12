import { Button } from "polythene-react-button";
import { h } from "cyano-react";

export const RaisedButton = props =>
  h(Button, {
    ...props,
    raised: true
  });

RaisedButton["displayName"] = "RaisedButton";
