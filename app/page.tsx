import React from "react";
import Image from "next/image";
import NavClient from "../components/NavClient";
import RevealClient from "../components/RevealClient";
import BenefitsGrid from "../components/BenefitsGrid";
import Programme from "../components/Programme";
import ForWho from "../components/ForWho";
export default function Page() {
  return (
    <>
      <NavClient />
      <RevealClient />

      {/* Solicitar Adesão button hidden per request */}

      <nav
        id="nav"
        className="py-5 px-6 flex items-center justify-center transition-colors duration-300"
      >
        <a
          href="#"
          className="font-wordmark text-gold uppercase tracking-widest text-sm"
        >
          Nexus One
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-[120px] px-6 relative overflow-hidden">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gold mb-7 opacity-0 reveal">
            Clube Exclusivo de Empreendedores · Moçambique
          </p>
          <h1 className="font-wordmark text-white uppercase leading-none mb-0 text-[clamp(52px,9vw,110px)] opacity-0 reveal">
            <Image
              src="/logo nexus one.png"
              alt="Nexus One"
              width={2048}
              height={768}
              className="h-auto w-[min(90vw,720px)]"
              priority
            />
          </h1>
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,1)] to-transparent my-8 opacity-0 reveal"></div>
          <p className="max-w-xl text-[clamp(14px,2.2vw,19px)] text-[--off-white] font-[300] leading-[1.65] mb-12 opacity-0 reveal">
            O ponto de convergência entre líderes que constroem com visão,
            decidem com estratégia e crescem com propósito.
          </p>
          <div className="flex gap-4 flex-wrap justify-center opacity-0 reveal">
            <a
              href="https://nexusone.makagui.co.mz"
              className="border border-[rgba(201,168,76,.3)] text-gold px-8 py-4 uppercase tracking-wider font-medium text-xs bp600:w-full bp600:text-center"
            >
              Conhecer o Clube
            </a>
          </div>
          <div className="scroll-hint">
            <div className="scroll-hint-line"></div>
            <span className="text-[9px] uppercase" style={{ fontSize: 9 }}>
              Scroll
            </span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="sobre" className="bg-[var(--navy-mid)] py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <p className="text-[9px] font-medium uppercase tracking-wider text-gold mb-5">
                  O Que é o Nexus One
                </p>
                <h2 className="text-white text-[clamp(30px,4vw,48px)] font-sans mb-5">
                  Convergência Estratégica. Crescimento Colectivo.
                </h2>
                <p className="text-text font-[300] max-w-[560px] leading-[1.75]">
                  O Nexus One é um clube fechado de empreendedores, CEOs e
                  investidores. Um ambiente de elite concebido para líderes que
                  já superaram a fase da sobrevivência e procuram algo maior:
                  acesso, visão, estratégia e relações que aceleram negócios e
                  constroem legado.
                </p>

                <div className="about-quote mt-6">
                  <p className="font-wordmark text-[20px] text-[var(--off-white)] italic">
                    &quot;Não se trata apenas de networking. Trata-se de estar
                    no ambiente certo, rodeado de pessoas que pensam
                    grande.&quot;
                  </p>
                </div>
              </div>

              <div className="about-visual reveal flex items-center justify-center">
                <div className="about-ring w-[320px] h-[320px] rounded-full border border-[var(--gold-line)] flex items-center justify-center relative">
                  <div
                    style={{
                      width: 260,
                      height: 260,
                      border: "1px solid rgba(201,168,76,.15)",
                      borderRadius: "50%",
                      position: "absolute",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle,rgba(201,168,76,.1),transparent 70%)",
                      position: "absolute",
                    }}
                  ></div>
                  <div className="about-ring-text font-wordmark text-[28px] text-gold uppercase tracking-widest text-center z-10">
                    Nexus
                    <br />
                    One
                  </div>
                  <div className="about-ring-sub text-[9px] text-muted mt-2 absolute bottom-6">
                    Clube Exclusivo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <BenefitsGrid />

        {/* PROGRAMME */}
        <Programme />

        {/* FOR WHO */}
        <ForWho />

        {/* CTA BAND */}
        <div id="adesao" className="bg-gold py-20 text-center">
          <h2 className="font-wordmark text-[clamp(28px,4vw,48px)] text-navy mb-4">
            O Seu Próximo Nível Começa Aqui.
          </h2>
          <p className="text-[15px] text-[rgba(11,21,36,.65)] mb-8">
            Junte-se à comunidade de líderes que estão a construir o futuro do
            empreendedorismo em Moçambique.
          </p>
          <a
            href="https://nexusone.makagui.co.mz"
            className="bg-navy text-gold px-8 py-4 uppercase tracking-wider font-semibold"
          >
            Solicitar Adesão
          </a>
        </div>

        {/* FOOTER */}
        <footer className="bg-[var(--navy-mid)] border-t border-[var(--navy-border)] py-20">
          <div className="container">
            <div className="grid grid-cols-3 gap-12 mb-8">
              <div>
                <div className="font-wordmark text-gold text-2xl uppercase mb-4">
                  Nexus One
                </div>
                <p className="text-muted max-w-[260px]">
                  O ponto de convergência entre líderes que constroem com visão
                  e crescem com propósito.
                </p>
              </div>
              <div>
                <div className="text-gold uppercase text-[9px] font-semibold mb-4">
                  Contacto
                </div>
                <a
                  href="mailto:nexus@nexusone.co.mz"
                  className="block text-text mb-2"
                >
                  nexus@nexusone.co.mz
                </a>
              </div>
              <div>
                <div className="text-gold uppercase text-[9px] font-semibold mb-4">
                  O Clube
                </div>
                <a href="#sobre" className="block text-text mb-2">
                  O Que é o Nexus One
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--navy-border)] pt-6">
              <span className="text-muted">
                © {new Date().getFullYear()} Nexus One. Todos os direitos
                reservados.
              </span>
              <span className="text-muted">
                Parte do <span className="text-gold">Ecossistema Makagui</span>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
