const benefits = [
  { title: 'Business Recognition', description: 'A strong brand identity makes your business instantly recognizable, helping you stand out in crowded markets and stay top-of-mind with customers.' },
  { title: 'Customer Trust', description: 'Professional branding builds credibility and trust. Customers are more likely to choose brands that look established and legitimate.' },
  { title: 'Increased Value', description: 'Strategic branding increases perceived value, allowing businesses to command premium prices and attract higher-quality clients.' },
  { title: 'Personal Authority', description: 'For individuals, strong personal branding establishes you as an authority in your field and opens doors to new opportunities.' },
  { title: 'Emotional Connection', description: 'Great brands create emotional connections with audiences, turning customers into loyal advocates who spread the word.' },
  { title: 'Growth Catalyst', description: 'Consistent branding across all touchpoints accelerates business growth and makes marketing efforts more effective.' }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-[#040404] py-20 md:py-24 px-6 md:px-24">
      <h2 className="text-start mb-16 font-['Arial:Bold',sans-serif] text-3xl md:text-5xl text-white">
        Why Branding Matters
      </h2>
      <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-70 mb-16">
        Strategic brand design transforms businesses and personal brands
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <article key={index} className="bg-[#040404] border border-[#222] rounded-[20px] p-10 hover:border-[#9aff9a] transition-all duration-300 hover:scale-105">
            <h3 className="font-['Arial:Bold',sans-serif] text-[#9aff9a] text-2xl mb-4">{benefit.title}</h3>
            <p className="font-['Arial:Narrow',sans-serif] text-white text-base opacity-80 leading-relaxed">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}