const fontParam = "Roboto:400,500,700";

export default () => [
  {
    "html, body, button, input, select, textarea": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    }
  },
  {
    "@import": `url("https://fonts.googleapis.com/css?family=${fontParam}")`
  }
];
