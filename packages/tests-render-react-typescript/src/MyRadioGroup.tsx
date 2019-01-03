/*
Example of a Functional Component.
*/

import * as React from "react";
import { RadioGroup } from "polythene-react";

interface MyRadioGroupProps extends Partial<RadioGroup> {
  customColor: boolean;
}

const MyRadioGroup: React.FunctionComponent<MyRadioGroupProps> = ({ customColor, name, ...otherProps }) => {
  const all = customColor
    ? {
      style: {
        color: "#e65100"
      }
    }
    : undefined;
  return <RadioGroup name={name} all={all} {...otherProps} />;
};

export default MyRadioGroup;