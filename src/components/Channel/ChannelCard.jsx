import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channel, marginTop }) => {
  const channelId = channel?.id?.channelId
  const title = channel?.snippet?.title?.slice(0, 50)
  const image = channel?.snippet?.thumbnails;
  const subscriberCount = parseInt(channel?.statistics?.subscriberCount)?.toLocaleString('en-US')

  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', width: '100%', margin: 'auto', marginTop }}>
      <Link to={`/channel/${channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
          <CardMedia
            alt={title}
            image={image?.high?.url}
            sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {`${subscriberCount} Subscribers`}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
