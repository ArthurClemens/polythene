/*
Example of a Functional Component.
*/

import React from "react";
import { RadioGroup } from "polythene-react";

type MyRadioGroupProps = Partial<RadioGroup> & {
  customColor: boolean;
};

const MyRadioGroup = ({
  customColor,
  name,
  ...otherProps
}: MyRadioGroupProps) => {
  const all = customColor
    ? {
        style: {
          color: "#e65100",
        },
      }
    : undefined;
  return <RadioGroup name={name} all={all} {...otherProps} />;
};

export default MyRadioGroup;
