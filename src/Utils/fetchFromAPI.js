import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${url}`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching data from API: ", error);
    throw error;
  }
};
