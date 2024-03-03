import { useState } from "react";

type UseFormReturnType<T> = {
  values: T;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
};

/**
 * Custom hook to manage form state and input change events.
 * @param initialValues The initial values of the form.
 * @returns An object containing form values and functions to handle input changes and reset the form.
 */
export const useForm = <T>(initialValues: T): UseFormReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues);

  /**
   * Handles input change events by updating the form values.
   * @param event The input change event.
   */
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  /**
   * Handles switch change events by updating the form values.
   * @param event The switch change event.
   */
  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  /**
   * Resets the form to its initial values.
   */
  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChangeInput, handleChangeSwitch, resetForm };
};
