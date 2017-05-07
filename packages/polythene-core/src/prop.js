/*
The most simple prop function to emulate m.prop from Mithril 0.2.
*/
export const prop = x => {
  let p = x;
  return args => {
    if (args === undefined) {
      return p;
    } else {
      p = args;
    }
  };
};
