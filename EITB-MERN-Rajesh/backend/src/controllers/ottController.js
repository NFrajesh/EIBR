const {
  fetchOTTData,
  fetchNewArrivalOTTData,
  fetchParams,
  fetchSearchResults,
  fetchPlatforms,
} = require("../services/ottService");

const getOTTData = async (req, res) => {
  const { query } = req;
  const queryParams = {
    start_year: query.start_year,
    end_year: query.end_year,
    min_imdb: query.min_imdb,
    max_imdb: query.max_imdb,
    genre: query.genre,
    language: query.language,
    type: query.type,
    sort: query.sort,
    page: query.page,
  };

  try {
    const data = await fetchOTTData(queryParams);
    console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.message);
  }
};

const getNewArrivalOTTData = async (req, res) => {
  const { query } = req;

  const queryParams = {
    region: query.region,
    page: query.page || 1,
  };

  try {
    const data = await fetchNewArrivalOTTData(queryParams);
    console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.message);
  }
};

const getParamsForListing = async (req, res) => {
  const { param } = req.query;
  try {
    const data = await fetchParams(param);
    console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.message);
  }
};

const searchOTT = async (req, res) => {
  const queryParams = {
    title: req.query.title,
    page: req.query.page || "1", // default to page 1 if not provided
  };

  try {
    const data = await fetchSearchResults(queryParams);
    console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.message);
  }
};

const getPlatforms = async (req, res) => {
  const { region } = req.query;

  try {
    const data = await fetchPlatforms(region);
    console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.message);
  }
};

module.exports = {
  getOTTData,
  getNewArrivalOTTData,
  getParamsForListing,
  searchOTT,
  getPlatforms,
};
