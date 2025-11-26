// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-10 py-8 border-t border-amber-100 bg-white text-xs">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 text-slate-600">

                <div className="text-center">
                    <p className="text-sm font-semibold text-slate-900 tracking-[0.25em]">
                        RUBY FLORALS
                    </p>
                    <p className="text-[11px] text-amber-700">Bouquets · Bridal Mandap · Events</p>
                </div>

                {/* Links */}
                <nav className="flex gap-5 text-[11px] text-slate-600">
                    <Link to="/" className="hover:text-rose-700">Home</Link>
                    <Link to="/bouquets" className="hover:text-rose-700">Bouquets</Link>
                    <Link to="/bridal-mandap" className="hover:text-rose-700">Bridal Mandap</Link>
                    <Link to="/events" className="hover:text-rose-700">Events</Link>
                    <Link to="/about" className="hover:text-rose-700">About</Link>
                    <Link to="/contact" className="hover:text-rose-700">Contact</Link>
                </nav>

                <p className="text-[10px] text-slate-400">
                    © {new Date().getFullYear()} Ruby Florals · All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
