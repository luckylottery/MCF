import { useHistory } from "react-router";

export const AllPoolRow = ({ poolData }) => {

  const { name, image, swapRate, totalProgress, status, projectId } = poolData;
  const router = useHistory();

  const openVettedProject = () => {
    router.push(`/vetted/${projectId}`);
  }

  return (
    <tr
      className="font-bold border-b-2 h-20 border-blue-3 cursor-pointer transition duration-300 hover:bg-blue-3 hover:text-white transform"
      onClick={openVettedProject}
    >
      <td className="px-5 py-2.5">
        <div className="flex flex-col md:flex-row text-center justify-center items-center gap-2">
          <img
            src={image}
            className="h-10 max-w-full"
            alt="logo"
          />
          <h3>{name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell px-5 text-center">1 BNB ≈ {swapRate}</td>
      <td className="px-5 text-center">
        <div className="flex justify-center items-center gap-2">
          <h5>{totalProgress.toFixed(1)}%</h5>
          <div className="flex-1 bg-gray-300 h-3 rounded-full">
            <div
              className="bg-red-500 h-full rounded-full"
              style={{
                width: `${totalProgress}%`
              }}
            />
          </div>
        </div>
      </td>
      <td className="px-5 w-10 text-center">
        <h5 className="py-1 px-2 bg-blue-300 rounded-full">
          {status}
        </h5>
      </td>
    </tr>
  )
}
