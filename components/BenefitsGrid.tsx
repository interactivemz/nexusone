import React from "react";
import BenefitCard from "./BenefitCard";

export default function BenefitsGrid() {
  return (
    <section className="bg-[var(--navy)] py-24">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="text-[9px] font-medium uppercase tracking-wider text-gold mb-5">
            O Que Recebe
          </p>
          <h2 className="text-white text-[clamp(30px,4vw,48px)] font-sans mb-4">
            Acesso a um Ecossistema de Excelência
          </h2>
          <p className="text-text font-[300] max-w-[560px] mx-auto">
            Uma comunidade seleta que partilha estratégias reais, abre portas a
            oportunidades e eleva o padrão de cada membro.
          </p>
        </div>

        <div className="grid grid-cols-1 bp600:grid-cols-2 bp900:grid-cols-3 gap-1 bg-[var(--navy-border)] border border-[var(--navy-border)] reveal">
          <BenefitCard
            num="01"
            title="Desenvolvimento Pessoal e Empresarial"
            desc="Um ambiente de exigência e crescimento contínuo onde empreendedores refinam a sua visão, fortalecem as suas capacidades de liderança e estruturam empresas preparadas para os próximos níveis."
          >
            <svg
              className="w-9 h-9"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4C10.3 4 4 10.3 4 18s6.3 14 14 14 14-6.3 14-14S25.7 4 18 4z"
                stroke="#C9A84C"
                strokeWidth="1"
              />
              <path
                d="M18 12v6l4 4"
                stroke="#C9A84C"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="18" cy="18" r="2" fill="#C9A84C" opacity="0.6" />
            </svg>
          </BenefitCard>

          <BenefitCard
            num="02"
            title="Branding e Posicionamento"
            desc="Estratégias concretas para construir marcas de autoridade, comunicar valor de forma clara e ocupar posições de destaque no mercado — diferenciando-se pela percepção e não apenas pelo produto."
          >
            <svg
              className="w-9 h-9"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="10"
                width="28"
                height="18"
                rx="1"
                stroke="#C9A84C"
                strokeWidth="1"
              />
              <path
                d="M12 10V8a6 6 0 0 1 12 0v2"
                stroke="#C9A84C"
                strokeWidth="1"
              />
              <circle cx="18" cy="19" r="2" fill="#C9A84C" opacity="0.6" />
              <line
                x1="18"
                y1="21"
                x2="18"
                y2="24"
                stroke="#C9A84C"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </BenefitCard>

          <BenefitCard
            num="03"
            title="Ambiente de Negócios"
            desc="Conexões estratégicas com decisores, investidores e parceiros que abrem portas reais. Um ecossistema onde cada relação tem potencial de impacto no crescimento do seu negócio e no fortalecimento da economia nacional."
          >
            <svg
              className="w-9 h-9"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 30L14 20L20 27L28 16L32 20"
                stroke="#C9A84C"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="30" r="1.5" fill="#C9A84C" opacity="0.6" />
              <circle cx="32" cy="20" r="1.5" fill="#C9A84C" opacity="0.6" />
            </svg>
          </BenefitCard>
        </div>
      </div>
    </section>
  );
}
