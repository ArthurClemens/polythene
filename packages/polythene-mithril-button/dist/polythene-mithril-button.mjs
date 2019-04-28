import { _Button } from 'polythene-core-button';
import { Ripple } from 'polythene-mithril-ripple';
import { Icon } from 'polythene-mithril-icon';
import { Shadow } from 'polythene-mithril-shadow';
import { cast, h, a, getDom, useState, useEffect, useRef } from 'cyano-mithril';

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
