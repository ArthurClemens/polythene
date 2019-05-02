import { _SVG } from 'polythene-core-svg';
import { cast, h, a, useEffect, useState, getRef } from 'cyano-mithril';

var SVG = cast(_SVG, {
  h: h,
  a: a,
  useEffect: useEffect,
  useState: useState,
  getRef: getRef
});

export { SVG };
