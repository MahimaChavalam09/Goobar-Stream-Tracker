import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [twitchStreams, setTwitchStreams] = useState([]);
  const [youtubeStreams, setYoutubeStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/streams');
      setTwitchStreams(result.data.twitchStreams);
      setYoutubeStreams(result.data.youtubeStreams);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Live Streams</h2>
      <h3>Twitch Streams</h3>
      <ul>
        {twitchStreams.map(stream => (
          <li key={stream.id}>{stream.user_name}: {stream.viewer_count} viewers</li>
        ))}
      </ul>

      <h3>YouTube Live Streams</h3>
      <ul>
        {youtubeStreams.map(video => (
          <li key={video.id.videoId}>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


