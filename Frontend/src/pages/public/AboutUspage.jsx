import React from 'react'
import Coursecount from '../../components/courses/Coursecount'
import CourseGrid from '../../components/courses/CourseGrid'
import Jobcount from '../../components/jobs/Jobcount'
import Aboutusimage from "../../assets/Aboutus-img.png"
import { NavLink } from 'react-router-dom'
import AboutCard from '../../components/courses/about/AboutCard'
import TotalDetail from '../../components/courses/about/TotalDetail'
import PlovDevHelp from '../../components/courses/about/PlovDevHelp'
import HeroSectionCard from './HeroSectionCard'
const AboutUspage = () => {
  return (
   <div className=' m-[auto] justify-center  pt-23'>

      <HeroSectionCard 
      Title1={"About" }
      Title2 ={"PlovDev"}
      Subtitle= {"We are on a mission to make quality tech education accessible to everyone, everywhere."}
      body={"PlovDev is a structured learning platform for beginner and junior for beginner and developer. We create practical, project based courses that help you build real skill and become job-ready."}
        img={Aboutusimage}
        marquee1={"We dont't teach theory. We train creators."}
        marquee2={"Not just courses - real skills that get you hired."}
        marquee3={"Your journey from zero to job-ready starts here."}
        marquee4={"Learn by doing. Build real projects. Land your dream job."}
        marquee5={"Join 100,000+ learners building real skills with PlovDev."}
        marquee6={"From beginner to job-ready - PlovDev is your path to a tech career."}
        
         />

      <PlovDevHelp />

      <TotalDetail />

    
       <AboutCard />
     
    </div>
  )
}

export default AboutUspage
