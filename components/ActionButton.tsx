
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  subtext?: string;
  highlight?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  onClick, 
  icon, 
  text, 
  subtext, 
  highlight 
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-full group p-3 rounded-2xl flex items-center justify-between transition-all border shadow-sm ${
        highlight 
          ? 'bg-indigo-50 border-indigo-100 hover:bg-indigo-100' 
          : 'bg-white/60 hover:bg-white border-white/60'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl transition-colors ${
          highlight 
            ? 'bg-white text-indigo-600' 
            : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
        }`}>
          {icon}
        </div>
        <div className="text-left">
          <p className={`text-sm font-semibold ${highlight ? 'text-indigo-900' : 'text-slate-800'}`}>
            {text}
          </p>
          {subtext && (
            <p className={`text-[10px] ${highlight ? 'text-indigo-400' : 'text-slate-400'}`}>
              {subtext}
            </p>
          )}
        </div>
      </div>
      <ArrowRight 
        size={14} 
        className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
          highlight ? 'text-indigo-400' : 'text-slate-400'
        }`} 
      />
    </button>
  );
};
