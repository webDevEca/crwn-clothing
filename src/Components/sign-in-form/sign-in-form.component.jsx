import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import "./sign-in-form.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

function SIgnInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormField);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for e-mail");
          break;

        case "auth/user-not-found":
          alert("no user associated with this e-mail");
          break;

        default:
          console.log(error);
      }
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your E-Mail and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-Mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SIgnInForm;
