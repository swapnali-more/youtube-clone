import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../../Utils/fetchFromAPI';
import { Videos } from '..';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const [videoData, videosAll] = await Promise.all([
        fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`),
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
      ]);
      setVideoDetail(videoData?.items?.[0]);
      setVideos(videosAll?.items || []);
    };

    fetchResults();
  }, [id]);

  if (!videoDetail) return null;

  const { snippet, statistics, id: videoId } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                  {snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid px={2} py={{ md: 1, xs: 5 }} xs={12} md={4}>
          <Videos videos={videos} isVideoPlayer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoDetail;
