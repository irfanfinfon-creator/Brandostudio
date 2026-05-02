'use client';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: "What services do you offer?", answer: "I specialize in brand identity design, including logo design, visual branding, brand strategy, and complete brand identity systems for businesses and individuals." },
  { question: "How long does a typical branding project take?", answer: "Most branding projects take 2-4 weeks depending on scope. A complete brand identity package typically takes 4-6 weeks from discovery to final delivery." },
  { question: "What is your pricing structure?", answer: "Pricing varies based on project scope and requirements. I offer packages for logo design, full brand identity, and brand strategy. Contact me for a custom quote based on your specific needs." },
  { question: "Do you offer revisions?", answer: "Yes! Each package includes multiple revision rounds to ensure you're completely satisfied with the final result. The number of revisions depends on the package chosen." },
  { question: "What information do you need to start a project?", answer: "I'll need to understand your business, target audience, competitors, brand preferences, and goals. I'll send you a detailed questionnaire after our initial consultation." },
  { question: "How do we communicate during the project?", answer: "We can communicate via email, video calls, or whichever method you prefer. I'll provide regular updates and check-ins throughout the project to keep you informed." }
];

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 px-6 md:px-24 bg-[var(--zinc-950)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h2 className="font-['Arial:Bold',sans-serif] text-3xl md:text-4xl lg:text-[56px] text-white mb-6 leading-tight">Frequently Asked <span className="text-[var(--green-500)]">Questions</span></h2>
          <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg lg:text-[19.2px] text-white/70 max-w-md">Find answers to common questions about my branding services. Can't find what you're looking for? Feel free to reach out.</p>
          <button onClick={scrollToContact} className="bg-[var(--green-500)] text-black font-['Arial:Bold',sans-serif] mt-5 px-10 py-4 rounded-full text-base hover:bg-[var(--green-400)] transition-all hover:scale-105 inline-flex items-center gap-2">Get In Touch <ArrowRight size={18} /></button>
        </div>
        <div className="space-y-3" role="region" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-[var(--zinc-900)] border rounded-[20px] overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-[var(--green-500)]' : 'border-[var(--zinc-800)] hover:border-[var(--green-500)]/50'}`}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left" aria-expanded={openIndex === index}>
                <span className="font-['Arial:Bold',sans-serif] text-white text-lg pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[var(--green-500)] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                <p className="font-['Arial:Narrow',sans-serif] text-white/70 text-base px-5 pb-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}