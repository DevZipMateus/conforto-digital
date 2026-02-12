import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding section-alt relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.05]"
        style={{ backgroundImage: "url('/images/midia_15.jpg')" }}
        aria-hidden="true"
      />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm text-center relative">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
              "Por favor, pede para ele vir. Não faço serviço com outro, nele eu confio demais."
            </p>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4 rounded-full" />
            <p className="text-sm text-muted-foreground font-medium">— Cliente satisfeito</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
