import React from "react";
import PropTypes from "prop-types";
import Head from "react-helmet";

const Html = ({ App, render }) => {
  // const isDev = process.env.PHENOMIC_ENV === "development";
  const { Main, State, Script, Style } = render(<App />);
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  );
};

Html.propTypes = {
  App:     PropTypes.func,
  render:  PropTypes.func,
};

export default Html;
