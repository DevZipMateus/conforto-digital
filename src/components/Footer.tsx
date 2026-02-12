import logo from "@/assets/logo.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Logo Ilson Refrigeração" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Seu conforto é o nosso compromisso. 20 anos de tradição em refrigeração e climatização em Pederneiras e região.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#inicio" className="hover:text-primary-foreground transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
              <li><a href="#produtos" className="hover:text-primary-foreground transition-colors">Produtos</a></li>
              <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Avenida Paulista, S- 561 — Pederneiras/SP</li>
              <li>
                <a
                  href="https://wa.me/551432846395?text=Ola%2C%20tudo%20bem%3F%20pode%20me%20ajudar%3F%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  (14) 3284-6395
                </a>
              </li>
              <li>
                <a href="mailto:ilsonrefrigeracao@hotmail.com" className="hover:text-primary-foreground transition-colors">
                  ilsonrefrigeracao@hotmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1DVYrc1jh9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ilson.refrigeracao?igsh=MW85Y2M4aXZybGJ2dg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          <p>CNPJ: 11.518.348/0001-91</p>
          <p className="mt-1">© {new Date().getFullYear()} Ilson Refrigeração e Ar Condicionado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
