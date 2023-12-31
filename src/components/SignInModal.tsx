import ModalWithForm from "./ModalWithForm";
import TextInput from "./TextInput";

export default function SignInModal() {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      otherFormTitle="Sign up"
      otherFormModalName="sign-up"
    >
      <TextInput
        type="email"
        placeHolder="Enter email"
        label="Email"
        isRequired={true}
        minLength={2}
        maxLength={30}
      />
      <TextInput
        type="password"
        placeHolder="Enter password"
        label="Password"
        isRequired={true}
        minLength={2}
        maxLength={30}
      />
    </ModalWithForm>
  );
}
