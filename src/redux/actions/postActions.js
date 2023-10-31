import axios from "axios";
import { setPostDetails, setPosts, setSearchResults } from "../reducers/postReducers";
import { toast } from "react-toastify";

// Function to get all the movies
export const getAllMovies = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${import.meta.env.VITE_API}/v1/movie/popular`,
      {headers} 
    );

    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a movies
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${import.meta.env.VITE_API}/v1/movie/${id}`,
      {headers} 
    );

    dispatch(setPostDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to search movies
export const searchMovies = (searchTerm) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${import.meta.env.VITE_API}/v1/search/movie?page=1&query=${searchTerm}`,
      {headers} 
    );

    dispatch(setSearchResults(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};