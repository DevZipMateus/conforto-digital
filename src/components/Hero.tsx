import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Técnico instalando ar-condicionado em ambiente residencial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-900 text-primary-foreground leading-tight mb-4">
            Ilson Refrigeração e Ar Condicionado
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-4">
            Seu conforto é o nosso compromisso
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-lg">
            Há 20 anos oferecendo soluções em refrigeração e climatização com qualidade, confiança e profissionalismo em Pederneiras e região.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/551432846395?text=Ola%2C%20tudo%20bem%3F%20pode%20me%20ajudar%3F%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors text-lg"
            >
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Nossos serviços
            </a>
            <Link
              to="/vitrine"
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/80 transition-colors text-lg flex items-center gap-2"
            >
              <ShoppingBag size={20} />
              Ver Vitrine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
