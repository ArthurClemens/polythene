import React from "react";
import { Tabs } from "polythene-react";

const arrowBackSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>;
const arrowForwardSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>;

const tabButtons = [
  { label: "Web" },
  { label: "Shopping" },
  { label: "Videos" },
  { label: "Images" },
  { label: "Books" },
  { label: "More" }
];

export default () => (
  <div
    style={{
      maxWidth: "400px",
      color: "#fff",
      backgroundColor: "#444",
      overflowX: "hidden",
      height: "48px"
    }}
  >
    <Tabs
      scrollable
      scrollIconBackward={{ svg: { content: arrowBackSVG } }}
      scrollIconForward={{ svg: { content: arrowForwardSVG } }}
      tabs={tabButtons}
    />
  </div>
);
