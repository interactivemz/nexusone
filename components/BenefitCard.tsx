import React from "react";

type Props = {
  num: string;
  title: string;
  desc: string;
  children?: React.ReactNode;
};

export default function BenefitCard({ num, title, desc, children }: Props) {
  return (
    <div className="bg-[var(--navy-card)] p-11 relative overflow-hidden transition-colors duration-300 hover:bg-[#131F34]">
      <span className="text-[10px] font-medium tracking-wider uppercase text-gold block mb-5">
        {num}
      </span>
      <div className="w-9 h-9 mb-5 opacity-70">{children}</div>
      <div className="text-[13px] font-semibold uppercase text-white mb-3">
        {title}
      </div>
      <div className="text-[13px] font-[300] text-muted leading-[1.65]">
        {desc}
      </div>
    </div>
  );
}
