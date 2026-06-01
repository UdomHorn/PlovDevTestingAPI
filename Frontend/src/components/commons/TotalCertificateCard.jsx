import React from 'react'
import { PiCertificateBold } from "react-icons/pi";
const TotalCertificateCard = ({title,value}) => {
  return (
    <div className="bg-white p-4   rounded-lg shadow-lg w-[300px] h-auto ">
                         <h1 className="text-xl font-bold ">{title}</h1>
                         <div className="text-4xl font-bold text-center p-3">{value}</div>
                         <div className="flex justify-between">
                           <div><PiCertificateBold className="text-3xl"/></div>
                           <div>
                             
                           </div>
                         </div>
                       </div>
  )
}

export default TotalCertificateCard