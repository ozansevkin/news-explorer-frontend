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
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 xs:flex xs:items-center xs:justify-center z-30 xs:px-adaptive">
      <div className="relative mx-auto mt-12 xs:mt-0 max-w-[430px] xs:w-[430px] h-full xs:h-auto bg-white rounded-t-2xl xs:rounded-2xl shadow p-4 xs:px-9 xs:pb-7 xs:pt-[34px]">
        <button
          type="button"
          className="absolute -top-9 xs:-top-11 right-4 xs:-right-11 w-6 xs:w-auto"
        >
          <Image src={closeIcon} alt="close" />
        </button>
        <form action="#" className="flex flex-col">
          <h2 className="text-2xl font-black mb-[18px] xs:mb-[22px]">
            {title}
          </h2>
          <fieldset className="font-inter">{children}</fieldset>
          <button
            type="submit"
            className="xs:mt-2 text-white w-full h-16 rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400"
          >
            {buttonText}
          </button>
          <div className="text-xs flex mx-auto mt-4">
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
