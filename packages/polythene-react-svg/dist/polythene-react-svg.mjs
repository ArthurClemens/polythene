import { _SVG } from 'polythene-core-svg';
import { cast, h, a, useEffect, useState, getRef } from 'cyano-react';

var SVG = cast(_SVG, {
  h: h,
  a: a,
  useEffect: useEffect,
  useState: useState,
  getRef: getRef
});
SVG["displayName"] = "SVG";

export { SVG };
