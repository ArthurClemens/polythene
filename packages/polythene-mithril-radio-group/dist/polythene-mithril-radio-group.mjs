import { _RadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-mithril-radio-button';
import { cast, h, a, useState, useEffect } from 'cyano-mithril';

var RadioGroup = cast(_RadioGroup, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  RadioButton: RadioButton
});
RadioGroup["displayName"] = "RadioGroup";

export { RadioGroup };
