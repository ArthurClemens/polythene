/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

const bottomBorder = ".bb";
const resultHeight = ".minh8";

export const rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: `.header-row${bottomBorder}.fixed.w-100`,
  interactive: ".interactive",
  separator: "span.ph2.light-silver",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: `.result-row.flex-column${bottomBorder}${resultHeight}.pv2`,
  sectionTitle: ".flex.flex-row-ns.f4.mt5.mr3.mb3.ml3",
  resultTitle: ".flex.flex-row-ns.f5.ma3",
  resultData: ".flex.flex-column.flex-row-l.mv3",
  resultDataRendered: ".result.relative.flex-none.flex-l.flex-one.ma3.minh4",
  content: ".component-result.relative.w-100",
};
