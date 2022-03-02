import { DisclaimerTerm } from "./DisclaimerTerm/DisclaimerTerm";
import { useDisclaimer } from "../../hooks/useDisclaimer";

export const Disclaimer = () => {

  const {
    terms,
    hasAgreeToAll,
    changeMarkStatus,
    confirmTerms
  } = useDisclaimer();

  return (
    <div className="text-gray-500">
      <h1>Disclaimer</h1>
      <div className="h-0.5 w-full my-2 rounded bg-gray-200" />
      <h2>Please read the <span className="text-blue-500">Terms and Conditions</span> then agree to all the following to proceed!</h2>
      <div className="flex flex-col gap-2 my-8">
        {
          terms.map(({ id, term, isPending, isMarked }, index) => (
            <DisclaimerTerm
              // key={id}
              key={index}
              id={id}
              term={term}
              isPending={isPending}
              isMarked={isMarked}
              changeMarkStatus={changeMarkStatus}
              isAgreeToAll={false}
            />
          ))
        }
      </div>
      <DisclaimerTerm
        term="Agree to all"
        id={hasAgreeToAll}
        isPending={false}
        isMarked={hasAgreeToAll}
        isAgreeToAll={true}
        changeMarkStatus={changeMarkStatus}
      />
      <div className="flex justify-around	my-5">
        <button className="bg-gray-300 rounded-full py-1.5 px-3 text-black">CANCEL</button>
        <button
          className="bg-gray-300 rounded-full py-1.5 px-3 text-black"
          onClick={confirmTerms}
        >
          CONFIRM
        </button>
      </div>
    </div>
  )
}
