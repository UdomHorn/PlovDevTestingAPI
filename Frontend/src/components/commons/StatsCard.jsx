import React from 'react'
import { PiStudentBold } from "react-icons/pi";
const StatsCard = ({title,value,footer}) => {
  return (
    <div className="bg-white p-4   rounded-lg shadow-lg w-[300px] h-auto ">
          <h1 className="text-xl font-bold ">{title}</h1>
          <div className="text-4xl font-bold text-center p-3">{value}</div>
          <div className="flex justify-between">
            <div><PiStudentBold className="text-3xl"/></div>
            <div>
              <span className="font-bold">{footer}</span> students
            </div>
          </div>
        </div>
  )
}

export default StatsCard