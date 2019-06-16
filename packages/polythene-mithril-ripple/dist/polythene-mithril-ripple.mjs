import { _Ripple } from 'polythene-core-ripple';
import { cast, h, a, getRef, useRef, useState, useEffect } from 'cyano-mithril';

var Ripple = cast(_Ripple, {
  h: h,
  a: a,
  getRef: getRef,
  useRef: useRef,
  useState: useState,
  useEffect: useEffect
});
Ripple["displayName"] = "Ripple";

export { Ripple };
