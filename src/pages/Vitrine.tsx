import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="pt-20 flex-1" style={{ height: "calc(100vh - 80px - 63px)" }}>
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
