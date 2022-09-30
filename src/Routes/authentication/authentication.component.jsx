import SIgnUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SIgnInForm from "../../Components/sign-in-form/sign-in-form.component";

import "./authentication.style.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SIgnInForm />
      <SIgnUpForm />
    </div>
  );
}

export default Authentication;
