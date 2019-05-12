import { _TextField } from 'polythene-core-textfield';
import { cast, h, a, useEffect, useState, useRef, getRef } from 'cyano-mithril';

var TextField = cast(_TextField, {
  h: h,
  a: a,
  useEffect: useEffect,
  useState: useState,
  useRef: useRef,
  getRef: getRef
});
TextField["displayName"] = "TextField";

export { TextField };
