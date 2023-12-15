const express = require("express");
const {
  ottValidator,
  getParamsValidator,
  searchParamValidator,
  ottProviderValidator,
  advanceSearchValidator,
} = require("../validators/ottValidator");
const {
  getOTTData,
  getNewArrivalOTTData,
  getParamsForListing,
  searchOTT,
  getPlatforms,
} = require("../controllers/ottController");

const router = express.Router();

router.get("/ott-data", advanceSearchValidator, getOTTData);
router.get("/params-for-listing", getParamsValidator, getParamsForListing);
router.get("/new-arrival-ott-data", ottValidator, getNewArrivalOTTData);
router.get("/search-ott", searchParamValidator, searchOTT);
router.get("/get-platforms", ottProviderValidator, getPlatforms);

module.exports = router;
