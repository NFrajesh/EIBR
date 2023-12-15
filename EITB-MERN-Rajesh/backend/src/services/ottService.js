const { axiosUtil } = require("../utils/axiosUtils");

const fetchOTTData = async (queryParams) => {
  const options = {
    method: "GET",
    url: "/advancedsearch",
    params: queryParams,
  };

  try {
    const response = await axiosUtil.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchNewArrivalOTTData = async (queryParams) => {
  const options = {
    method: "GET",
    url: "/getnew",
    params: queryParams,
  };

  try {
    const response = await axiosUtil.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchParams = async (param) => {
  const options = {
    method: "GET",
    url: "/getParams",
    params: { param },
  };

  try {
    const response = await axiosUtil.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchSearchResults = async (queryParams) => {
  const options = {
    method: "GET",
    url: "/search",
    params: queryParams,
  };

  try {
    const response = await axiosUtil.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchPlatforms = async (region) => {
  const options = {
    method: "GET",
    url: "/getPlatforms",
    params: { region },
  };

  try {
    const response = await axiosUtil.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchNewArrivalOTTData,
  fetchOTTData,
  fetchParams,
  fetchSearchResults,
  fetchPlatforms,
};
