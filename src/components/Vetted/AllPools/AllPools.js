import { AllPoolRow } from "../AllPoolRow"

export const AllPools = ({ allPools }) => {
  return (
    <div className="mt-5 ">
      <h1 className="text-3xl my-3 font-bold">All Pools</h1>
      <table className="w-full md:w-11/12 mx-auto">
        <thead>
          <tr className="text-lg border-b-2 border-blue-3">
            <th className="p-2 flex-1">Project</th>
            <th className="hidden md:table-cell p-2 w-3/12">Swap Rate</th>
            <th className="p-2 w-3/12">Progress</th>
            <th className="p-2 w-1/12">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            allPools.map((pool) => (
              <AllPoolRow
                key={pool.projectId}
                poolData={pool}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
