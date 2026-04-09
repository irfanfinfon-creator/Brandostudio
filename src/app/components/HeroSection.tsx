import imgHeroBackground from "figma:asset/c70aae6ca543b4f31634eacef7bed3583d75472c.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-6 md:px-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden opacity-12">
          <img 
            alt="" 
            className="absolute w-full h-full object-cover" 
            src={imgHeroBackground} 
          />
        </div>
        <div className="absolute bg-[rgba(51,255,65,0.37)] inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center text-center max-w-4xl">
        <h1 className="font-['Arial:Bold',sans-serif] text-4xl md:text-6xl lg:text-[80px] leading-tight text-white tracking-[-2px]">
          Creating <span className="text-[#9aff9a]">Brands</span>
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
          className="bg-[#9aff9a] text-black font-['Arial:Bold',sans-serif] px-10 py-4 rounded-full text-base mt-6 hover:bg-[#7ee07e] transition-all hover:scale-105"
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
}
