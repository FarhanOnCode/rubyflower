// src/pages/BridalMandap.jsx
import { useState } from "react";
import { mandapPackages } from "../data/mandapPackages";
import MandapPackageCard from "../components/MandapPackageCard";
import MandapEnquiryModal from "../components/MandapEnquiryModal";

function BridalMandap() {
    const [open, setOpen] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState(null);

    const handleEnquire = (pkg) => {
        setSelectedPkg(pkg);
        setOpen(true);
    };

    return (
        <div className="py-6 space-y-8">
            {/* Hero */}
            <section className="rounded-3xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.15)] bg-gradient-to-br from-amber-50 via-white to-rose-50">
                <div className="grid md:grid-cols-[1.1fr,0.9fr]">
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-amber-700">
                            Bridal Mandap
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                            Mandap & stage decor,
                            <span className="block mt-1 text-rose-700">
                                crafted for your wedding.
                            </span>
                        </h1>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
                            From intimate home weddings to grand ballrooms, we design floral
                            mandaps that match your rituals, venue and colour palette.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href="#packages"
                                className="px-6 py-2.5 rounded-full bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700"
                            >
                                View packages
                            </a>
                            <button
                                onClick={() => handleEnquire(mandapPackages[0])}
                                className="px-6 py-2.5 rounded-full border border-amber-200 bg-white/80 text-sm font-semibold text-slate-800 hover:bg-white"
                            >
                                Plan my decor
                            </button>
                        </div>
                        <p className="mt-4 text-[11px] text-slate-500 max-w-md">
                            Share your date and venue for a customised quote. We cover mandap,
                            couple stage, entrance and aisle decor.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="https://i.pinimg.com/736x/a0/5f/f3/a05ff37c6769bcbc8f2e3cd8c2f4ba5d.jpg"
                            alt="Bridal mandap decor"
                            className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:bg-gradient-to-l md:from-black/40 md:to-transparent" />
                        <div className="absolute bottom-4 right-4 bg-white/85 backdrop-blur rounded-2xl px-3 py-2 text-[11px] shadow">
                            <p className="font-semibold text-slate-900">
                                Full wedding decor
                            </p>
                            <p className="text-slate-600">
                                Mandap · stage · entrance · varmala corner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section id="packages" className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Mandap packages
                        </h2>
                        <p className="text-xs text-slate-600 mt-1 max-w-xl">
                            Every package is a starting point. We adjust flowers, colours and
                            coverage based on your venue, rituals and timeline.
                        </p>
                    </div>
                    <p className="text-[11px] text-slate-500 bg-white/80 border border-amber-100 rounded-2xl px-3 py-2 shadow-sm">
                        Pricing shown is indicative for city weddings. Final quotes depend
                        on venue, flowers and logistics.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {mandapPackages.map((pkg) => (
                        <MandapPackageCard
                            key={pkg.id}
                            pkg={pkg}
                            onEnquire={handleEnquire}
                        />
                    ))}
                </div>
            </section>

            {/* How we work */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">
                    How we plan your mandap
                </h2>
                <div className="grid gap-3 md:grid-cols-4 text-xs">
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-50">
                        <p className="font-semibold mb-1 text-slate-900">
                            1. Consultation
                        </p>
                        <p className="text-slate-600">
                            Share date, venue photos, guest count and any reference pictures
                            you love.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-50">
                        <p className="font-semibold mb-1 text-slate-900">
                            2. Concept & quote
                        </p>
                        <p className="text-slate-600">
                            We build a decor concept, colour palette and transparent quote
                            around your brief.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-50">
                        <p className="font-semibold mb-1 text-slate-900">
                            3. Finalisation
                        </p>
                        <p className="text-slate-600">
                            Walkthrough of layout, entry points, rituals coverage and
                            timelines.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-50">
                        <p className="font-semibold mb-1 text-slate-900">
                            4. Execution
                        </p>
                        <p className="text-slate-600">
                            Our team sets up on event day and stays on ground until your key
                            rituals are complete.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery placeholder */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">
                    Mandap gallery
                </h2>
                <p className="text-xs text-slate-600">
                    Later you can replace these blocks with your best wedding photos for a
                    strong first impression.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="h-32 md:h-40 rounded-2xl bg-amber-100/70" />
                    <div className="h-32 md:h-40 rounded-2xl bg-rose-100/70" />
                    <div className="h-32 md:h-40 rounded-2xl bg-amber-100/70" />
                    <div className="h-32 md:h-40 rounded-2xl bg-rose-100/70" />
                    <div className="h-32 md:h-40 rounded-2xl bg-amber-100/70" />
                    <div className="h-32 md:h-40 rounded-2xl bg-rose-100/70" />
                </div>
            </section>

            {/* FAQ / notes */}
            <section className="space-y-2 text-xs text-slate-600 mb-6">
                <h2 className="text-sm font-semibold text-slate-900">
                    Frequently asked
                </h2>
                <p>
                    • Ideal notice period is 15–30 days. For urgent dates, message us on
                    WhatsApp and we’ll confirm feasibility.
                </p>
                <p>
                    • We can coordinate with your photographer, planner or venue team to
                    ensure decor and lighting work well together.
                </p>
            </section>

            <MandapEnquiryModal
                open={open}
                onClose={() => setOpen(false)}
                pkg={selectedPkg}
            />
        </div>
    );
}

export default BridalMandap;
