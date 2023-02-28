import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../Utils/fetchFromAPI'
import { ChannelCard, Videos } from ".."

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { items } = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(items[0]);

      const { items: videosData } = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
      }} />
      {channelDetail && videos && (
        <>
          <ChannelCard channel={{snippet: channelDetail?.snippet, statistics: channelDetail?.statistics}} marginTop="-93px"  />
          <Videos videos={videos} />
        </>
      )}
    </Box>
  )
}

export default ChannelDetail
