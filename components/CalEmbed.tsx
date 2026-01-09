import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalEmbedProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalEmbed: React.FC<CalEmbedProps> = ({ isOpen, onClose }) => {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && !calLoaded) {
      (async function () {
        const cal = await getCalApi({ namespace: "jl-digital-services-call" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#4f46e5" },
            dark: { "cal-brand": "#fafafa" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setCalLoaded(true);
      })();
    }
  }, [isOpen, calLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-[-14px] right-[-14px]  z-10 text-slate-400 hover:text-slate-800 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors">
          <X size={24} />
        </button>
        <div className="flex-1 overflow-auto p-6">
          <Cal
            namespace="jl-digital-services-call"
            calLink="jean-luc-gouaho-zgnemm/jl-digital-services-call"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
      </div>
    </div>
  );
};
