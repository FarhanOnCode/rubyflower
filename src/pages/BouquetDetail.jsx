// src/pages/BouquetDetail.jsx
import { useParams } from "react-router-dom";
import { bouquets } from "../data/bouquets";

function BouquetDetail() {
    const { slug } = useParams();
    const bouquet = bouquets.find((b) => b.slug === slug);

    if (!bouquet) {
        return (
            <div className="py-6">
                <h1 className="text-xl font-bold mb-2">Bouquet not found</h1>
                <p className="text-sm text-slate-500">
                    The bouquet you’re looking for doesn’t exist.
                </p>
            </div>
        );
    }

    return (
        <div className="py-6 grid gap-6 md:grid-cols-[1.1fr_1fr]">
            <div>
                <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full rounded-3xl shadow-lg object-cover max-h-[420px]"
                />
            </div>
            <div className="text-sm">
                <h1 className="text-2xl font-bold mb-2">{bouquet.name}</h1>
                <p className="text-rose-600 text-lg font-semibold mb-3">
                    ₹{bouquet.price.toLocaleString("en-IN")}
                </p>
                <p className="text-slate-600 mb-4">{bouquet.description}</p>
                <p className="text-xs text-slate-500">
                    Occasions: {bouquet.occasions?.join(", ") || "Any"}
                </p>
            </div>
        </div>
    );
}

export default BouquetDetail;
