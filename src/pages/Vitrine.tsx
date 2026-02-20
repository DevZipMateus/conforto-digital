import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) badge.style.display = "none";
    return () => {
      if (badge) badge.style.display = "";
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="pt-20 flex-1" style={{ height: "calc(100vh - 80px)" }}>
        <iframe
          src="https://ilsonrefrigeracaov4.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Vitrine;
