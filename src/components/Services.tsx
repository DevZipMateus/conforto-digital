import { Wind, Thermometer, Wrench, Snowflake, Coffee, Droplets, Zap, Settings } from "lucide-react";

const services = [
  { icon: Wind, title: "Instalação de ar-condicionado", desc: "Instalação profissional de splits, multi-splits e sistemas de climatização." },
  { icon: Wrench, title: "Manutenção de ar-condicionado", desc: "Manutenção preventiva e corretiva para manter seu equipamento funcionando perfeitamente." },
  { icon: Thermometer, title: "Refrigeração comercial", desc: "Câmaras frias, cervejeiras, chopeiras e sistemas de refrigeração comercial." },
  { icon: Snowflake, title: "Geladeiras e freezers", desc: "Manutenção e reparo de geladeiras, freezers e sistemas de refrigeração residencial." },
  { icon: Droplets, title: "Bebedouros", desc: "Instalação e manutenção de bebedouros industriais e residenciais." },
  { icon: Coffee, title: "Máquinas de lavar e tanquinhos", desc: "Reparo e manutenção de máquinas de lavar roupa e tanquinhos." },
  { icon: Zap, title: "Micro-ondas", desc: "Conserto e manutenção de fornos micro-ondas de todas as marcas." },
  { icon: Settings, title: "Assistência técnica geral", desc: "Atendimento técnico especializado para diversos equipamentos de refrigeração." },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Soluções completas em refrigeração e climatização para residências, comércios e indústrias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
