import { InfiniteSlider } from "@/components/ui/infinite-slider";

type Logo = { src: string; alt: string; width?: number; height?: number };

type LogoCloudProps = React.ComponentProps<"div"> & { logos: Logo[] };

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div {...props} className={`overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)] ${className || ''}`}>
      <InfiniteSlider gap={150} reverse duration={80} durationOnHover={60}>
        {logos.map((logo) => (
          <img key={`logo-${logo.alt}`} alt={logo.alt} className="pointer-events-none h-6 select-none md:h-8 brightness-0 invert" height={logo.height || "auto"} loading="lazy" src={logo.src} width={logo.width || "auto"} />
        ))}
      </InfiniteSlider>
    </div>
  );
}