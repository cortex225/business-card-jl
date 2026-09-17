import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ActionButtonProps {
  onClick?: () => void;
  /** When set, renders a real link (new tab) instead of a button. */
  href?: string;
  icon: React.ReactNode;
  text: string;
  subtext?: string;
  highlight?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  href,
  icon,
  text,
  subtext,
  highlight
}) => {
  const className = `w-full group p-3 rounded-2xl flex items-center justify-between transition-all border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 hover:-translate-y-0.5 hover:shadow-md ${
    highlight
      ? 'bg-indigo-50 border-indigo-100 hover:bg-indigo-100'
      : 'bg-white/60 hover:bg-white border-white/60'
  }`;

  const content = (
    <>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl transition-colors ${
          highlight
            ? 'bg-white text-indigo-600'
            : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
        }`}>
          {icon}
        </div>
        <div className="text-left">
          <p className={`text-sm font-semibold ${highlight ? 'text-indigo-900' : 'text-slate-800'}`}>
            {text}
          </p>
          {subtext && (
            <p className={`text-[11px] ${highlight ? 'text-indigo-500' : 'text-slate-500'}`}>
              {subtext}
            </p>
          )}
        </div>
      </div>
      {href ? (
        <ExternalLink
          size={14}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400"
          aria-hidden="true"
        />
      ) : (
        <ArrowRight
          size={14}
          className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
            highlight ? 'text-indigo-400' : 'text-slate-400'
          }`}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};
