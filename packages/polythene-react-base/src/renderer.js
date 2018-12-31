import h from "react-hyperscript";
import { MithrilToReact } from "./MithrilToReact";

export const renderer = (...args) =>
  typeof args[0] === "object"
    ? h.call(null, MithrilToReact(args[0]), ...args.slice(1))
    : h.call(null, ...args);

renderer.trust = (html, element = "div") => {
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};

renderer.displayName = "react";
