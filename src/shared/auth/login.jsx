import React from "react";
import { AuthState } from "./authState";
import { LoginPage } from "./loginPage";
import { UserHome } from "../../member/userHome";

export function Login({ userId, authState, onAuthChange }) {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        {authState === AuthState.Unauthenticated ||
          (authState === AuthState.Unknown && (
            <h1>Welcome to AIS Punch Cards</h1>
          ))}
        {authState === AuthState.Authenticated && (
          <UserHome
            currentUser={userId}
            onLogout={() => onAuthChange(userId, AuthState.Unauthenticated)}
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <LoginPage
            userId={userId}
            onLogin={(loginUserId) => {
              onAuthChange(loginUserId, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
