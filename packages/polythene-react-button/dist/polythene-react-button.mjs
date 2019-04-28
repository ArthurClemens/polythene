import { _Button } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';
import { Icon } from 'polythene-react-icon';
import { Shadow } from 'polythene-react-shadow';
import { cast, h, a, getDom, useState, useEffect, useRef } from 'cyano-react';

var Button = cast(_Button, {
  h: h,
  a: a,
  getDom: getDom,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  Ripple: Ripple,
  Shadow: Shadow,
  Icon: Icon
});

export { Button };
