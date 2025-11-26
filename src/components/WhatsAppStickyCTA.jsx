// src/components/WhatsAppStickyCTA.jsx
const WHATSAPP_NUMBER = "919618142330";

function WhatsAppStickyCTA() {
    const handleClick = () => {
        const text =
            "Hi Ruby Florals — I’d like to enquire about your floral designs.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            text
        )}`;
        window.open(url, "_blank");
    };

    return (
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-40">
            <button
                onClick={handleClick}
                className="w-full py-3 rounded-full bg-pink-600 text-white text-sm font-semibold shadow-lg flex items-center justify-center gap-2"
            >
                📱 Order via WhatsApp
            </button>
        </div>
    );
}

export default WhatsAppStickyCTA;
