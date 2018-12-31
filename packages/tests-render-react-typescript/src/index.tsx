import * as React from "react";
import * as ReactDOM from "react-dom";
import { renderer, Dialog, Button, Shadow, List, ListTile, RadioGroup } from "polythene-react";

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

const iconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;

interface MyRadioGroupProps extends RadioGroup {
  age: number;
}

interface MyRadioGroupState {
  age: 1;
}

class MyRadioGroup extends React.Component<any, MyRadioGroupProps, MyRadioGroupState> {
  render() {
    const { name, ...otherProps } = this.props;
    return <RadioGroup name={name} {...otherProps} />
  }
}
  
interface MyRadioGroupProps2 extends React.Props<any>, RadioGroup {
  age: number;
  name: string;
  className?: string;
}

const MyRadioGroup2: React.FunctionComponent<MyRadioGroupProps2> = ({ name, age, ...otherProps }: MyRadioGroupProps2) => (
  <RadioGroup name={name} {...otherProps} />
);

interface MyRadioGroupProps3 {
  age: number;
  name: string;
}

const MyRadioGroup3 = ({ name, age, ...otherProps }: MyRadioGroupProps3) => (
  <RadioGroup name={name} {...otherProps} />
);

const App = () => (
  <React.Fragment>
    <MyRadioGroup
      name="peter"
      age={9}
      buttons={[
        {
          value: "One",
          label: "One",
        },
        {
          value: "Two",
          label: "Two",
        }
      ]}
      className="multiple"
    />
    <MyRadioGroup2
      name="yes"
      age={9}
      className="multiple"
    />
    <MyRadioGroup3
      name="yes"
      age={9}
    /> 
    <List>
      <ListTile title="ONE"></ListTile>
      <ListTile>TWO</ListTile>
    </List>
    <Button
      element="div"
      label="Open dialog"
      events={{
        onClick: () => Dialog.show({
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          footer: "FOOTER",
          backdrop: true,
        })
      }}
    />
    <Dialog />
  </React.Fragment>
);

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
