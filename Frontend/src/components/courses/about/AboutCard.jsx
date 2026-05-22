import React from 'react'

const AboutCard = () => {
  return (
    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 text-center mt-24 max-md:mt-12 mx-18 '>
            <div>
                <div className='text-2xl mb-6'>
                     Our Vision
                </div>
                <div className='text-gray-500'>
                    We envision a world where anyone with the desire to learn has the tools and opportunities to succeed—regardless of location, background, or financial situation.
                </div>
            </div>
            <div>
                <div className='text-xl mb-6'>
                    Our Mission
                </div>
                <div className='text-gray-500'>
                    To make learning flexible, affordable, and impactful by connecting learners with expert knowledge and practical skills that matter in the real world. 
                </div>
            </div>
            <div>
                <div className='text-xl mb-6'>
                    Certificate with Job-board
                </div>
                <div className='text-gray-500'>
                    Earn a verifiable PDF certificate on completion.
Then use the PlovDev Job Board to apply directly
to hiring partners in Cambodia.
                </div>
            </div>
        </div>
  )
}

export default AboutCard
