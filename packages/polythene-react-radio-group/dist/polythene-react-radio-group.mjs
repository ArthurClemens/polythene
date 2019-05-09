import { _RadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-react-radio-button';
import { cast, h, a, useState, useEffect } from 'cyano-react';

var RadioGroup = cast(_RadioGroup, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  RadioButton: RadioButton
});
RadioGroup["displayName"] = "RadioGroup";

export { RadioGroup };
