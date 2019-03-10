
const range = n =>
  Array.apply(null, Array(n)).map((_, i) => i);

const COL_COUNT = 10;
const ROW_COUNT = 90;

export default ({ rootPath, h, TextField }) => {
  const Columns = {
    view: ({ attrs: { row } }) =>
      range(COL_COUNT).map(col =>
        h("td", 
          { key: col },
          h(TextField, {
            testId: `${row}-${col}`,
            label: "Text",
            floatingLabel: true,
            defaultValue: `Text ${row}-${col}` 
          })
        )
      )
  };

  const Rows = {
    view: () =>
      range(ROW_COUNT).map(row =>
        h("tr",
          { key: row },
          h(Columns, { row })
        )
      )
  };
      
  let renderCount = 0;

  return {
    path: `${rootPath}/render`,
    name: "Text Field: render",
    component: {
      view: () => {
        renderCount++;
        return h("div", [
          h("p",
            { key: "count" },
            [
              "view called: ",
              h("span", { "data-test-id": "count" }, renderCount),
            ]
          ),
          h("table",
            { key: "table" },
            h("tbody", null,
              h(Rows)
            )
          )
        ]);
      }
    }
  };
};
