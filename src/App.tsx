import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./shared/header";
import "./App.css";
import "./css/styles.css";
import "./css/form.css";
import { Login } from "./shared/auth/login";
import { EventCheckInPage } from "./member/eventCheckInPage";
import ProtectedRoute from "./officer/officerRoute";
import CreateEvent from "./officer/createEditEvent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body bg-dark text-light">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/userHome" element={<UserHome />} /> */}
          <Route path="/event/:eventId" element={<EventCheckInPage />} />
          <Route
            path="/createEvent"
            element={<ProtectedRoute element={<CreateEvent />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
