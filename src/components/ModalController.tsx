import SignInModal from "@/components/SignInModal";
import SignUpModal from "@/components/SignUpModal";

interface ModalControllerProps {
  currentModal: "sign-in" | "sign-up" | null;
}

export default function ModalController({
  currentModal,
}: ModalControllerProps) {
  const renderModal = {
    "sign-in": <SignInModal />,
    "sign-up": <SignUpModal />,
  };

  return currentModal && renderModal[currentModal];
}
