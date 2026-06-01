import React from 'react'
import { SiCashapp } from "react-icons/si";
const TotalRevenueCard = ({title,value,footer}) => {
  return (
    <div className="bg-white p-4   rounded-lg shadow-lg w-[300px] h-auto ">
                  <h1 className="text-xl font-bold ">{title}</h1>
                  <div className="text-4xl font-bold text-center p-3">{value}</div>
                  <div className="flex justify-between">
                    <div><SiCashapp className="text-3xl"/></div>
                    <div>
                      <span className="font-bold">{footer}</span> Lastmonth
                    </div>
                  </div>
                </div>
  )
}

export default TotalRevenueCard