import React from "react";

const items = [
  {
    title: "Nexus Summit",
    desc: "3 encontros presenciais de 2 dias com imersão estratégica e networking de alto nível.",
  },
  {
    title: "Nexus Live",
    desc: "9 encontros online mensais para debate estratégico e partilha de experiências em tempo real.",
  },
  {
    title: "Nexus Masterclass",
    desc: "12 palestras exclusivas com convidados de referência do mercado nacional e internacional.",
  },
  {
    title: "Nexus Xpedition",
    desc: "Visitas técnicas a empresas de referência — aprendizagem directa com quem já chegou lá.",
  },
  {
    title: "Diagnóstico Empresarial",
    desc: "Análise profunda para mapear os principais momentos e lacunas da sua trajectória.",
  },
  {
    title: "Nexus One Cast",
    desc: "Participação no podcast do Nexus — a sua voz e visão dentro do ecossistema.",
  },
];

export default function Programme() {
  return (
    <section className="bg-[var(--navy-mid)] py-24">
      <div className="container">
        <div className="reveal">
          <p className="text-[9px] font-medium uppercase tracking-wider text-gold mb-5">
            Programa Anual
          </p>
          <h2 className="text-white text-[clamp(30px,4vw,48px)] font-sans mb-8">
            Um Ano de Crescimento Estruturado
          </h2>
        </div>

        <div className="mt-12 reveal">
          <div className="flex flex-col gap-0">
            {items.map((it, idx) => (
              <div
                key={it.title}
                className={`flex gap-6 py-6 border-b border-[var(--navy-border)] ${idx === 0 ? "border-t" : ""}`}
              >
                <span className="text-[10px] font-medium tracking-wider uppercase text-gold pt-1 min-w-[28px]">
                  —
                </span>
                <div>
                  <div className="text-[13px] font-semibold uppercase text-white mb-2">
                    {it.title}
                  </div>
                  <div className="text-[13px] font-[300] text-muted leading-[1.6]">
                    {it.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
