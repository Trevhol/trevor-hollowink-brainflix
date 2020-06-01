const fs = require("fs");
const { uuid } = require("uuidv4");
let videoData = require("../model/videos.json");

const allVideosHandler = (req, res) => {
  res.json(videoData);
};

const videoIdHandler = (req, res) => {
  const id = req.params.id;

  const video = videoData.find((video) => video.id === id);

  res.json(video);
};

const writeToDb = async (data) => {
  try {
    await fs.writeFile(
      "../server/model/videos.json",
      JSON.stringify(data),

      (err, data) => {
        console.log(err, data);
      }
    );
    videoData = data;
    return true;
  } catch (error) {
    console.error("An error occurred while saving to database", error);
    return false;
  }
};

const videoUploadHandler = async (req, res) => {
  // image to come
  console.log("body", req.body);
  const { title, description } = req.body;
  const video = {
    id: uuid(),
    title,
    channel: "Trevhol",
    image: "https://i.imgur.com/nGvKkjy.jpg",
    description,
    views: "280,000",
    likes: "75,000",
    duration: "5:15",
    video:
      "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
    timestamp: Date.now(),
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046,
      },
    ],
  };

  const writeSuccess = await writeToDb([...videoData, video]);

  if (writeSuccess) {
    res.status(200).json(video);
  } else {
    res.status(500).json({ error: { message: "Could not save video to DB" } });
  }
};

module.exports = {
  allVideosHandler,
  videoIdHandler,
  videoUploadHandler,
};
