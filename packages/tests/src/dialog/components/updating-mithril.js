import { cast, h, useState, useRef, useEffect } from "cyano-mithril";
import { Dialog, Button } from "polythene-mithril";

const shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
const longText = [1,2,3].map(() => shortText).join("");
const trustedLongText = h.trust(longText);

const _Updating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setUpdate] = useState();
  const countRef = useRef();
  const intervalIdRef = useRef();
  
  const increaseCount = () => {
    countRef.current = countRef.current + 1;
    setUpdate(countRef.current);
  };

  const dialogProps = () => ({
    title: countRef.current.toString(),
    body: trustedLongText,
    didShow: () => {
      intervalIdRef.current = setInterval(increaseCount, 1000);
    },
    didHide: () => {
      // Clean up
      clearInterval(intervalIdRef.current);
      countRef.current = 0;
      setIsVisible(false);
    }
  });

  // Count state
  useEffect(
    () => {
      countRef.current = 0;
    },
    []
  );

  // Show
  useEffect(
    () => {
      if (isVisible) {
        Dialog.show(dialogProps);
      }
    },
    [isVisible]
  );

  return h("div", null, [
    h("span",
      {
        style: {
          paddingRight: "10px"
        }
      },
      countRef.current || 0
    ),
    h(Button, {
      raised: true,
      label: "Show Dialog",
      events: {
        onclick: () => setIsVisible(!isVisible)
      }
    })
  ]);

};

export default cast(_Updating);
