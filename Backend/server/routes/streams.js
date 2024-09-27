const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Function to fetch Twitch streams
const fetchTwitchStreams = async () => {
  const response = await axios.get('https://api.twitch.tv/helix/streams', {
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
    },
  });
  return response.data.data;
};

// Function to fetch YouTube streams (live broadcasts)
const fetchYouTubeStreams = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      eventType: 'live',
      type: 'video',
      key: process.env.YOUTUBE_API_KEY,
    },
  });
  return response.data.items;
};

// Combined route to fetch both Twitch and YouTube streams
router.get('/', async (req, res) => {
  try {
    const twitchStreams = await fetchTwitchStreams();
    const youtubeStreams = await fetchYouTubeStreams();
    res.json({ twitchStreams, youtubeStreams });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


