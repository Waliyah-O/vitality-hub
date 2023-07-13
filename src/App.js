import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import DiscoverPage from "./pages/discover";
import MedicalsPage from "./pages/medicals";
import NutritionPage from "./pages/nutrition";
import CalculatorsPage from "./pages/calculators";
import ExercisesPage from "./pages/exercises";
import ChatPage from "./pages/chatPage";
import ForgotPasswordPage from "./pages/forgotPassword";
import DrugInfoPage from "./pages/drugInfo";
import CalorieLossComponent from "./components/Calculators/calories";
import ChatBotPage from "./pages/chatBot";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/medicals" element={<MedicalsPage />} />
          <Route exact path="/nutrition" element={<NutritionPage />} />
          <Route exact path="/calculators" element={<CalculatorsPage />} />
          <Route exact path="/exercises" element={<ExercisesPage />} />
          <Route exact path="/chat" element={<ChatPage />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordPage />}
          />
          <Route exact path="/druginfo" element={<DrugInfoPage />} />
          <Route exact path="/calorieloss" element={<CalorieLossComponent />} />
          <Route exact path="/chatbot" element={<ChatBotPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
