// src/components/MandapEnquiryModal.jsx
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919618142330";
const SITE_BASE_URL = "https://rubyflorals.in"; // change when you deploy

function MandapEnquiryModal({ open, onClose, pkg }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        weddingDate: "",
        venue: "",
        guestCount: "",
        style: "",
        budgetRange: "",
        notes: "",
    });

    useEffect(() => {
        if (open) {
            setForm({
                name: "",
                phone: "",
                weddingDate: "",
                venue: "",
                guestCount: "",
                style: pkg?.styleTags?.[0] || "",
                budgetRange: "",
                notes: "",
            });
        }
    }, [open, pkg]);

    if (!open || !pkg) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.weddingDate || !form.venue) {
            alert("Please fill name, phone, wedding date and venue.");
            return;
        }

        const link = `${SITE_BASE_URL}/bridal-mandap#${pkg.slug}`;

        const message = `Bridal mandap enquiry 👰‍♀️

Package: ${pkg.name} (${pkg.id})
Wedding date: ${form.weddingDate}
Venue: ${form.venue}
Guest count: ${form.guestCount || "Not specified"}
Preferred style: ${form.style || "Not specified"}
Budget range: ${form.budgetRange || "Not specified"}

Notes:
${form.notes || "No additional notes."}

Customer:
Name: ${form.name}
Phone: ${form.phone}

Package link: ${link}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-rose-100">
                    <div>
                        <p className="text-[10px] text-rose-400 uppercase tracking-[0.2em]">
                            Bridal Mandap Enquiry
                        </p>
                        <h3 className="text-sm font-semibold">{pkg.name}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-700 text-lg"
                    >
                        ✕
                    </button>
                </div>

                <div className="px-4 pt-3 pb-4 max-h-[80vh] overflow-y-auto text-xs">
                    <div className="flex gap-3 mb-3">
                        <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="text-xs">
                            <p className="font-semibold text-sm">{pkg.name}</p>
                            <p className="text-rose-600 font-bold mt-1">
                                Starting at ₹{pkg.startingPrice.toLocaleString("en-IN")}
                            </p>
                            <p className="mt-1 text-slate-500">
                                Share your wedding details and we’ll respond on WhatsApp with a
                                customised quote.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Phone</label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                    placeholder="10-digit number"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">
                                    Wedding date
                                </label>
                                <input
                                    type="date"
                                    name="weddingDate"
                                    value={form.weddingDate}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">
                                    Guest count (approx)
                                </label>
                                <input
                                    name="guestCount"
                                    value={form.guestCount}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                    placeholder="e.g. 200-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Venue & city</label>
                            <input
                                name="venue"
                                value={form.venue}
                                onChange={handleChange}
                                className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                placeholder="Hotel / function hall / city"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">
                                    Preferred style
                                </label>
                                <select
                                    name="style"
                                    value={form.style}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                >
                                    <option value="">Not sure yet</option>
                                    <option>Traditional</option>
                                    <option>Pastel / Modern</option>
                                    <option>Luxury / Grand</option>
                                    <option>Open-air / Minimal</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">
                                    Budget range
                                </label>
                                <select
                                    name="budgetRange"
                                    value={form.budgetRange}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                >
                                    <option value="">Select</option>
                                    <option>Under ₹50,000</option>
                                    <option>₹50,000 – ₹1,00,000</option>
                                    <option>₹1,00,000 – ₹2,00,000</option>
                                    <option>₹2,00,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Additional notes
                            </label>
                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={3}
                                className="w-full border border-rose-100 rounded-lg px-2 py-2"
                                placeholder="Colour themes, functions to cover (mandap, stage, entrance, etc.)"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-2 bg-pink-600 text-white py-2 rounded-full font-semibold text-xs shadow hover:bg-pink-700 transition"
                        >
                            Send enquiry on WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MandapEnquiryModal;
