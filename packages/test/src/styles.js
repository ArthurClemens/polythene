/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

const bottomBorder = ".bb.b--light-gray";
const blockPadding = ".pa3";
const resultHeight = ".minh8";

export const rules = {
  page: ".pa4.lh-title-m.med-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: `${bottomBorder}${blockPadding}`,
  titleRow: `${bottomBorder}${blockPadding}`,
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  resultRow: `.flex.flex-row-ns.flex-column${bottomBorder}${resultHeight}`,
  resultTitle: ".flex.flex-one.ma3",
  result: ".flex.flex-one.relative.ma3.minh4",
  content: "div.relative.w-100.height-100px",
  rawResult: ".prewrap.flex.flex-one.relative.f6.ma3.b--light-gray.light-silver.minh6"
};