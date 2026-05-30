import React from 'react'
import Register from './Register'
import GetUser from '../../components/users/GetUser'
import { NavLink } from 'react-router-dom'
import Jobimg from '../../assets/Job-img.png'
import HeroSectionCard from './HeroSectionCard'
// import image from "../../assets/JobboardImg.png"


const Jobboardpage = () => {
  return (
    <div className=' m-[auto] p-[auto] justify-center  pt-30'>

      <HeroSectionCard 
      Title1="Job in" 
      Title2 ="Cambodia." 
      Subtitle= "Find Your Next Big Opportunity with thousands of jobs that actually match your skills and your goals"
      body="PlovDev works hand-in-hand with a growing network of tech companies and IT partners to bring you exclusive job opportunities you won't find anywhere else. From startups
to established tech firms — they come to us because they want talent like you." 
        img={Jobimg} />
      <GetUser/>
    </div>
  )
}

export default Jobboardpage
