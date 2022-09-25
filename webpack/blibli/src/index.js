// import "../static/main.css";
// import a from 'lodash'
import a from "./a";
a(0);

import("./b").then((val) => {
  console.log(val);
});
