// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppStickyCTA from "./components/WhatsAppStickyCTA";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-white to-rose-50">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 pb-20 pt-4 md:pt-8">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppStickyCTA />
    </div>
  );
}

export default App;
