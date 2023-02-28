import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from '../components';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(({ items }) => setVideos(items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{
        height: {
          sx: "auto", md: '92vh'
        }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
          align='center'
        >
          {'\u00A9'} 2022
        </Typography>
      </Box>

      <Box sx={{ p: 2, overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight='bold'
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory}{' '}
          <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
