export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed backdrop-blur-[5px] bg-[var(--zinc-950)]/80 w-full z-50 border-b border-[var(--zinc-800)]" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between px-6 md:px-24 py-6 max-w-[1920px] mx-auto">
        <button
          onClick={() => scrollToSection('home')}
          className="flex flex-col font-['Arial:Bold',sans-serif] text-[var(--green-500)] text-xl md:text-2xl hover:opacity-80 transition-opacity"
        >
          Brando Studio
        </button>

        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection('benefits')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[var(--green-500)] transition-colors"
            >
              Benefits
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[var(--green-500)] transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[var(--green-500)] transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-['Arial:Narrow',sans-serif] text-white text-[15.2px] hover:text-[var(--green-500)] transition-colors"
            >
              FAQ
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
