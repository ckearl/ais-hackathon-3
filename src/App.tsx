import { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./shared/header";
import "./App.css";
import "./css/styles.css";
import "./css/form.css";
import { FirebaseContext } from "./shared/firebaseProvider";
import { Login } from "./shared/auth/login";
import { UserHome } from "./member/userHome";
import { EventCheckInPage } from "./member/eventCheckInPage";
import ProtectedRoute from "./officer/officerRoute";
import CreateEvent from "./officer/createEditEvent";

function App() {
  const context = useContext(FirebaseContext);
  const [userId, setUserId] = useState(context?.user?.id);

  return (
    <BrowserRouter>
      <Header />
      <div className="body bg-dark text-light">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                userId={userId}
                onAuthChange={(userId: string) => {
                  setUserId(userId);
                }}
              />
            }
          />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/event/:eventId" element={<EventCheckInPage />} />
          <Route
            path="/createEvent"
            element={<ProtectedRoute element={<CreateEvent />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer>
          <p>Author: Joseph Fuge</p>
          <a href="https://github.com/JosephFuge/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
