import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  FAB,
  Icon,
  IconButton,
  MaterialDesignSpinner,
  Notification,
  Slider,
  Snackbar,
  SVG,
  Switch,
  Tabs,
  TextField,
} from "polythene-react";

import { addTypography, CardCSS, SVGCSS } from "polythene-css";
import SearchField from "./SearchField";
import MyRadioGroup from "./MyRadioGroup";
import MyButton from "./MyButton";

addTypography();

const linkIconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>;
const iconFavoriteSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>;

SVGCSS.addStyle(".themed-svg", {
  color_light: "#2196f3"
});

CardCSS.addStyle(
  ".themed-card",
  {
    color_dark_main_background: "#B89E58",
    color_dark_title_text:      "#fff",
    color_dark_subtitle_text:   "#fff"
  }
);

const App = () => (
  <div className="page">
    <div className="row">
      <h1>Polythene for React built with TypeScript</h1>
    </div>
    <div className="row">
      <h2>SVG</h2>
      <div className="component">
        <SVG
          className="themed-svg"
          style={{
            width: "24px",
            height: "24px",
          }}
        >{linkIconSVG}</SVG>
      </div>
    </div>
    <div className="row">
      <h2>Raised Button</h2>
      <div className="component">
        <Button
          raised
          label="Button"
          testId="my-button"
        />
      </div>
    </div>
    <div className="row">
      <h2>Text Button</h2>
      <div className="component">
        <Button
          label="Button"
        />
      </div>
    </div>
    <div className="row">
      <h2>Themed Text Button</h2>
      <div className="component">
        <MyButton
          label="Custom button"
          showCustomColor
        />
      </div>
    </div>
    <div className="row">
      <h2>Icon</h2>
      <div className="component">
        <Icon
          size="large"
          src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
          avatar
          testId="my-icon"
        />
      </div>
    </div>
    <div className="row">
      <h2>Icon Button</h2>
      <div className="component">
        <IconButton
          icon={{ svg: { content: iconFavoriteSVG } }}
          label="Like"
        />
      </div>
    </div>
    <div className="row">
      <h2>FAB</h2>
      <div className="component">
        <FAB
          icon={{ svg: { content: linkIconSVG } }}
        />
      </div>
    </div>
    <div className="row">
      <h2>Tabs</h2>
      <div className="component">
        <Tabs
          tabs={[
            { label: "New" },
            { label: "Favorites", selected: true },
            { label: "Saved", disabled: true }
          ]}
          autofit
        />
      </div>
    </div>
    <div className="row">
      <h2>Card</h2>
      <div className="component">
        <Card
          className="themed-card"
          tone="dark"
          content={[
            {
              primary: {
                title: "Get Ready",
                subtitle: "2 Unlimited",
                media: {
                  ratio: "square",
                  size: "medium",
                  content: <img src="https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757" />
                }
              }
            },
            {
              actions: {
                content: <Button label="Listen now" />
              }
            }
          ]}
        />
      </div>
    </div>
    <div className="row">
      <h2>Checkbox</h2>
      <div className="component">
        <Checkbox
          label="Label"
        />
      </div>
    </div>
    <div className="row">
      <h2>Switch</h2>
      <div className="component">
        <Switch
          label="Label"
        />
      </div>
    </div>
    <div className="row">
      <h2>Radio Button</h2>
      <div className="component">
        <MyRadioGroup
          name="my-radio-button"
          customColor
          defaultCheckedValue="two"
          buttons={
            [
              {
                value: "one",
                label: "One",
              },
              {
                value: "two",
                label: "Two",
              }
            ]
          }
        />
      </div>
    </div>
    <div className="row">
      <h2>TextField</h2>
      <div className="component">
        <TextField
          defaultValue="abC"
          validate={value => 
            value !== value.toLowerCase()
              ? ({
                valid: false,
                error: "Only use lowercase characters."
              })
              : null}
          validateAtStart
        />
      </div>
    </div>
    <div className="row">
      <h2>Slider</h2>
      <div className="component">
        <Slider
          defaultValue={50}
        />
      </div>
    </div>
    <div className="row">
      <h2>Spinner</h2>
      <div className="component">
        <MaterialDesignSpinner
          permanent
          raised
        />
      </div>
    </div>
    <div className="row">
      <h2>Search</h2>
      <div className="component">
        <SearchField />
      </div>
    </div>
    <div className="row">
      <h2>Dialog</h2>
      <div className="component">
        <Button
          raised
          label="Show dialog"
          events={{
            onClick: () => Dialog.show({
              /* note the Dialog component is below the other elements in the app */
              title: "Hello",
              body: "Click outside to close, or press ESCAPE",
              backdrop: true
            })
          }}
        />
      </div>
    </div>
    <div className="row">
      <h2>Notification</h2>
      <div className="component">
        <Button
          raised
          label="Show notification"
          events={{
            onClick: () => Notification.show({
              /* note the Notification component is below the other elements in the app */
              title: "Hello"
            })
          }}
        />
      </div>
    </div>
    <div className="row">
      <h2>Snackbar</h2>
      <div className="component">
        <Button
          raised
          label="Show snackbar"
          events={{
            onClick: () => Snackbar.show({
              /* note the Snackbar component is below the other elements in the app */
              title: "Hello"
            })
          }}
        />
      </div>
    </div>
    <Dialog />
    <Snackbar />
    <Notification />
  </div>
);

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
