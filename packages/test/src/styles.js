/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

const bottomBorder = ".bb";
const blockPadding = ".pa3";
const resultHeight = ".minh8";

export const rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: `.header-row${bottomBorder}${blockPadding}.fixed.bg-white.w-100.z-1`,
  interactive: ".interactive.bg-washed-blue",
  separator: "span.ph2.light-silver",
  tests: ".pt5",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: `.result-row.flex-column${bottomBorder}${resultHeight}.pv2`,
  resultTitle: ".flex.flex-row-ns.f5.ma3",
  resultData: ".result.flex.flex-column.flex-row-l.mv3",
  resultDataRendered: ".flex-none.flex-l.flex-one.ma3.minh4",
  content: ".component-result.w-100",
  resultDataRaw: ".flex-none.flex-l.flex-one.ma3",
  resultDataRawHtml: ".generated-html.prewrap.relative.light-silver.h-100"
};