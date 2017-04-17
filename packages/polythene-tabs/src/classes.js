import { classes as button } from "polythene-button";

export default {
  component:            "pe-tabs",

  // elements
  indicator:            "pe-tabs__indicator",
  scrollButton:         "pe-tabs__scroll-button",
  scrollButtonAtEnd:    "pe-tabs__scroll-button-end",
  scrollButtonAtStart:  "pe-tabs__scroll-button-start",
  scrollButtonOffset:   "pe-tabs__scroll-button-offset",
  tab:                  "pe-tabs__tab",
  tabContent:           "pe-tabs__tab-content",
  tabRow:               "pe-tabs__row",

  // states
  activeSelectable:     "pe-tabs__active--selectable",
  isAtEnd:              "pe-tabs--end",
  isAtStart:            "pe-tabs--start",
  isAutofit:            "pe-tabs--autofit",
  isMenu:               "pe-tabs--menu",
  scrollable:           "pe-tabs--scrollable",
  smallTabs:            "pe-tabs--small",
  tabHasIcon:           "pe-tabs__tab---icon",
  tabRowCentered:       "pe-tabs__row--centered",
  tabRowIndent:         "pe-tabs__row--indent",

  // lookup
  label:                button.label
};