import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [shouldShowSignUp, setShouldShowSignUp] = useState(false);

  function toggleSignUpForm() {
    setShouldShowSignUp(!shouldShowSignUp);
  }

  return (
    <main>
      <h1>AuthPage</h1>
      {shouldShowSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      {shouldShowSignUp ? (
        <button onClick={toggleSignUpForm}>Log In</button>
      ) : (
        <button onClick={toggleSignUpForm}>Sign Up Here</button>
      )}
    </main>
  );
}

export default AuthPage;
