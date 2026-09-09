import React from "react";

export default function ForWho() {
  return (
    <section className="bg-[var(--navy)] py-24">
      <div className="container">
        <div className="grid bp900:grid-cols-2 grid-cols-1 gap-20 reveal items-start">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wider text-gold mb-5">
              O Nexus One é para si?
            </p>
            <h2 className="text-white text-[clamp(30px,4vw,48px)] font-sans mb-5">
              Líderes que já venceram a fase da sobrevivência.
            </h2>
            <p className="text-text font-[300] max-w-[560px] leading-[1.75]">
              O Nexus One não é para quem está a começar. É para empreendedores,
              CEOs e investidores que entendem que o próximo nível não se
              constrói sozinho — e que os ambientes que escolhem frequentar
              definem até onde chegam.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[36px] text-gold font-sans">3+</div>
                <div className="text-[12px] font-[300] text-muted mt-2">
                  Edições do Nexus Summit
                </div>
              </div>
              <div>
                <div className="text-[36px] text-gold font-sans">100%</div>
                <div className="text-[12px] font-[300] text-muted mt-2">
                  Líderes activos em Moçambique
                </div>
              </div>
              <div>
                <div className="text-[36px] text-gold font-sans">12</div>
                <div className="text-[12px] font-[300] text-muted mt-2">
                  Masterclasses por ano
                </div>
              </div>
              <div>
                <div className="text-[36px] text-gold font-sans">1</div>
                <div className="text-[12px] font-[300] text-muted mt-2">
                  Comunidade. Uma visão.
                </div>
              </div>
            </div>

            {/* Solicitar Adesão button hidden per request */}
          </div>
        </div>
      </div>
    </section>
  );
}
