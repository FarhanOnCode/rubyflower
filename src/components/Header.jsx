// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/bouquets", label: "Bouquets" },
    { to: "/bridal-mandap", label: "Bridal Mandap" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "919618142330";

function Header() {
    const handleWhatsAppClick = () => {
        const text =
            "Hi Ruby Florals — I’d like to enquire about bouquets and wedding decor.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            text
        )}`;
        window.open(url, "_blank");
    };

    return (
        <header className="bg-white/90 backdrop-blur border-b border-amber-100 sticky top-0 z-30">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo + brand */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center font-semibold text-lg shadow-md">
                        RF
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold tracking-[0.25em] text-slate-800 uppercase">
                            Ruby Florals
                        </p>
                        <p className="text-[11px] text-amber-600">
                            Fresh Flowers · Wedding Decor
                        </p>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-[13px]">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `relative pb-0.5 transition ${isActive
                                    ? "text-rose-700 font-medium"
                                    : "text-slate-700 hover:text-rose-700"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {item.label}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-amber-400 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop WhatsApp button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="hidden md:inline-flex items-center gap-2 bg-rose-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-rose-700"
                >
                    <span>Order via WhatsApp</span>
                </button>

                {/* Mobile menu icon (visual only for now) */}
                <button
                    className="md:hidden text-2xl text-slate-700"
                    aria-label="Menu"
                >
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Header;
