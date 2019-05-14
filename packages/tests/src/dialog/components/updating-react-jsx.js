import React from "react";
import { cast, useState, useRef, useEffect } from "cyano-react";
import { Dialog, Button } from "polythene-react";

const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LongText = () => (
  <div>
    {[1,2,3].map(num => <p key={num}>{shortText}</p>)}
  </div>
);

const _Updating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setUpdate] = useState();
  const countRef = useRef(0);
  const intervalIdRef = useRef();
  
  const increaseCount = () => {
    countRef.current = countRef.current + 1;
    setUpdate(countRef.current);
  };

  useEffect(
    () => {
      if (isVisible) {
        const dialogProps = () => ({
          title: countRef.current.toString(),
          body: <LongText />,
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
        Dialog.show(dialogProps);
      }
    },
    [isVisible, countRef.current]
  );

  return (
    <div>
      <span style={{
        paddingRight: "10px"
      }}>
        {countRef.current || 0}
      </span>
      <Button
        raised
        label="Show Dialog"
        events={{
          onClick: () => setIsVisible(!isVisible)
        }}
      />
    </div>
  );
};

export default cast(_Updating);
