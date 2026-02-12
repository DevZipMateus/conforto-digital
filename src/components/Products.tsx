import { Wind, Refrigerator, Wrench, Monitor, Droplets, WashingMachine } from "lucide-react";
import bgProducts from "@/assets/bg-products.jpg";

const products = [
  { icon: Wind, name: "Ar-condicionado" },
  { icon: Refrigerator, name: "Peças e componentes" },
  { icon: Wrench, name: "Ferramentas em geral" },
  { icon: Droplets, name: "Bebedouros" },
  { icon: WashingMachine, name: "Máquinas de lavar e tanquinhos" },
  { icon: Monitor, name: "Micro-ondas" },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.06]"
        style={{ backgroundImage: `url('${bgProducts}')` }}
        aria-hidden="true"
      />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Trabalhamos com as melhores marcas e equipamentos do mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
