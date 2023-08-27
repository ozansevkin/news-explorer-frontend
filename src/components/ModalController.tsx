import SignInModal from "@/components/SignInModal";
import SignUpModal from "@/components/SignUpModal";
import SignUpSuccessModal from "@/components/SignUpSuccessModal";
import { currentModalType } from "@/utils/types";

interface ModalControllerProps {
  currentModal: currentModalType;
}

export default function ModalController({
  currentModal,
}: ModalControllerProps) {
  const renderModal = {
    "sign-in": <SignInModal />,
    "sign-up": <SignUpModal />,
    "sign-up-success": <SignUpSuccessModal />,
  };

  return currentModal && renderModal[currentModal];
}
