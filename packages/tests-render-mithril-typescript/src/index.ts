import * as m from "mithril";
import { Dialog, Button, List, ListTile, Shadow, RadioGroup } from "polythene-mithril";

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

const iconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>"

interface MyRadioGroupOptions extends RadioGroup {
  age: number;
}

const MyRadioGroup = {
  view: ({ attrs }) => 
    m(RadioGroup, {
      name: attrs.name,
      ...attrs,
    })
} as m.Component<MyRadioGroupOptions>;

const App: m.Component = {
  view: () => [
    m("div", [
      m(MyRadioGroup, {
        name: "yes",
        age: 99,
        content: [
          {
            value: "One",
            label: "One",
          },
          {
            value: "Two",
            label: "Two",
          }
        ]
      }),
      m(List, [
        m(ListTile, { title: "ONE"}),
        m(ListTile, m("span", "TWO"))
      ]),
      m(List, {
        tiles: [
          m(ListTile, { title: "ONE"}),
          m(ListTile, m("span", "TWO"))
        ]
      }),
      m(List, {
        all: {},
        tiles: [
          { title: "ONE"},
          { title: "TWO"}
        ]
      })
      // m(Button, {
      //   raised: true,
      //   label: "Open dialog",
      //   events: {
      //     onclick: (_:Event) => {
      //       Dialog.show({
      //         /* note the Dialog component is below the other elements in the app */
      //         title: "Hello",
      //         body: "Click background to hide or press ESCAPE.",
      //         backdrop: true
      //       });
      //     }
      //   }
      // }),
      // m(Dialog)
    ])
  ]
};

m.mount(document.body, App);
