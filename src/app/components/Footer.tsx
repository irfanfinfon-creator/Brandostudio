import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  { title: "Services", links: [{ name: "Brand Identity", href: "#" }, { name: "Logo Design", href: "#" }, { name: "Web Design", href: "#" }, { name: "Marketing", href: "#" }] },
  { title: "Company", links: [{ name: "About Us", href: "#about" }, { name: "Our Work", href: "#projects" }, { name: "Careers", href: "#" }, { name: "Blog", href: "#" }] },
  { title: "Contact", links: [{ name: "Get in Touch", href: "#contact" }, { name: "Support", href: "#" }, { name: "Advertise", href: "#" }, { name: "Privacy", href: "#" }] },
];

const socialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16">
      <div className="container mx-auto max-w-[1920px] px-6 md:px-24">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex flex-col gap-6 lg:items-start">
            <h2 className="text-xl font-semibold text-white">Brandostudio</h2>
            <p className="max-w-[70%] text-sm text-white/60">Crafting distinctive brand identities that capture attention, build trust, and drive business growth.</p>
            <nav aria-label="Social media links">
              <ul className="flex items-center space-x-6 text-white/60">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-[#9aff9a] transition-colors">
                    <a href={social.href} aria-label={social.label}>{social.icon}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-[#9aff9a] transition-colors">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/20 py-8 text-xs font-medium text-white/60 md:flex-row md:items-center">
          <p className="order-2 lg:order-1">© 2026 Brandostudio. All rights reserved.</p>
          <ul className="order-1 flex gap-4 md:order-2">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#9aff9a] transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}