import { renderer, keys, TextField, Button } from "polythene-mithril";
import genericTests from "./tests-generic";
import setValue from "./components/set-value-mithril-withAttr";
import FormValidation from "./components/form-validation-mithril";

const mithrilTests = ({ TextField, Button, renderer: h }) => {

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
      name: "Set value (variation with withAttr)",
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
  .concat(genericTests({ TextField, Button, renderer, keys }))
  .concat(mithrilTests({ TextField, Button, renderer, keys }));
