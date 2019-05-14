import { _Ripple } from 'polythene-core-ripple';
import { cast, h, a, getRef, useState, useEffect } from 'cyano-mithril';

var Ripple = cast(_Ripple, {
  h: h,
  a: a,
  getRef: getRef,
  useState: useState,
  useEffect: useEffect
});
Ripple["displayName"] = "Ripple";

export { Ripple };
