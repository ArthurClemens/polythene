import { _SVG } from 'polythene-core-svg';
import { cast, h, a, useEffect, useState, getDom } from 'cyano-react';

var SVG = cast(_SVG, {
  h: h,
  a: a,
  useEffect: useEffect,
  useState: useState,
  getDom: getDom
});
SVG["displayName"] = "SVG";

export { SVG };
