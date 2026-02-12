import { Shield, Clock, ThumbsUp, Award } from "lucide-react";

const features = [
  { icon: Clock, title: "20 anos de experiência", desc: "Tradição e confiança construídas ao longo de duas décadas de trabalho." },
  { icon: Shield, title: "Garantia de serviço", desc: "Todos os nossos serviços possuem garantia de qualidade e satisfação." },
  { icon: ThumbsUp, title: "Atendimento personalizado", desc: "Soluções sob medida para residências, comércios e indústrias." },
  { icon: Award, title: "Profissionais qualificados", desc: "Equipe técnica atualizada e capacitada com as melhores práticas." },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sobre a empresa
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            A <strong className="text-foreground">Ilson Refrigeração e Ar Condicionado</strong>, localizada em Pederneiras, construiu sua trajetória ao longo de 20 anos de tradição, trabalho e constantes melhorias no setor de refrigeração e climatização. Desde o início, a empresa foi fundada com o propósito de oferecer serviços de qualidade, confiança e transparência, sempre priorizando o bom atendimento e a satisfação dos clientes.
          </p>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed mt-4">
            Ao longo dessas duas décadas, conquistamos a confiança de clientes residenciais, comerciais e institucionais, tornando-nos referência em instalação, manutenção e venda de equipamentos de refrigeração e ar-condicionado em Pederneiras e região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Missão, Visão, Valores */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl section-alt">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Missão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oferecer soluções eficientes, seguras e de qualidade em refrigeração e ar-condicionado, atendendo com responsabilidade, transparência e profissionalismo, garantindo a satisfação dos clientes.
            </p>
          </div>
          <div className="p-8 rounded-2xl section-alt">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Visão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ser referência em refrigeração e ar-condicionado em Pederneiras e região, reconhecida pela qualidade dos serviços, confiança e excelência no atendimento técnico.
            </p>
          </div>
          <div className="p-8 rounded-2xl section-alt">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Valores</h3>
            <ul className="text-muted-foreground text-sm space-y-1.5">
              <li>🤝 Compromisso com o cliente</li>
              <li>🔧 Qualidade técnica e profissionalismo</li>
              <li>🕒 Pontualidade e responsabilidade</li>
              <li>💬 Transparência e honestidade</li>
              <li>🌱 Respeito ao meio ambiente</li>
              <li>⭐ Parcerias duradouras</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
