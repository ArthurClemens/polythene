import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Checkbox, RaisedButton, keys } from "polythene-react";
import genericTests from "./tests-generic";
import SimpleForm from "./components/toggle-button-jsx";

const iconStarOutlineSVG = <svg width="24" height="24" viewBox="0 0 24.00 24.00" enableBackground="new 0 0 24.00 24.00"><path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z "/></svg>;
const iconStarFilledSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;

const reactTests = ({ Checkbox, renderer: h }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: defaultChecked (JSX)",
      component: () =>
        <Checkbox
          label="Label"
          defaultChecked
        />
    },
    {
      name: "Option: iconOn, iconOff (custom icon) (JSX)",
      component: () =>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Checkbox
            label="Label"
            iconOff={{ svg: { content: iconStarOutlineSVG }}}
            iconOn={{ svg: { content: iconStarFilledSVG }}}
          />
        </div>
    },
    {
      name: "Setting the checked state (JSX)",
      interactive: true,
      exclude: true,
      component: () => 
        <SimpleForm />
    },
  ];
};

export default []
  .concat(genericTests({ Checkbox, RaisedButton, renderer, keys }))
  .concat(reactTests({ Checkbox, RaisedButton, renderer, keys }));
