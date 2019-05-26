import h from 'react-hyperscript';

// @ts-check

renderer.trust = function (html) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

renderer["displayName"] = "react";
