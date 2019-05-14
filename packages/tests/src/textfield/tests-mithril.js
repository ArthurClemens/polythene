import { TextField, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import setValue from "./components/set-value-mithril-target";
import FormValidation from "./components/form-validation-mithril";

const mithrilTests = ({ TextField, Button, h }) => {

  const block = (test, attrs = {}) =>
    h("div",
      {
        style: Object.assign(
          {},
          attrs.dark ? null : { background: "#fff" },
          attrs.fullWidth
            ? null
            : { padding: "10px 15px" }
        )
      },
      test
    );
  
  const SetValue = setValue({ h, TextField, Button });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: domAttributes (autocapitalize for iOS, Chrome 43 on Android)",
      component: {
        view: () => block([
          h(TextField, {
            name: "state",
            placeholder: "type anything...",
            domAttributes: {
              autocapitalize: "characters",
            }
          })
        ])
      }
    },
    {
      name: "Set value (variation with e.target.value)",
      interactive: true,
      excluded: true,
      component: {
        view: () => block(
          h(SetValue)
        )
      }
    },
    {
      name: "Form validation with github.com/ludbek/powerform",
      interactive: true,
      excluded: true,
      component: {
        view: () => block(
          h(FormValidation)
        )
      }
    },
  ];
};

export default []
  .concat(genericTests({ TextField, Button, h, a }))
  .concat(mithrilTests({ TextField, Button, h, a }));
