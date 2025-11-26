// src/components/MandapPackageCard.jsx

function MandapPackageCard({ pkg, onEnquire }) {
    return (
        <article
            id={pkg.slug}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
        >
            <div className="relative">
                <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs text-white">
                    <p className="font-semibold text-sm">{pkg.name}</p>
                    <p className="mt-1 text-rose-100">
                        Starting at ₹{pkg.startingPrice.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            <div className="p-4 text-xs flex flex-col flex-1">
                <p className="text-slate-600 mb-3">{pkg.short}</p>

                <ul className="text-slate-500 space-y-1 mb-3">
                    {pkg.includes.slice(0, 4).map((item) => (
                        <li key={item}>• {item}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-1 mb-3">
                    {pkg.styleTags?.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[10px] font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => onEnquire(pkg)}
                    className="w-full px-3 py-2 rounded-full bg-pink-600 text-white font-semibold text-xs hover:bg-pink-700 mb-2"
                >
                    Enquire via WhatsApp
                </button>
            </div>
        </article>
    );
}

export default MandapPackageCard;
