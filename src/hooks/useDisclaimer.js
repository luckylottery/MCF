import { useCallback, useState } from "react"
import { terms as termsAndConditions } from '../data/terms';

export const useDisclaimer = () => {

  const [terms, setTerms] = useState(termsAndConditions);
  const [hasAgreeToAll, setHasAgreeToAll] = useState(false);

  const changeMarkStatus = useCallback(async (isAgreeToAll, identifier) => {
    if (isAgreeToAll) {
      setHasAgreeToAll(c => !c);

      if (!identifier) {
        setTerms(c => c.map(term => ({
          ...term,
          isPending: false,
          isMarked: true
        })));
      }
    }
    else {
      setTerms(c => c.map(({ id, term, isPending, isMarked }) => {
        const obj = {
          id,
          term,
          isPending,
          isMarked
        };

        if (id === identifier) {
          obj.isMarked = !isMarked;

          if (isMarked) {
            setHasAgreeToAll(false);
          }
        }

        return obj;
      }));
    }
  }, []);

  const confirmTerms = () => {

    let areAllMarked = true;

    const validatedItems = terms.map(({ id, term, isPending, isMarked }) => {
      const obj = {
        id,
        term,
        isPending,
        isMarked
      };

      if (!isMarked) {
        obj.isPending = true;
        areAllMarked = false;
      }

      return obj;
    });

    if (!areAllMarked) {
      setTerms(validatedItems);
    }
  }

  return {
    terms,
    setTerms,
    hasAgreeToAll,
    setHasAgreeToAll,
    changeMarkStatus,
    confirmTerms
  }
}
