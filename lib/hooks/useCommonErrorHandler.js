import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { openModal } from "@/components/Modal";

const useCommonErrorHandler = (state) => {
  const [hasErrors, setHasErrors] = useState(false);
  const { error } = useEthers();

  useEffect(() => {
    setHasErrors(false);
    if (state && state.status === "Exception") {
      openModal({ message: state.errorMessage, title: "Exception" });
      setHasErrors(true);
    }
    if (error) {
    }
  }, [state, error]);

  return hasErrors;
};

export default useCommonErrorHandler;
