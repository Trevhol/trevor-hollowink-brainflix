const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");
const {
  allVideosHandler,
  videoIdHandler,
  videoUploadHandler,
  videoLikesHandler,
} = require("./routes/videos");

const videos = JSON.parse(fs.readFileSync("./model/videos.json"));
//
const saveComment = (commentData, videoId) => {
  commentData.id = uuid();
  commentData.timestamp = Date.now();
  const video = videos.find((video) => video.id === videoId);
  video.comments.push(commentData);
  fs.writeFileSync("./model/videos.json", JSON.stringify(videos));
  console.log("server", Date.now());
  return video;
};

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express!");
});

app.get("/videos", allVideosHandler);

app.get("/videos/:id", videoIdHandler);

app.post("/videos/:id/comments", (req, res) => {
  res.json(saveComment(req.body, req.params.id));
});

app.post("/videos", videoUploadHandler);

app.put("/videos/:videoId/likes", videoLikesHandler);

app.listen(5000);
