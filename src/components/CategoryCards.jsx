// src/components/CategoryCards.jsx
import { Link } from "react-router-dom";

const cards = [
    {
        to: "/bouquets",
        title: "Bouquets",
        description: "Birthday, anniversary, romantic & more.",
        img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTmd-rElYy2VUpVTVUQ4m07MO23MSIQsINn34UcM-LEnxJL2PCV96WHmlJDPoyACAp1zUBC4P8u_pz1npEO7IFeR-bJJmTOAUfDlCuXcVveh7UOZAs",
    },
    {
        to: "/bridal-mandap",
        title: "Bridal Mandap",
        description: "Elegant mandap & stage decor for your big day.",
        img: "https://i.pinimg.com/736x/a0/5f/f3/a05ff37c6769bcbc8f2e3cd8c2f4ba5d.jpg",
    },
    {
        to: "/events",
        title: "Event Management",
        description: "Full-service decor & styling (coming soon).",
        img: "https://i.pinimg.com/736x/a0/5f/f3/a05ff37c6769bcbc8f2e3cd8c2f4ba5d.jpg",
    },
];

function CategoryCards() {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-slate-900">
                    Shop by category
                </h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                    Start with bouquets or jump straight to bridal decor.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                    <Link
                        key={card.title}
                        to={card.to}
                        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col border border-amber-50"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                            <div className="absolute bottom-2 left-3 text-xs text-amber-50">
                                <p className="font-semibold text-sm">{card.title}</p>
                            </div>
                        </div>
                        <div className="p-3 text-xs flex-1 flex flex-col justify-between">
                            <p className="text-slate-600">{card.description}</p>
                            <p className="mt-2 text-rose-700 font-semibold">
                                View {card.title.toLowerCase()} →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CategoryCards;
