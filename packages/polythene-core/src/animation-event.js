// @ts-check

import { isClient } from "./iso";

/**
 * @type {{[s: string]: string}} evts
 */
const evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

export const getAnimationEndEvent = () => {
  if (isClient) {
    const el = document.createElement("fakeelement");
    /**
     * @type {string} a
     */
    for (let a in evts) {
      /**
       * @type {object} style
       */
      const style = el.style;
      if (style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};
