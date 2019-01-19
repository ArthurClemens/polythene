import React from "react";
import Head from "react-helmet";

const Layout = ({ children, meta }) => {  
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <htmlAttributes lang="en" />
        
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.nl,Promise,Object.assign,Array.prototype.find" type="text/javascript" />
        
        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
