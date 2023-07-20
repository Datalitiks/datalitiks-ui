import * as fs from "fs";

fs.cp('./styled-system', './dist/styled-system', { recursive: true }, (err) => {
  if (err) throw err;
});
