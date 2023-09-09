const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

// Route includes
const userRouter = require("./routes/user.router");
const videosRouter = require("./routes/videos.router");
const playlistsRouter = require("./routes/playlists.router");
const searchRouter = require("./routes/search.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/videos", videosRouter);
app.use("/api/playlists", playlistsRouter);
app.use("/api/search", searchRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get("/", (req, res) => res.type("html").send(html));
app.get("/meow", (req, res) => {
  return JSON.stringify({
    hello: "world",
  });
});
