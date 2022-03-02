import { AllPools } from "../components/Vetted/AllPools/AllPools";
import { UpcomingPools } from "../components/Vetted/UpcomingPools/UpcomingPools";
import { VettedHeader } from "../components/Vetted/VettedHeader/VettedHeader";
import { upcomingPools } from "../data/upcomingPools"

export const VettedPage = () => {

  const upcomingPoolsData = upcomingPools.filter(upcomingPool => upcomingPool.upcoming ? true : false);
  const allPools = upcomingPools.filter(upcomingPool => upcomingPool.upcoming ? false : true);

  return (
    <div className="w-11/12 mx-auto mt-10 mb-20">
      <VettedHeader />
      <UpcomingPools upcomingPools={upcomingPoolsData} />
      <AllPools allPools={allPools} />
    </div>
  )
}
