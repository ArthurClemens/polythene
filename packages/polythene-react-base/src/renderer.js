import h from "react-hyperscript";
import { MatchingMithril } from "./MatchingMithril";

export const renderer = (...args) =>
  typeof args[0] === "object"
    ? h.call(this, MatchingMithril(args[0]), ...args.slice(1))
    : h.call(this, ...args);

renderer.trust = (html, element = "div") => {
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};
