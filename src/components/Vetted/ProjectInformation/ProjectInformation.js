export const ProjectInformation = ({ vettedProjectData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 text-blue-1 font-bold">
      <div className="flex-1">
        <h1 className="mb-2.5 text-xl text-blue-3">PROJECT INFORMATION</h1>
        <div className="border-t-2 border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Name</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.name}</p>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Chain</h2>
          <p className="flex-1 uppercase text-blue-3">{vettedProjectData.chain}</p>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Website</h2>
          <a
            className="flex-1 text-blue-3 cursor-pointer break-all"
            href={vettedProjectData.website}
            target="_blank"
            rel="noreferrer"
          >
            {vettedProjectData.website}
          </a>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Socials</h2>
          <div className="flex-1 flex gap-1.5 text-blue-3">
            {
              vettedProjectData.socials.map(({ icon: Icon, link }, index) => (
                <a
                  href={link}
                  target="_blank" rel="noreferrer"
                >
                  <Icon key={index}
                    className="h-5 w-5"
                  />
                </a>
              ))
            }
          </div>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">White Paper</h2>
          <a
            className="flex-1 text-blue-3"
            href={vettedProjectData.whitePaper}
            target="_blank" rel="noreferrer"
          >
            Open White Paper
          </a>
        </div>
        <div className="border-t border-b-2 p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Security Audit Report</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.securityAuditReport}</p>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="mb-2.5 text-xl text-blue-3">TOKEN INFORMATION</h1>
        <div className="border-t-2 border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Name</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.name}</p>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Symbol</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.symbol}</p>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Decimals</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.decimals}</p>
        </div>
        <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Address</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.address}</p>
        </div>
        <div className="border-t border-b-2 p-2.5 border-blue-3 flex gap-2.5">
          <h2 className="flex-1">Total Supply</h2>
          <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.totalSupply}</p>
        </div>
      </div>
    </div>
  )
}
