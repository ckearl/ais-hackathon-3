import { AuthState } from "./auth/authState.js";

interface HeaderProps {
  authState: AuthState;
  setAuthState: (newAuthState: AuthState) => void;
  userId: string;
}

export function Header({ ...HeaderProps }) {
  return (
    <header className="App-header">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <h1>This is Joseph test</h1>
    </header>
  );
}
