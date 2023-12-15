const axios = require("axios");
const axiosUtil = axios.create({
  baseURL: "https://ott-details.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key":
      process.env.X_RAPIDAPI_KEY ||
      "32012f32a6msh2146dac72997545p180215jsn5cc16878622d",
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
});
module.exports = { axiosUtil };
