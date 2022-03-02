export const Button = ({ color, text, imageSRC }) => {
  return (
    <button className={`${color === "red" ?
      "border-red bg-pink text-red hover:bg-red" :
      "border-blue-1 bg-blue-4 text-blue-1 hover:bg-blue-1"
      } 
      ${imageSRC ? "flex items-center gap-2.5" : ""}
      border border-b-4 rounded-xl px-3 py-1.5 font-bold mx-auto transition duration-300 hover:text-white
      `}
    >
      {text}
      {imageSRC && (
        <div
          className="h-7 w-7 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url("${imageSRC}")` }}
        />
      )}
    </button>
  );
}
