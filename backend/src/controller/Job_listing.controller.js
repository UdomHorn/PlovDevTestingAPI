const {Job_listings}= require('../models')




// create joblisting
const createJob_listings = async (req, res) => {
   
   
    try{
         const {company_name, hr_name, title,  emp_type, description, location, salary_min,status} = req.body
          const Job_listing = await Job_listings.create({
            company_name:company_name,
            hr_name:hr_name,
            title:title,
            emp_type:emp_type,
            description:description,
            location:location,
            salary_min:salary_min,
            status:status
          })

          res.json({
            message:"Job listing create successfully!!!!",
            Job_listing:Job_listing
          })

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// view joblistings

const viewJobListings = async (req,res)=> {
    try{
        const joblistings = await Job_listings.findAll();
        res.json({
                joblistings:joblistings
            })
        
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


// view joblisting

const viewJobListing = async(req,res)=>{
    try{
        const {id} = req.params
        const joblisting = await Job_listings.findByPk(id)
        if(!joblisting){
            res.status(404).json({
                message: " Joblisting Not Found!!!"
            })
        }
        res.json({joblisting:joblisting})

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

// Update joblisting

const updateJoblisting = async (req,res)=>{
    try{
        const {id} = req.params
        const joblisting = await Job_listings.findByPk(id)

        if(!joblisting){
            return res.status.json({
                message: "User not Found!!!"
            })
        }
        const {company_name, hr_name, title,  emp_type, description, location, salary_min,status} = req.body
        const updateJoblisting = joblisting.update({
            company_name, hr_name, title,  emp_type, description, location, salary_min,status
        })

        res.json({
            job_listings: updateJoblisting
        })

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Delete JobListing

const DeleteJobListing = async (req,res) => {
    try{
        const {id} = req.params
        const joblisting = await Job_listings.findByPk(id)
        if(!joblisting){
            return res.status(404).json({message:"Joblisting Not Found!!!"})
        }
       await joblisting.destroy()
        res.json({
            message:"Delete successfully!!"
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// jobcount
const Jobcount = async(req,res)=>{
    try{
        const count = await Job_listings.count(
            {where: { status: "published" }}
        )
        res.json({count})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    createJob_listings,
    viewJobListings,
    viewJobListing,
    updateJoblisting,
    DeleteJobListing,
    Jobcount
}