import { useState, useCallback, ChangeEventHandler } from "react";

type StringObject = Record<string, string>;

function useFormAndValidation(initialValues: StringObject) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as StringObject);
  const [isValid, setIsValid] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form")!.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

export default useFormAndValidation;
