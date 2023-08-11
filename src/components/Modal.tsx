import Image from "next/image";
import closeIcon from "@/images/icons/close.svg";
import { MouseEvent, useCallback, useContext, useEffect } from "react";
import SetCurrentModalContext from "@/contexts/SetCurrentModalContext";

export default function Modal({ children }: { children: React.ReactNode }) {
  const setCurrentModal = useContext(SetCurrentModalContext);

  const closeModal = useCallback(() => {
    setCurrentModal(null);
  }, [setCurrentModal]);

  const handleOverlayClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
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
      className="fixed left-0 top-0 z-30 h-screen w-screen bg-black bg-opacity-50 xs:flex xs:items-center xs:justify-center xs:px-adaptive"
    >
      <div className="relative mx-auto mt-12 h-full max-w-[430px] rounded-t-2xl bg-white p-4 shadow xs:mt-0 xs:h-auto xs:w-[430px] xs:rounded-2xl xs:px-9 xs:pb-7 xs:pt-[34px]">
        <button
          type="button"
          onClick={closeModal}
          className="absolute -top-9 right-4 w-6 xs:-right-11 xs:-top-11 xs:w-auto"
        >
          <Image src={closeIcon} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
}
