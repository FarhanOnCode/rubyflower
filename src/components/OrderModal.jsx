// src/components/OrderModal.jsx
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919618142330";
const SITE_BASE_URL = "https://rubyflorals.in"; // change in production

function OrderModal({ open, onClose, product }) {
    const [form, setForm] = useState({
        occasion: "",
        date: "",
        timeSlot: "",
        quantity: 1,
        notes: "",
        address: "",
        name: "",
        phone: "",
    });

    useEffect(() => {
        if (open) {
            setForm((prev) => ({
                ...prev,
                quantity: 1,
                occasion: "",
                timeSlot: "",
                notes: "",
            }));
        }
    }, [open]);

    if (!open || !product) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.date) {
            alert("Please fill name, phone and delivery date.");
            return;
        }

        const link = `${SITE_BASE_URL}/bouquets/${product.slug}`;

        const message = `New bouquet order request 💐

Product: ${product.name} (${product.id})
Quantity: ${form.quantity || 1}
Occasion: ${form.occasion || "Not specified"}

Delivery date: ${form.date}
Time slot: ${form.timeSlot || "Not specified"}
Address: ${form.address || "Not provided"}

Customisation:
${form.notes || "No special customisation mentioned."}

Customer:
Name: ${form.name}
Phone: ${form.phone}

Product link: ${link}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-rose-100">
                    <div>
                        <p className="text-xs text-rose-400 uppercase tracking-[0.2em]">
                            Order via WhatsApp
                        </p>
                        <h3 className="text-sm font-semibold">{product.name}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-700 text-lg"
                    >
                        ✕
                    </button>
                </div>

                <div className="px-4 pt-3 pb-4 max-h-[80vh] overflow-y-auto">
                    <div className="flex gap-3 mb-3">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="text-sm">
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-rose-500 font-bold mt-1">
                                ₹{product.price.toLocaleString("en-IN")}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                Fill the details below, then we’ll open WhatsApp with your
                                order summary.
                            </p>
                        </div>
                    </div>

                    <form className="space-y-3 text-xs" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">Occasion</label>
                                <select
                                    name="occasion"
                                    value={form.occasion}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                >
                                    <option value="">Select</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Romantic</option>
                                    <option>Wedding</option>
                                    <option>Congratulations</option>
                                    <option>Get Well Soon</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Quantity</label>
                                <input
                                    type="number"
                                    min={1}
                                    name="quantity"
                                    value={form.quantity}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">Delivery date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Time slot</label>
                                <select
                                    name="timeSlot"
                                    value={form.timeSlot}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                >
                                    <option value="">Any</option>
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Delivery address
                            </label>
                            <textarea
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                rows={2}
                                className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                placeholder="Flat / building, area, city"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Customisation notes
                            </label>
                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={3}
                                className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                placeholder="Preferred colours, message on card, etc."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 font-medium">Your name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Phone</label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border border-rose-100 rounded-lg px-2 py-2 text-xs"
                                    placeholder="10-digit number"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-2 bg-pink-600 text-white py-2 rounded-full font-semibold text-xs shadow hover:bg-pink-700 transition"
                        >
                            Send on WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderModal;
