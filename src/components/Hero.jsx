// src/components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="mb-8">
            <div className="rounded-3xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-amber-50 via-white to-rose-50">
                <div className="grid md:grid-cols-[1.1fr,0.9fr]">
                    {/* Left: text */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-amber-700">
                            Ruby Florals
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Fresh Flowers,
                            <span className="block mt-1 text-rose-700">
                                Thoughtful Moments.
                            </span>
                        </h1>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md">
                            Handcrafted bouquets, bridal mandap decor and event styling —
                            tailored for your story, venue and budget.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                to="/bouquets"
                                className="px-6 py-2.5 rounded-full bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700"
                            >
                                Shop Bouquets
                            </Link>
                            <Link
                                to="/bridal-mandap"
                                className="px-6 py-2.5 rounded-full border border-amber-200 bg-white/80 text-sm font-semibold text-slate-800 hover:bg-white"
                            >
                                Explore Bridal Mandap
                            </Link>
                        </div>

                        <p className="mt-4 text-[11px] text-slate-500">
                            Same-day delivery on selected bouquets · Custom colours and
                            themes available on request.
                        </p>
                    </div>

                    {/* Right: hero image */}
                    <div className="relative">
                        <img
                            src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTmd-rElYy2VUpVTVUQ4m07MO23MSIQsINn34UcM-LEnxJL2PCV96WHmlJDPoyACAp1zUBC4P8u_pz1npEO7IFeR-bJJmTOAUfDlCuXcVveh7UOZAs"
                            alt="Ruby Florals bridal bouquet"
                            className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:bg-gradient-to-l md:from-black/40 md:to-transparent" />
                        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur rounded-2xl px-3 py-2 text-[11px] shadow">
                            <p className="font-semibold text-slate-800">
                                Curated bridal & event decor
                            </p>
                            <p className="text-slate-500">
                                From engagement to reception — one team, one aesthetic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
