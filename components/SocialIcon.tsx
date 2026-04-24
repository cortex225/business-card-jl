import React from "react";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer me"
    aria-label={label}
    title={label}
    className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
    <span aria-hidden="true">{icon}</span>
  </a>
);
