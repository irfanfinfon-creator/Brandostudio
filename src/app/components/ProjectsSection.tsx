"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const projects: ProjectItem[] = [
  { id: "p1", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?w=1080&q=80" },
  { id: "p2", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?w=1080&q=80" },
  { id: "p3", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1536735561749-fc87494598cb?w=1080&q=80" },
  { id: "p4", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1548324215-9133768e4094?w=1080&q=80" },
  { id: "p5", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1550070881-a5d71eda5800?w=1080&q=80" },
  { id: "p6", title: "Project Name", description: "Project description goes here.", href: "#", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&q=80" },
];

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <a href={item.href} className="group rounded-xl block">
      <div className="group relative h-full min-h-[27rem] w-full mx-auto overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/4]">
        <img src={item.image} alt={item.title} className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
          <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">{item.title}</div>
          <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-white/80">{item.description}</div>
          <div className="flex items-center text-sm text-[#9aff9a]">
            Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}

function CarouselControls({ carouselApi, canScrollPrev, canScrollNext }: { carouselApi?: CarouselApi; canScrollPrev: boolean; canScrollNext: boolean }) {
  return (
    <div className="hidden shrink-0 gap-2 md:flex">
      <Button size="icon" variant="ghost" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} className="disabled:pointer-events-auto text-white hover:bg-white/10" aria-label="Previous project">
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </Button>
      <Button size="icon" variant="ghost" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} className="disabled:pointer-events-auto text-white hover:bg-white/10" aria-label="Next project">
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </Button>
    </div>
  );
}

function PaginationDots({ total, current, onClick }: { total: number; current: number; onClick: (index: number) => void }) {
  return (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} className={`h-2 w-2 rounded-full transition-colors ${current === i ? "bg-[#9aff9a]" : "bg-white/20"}`} onClick={() => onClick(i)} aria-label={`Go to slide ${i + 1}`} />
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section id="projects" className="relative bg-[#040404] py-20 md:py-24 px-6 md:px-24">
      <div className="mb-12 flex flex-col gap-4 md:mb-14 lg:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Arial:Bold',sans-serif] text-3xl md:text-5xl text-white">Featured Projects</h2>
          <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-70 max-w-lg">A selection of recent brand identity work</p>
        </div>
        <CarouselControls carouselApi={carouselApi} canScrollPrev={canScrollPrev} canScrollNext={canScrollNext} />
      </div>

      <Carousel setApi={setCarouselApi} opts={{ align: 'center', breakpoints: { "w-full": { dragFree: true } } }}>
        <CarouselContent className="contain w-full mx-auto">
          {projects.map((item) => (
            <CarouselItem key={item.id} className="pl-[20px]"><ProjectCard item={item} /></CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <PaginationDots total={projects.length} current={currentSlide} onClick={(i) => carouselApi?.scrollTo(i)} />
    </section>
  );
}