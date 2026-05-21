import React, { useEffect, useState } from 'react'


const Jobcount = () => {

    const [jobcount,setJobcount] = useState(0)
    useEffect(()=>{
        const getJobCount = async ()=>{
            try{
                const res = await fetch("/api/joblisting/count")
                const data = await res.json()
                setJobcount (data.count||0)
            }
            catch(error){
                console.error("Error fetching Jobcount from api")
            } 
         } 
         getJobCount()
    },[] )
   


  return (
    <div>
      {jobcount}
    </div>
  )
}

export default Jobcount
