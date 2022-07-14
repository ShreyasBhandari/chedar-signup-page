import "./App.css";
import SignupCompAdmin from "./components/SignupCompAdmin";
import SignupFreelancer from "./components/SignupFreelancer";
import SignupPage from "./components/SignupPage";
import ThankYouPage from "./components/ThankYouPage";
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignupPage />} />
                    <Route path="/freelance" element={<SignupFreelancer />}/>
                    <Route path="/company" element={<SignupCompAdmin />}/>
                    <Route path="/thankyou" element={<ThankYouPage />} />
                </Routes>
            </BrowserRouter>
		</div>
	);
}

export default App;
