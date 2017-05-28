
export const keys = {
  class:       "className",
  className:   "className",
  formaction:  "formAction",
  onblur:      "onBlur",
  onchange:    "onChange",
  onclick:     "onClick",
  onfocus:     "onFocus",
  onkeydown:   "onKeyDown",
  onkeyup:     "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout:  "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup:   "onMouseUp",
  tabindex:    "tabIndex",
};

export const normalizeKey = key => keys[key.toLowerCase()];
