import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

// ✅ FIX #16: Floating WhatsApp button — visible on all pages
const WHATSAPP_NUMBER = '8801700000000'; // Replace with real number

export function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {tooltip && (
        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-lg px-4 py-2.5 text-xs font-semibold text-slate-800 max-w-[180px] text-right">
          Chat with us on WhatsApp! 👋
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3 text-slate-600" />
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CodeOz%2C%20I%20have%20a%20project%20inquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => setTooltip(false)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

export default WhatsAppFloat;
