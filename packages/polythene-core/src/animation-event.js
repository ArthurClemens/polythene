import { isClient } from "./iso";

const evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

export const getAnimationEndEvent = () => {
  if (isClient) {
    const el = document.createElement("fakeelement");
    for (let a in evts) {
      if (el.style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};
