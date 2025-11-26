// src/pages/Events.jsx
import EventEnquiryForm from "../components/EventEnquiryForm";

function Events() {
    return (
        <div className="py-6 space-y-8">
            {/* Hero */}
            <section className="rounded-3xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.15)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="max-w-xl">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-amber-300">
                            Coming soon
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">
                            Event management by Ruby Florals
                        </h1>
                        <p className="mt-3 text-sm sm:text-base text-slate-100">
                            We are expanding into full-service event planning — from decor and
                            florals to production and guest experience. Share your upcoming
                            event details and we’ll get in touch on WhatsApp.
                        </p>
                        <p className="mt-3 text-[11px] text-slate-200">
                            Ideal for engagements, sangeet, corporate events, launches and
                            private celebrations.
                        </p>
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-[11px] md:max-w-xs">
                        <p className="font-semibold">How it works</p>
                        <p className="mt-1">
                            1. Share basic event details via the form.
                        </p>
                        <p>2. We reply on WhatsApp with questions & ideas.</p>
                        <p>3. Custom decor & management proposal for your event.</p>
                    </div>
                </div>
            </section>

            {/* Enquiry form */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">
                    Share your event details
                </h2>
                <p className="text-xs text-slate-600 max-w-xl">
                    Even though full event management is still in the “coming soon”
                    phase, we are already taking selected decor and coordination projects.
                    Send your details and we’ll respond on WhatsApp.
                </p>

                <EventEnquiryForm />
            </section>
        </div>
    );
}

export default Events;
