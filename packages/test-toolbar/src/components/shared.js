
const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";
const iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>";
const iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";

const longTitle = "Toolbar with a very very very very very very very very very long title";
const shortTitle = "Toolbar title";
const titleClass = "pe-toolbar__title";
const indentedTitleClass = "pe-toolbar__title--indent";

export default ({ ToolbarTitle, IconButton, renderer: h }) => {

  const trustedIconMenu = h.trust(iconMenuSVG);
  const trustedIconRefresh = h.trust(iconRefreshSVG);
  const trustedIconAddSVG = h.trust(iconAddSVG);

  const toolbarButton = (key, svg) => h(IconButton, {
    key,
    icon: { svg: { content: svg } }
  });

  const toolbarRow = [
    toolbarButton("menu", trustedIconMenu),
    h("div", { key: "title", className: titleClass }, longTitle),
    toolbarButton("refresh", trustedIconRefresh),
    toolbarButton("add", trustedIconAddSVG)
  ];

  const toolbarTitleAsSpan = [
    toolbarButton("menu", trustedIconMenu),
    h("span", { key: "title" }, longTitle),
    toolbarButton("add", trustedIconAddSVG)
  ];

  const toolbarTitleComponent = [
    toolbarButton("menu", trustedIconMenu),
    h(ToolbarTitle, {
      key: "title",
      text: longTitle
    }),
    toolbarButton("add", trustedIconAddSVG)
  ];

  const toolbarTitleComponentCentered = [
    h(ToolbarTitle, {
      key: "title",
      text: shortTitle,
      center: true,
    }),
  ];

  const toolbarTitleComponentCenteredBalanced = [
    toolbarButton("menu", trustedIconMenu),
    h(ToolbarTitle, {
      key: "title",
      text: shortTitle,
      center: true,
    }),
    h(IconButton, {
      inactive: true,
      key: "placeholder",
      icon: { content: "" }
    })
  ];

  const toolbarTitleComponentIndented = [
    h(ToolbarTitle, {
      key: "title",
      text: longTitle,
      indent: true,
    }),
    toolbarButton("add", trustedIconAddSVG)
  ];

  const toolbarTitleComponentAction = [
    h(ToolbarTitle, {
      key: "title",
      text: longTitle,
    }),
    h("a", { className: "pe-action", href: "#" }, "Action")
  ];

  const toolbarTitleComponentAtStart = [
    h(ToolbarTitle, {
      key: "title",
      text: longTitle,
    }),
    toolbarButton("add", trustedIconAddSVG)
  ];

  const toolbarRowIndentedTitle = [
    h("div", {
      className: indentedTitleClass,
      key: "title"
    }, "Indented title"),
    toolbarButton("add", trustedIconAddSVG)
  ];

  return {
    toolbarRow,
    toolbarRowIndentedTitle,
    toolbarTitleAsSpan,
    toolbarTitleComponent,
    toolbarTitleComponentAction,
    toolbarTitleComponentAtStart,
    toolbarTitleComponentCentered,
    toolbarTitleComponentCenteredBalanced,
    toolbarTitleComponentIndented,
  };
};


