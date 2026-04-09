export default function AboutSection() {
  return (
    <section id="about" className="bg-[#040404] py-20 md:py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Decorative Element */}
          <div 
            className="w-full lg:w-1/2 h-[300px] md:h-[500px] rounded-[20px] flex items-center justify-center flex-shrink-0"
            style={{ 
              backgroundImage: "linear-gradient(135deg, rgb(154, 255, 154) 0%, rgb(122, 223, 122) 100%)" 
            }}
          >
            <span className="text-6xl md:text-8xl">✨</span>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-['Arial:Bold',sans-serif] text-3xl md:text-4xl lg:text-[40px] text-white leading-tight">
              Building Brands That Matter
            </h2>

            <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-80 leading-relaxed">
              With over 8 years of experience in brand design, I specialize in creating distinctive identities that help businesses and individuals stand out in their markets.
            </p>

            <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-80 leading-relaxed">
              My approach combines strategic thinking with creative execution, ensuring every brand I design is not only beautiful but also effective in achieving business goals.
            </p>

            <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-80 leading-relaxed">
              From startups to established businesses, I've helped dozens of clients transform their visual presence and connect meaningfully with their audiences.
            </p>

            <button className="bg-[#9aff9a] text-black font-['Arial:Bold',sans-serif] px-10 py-4 rounded-full text-base mt-4 hover:bg-[#7ee07e] transition-all hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
