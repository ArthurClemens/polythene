import htmltidy from "tidy-html5";
import m from "mithril";
import { defaultHtmlTidyOptions } from "./tidy";

export const tidy = (vnodes, htmltidyOptions = defaultHtmlTidyOptions) => {
  const htmlElement = document.createElement("div");
  m.render(htmlElement, vnodes);
  const html = htmlElement.innerHTML;
  return htmltidy.tidy_html5(html, htmltidyOptions);
};
