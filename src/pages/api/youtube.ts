import { NextApiHandler } from 'next';
import axios from 'axios';

const youtubeHandler: NextApiHandler = (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLDmjYUhV8CentUZYOb6COgDwaCNEhLgKA&key=${process.env.YOUTUBE_API}`,
    )
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export default youtubeHandler;
