import Image from "next/image";
import closeIcon from "@/images/icons/close.svg";
import { MouseEvent, useContext, useEffect } from "react";
import SetCurrentModalContext from "@/contexts/SetCurrentModalContext";

export default function Modal({ children }: { children: React.ReactNode }) {
  const setCurrentModal = useContext(SetCurrentModalContext);

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleOverlayClose = (e: MouseEvent) => {
    if (e.target == e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [closeModal]);

  return (
    <div
      onClick={handleOverlayClose}
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 xs:flex xs:items-center xs:justify-center z-30 xs:px-adaptive"
    >
      <div className="relative mx-auto mt-12 xs:mt-0 max-w-[430px] xs:w-[430px] h-full xs:h-auto bg-white rounded-t-2xl xs:rounded-2xl shadow p-4 xs:px-9 xs:pb-7 xs:pt-[34px]">
        <button
          type="button"
          onClick={closeModal}
          className="absolute -top-9 xs:-top-11 right-4 xs:-right-11 w-6 xs:w-auto"
        >
          <Image src={closeIcon} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
}
