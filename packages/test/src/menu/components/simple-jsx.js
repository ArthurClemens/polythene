import React from "react"; // eslint-disable-line no-unused-vars

export default ({ show, target, Menu, List, ListTile, didHide, getState }) =>
  <Menu
    target={target}
    show={show}
    didHide={didHide}
    getState={getState}
    offset={-4}
  >
    <List>
      <ListTile title="Yes" ink />
      <ListTile title="No" ink />
    </List>
  </Menu>;