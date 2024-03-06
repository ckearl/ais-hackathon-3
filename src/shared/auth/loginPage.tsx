import React from "react";
import "../index.js";
import { signInGoogle } from "./auth.js";

interface LoginPageProps {
  userId: string;
  onLogin: (userId: string) => void;
}

export function LoginPage({ userId, onLogin }: LoginPageProps) {
  return (
    <>
      <form>
        <h2>Login</h2>
        <div id="titleUnderline"></div>
        <input
          id="googleSignInBtn"
          type="button"
          onClick={() => {
            signInGoogle();
            onLogin(userId);
          }}
          value="Login"
        />
      </form>
    </>
  );
}
