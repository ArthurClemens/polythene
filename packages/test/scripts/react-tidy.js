import htmltidy from "tidy-html5";
import { defaultHtmlTidyOptions } from "./tidy";
import { mount } from "enzyme";

export const tidy = (vnodes, htmltidyOptions = defaultHtmlTidyOptions) => {
  const wrapper = mount(vnodes);
  const html = wrapper.html();
  return htmltidy.tidy_html5(html, htmltidyOptions);
};
