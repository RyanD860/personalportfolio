const express = require("express");

const port = 3010;

const app = express();
app.use(express.static(`${__dirname}/../build`));
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`App lsitening on port ${port}`);
});
