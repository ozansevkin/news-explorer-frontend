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
        <h2 className="text-2xl font-black mb-[18px] xs:mb-[22px]">{title}</h2>
        <fieldset className="font-inter">{children}</fieldset>
        <button
          type="submit"
          className="xs:mt-2 text-white w-full h-16 rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400"
        >
          {buttonText}
        </button>
        <div className="text-xs flex mx-auto mt-4">
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
