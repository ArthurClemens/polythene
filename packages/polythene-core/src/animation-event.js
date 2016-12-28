
const evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

const element = () => document.createElement("fakeelement");

export const animationEndEvent = () => {
  const el = element();
  for (let a in evts) {
    if (el.style[a] !== undefined) {
      return evts[a];
    }
  }
};