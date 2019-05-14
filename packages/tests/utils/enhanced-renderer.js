import { MithrilToReact } from "./MithrilToReact";
import { h as renderer } from "cyano-react";

export const h = (...args) => (
  typeof args[0] === "object" && args[0].view
    ? renderer.call(null, MithrilToReact(args[0]), ...args.slice(1))
    : renderer.call(null, ...args)
);

h.trust = (html, element = "div") => {
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};
