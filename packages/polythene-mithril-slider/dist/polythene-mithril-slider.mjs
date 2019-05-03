import { _Slider } from 'polythene-core-slider';
import { cast, h, a, useState, useEffect, useRef, getRef } from 'cyano-mithril';

var Slider = cast(_Slider, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  getRef: getRef
});
Slider["displayName"] = "Slider";

export { Slider };
