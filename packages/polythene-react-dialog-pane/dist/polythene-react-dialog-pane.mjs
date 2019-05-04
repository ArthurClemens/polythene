import { _DialogPane } from 'polythene-core-dialog-pane';
import { cast, h, a, useState, useEffect, useRef, getRef } from 'cyano-react';

var DialogPane = cast(_DialogPane, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  getRef: getRef
});
DialogPane["displayName"] = "DialogPane";

export { DialogPane };
