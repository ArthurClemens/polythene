import * as m from "mithril";
import { Button } from "polythene-mithril";
import { ButtonCSS } from "polythene-css";

const CLASS_NAME = "themed-button";

ButtonCSS.addStyle(`.${CLASS_NAME}`, {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

interface MyButtonAttrs extends Partial<Button> {
  showCustomColor: boolean;
}

const MyButton = ({ attrs: { showCustomColor, ...otherAttrs }} : { attrs: MyButtonAttrs }) => {
  const className = showCustomColor
    ? CLASS_NAME
    : "";
  return {
    view: () => 
      m(Button, {
        ...otherAttrs,
        className,
      })
  };
};

export default MyButton;
