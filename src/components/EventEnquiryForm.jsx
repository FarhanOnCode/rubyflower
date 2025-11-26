// src/components/EventEnquiryForm.jsx
import { useState } from "react";

const WHATSAPP_NUMBER = "919618142330";

function EventEnquiryForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        eventType: "",
        date: "",
        city: "",
        venue: "",
        guestCount: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.eventType) {
            alert("Please fill name, phone and event type.");
            return;
        }

        const message = `Event management enquiry 🎉

Event type: ${form.eventType}
Date: ${form.date || "Not decided"}
City: ${form.city || "Not specified"}
Venue: ${form.venue || "Not specified"}
Guest count: ${form.guestCount || "Not specified"}

Notes:
${form.notes || "No additional notes."}

Customer:
Name: ${form.name}
Phone: ${form.phone}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-md border border-amber-50 p-4 text-xs space-y-3"
        >
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        Name
                    </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                        placeholder="Your full name"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        Phone
                    </label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                        placeholder="10-digit number"
                    />
                </div>
            </div>

            <div>
                <label className="block mb-1 font-medium text-slate-800">
                    Event type
                </label>
                <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full border border-amber-100 rounded-lg px-2 py-2"
                >
                    <option value="">Select</option>
                    <option>Engagement</option>
                    <option>Sangeet / Mehendi</option>
                    <option>Reception</option>
                    <option>Birthday / Private party</option>
                    <option>Corporate event</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        City
                    </label>
                    <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                        placeholder="City / area"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        Venue
                    </label>
                    <input
                        name="venue"
                        value={form.venue}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                        placeholder="Hotel / function hall / office"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-slate-800">
                        Guest count
                    </label>
                    <input
                        name="guestCount"
                        value={form.guestCount}
                        onChange={handleChange}
                        className="w-full border border-amber-100 rounded-lg px-2 py-2"
                        placeholder="Approx. guests"
                    />
                </div>
            </div>

            <div>
                <label className="block mb-1 font-medium text-slate-800">
                    Notes
                </label>
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-amber-100 rounded-lg px-2 py-2"
                    placeholder="Decor style, theme, timings, special requests…"
                />
            </div>

            <button
                type="submit"
                className="w-full mt-1 bg-rose-600 text-white py-2 rounded-full font-semibold text-xs shadow hover:bg-rose-700"
            >
                Send enquiry on WhatsApp
            </button>
        </form>
    );
}

export default EventEnquiryForm;
