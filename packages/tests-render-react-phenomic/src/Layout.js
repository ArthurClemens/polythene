import React from "react";
import Head from "react-helmet";

const Layout = ({ children, meta }) => {  
  return (
    <div>
      <Head>
        {/* Language and charset */}
        <meta charSet="utf-8" />
        <htmlAttributes lang="en" />
        
        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
