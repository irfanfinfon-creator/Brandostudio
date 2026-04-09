const contactLinks = [
  { emoji: '📧', label: 'Email Me', href: 'mailto:hello@brandostudio.com' },
  { emoji: '💼', label: 'LinkedIn', href: '#' },
  { emoji: '📸', label: 'Instagram', href: '#' },
  { emoji: '🎨', label: 'Behance', href: '#' }
];

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-24 px-6 md:px-24"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 443.37\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.000007884 17.458 -75.6 -0.000004686 960 478.29)\\'><stop stop-color=\\'rgba(24,0,64,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(12,0,32,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(6,0,16,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-['Arial:Bold',sans-serif] text-3xl md:text-4xl lg:text-[56px] text-white mb-6 leading-tight">
          Let's Create Something Amazing
        </h2>

        <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg lg:text-[19.2px] text-white opacity-80 mb-12 max-w-3xl mx-auto">
          Ready to elevate your brand? Get in touch and let's discuss how we can work together to build a brand that truly represents you.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-[#111] border border-[#333] rounded-full px-8 py-4 hover:border-[#9aff9a] hover:bg-[#1a1a1a] transition-all hover:scale-105"
            >
              <span className="font-['Arial:Narrow',sans-serif] text-white text-base whitespace-nowrap">
                {link.emoji} {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
