// src/pages/Contact.jsx

const WHATSAPP = "919618142330";

function Contact() {

    const sendMessage = () => {
        const text = "Hi! I’d like to enquire at Ruby Florals.";
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`);
    };

    return (
        <div className="py-8 space-y-8">
            {/* Title */}
            <section className="rounded-3xl bg-gradient-to-br from-white via-amber-50 to-rose-50 p-8 shadow">
                <p className="text-[11px] tracking-[0.3em] uppercase text-amber-700">
                    Contact Us
                </p>
                <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
                    Let’s plan something beautiful.
                </h1>
                <p className="text-sm text-slate-600 mt-3 max-w-lg">
                    Share your requirement on WhatsApp — bouquet orders, mandap decor,
                    event styling or price estimate.
                </p>

                {/* WhatsApp CTA */}
                <button
                    onClick={sendMessage}
                    className="mt-5 px-6 py-2.5 bg-rose-600 text-white text-sm font-semibold rounded-full shadow hover:bg-rose-700"
                >
                    Message on WhatsApp
                </button>
            </section>

            {/* Contact grid */}
            <section className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-3xl shadow border border-amber-50">
                    <h3 className="text-sm font-semibold text-slate-900">Working Hours</h3>
                    <p className="mt-1 text-xs text-slate-600">Mon–Sun · 9AM to 9PM</p>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow border border-amber-50">
                    <h3 className="text-sm font-semibold text-slate-900">Delivery / Service Zones</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        Hyderabad, Secunderabad & Nearby Requests
                        <br />Custom wedding decor pan-city on availability.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Contact;
