import { useContext } from "react";
import Modal from "./Modal";
import CurrentModalContext from "@/contexts/CurrentModalContext";

export default function SignUpSuccessModal() {
  const { setCurrentModal } = useContext(CurrentModalContext);
  return (
    <Modal>
      <h2
        className="mb-[14px]
text-2xl
font-black text-black"
      >
        Registration successfully completed!
      </h2>
      <button
        type="button"
        className="text-blue-600"
        onClick={() => setCurrentModal("sign-in")}
      >
        Sign in
      </button>
    </Modal>
  );
}
