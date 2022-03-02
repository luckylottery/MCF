export const FormInput = ({ type = "input", placeholder = "" }) => {
  return (
    <div className={`w-full flex flex-col ${type === "input" ? "items-center" : ""} gap-5 md:flex-row`}>
      <label className="w-full md:w-auto">Form Input</label>
      {
        type === "input" ? (
          <input
            className="w-full border-2 border-rounded px-2 py-1 outline-none md:flex-1"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            className="w-full border-2 border-rounded px-2 py-1 resize-none	h-20 outline-none md:flex-1"
            placeholder={placeholder}
          />
        )
      }
    </div>
  )
}
