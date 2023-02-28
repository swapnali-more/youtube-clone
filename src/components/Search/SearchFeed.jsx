import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from '..';
import { fetchFromAPI } from '../../Utils/fetchFromAPI';
import Loader from '../Loader/Loader';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <Box sx={{ p: 2, overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <Videos videos={videos} />
      )}
    </Box>
  );
};

export default SearchFeed;
