import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { setModalCallback } from "./modalAPI";
import Button from "@/components/Button";

const sanitizeMessage = (message) => {
  const TO_REMOVE = ["MetaMask Tx Signature:", "Err:"];
  const regx = new RegExp(TO_REMOVE.join("|"), "gi");
  return message
    .replace(regx, "")
    .replace(/NULL/gi, "Nothing")
    .replace(/ENS NAME/gi, "Address")
    .trim();
};

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({ message: "", title: "" });

  function closeModal() {
    setIsOpen(false);
  }

  function openModalCallback(config) {
    setConfig((prevConfig) => ({ ...prevConfig, ...(config || {}) }));
    setIsOpen(true);
  }

  useEffect(() => {
    setModalCallback(openModalCallback);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="uppercase text-2xl font-bold leading-6 text-gray-900"
              >
                {config.title}
              </Dialog.Title>
              <div className="mt-4">
                <p className="text-zinc-500 capitalize">
                  {sanitizeMessage(config.message)}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={closeModal}
                  className="text-black border border-zinc-200"
                >
                  GOT IT
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
