import { Link } from "react-router-dom";

export const UpcomingPool = ({ upcomingPoolData }) => {

  const { image, chain, name, status, totalRaise, roundOpens, audited, projectId } = upcomingPoolData;
  console.log(projectId);
  return (
    <Link
      to={`/vetted/${projectId}`}
      className="relative shadow-lg font-bold cursor-pointer bg-blue-3 rounded-sm w-full p-5 border border-blue-3 transition duration-300 transform hover:scale-105 hover:border-white"
    >
      <div className="flex justify-between items-center">
        <img
          alt="logo"
          src={image}
          className="h-10 max-w-full"
        />
        <div className="flex gap-2.5">
          <h5 className="uppercase rounded-full bg-gray-100 px-3 text-white">{chain}</h5>
          <h5 className="rounded-full bg-blue-4 px-3 text-blue-3">{status}</h5>
        </div>
      </div>
      <h1 className="my-5 text-white text-xl uppercase">{name}</h1>
      <div className="flex flex-col gap-5 ">
        <div>
          <h2 className="text-md text-blue-4 mb-2">TOTAL RAISE / HARD CAP</h2>
          <h3 className="text-lg text-white">{totalRaise}</h3>
        </div>
        <div>
          <h2 className="text-md text-blue-4 mb-2">ROUND 1 OPENS</h2>
          <h3 className="text-lg text-white">{roundOpens}</h3>
        </div>
      </div>

      {audited && (
        <div className="text-gray-900 absolute right-0 -bottom-0.5 px-3 py-1.5 rounded-br-sm rounded-tl-sm bg-gradient-to-r from-yellow to-blue-1">
          AUDITED
        </div>
      )}
    </Link>
  )
}
