import { useEffect, useState } from "react";
import { useEthers, useNetwork } from "@usedapp/core";
import { openModal } from "@/components/Modal";

const useCommonErrorHandler = (state) => {
  const [hasErrors, setHasErrors] = useState(false);
  const { error } = useEthers();
  const { network } = useNetwork();
  useEffect(() => {
    setHasErrors(false);
    if (state && state.status === "Exception") {
      openModal({ message: state.errorMessage, title: "Exception" });
      setHasErrors(true);
    } else if (error && error.message) {
      openModal({ message: error.message, title: "Error" });
      setHasErrors(true);
    } else if (network.errors.length) {
      const message = network.errors[0].message;
      openModal({ message, title: "Error" });
      setHasErrors(true);
    }
  }, [state, error, network]);

  return hasErrors;
};

export default useCommonErrorHandler;
