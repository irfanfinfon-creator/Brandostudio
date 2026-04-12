'use client';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-24 bg-[#040404] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-16">
        {/* Left - Visual */}
        <div className="w-full aspect-[6/3] rounded-[30px] overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
          <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80")' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#9aff9a]/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#9aff9a]" />
              </div>
              <span className="text-white/60 font-medium">Est. 2016</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white">8+ Years</div>
            <div className="text-white/60 mt-1">of creative excellence</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full m-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] !leading-[110%] font-bold text-white mb-6 md:mb-8">
            We are{' '}
            <span className="text-[#9aff9a] border-b-2 border-[#9aff9a]">crafting</span>{' '}
            brands that{' '}
            <span className="text-[#9aff9a] border-b-2 border-white/30">resonate</span>{' '}
            and{' '}
            <span className="text-[#9aff9a] border-b-2 border-[#9aff9a]">inspire</span>{' '}
            audiences worldwide.
          </h1>
          <p className="text-white mt-5">With over 8 years of experience in brand design, we specialize in creating distinctive identities that help businesses and individuals stand out in their markets.</p>
          <p className="text-white mt-5">Our approach combines strategic thinking with creative execution, ensuring every brand we designed were not only aesthetically pleasing but also effective in achieving business goals.</p>
          <p className="text-white mt-5">From startups to established businesses, we've helped dozens of clients transform their visual presence and connect meaningfully with their audiences.</p>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-5">
            <div className="flex items-center gap-3">
              <div className="text-2xl md:text-3xl font-bold text-[#9aff9a]">50+</div>
              <div className="text-white/60 text-sm">Projects<br />Completed</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl md:text-3xl font-bold text-[#9aff9a]">100%</div>
              <div className="text-white/60 text-sm">Client<br />Satisfaction</div>
            </div>
          </div>
          <button onClick={scrollToContact} className="mt-10 bg-[#9aff9a] gap-2 font-bold shadow-lg shadow-[#9aff9a]/20 text-black h-12 px-6 rounded-full text-sm inline-flex items-center cursor-pointer hover:bg-[#7ee07e] transition-all hover:scale-105">
            Start Your Project
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}