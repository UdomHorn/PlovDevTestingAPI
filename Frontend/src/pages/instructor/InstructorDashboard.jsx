
import RatingCard from "../../components/commons/RatingCard";
import StatsCard from "../../components/commons/StatsCard";
import TotalCertificateCard from "../../components/commons/TotalCertificateCard";
import TotalCoursCard from "../../components/commons/TotalCoursCard";
import TotalPurchasedCard from "../../components/commons/TotalPurchasedCard";
import TotalRevenueCard from "../../components/commons/TotalRevenueCard";
import TotalStudentCard from "../../components/commons/TotalStudentCard";
const InstructorDashboard = () => {
  return (
    <div className=" px-12  grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 justify-items-center  gap-6 "> 
        <div><TotalStudentCard
          title="Total Students"
          value="1,234"
          footer="567"
        /> 
        </div>
        <div><TotalCoursCard 
        title ="Total Courses"
        value="12"
        footer="3"
        />
        </div>
        <div>
          <TotalRevenueCard
            title="Total Revenue"
            value="$12,345"
            footer="%12"
           />

        </div>

        <div>
          <TotalPurchasedCard
          title="Total Purchased"
          value="1,234" 
        />
         </div>
        <div><TotalCertificateCard
          title="Total Certificate"
          value="67"
        /></div>
        <div>
          <RatingCard 
          title="Average Rating"
          value="4.5"
          footer="0.1"
          />
        </div>

    </div>
  )
}

export default InstructorDashboard
