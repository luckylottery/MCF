import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ContributeButton } from "../components/Vetted/ContributeButton";
import { ProjectInformation } from "../components/Vetted/ProjectInformation/ProjectInformation";
import { upcomingPools } from "../data/upcomingPools"

export const VettedProjectPage = () => {
  const [vettedProjectData, setVettedProjectData] = useState();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const selectedVettedProject = upcomingPools.find(project => project.projectId === projectId);

      if (selectedVettedProject) {
        setVettedProjectData(selectedVettedProject);
      }
    }
  }, [projectId]);

  return (
    <div className="mt-10 mb-20">
      {
        vettedProjectData && (
          <div className="flex flex-col gap-10 mx-auto w-11/12  lg:w-10/12">
            <div className="bg-gray-900 text-gray-300">
              <Link to="/vetted" className="flex items-center gap-2.5 text-base font-bold w-max py-2.5 px-1.5 bg-blue-3 text-white rounded-sm">
                <BsChevronLeft />
                <h1>GO BACK TO POOL LIST</h1>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-5 mb-5 sm:mb-0 justify-center items-center">
                <img
                  className="h-20 max-w-full"
                  alt="logo"
                  src={vettedProjectData.image}
                />
                <h1 className="text-xl font-bold text-center">{vettedProjectData.name}</h1>
              </div>
              <div className="flex gap-5 text-lg font-bold">
                <label className="rounded-coin-form-border py-0.5 px-3 bg-blue-3 text-white">{vettedProjectData.chain}</label>
                <label className="rounded-coin-form-border py-0.5 px-3 bg-blue-1 text-white">{vettedProjectData.status}</label>
              </div>
            </div>
            {
              vettedProjectData.disclaimer && (
                <div className="border-2 border-blue-3 rounded-sm p-10 bg-blue-4 text-lg">
                  <h1 className="font-bold text-blue-3">
                    <span className="text-blue-1">ATTENTION: </span>
                    POOL USES BSC ({vettedProjectData.disclaimer.network}) FOR CONVENIENCE
                  </h1>
                  <p className="mt-3 text-base text-blue-3">{vettedProjectData.disclaimer.message}</p>
                </div>
              )
            }
            <div className="flex flex-col md:flex-row gap-10">
              <div className="border-2 border-blue-3 rounded-sm border-2 p-10 bg-blue-4 w-full">
                <h2 className="text-lg font-bold text-blue-1">PROJECT DESCRIPTION</h2>
                <p className="mt-3 text-base text-blue-3">{vettedProjectData.description}</p>
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="text-blue-1 font-bold mt-3">
                    <label>WEBSITE</label>
                    <a
                      className="flex items-center gap-2.5 text-xl text-blue-3"
                      href={vettedProjectData.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 className="mt-1">
                        GO TO WEBSITE
                      </h5>
                      <BiLinkExternal />
                    </a>
                  </div>
                  <div className="text-blue-1 font-bold mt-3">
                    <label>TOKEN ADDRESS</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.tokenAddress}</h5>
                  </div>
                </div>
                <ContributeButton projectInfo={vettedProjectData} />
              </div>
              <div className="border-blue-3 rounded-sm border-2 p-10 bg-blue-4 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>TOTAL RAISE / HARD CAP</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.totalRaise}</h5>
                  </div>
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>SWAP RATE</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.swapRate}</h5>
                  </div>
                </div>
                <div className="flex-1 text-blue-1 font-bold mt-3">
                  <label>ROUND 1 OPENS</label>
                  <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.roundOpens}</h5>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>PARTICIPANTS</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.participants}</h5>
                  </div>
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>YOU PARTICIPATED WITH</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.yourParticipation}</h5>
                  </div>
                </div>
                <div className="flex-1 text-blue-1 font-bold mt-3">
                  <label>TOTAL PROGRESS</label>
                  <div className="flex items-center gap-5">
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.totalProgress ? vettedProjectData.totalProgress.toFixed(1) : "0.0"}%</h5>
                    <div className="flex-1 bg-blue-2 h-3 rounded-sm">
                      <div
                        className="bg-blue-3 h-full rounded-sm"
                        style={{
                          width: `${vettedProjectData.totalProgress ? vettedProjectData.totalProgress : 0}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProjectInformation vettedProjectData={vettedProjectData} />
          </div>
        )
      }
    </div>
  )
}
