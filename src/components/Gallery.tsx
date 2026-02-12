import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// All gallery images
const allImages = Array.from({ length: 73 }, (_, i) => {
  const num = i + 1;
  // midia_53 doesn't exist in the file list
  const adjusted = num >= 53 ? num + 1 : num;
  return `/images/midia_${adjusted}.jpg`;
}).filter((_, i) => i + 1 !== 53); // skip 53

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const lightboxPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1);
  };

  const lightboxNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === allImages.length - 1 ? 0 : selectedIndex + 1);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex]);

  return (
    <section id="galeria" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Galeria
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Confira nossos trabalhos, produtos e equipamentos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {allImages.map((src, i) => (
                <div
                  key={src}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0"
                >
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={src}
                      alt={`Trabalho e produto da Ilson Refrigeração ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-primary/80 px-4 py-2 rounded-lg">
                        Ver imagem
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">Visualizar imagem</DialogTitle>
          <div className="relative flex items-center justify-center">
            {selectedIndex !== null && (
              <img
                src={allImages[selectedIndex]}
                alt={`Imagem ampliada ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}

            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 w-10 h-10 rounded-full bg-foreground/80 text-primary-foreground flex items-center justify-center hover:bg-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={lightboxPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/60 text-primary-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={lightboxNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/60 text-primary-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/70 text-primary-foreground text-sm px-4 py-1.5 rounded-full">
              {selectedIndex !== null ? selectedIndex + 1 : 0} / {allImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
