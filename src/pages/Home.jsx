import Hero from "../components/hero";
import CategoryCards from "../components/CategoryCards";
import BouquetCard from "../components/BouquetCard";
import OrderModal from "../components/OrderModal";
import { bouquets } from "../data/bouquets";
import { useState } from "react";

function Home() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);

    const bestSellers = bouquets.filter((b) => b.popular).slice(0, 4);

    const handleOrderClick = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    return (
        <>
            <Hero />
            <CategoryCards />

            <section className="mb-10">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold">Featured bouquets</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {bestSellers.map((b) => (
                        <BouquetCard
                            key={b.id}
                            bouquet={b}
                            onOrderClick={handleOrderClick}
                        />
                    ))}
                </div>
            </section>

            <section className="mb-10 text-xs text-slate-500">
                <h3 className="text-sm font-semibold mb-2">
                    How Ruby Florals works
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                        <p className="font-semibold mb-1">1. Browse designs</p>
                        <p>
                            Explore curated bouquets and decor ideas for every occasion.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                        <p className="font-semibold mb-1">2. Quick WhatsApp form</p>
                        <p>
                            Share date, time and customisation in a 1-minute form.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                        <p className="font-semibold mb-1">3. Confirm & deliver</p>
                        <p>Our team confirms on WhatsApp and manages the rest.</p>
                    </div>
                </div>
            </section>

            <OrderModal
                open={open}
                onClose={() => setOpen(false)}
                product={selectedProduct}
            />
        </>
    );
}

export default Home;
