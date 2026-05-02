import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

export default function ClientsSection() {
  return (
    <section className="relative bg-[var(--zinc-950)] px-6 md:px-24 py-10 border-t">
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 -z-10 h-[120vmin] w-[120vmin] rounded-b-full bg-[radial-gradient(ellipse_at_center,_rgba(154,255,154,0.1),transparent_50%)] blur-[30px]" />
      <h2 className="mb-5 text-center font-['Arial:Bold',sans-serif] text-xl tracking-tight md:text-3xl text-white">
        <span className="text-white/60">Trusted by experts.</span>
        <br />
        <span className="text-[var(--green-500)]">Used by the leaders.</span>
      </h2>
      <div className="mx-auto my-5 h-px max-w-sm bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      <LogoCloud logos={logos} />
      <div className="mt-5 h-px bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
    </section>
  );
}