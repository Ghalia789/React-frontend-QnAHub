import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import QuestionsPage from "./pages/QuestionsPage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
import AnswerFormPage from "./pages/answerpage";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ask" element={<QuestionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/questions" element={<QuestionsPage />} /> 
          <Route path="/questions/:id" element={<QuestionDetailsPage />} />
          <Route path="/questions/:id/answer" element={<AnswerFormPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
