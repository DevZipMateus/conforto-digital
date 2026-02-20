import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Início", hash: "inicio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Serviços", hash: "servicos" },
  { label: "Produtos", hash: "produtos" },
  { label: "Galeria", hash: "galeria" },
  { label: "Depoimentos", hash: "depoimentos" },
  { label: "Contato", hash: "contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + hash);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => handleNavClick("inicio")} className="flex items-center gap-2">
          <img src={logo} alt="Logo Ilson Refrigeração e Ar Condicionado" className="h-12 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleNavClick(link.hash)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/vitrine"
            className="ml-2 px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            Vitrine
          </Link>
          <a
            href="https://wa.me/551432846395?text=Ola%2C%20tudo%20bem%3F%20pode%20me%20ajudar%3F%20"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleNavClick(link.hash)}
              className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/vitrine"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center px-5 py-3 font-semibold bg-accent text-accent-foreground rounded-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            Vitrine
          </Link>
          <a
            href="https://wa.me/551432846395?text=Ola%2C%20tudo%20bem%3F%20pode%20me%20ajudar%3F%20"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center px-5 py-3 font-semibold bg-primary text-primary-foreground rounded-lg"
          >
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
