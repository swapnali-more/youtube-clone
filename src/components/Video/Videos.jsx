import { Grid, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from '..'
import Loader from '../Loader/Loader'

const Videos = ({ videos, isVideoPlayer }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack>
      <Grid container spacing={2} columns={12}>
        {videos.map((video, index) => (
          <React.Fragment key={index}>
            {!video.id.playlistId && (
              <Grid
                item
                xs={12}
                sm={isVideoPlayer ? 6 : 6}
                md={isVideoPlayer ? 12 : 4}
                lg={isVideoPlayer ? 12 : 3}
                xl={isVideoPlayer ? 12 : 3}
                xxl={isVideoPlayer ? 6 : 2}
              >
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channel={video} />}
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Stack>
  )
}

export default Videos
