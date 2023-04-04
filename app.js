const express = require("express");
const app = express();
const port = 3000;
let booklog = {};

app.use(express.json());

app.post("/booklog", (req, res) => {
  booklog = req.body;

  if (!(booklog.name && booklog.name2)) {
    return res.json({
      ok: false,
      error: "invalid parameter",
    });
  }

  res.json({
    ok: true,
    booklog: booklog,
  });
});

app.get("/booklog", (req, res) => {
  res.json({
    ok: true,
    booklog: [booklog],
  });
});

app.listen(port, () => {
  console.log(`App listeing at http://localhost:${port}`);
});

// learned from this link
// https://www.youtube.com/watch?v=6_zIN-bByB4&t=3055s
