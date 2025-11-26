// src/components/BouquetCard.jsx
import { Link } from "react-router-dom";

function BouquetCard({ bouquet, onOrderClick }) {
    return (
        <article className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col border border-amber-50">
            <div className="relative">
                <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                {(bouquet.popular || bouquet.new) && (
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-amber-100/95 text-amber-800 font-semibold shadow-sm">
                        {bouquet.popular ? "Bestseller" : "New"}
                    </span>
                )}
            </div>

            <div className="p-3 text-xs flex flex-col flex-1">
                <div>
                    <h3 className="font-semibold text-slate-900 text-sm line-clamp-1">
                        {bouquet.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {bouquet.description}
                    </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <div>
                        <p className="text-[11px] text-slate-500">Starting from</p>
                        <p className="text-base font-bold text-rose-700">
                            ₹{bouquet.price.toLocaleString("en-IN")}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <button
                            onClick={() => onOrderClick(bouquet)}
                            className="px-3 py-1.5 rounded-full bg-rose-600 text-white text-[11px] font-semibold shadow hover:bg-rose-700"
                        >
                            Order via WhatsApp
                        </button>
                        <Link
                            to={`/bouquets/${bouquet.slug}`}
                            className="text-[11px] text-amber-700 hover:underline"
                        >
                            View details
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default BouquetCard;
