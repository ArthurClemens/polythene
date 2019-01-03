/*
Example of a State Component.
*/

import * as React from "react";
import { Button } from "polythene-react";
import { ButtonCSS } from "polythene-css";

const CLASS_NAME = "themed-button";

ButtonCSS.addStyle(`.${CLASS_NAME}`, {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

interface MyButtonProps extends Partial<Button> {
  showCustomColor: boolean;
}
interface MyButtonState {}

export default class MyButton extends React.Component<MyButtonProps, MyButtonState> {
  render() {
    const { showCustomColor, ...otherProps } = this.props;
    const className = showCustomColor
      ? CLASS_NAME
      : "";
    return <Button {...otherProps} className={className} />;
  }
}
