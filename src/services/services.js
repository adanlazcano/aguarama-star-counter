import axios from "axios";
const { REACT_APP_API_URL } = process?.env;


export const getClient = async (search) => {
  return await axios.get(`${REACT_APP_API_URL}/${search}`);
};
export const createClient = async (newClient) => {
  return await axios.post(`${REACT_APP_API_URL}`,newClient);
};
export const updateStars = async (action,newStar) => {
  return await axios.put(`${REACT_APP_API_URL}/star/${action}`,newStar);
};

