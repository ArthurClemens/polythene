import { _Ripple } from 'polythene-core-ripple';
import { cast, h, a, getDom, useState, useEffect } from 'cyano-react';

var Ripple = cast(_Ripple, {
  h: h,
  a: a,
  getDom: getDom,
  useState: useState,
  useEffect: useEffect
});

export { Ripple };
