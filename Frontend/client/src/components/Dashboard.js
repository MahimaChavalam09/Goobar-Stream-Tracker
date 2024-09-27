import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/streams');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Live Stream Data</h2>
      <ul>
        {data.map(stream => (
          <li key={stream.id}>{stream.name}: {stream.viewers} viewers</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;



