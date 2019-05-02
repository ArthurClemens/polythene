import { _BaseSpinner } from 'polythene-core-base-spinner';
import { Shadow } from 'polythene-react-shadow';
import { cast, h, a, useRef, useState, useEffect, getRef } from 'cyano-react';

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var BaseSpinner = cast(_BaseSpinner, {
  h: h,
  a: a,
  useRef: useRef,
  useState: useState,
  useEffect: useEffect,
  getRef: getRef,
  Shadow: Shadow
});
BaseSpinner["displayName"] = "BaseSpinner";
BaseSpinner["classes"] = classes;

export { BaseSpinner };
