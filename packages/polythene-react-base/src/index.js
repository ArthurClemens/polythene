// @ts-check

import h from "react-hyperscript";

renderer.trust = (html, element = "div") => {
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};

renderer["displayName"] = "react";
