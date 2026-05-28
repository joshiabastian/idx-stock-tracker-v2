import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Dashboard } from "./pages/Dashboard";
import { Watchlist } from "./pages/Watchlist";
import { Scanner } from "./pages/Scanner";
import { Placeholder } from "./pages/Placeholder";

function App() {
  return (
    <div className="flex flex-col h-screen bg-bg text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/signals" element={<Placeholder title="Signals" />} />
        <Route path="/news" element={<Placeholder title="News" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
