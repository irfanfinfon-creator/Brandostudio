export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed backdrop-blur-[5px] bg-[rgba(0,0,0,0.8)] w-full z-50 border-b border-[#222]">
      <div className="flex items-center justify-between px-6 md:px-24 py-6 max-w-[1920px] mx-auto">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex flex-col font-['Arial:Bold',sans-serif] text-[#9aff9a] text-xl md:text-2xl hover:opacity-80 transition-opacity"
        >
          Brando Studio
        </button>
        
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[#9aff9a] transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[#9aff9a] transition-colors"
            >
              Benefits
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[#9aff9a] transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[#9aff9a] transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[#9aff9a] transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  );
}
