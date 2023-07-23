"use client";

interface HeroProps {}

export const Hero = (props: HeroProps) => {
  return (
    <section className="hero h-[540px] w-full bg-hero-home bg-cover bg-gray-200/30 bg-blend-color-dodge">
      <div className="w-full max-w-7xl  text-gray-950 lg:mx-auto md:px-4 px-2">
        <div className="py-20 space-y-4">
          <h1 className="text-4xl font-bold select-none">
            Focamos em oferecer <br />
            profissionalismo em competência!
          </h1>
          <p className="max-w-[650px] select-none">
            A <span className="font-semibold ">SK Accounting</span> oferecer ao
            cliente um atendimento diferenciado e especifico para cada segmento
            de negocio, com uma equipe de profissionais capacitados e
            experientes, sempre estruturado sobre os pilares do negócio,
            confiança, credibilidade e qualidade.
          </p>
          <button className="btn py-2 px-4 rounded uppercase text-gray-50 text-sm bg-gray-800 hover:bg-gray-700 transition-all">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};
