import "./App.css";
import SignupCompAdmin from "./components/SignupCompAdmin";
import SignupFreelancer from "./components/SignupFreelancer";
import SignupPage from "./components/SignupPage";
import ThankYouAdmin from "./components/ThankYouAdmin";
import ThankYouFreelancer from "./components/ThankYouFreelancer";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignupPage />} />
                    <Route path="/freelance" element={<SignupFreelancer />}/>
                    <Route path="/company" element={<SignupCompAdmin />}/>
                    <Route path="/thankyou-f" element={<ThankYouFreelancer />} />
                    <Route path="/thankyou-a" element={<ThankYouAdmin />} />
                </Routes>
            </BrowserRouter>
		</div>
	);
}

export default App;
