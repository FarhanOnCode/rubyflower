// src/pages/Bouquets.jsx
import { useMemo, useState } from "react";
import BouquetCard from "../components/BouquetCard";
import OrderModal from "../components/OrderModal";
import { bouquets } from "../data/bouquets";

const OCCASIONS = [
  "All",
  "Birthday",
  "Anniversary",
  "Romantic",
  "Wedding",
  "Congratulations",
  "Festive",
];

const STYLES = [
  "All",
  "Bright & Colourful",
  "Pastel",
  "Minimal",
  "Mixed Flowers",
  "Elegant",
];

function Bouquets() {
  const [occasionFilter, setOccasionFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const filtered = useMemo(() => {
    return bouquets.filter((b) => {
      const matchesOccasion =
        occasionFilter === "All" ||
        (b.occasions && b.occasions.includes(occasionFilter));
      const matchesStyle =
        styleFilter === "All" ||
        (b.styles && b.styles.includes(styleFilter));
      const matchesSearch =
        !search ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());

      return matchesOccasion && matchesStyle && matchesSearch;
    });
  }, [occasionFilter, styleFilter, search]);

  return (
    <>
      {/* Page header */}
      <section className="mb-5 mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber-700">
              Bouquets
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Handcrafted bouquets for every occasion
            </h1>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Filter by occasion or style, then place your order via a quick
              WhatsApp form. Custom colours and sizes available on request.
            </p>
          </div>
          <div className="bg-white/80 border border-amber-100 rounded-2xl px-3 py-2 text-[11px] text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-800">
              {filtered.length} design{filtered.length !== 1 && "s"} found
            </p>
            <p>Based on your search & filters</p>
          </div>
        </div>
      </section>

      {/* Search + filters */}
      <section className="mb-5 space-y-3">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <input
            type="text"
            placeholder="Search bouquets (e.g. 'pastel', 'white', 'birthday')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-amber-100 rounded-full px-3 py-2 text-xs bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-300"
          />
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-[11px] font-semibold text-slate-700 mb-1">
              Occasion
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {OCCASIONS.map((o) => (
                <button
                  key={o}
                  onClick={() => setOccasionFilter(o)}
                  className={`px-3 py-1.5 rounded-full text-[11px] border transition whitespace-nowrap ${
                    occasionFilter === o
                      ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                      : "bg-white text-slate-700 border-amber-100 hover:bg-amber-50"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-slate-700 mb-1">
              Style
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {STYLES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyleFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-[11px] border transition whitespace-nowrap ${
                    styleFilter === s
                      ? "bg-amber-100 text-amber-900 border-amber-300"
                      : "bg-white text-slate-700 border-amber-100 hover:bg-amber-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mb-10">
        {filtered.length === 0 ? (
          <p className="text-xs text-slate-500">
            No bouquets match this search or filter. Try clearing filters or
            searching with a simpler keyword.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((b) => (
              <BouquetCard
                key={b.id}
                bouquet={b}
                onOrderClick={handleOrderClick}
              />
            ))}
          </div>
        )}
      </section>

      <OrderModal
        open={open}
        onClose={() => setOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}

export default Bouquets;
