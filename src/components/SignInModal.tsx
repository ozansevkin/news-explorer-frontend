import { FormEvent, useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import TextInput from "./TextInput";
import useFormAndValidation from "@/hooks/useFormAndValidation";
import useSWRMutation from "swr/mutation";
import { sendPostRequest, sendGetRequestWithToken } from "@/utils/mainApi";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import CurrentModalContext from "@/contexts/CurrentModalContext";

export default function SignInModal() {
  const { handleChange, values, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
  });

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { setCurrentModal } = useContext(CurrentModalContext);

  const {
    trigger: signInTrigger,
    isMutating: signInIsMutating,
    error: signInError,
  } = useSWRMutation("/signin", sendPostRequest);

  const {
    trigger: checkTokenTrigger,
    isMutating: checkTokenIsMutating,
    error: checkTokenError,
  } = useSWRMutation("/users/me", sendGetRequestWithToken);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { token } = await signInTrigger({
        email: values.email,
        password: values.password,
      });

      const { user } = await checkTokenTrigger({
        token,
      });

      localStorage.setItem("jwt", token);
      setCurrentUser(user);
      setCurrentModal(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText={
        signInIsMutating || checkTokenIsMutating ? "Signing in..." : "Sign in"
      }
      otherFormTitle="Sign up"
      otherFormModalName="sign-up"
      isValid={isValid}
      onSubmit={handleSubmit}
      responseError={signInError || checkTokenError}
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
    </ModalWithForm>
  );
}
