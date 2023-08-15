import { useContext } from "react";
import Modal from "./Modal";
import CurrentModalContext from "@/contexts/SetCurrentModalContext";

interface ModalWithFormProps {
  title: string;
  children: React.ReactNode;
  buttonText: string;
  otherFormTitle: string;
  otherFormModalName: "sign-in" | "sign-up";
}

export default function ModalWithForm({
  title,
  children,
  buttonText,
  otherFormTitle,
  otherFormModalName,
}: ModalWithFormProps) {
  const setCurrentModal = useContext(CurrentModalContext);

  return (
    <Modal>
      <form action="#" className="flex flex-col">
        <h2 className="mb-[18px] text-2xl font-black xs:mb-[22px]">{title}</h2>
        <fieldset className="font-inter">{children}</fieldset>
        <button
          type="submit"
          className="h-16 w-full rounded-l-full rounded-r-full bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 xs:mt-2"
        >
          {buttonText}
        </button>
        <div className="mx-auto mt-4 flex text-xs">
          <p>or&nbsp;</p>
          <button
            type="button"
            className="text-blue-600"
            onClick={() => setCurrentModal(otherFormModalName)}
          >
            {otherFormTitle}
          </button>
        </div>
      </form>
    </Modal>
  );
}
