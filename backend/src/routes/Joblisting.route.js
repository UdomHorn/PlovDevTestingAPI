const express = require("express")
const { createJob_listings, viewJobListings, viewJobListing, updateJoblisting, DeleteJobListing, Jobcount } = require("../controller/Job_listing.controller")
const route = express.Router()


route.post("/joblisting",createJob_listings)
route.get("/joblisting",viewJobListings)
route.get("/joblisting/count",Jobcount)
route.get("/joblisting/:id",viewJobListing)
route.put("/joblisting/:id",updateJoblisting)
route.delete("/joblisting/:id",DeleteJobListing)



module.exports = route