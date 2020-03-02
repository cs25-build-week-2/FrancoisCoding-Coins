import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.REACT_APP_KEY}`
    },
    baseURL: "https://lambda-treasure-hunt.herokuapp.com/api/"
  });
};
