import Image from "next/image";
import closeIcon from "@/images/icons/close.svg";

interface ModalWithFormProps {
  title: string;
  children: React.ReactNode;
  buttonText: string;
  otherFormTitle: string;
}

export default function ModalWithForm({
  title,
  children,
  buttonText,
  otherFormTitle,
}: ModalWithFormProps) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-30 px-adaptive">
      <div className="relative w-[430px] bg-white rounded-2xl shadow px-9 pb-7 pt-[34px]">
        <button type="button" className="absolute -top-11 -right-11">
          <Image src={closeIcon} alt="close" />
        </button>
        <form action="#" className="flex flex-col">
          <h2 className="text-2xl font-black mb-[22px]">{title}</h2>
          <fieldset className="font-inter">{children}</fieldset>
          <button
            type="submit"
            className="mt-2 text-white w-full h-16 rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400"
          >
            {buttonText}
          </button>
          <div className="text-sm flex mx-auto mt-4">
            <p>or&nbsp;</p>
            <button type="button" className="text-blue-600">
              {otherFormTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
