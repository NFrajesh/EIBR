const validator = require("validator");

const advanceSearchValidator = [
  (req, res, next) => {
    const {
      start_year,
      end_year,
      min_imdb,
      max_imdb,
      genre,
      language,
      type,
      sort,
    } = req.query;

    if (
      start_year &&
      (!validator.isInt(start_year) || start_year < 1970 || start_year > 2020)
    ) {
      return res.status(400).json({
        error: "Invalid start_year. Enter a year between 1970 and 2020.",
      });
    }

    if (
      end_year &&
      (!validator.isInt(end_year) || end_year < 1970 || end_year > 2020)
    ) {
      return res.status(400).json({
        error: "Invalid end_year. Enter a year between 1970 and 2020.",
      });
    }

    if (min_imdb && (min_imdb < 0 || min_imdb > 10)) {
      return res.status(400).json({
        error: "Invalid min_imdb. Enter a valid IMDb rating between 0 and 10.",
      });
    }

    if (max_imdb && (max_imdb < 0 || max_imdb > 10)) {
      return res.status(400).json({
        error: "Invalid max_imdb. Enter a valid IMDb rating between 0 and 10.",
      });
    }

    if (genre && !validator.isAlphanumeric(genre.replace(/,/g, ""))) {
      return res
        .status(400)
        .json({ error: "Invalid genre. Enter alphanumeric characters." });
    }

    if (language && !validator.isAlpha(language.replace(/,/g, ""))) {
      return res
        .status(400)
        .json({ error: "Invalid language. Enter alphabetical characters." });
    }

    if (type && !validator.isIn(type, ["movie", "show"])) {
      return res
        .status(400)
        .json({ error: 'Invalid type. Enter "movie" or "show".' });
    }

    if (
      sort &&
      !validator.isIn(sort, ["highestrated", "lowestrated", "latest", "oldest"])
    ) {
      return res.status(400).json({
        error:
          'Invalid sort. Enter "highestrated", "lowestrated", "latest", or "oldest".',
      });
    }

    next();
  },
];

const ottValidator = [
  (req, res, next) => {
    const { region, page } = req.query;

    if (!validator.isIn(region, ["IN", "US"])) {
      return res
        .status(400)
        .json({ error: 'Invalid region. Use "IN" for India or "US" for USA.' });
    }

    if (page && !validator.isInt(page, { min: 1 })) {
      return res.status(400).json({
        error: "Invalid page number.",
      });
    }

    next();
  },
];

const getParamsValidator = [
  (req, res, next) => {
    const { param } = req.query;

    if (!param || !validator.isIn(param, ["genre", "language"])) {
      return res
        .status(400)
        .json({ error: 'Invalid param. Use "genre" or "language".' });
    }

    next();
  },
];

const searchParamValidator = [
  (req, res, next) => {
    const { title, page } = req.query;

    if (!title || !validator.isString(title)) {
      return res
        .status(400)
        .json({ error: "Invalid title. Title must be a non-empty string." });
    }

    if (page && (!validator.isInt(page, { min: 1 }) || page > 10)) {
      return res.status(400).json({
        error:
          "Invalid page number. It should be a positive integer and less than or equal to 10.",
      });
    }

    next();
  },
];

const ottProviderValidator = [
  (req, res, next) => {
    const { region } = req.query;

    if (!region || !validator.isIn(region, ["IN", "US"])) {
      return res
        .status(400)
        .json({ error: 'Invalid region. Use "IN" for India or "US" for USA.' });
    }

    next();
  },
];

module.exports = {
  ottValidator,
  getParamsValidator,
  searchParamValidator,
  ottProviderValidator,
  advanceSearchValidator,
};
