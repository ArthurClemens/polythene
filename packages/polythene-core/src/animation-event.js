
const evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

const findAnimationEndEvent = () => {
  const el = document.createElement("fakeelement");
  for (let a in evts) {
    if (el.style[a] !== undefined) {
      return evts[a];
    }
  }
};

export const animationEndEvent = findAnimationEndEvent();
