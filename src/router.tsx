import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
