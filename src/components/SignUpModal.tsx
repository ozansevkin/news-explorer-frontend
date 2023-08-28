import { FormEvent, useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import TextInput from "./TextInput";
import useFormAndValidation from "@/hooks/useFormAndValidation";
import useSWRMutation from "swr/mutation";
import { sendPostRequest } from "@/utils/mainApi";
import CurrentModalContext from "@/contexts/CurrentModalContext";

export default function SignUpModal() {
  const { handleChange, values, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
    name: "",
  });

  const { setCurrentModal } = useContext(CurrentModalContext);

  const { trigger, isMutating, error } = useSWRMutation(
    "/signup",
    sendPostRequest,
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await trigger({
        email: values.email,
        password: values.password,
        name: values.name,
      });

      setCurrentModal("sign-up-success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText={isMutating ? "Signing up..." : "Sign up"}
      otherFormTitle="Sign in"
      otherFormModalName="sign-in"
      isValid={isValid}
      onSubmit={handleSubmit}
      responseError={error}
    >
      <TextInput
        name="email"
        type="email"
        placeHolder="Enter email"
        label="Email"
        isRequired={true}
        minLength={2}
        maxLength={30}
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      />
      <TextInput
        name="password"
        type="password"
        placeHolder="Enter password"
        label="Password"
        isRequired={true}
        minLength={2}
        maxLength={30}
        onChange={handleChange}
        value={values.password}
        error={errors.password}
      />
      <TextInput
        name="name"
        type="text"
        placeHolder="Enter username"
        label="Username"
        isRequired={true}
        minLength={2}
        maxLength={30}
        onChange={handleChange}
        value={values.name}
        error={errors.name}
      />
    </ModalWithForm>
  );
}
