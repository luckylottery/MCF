import React from "react"

export const DisclaimerTerm = React.memo(({
  id,
  term,
  isPending,
  isMarked,
  changeMarkStatus,
  isAgreeToAll
}) => {
  console.log("Render");

  const getCheckboxStyles = () => {
    if (isPending) {
      return "border-red-500";
    }
    if (isMarked) {
      return "border-blue-500 bg-blue-500";
    }
    return "border-gray-500";
  }

  return (
    <div className="flex items-center gap-2 transition-all duration-300	">
      <button
        className={`${getCheckboxStyles()} border-2  h-4 w-4 rounded outline-none`}
        onClick={() => changeMarkStatus(isAgreeToAll, id)}
      />
      <label className={`${isPending ? "text-red-500" : ""} flex-1`}>{term}</label>
    </div>
  )
})
