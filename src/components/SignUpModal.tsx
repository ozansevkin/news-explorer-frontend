import ModalWithForm from "./ModalWithForm";
import TextInput from "./TextInput";

export default function SignUpModal() {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      otherFormTitle="Sign in"
      otherFormModalName="sign-in"
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
      <TextInput
        type="text"
        placeHolder="Enter username"
        label="Username"
        isRequired={true}
        minLength={2}
        maxLength={30}
      />
    </ModalWithForm>
  );
}
