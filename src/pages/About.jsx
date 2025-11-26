// src/pages/About.jsx

function About() {
    return (
        <div className="py-8 space-y-10">
            {/* Hero */}
            <section className="rounded-3xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-amber-50 via-white to-rose-50 p-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-amber-700">
                    Our Story
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-1">
                    A floral brand built on love, detail and celebration.
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                    Ruby Florals began with a simple vision — to transform moments into
                    memories using the beauty of fresh flowers. From handcrafted bouquets
                    to full-scale mandap and event décor, we design with intention,
                    balance and emotion.
                </p>
            </section>

            {/* Values */}
            <section className="grid sm:grid-cols-3 gap-5">
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-amber-50">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Crafted with Care</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        No bulk arrangements — every bouquet is handmade using fresh,
                        well-conditioned flowers and colour balance.
                    </p>
                </div>
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-amber-50">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Personalised Experience</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Custom palettes, size variations, message cards and theme-based
                        styling for weddings & celebrations.
                    </p>
                </div>
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-amber-50">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Full Event Support</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        From mandap to mehendi, varmala stage to reception entry — one
                        team, one clean design flow.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">What we specialise in</h2>
                <ul className="text-xs text-slate-600 space-y-2">
                    <li>🌸 Custom bridal bouquets & premium gifting arrangements</li>
                    <li>💍 Mandap, varmala stage & wedding decor styling</li>
                    <li>✨ Engagement, Sangeet, Reception and Haldi florals</li>
                    <li>🎉 Birthday, baby shower and party event styling</li>
                </ul>
            </section>
        </div>
    );
}

export default About;
