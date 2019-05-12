import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from 'cyano-react';
import { Multi } from 'polythene-core';
import { _Notification } from 'polythene-core-notification';

var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var NotificationInstance = cast(_Notification, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  getRef: getRef,
  useReducer: useReducer
});
NotificationInstance["displayName"] = "NotificationInstance";
var options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: ".".concat(classes.holder),
  instance: NotificationInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true
};
var MultipleInstance = Multi({
  options: options
});
var Notification = cast(MultipleInstance.render, {
  h: h,
  useState: useState,
  useEffect: useEffect
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Notification[p] = MultipleInstance[p];
});
Notification["displayName"] = "Notification";

export { NotificationInstance, Notification };
