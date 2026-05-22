import React from 'react'
import Coursecount from '../components/courses/Coursecount'
import CourseGrid from '../components/courses/CourseGrid'
import Jobcount from '../components/jobs/Jobcount'
import Aboutusimage from "../assets/Aboutus-img.png"
import { NavLink } from 'react-router-dom'
import AboutCard from '../components/courses/about/AboutCard'
import TotalDetail from '../components/courses/about/TotalDetail'
import PlovDevHelp from '../components/courses/about/PlovDevHelp'
import HeroSectionCard from './HeroSectionCard'
const AboutUspage = () => {
  return (
   <div className=' m-[auto] justify-center  pt-30'>

      <HeroSectionCard 
      Title1="About" 
      Title2 ="PlovDev" 
      Subtitle= "We are on a mission to make quality tech education accessible to everyone, everywhere."
      body="PlovDev is a structured learning platform for beginner and junior
for beginner and developer. We create practical, project based courses that help you build
real skill and become job-ready." 
        img={Aboutusimage} />

      <PlovDevHelp />

      <TotalDetail />

    
       <AboutCard />
     
    </div>
  )
}

export default AboutUspage
