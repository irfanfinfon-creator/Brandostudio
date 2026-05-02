import { lazy, Suspense } from "react";

const GLSLHills = lazy(() => import("@/components/ui/glsl-hills").then(mod => ({ default: mod.GLSLHills })));

function GLSLHillsFallback() {
  return <div className="absolute inset-0 bg-[var(--zinc-950)]" />;
}

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-6 md:px-24 overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={<GLSLHillsFallback />}>
          <GLSLHills width="100%" height="100%" />
        </Suspense>
      </div>
      
      <div className="relative z-10 flex flex-col gap-4 items-center text-center max-w-4xl pointer-events-none">
        <h1 className="font-['Arial:Bold',sans-serif] text-4xl md:text-6xl lg:text-[80px] leading-tight text-white tracking-[-2px]">
          Creating <span className="text-[var(--green-500)]">Brands</span>
          <br />
          That Resonate
        </h1>
        
        <p className="font-['Arial:Narrow',sans-serif] text-lg md:text-xl lg:text-[20.8px] text-white opacity-80 max-w-[600px] mt-4">
          Crafting distinctive brand identities that capture attention, build
          <br className="hidden md:block" />
          trust, and drive business growth
        </p>

        <button 
          onClick={scrollToContact}
          className="pointer-events-auto mt-6 bg-[var(--green-500)] text-black font-['Arial:Bold',sans-serif] px-10 py-4 rounded-full text-base hover:bg-[var(--green-400)] transition-all hover:scale-105"
          aria-label="Navigate to contact section"
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
}