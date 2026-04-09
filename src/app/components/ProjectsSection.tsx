const projects = [
  { emoji: '🍃', name: 'Eco Brand' },
  { emoji: '⚡', name: 'Energy Co' },
  { emoji: '☕', name: 'Coffee Shop' },
  { emoji: '🎨', name: 'Art Studio' },
  { emoji: '🏋️', name: 'Fitness Brand' },
  { emoji: '🌙', name: 'Sleep App' }
];

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="py-20 md:py-24 px-6 md:px-24 relative"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1202.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.000007884 47.36 -75.6 -0.000012712 960 1297.5)\\'><stop stop-color=\\'rgba(24,0,64,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(12,0,32,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(6,0,16,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Arial:Bold',sans-serif] text-3xl md:text-5xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="font-['Arial:Narrow',sans-serif] text-base md:text-lg text-white opacity-70">
            A selection of recent brand identity work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="h-[300px] md:h-[406px] rounded-[20px] overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
              style={{ 
                backgroundImage: "linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(42, 42, 42) 100%)" 
              }}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-300">
                  {project.emoji}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
