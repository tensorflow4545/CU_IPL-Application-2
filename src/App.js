import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePage from "./page/HomePage";
import Footer from "./components/Footer";
import StatsPage from "./page/StatsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<StatsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
