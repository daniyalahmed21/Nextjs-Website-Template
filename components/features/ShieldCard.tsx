import ShieldSVG from "@/illustrations/shieldSVG";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function ShieldCard() {
  return (
    <div className="relative flex items-center justify-center h-70">
      <div>
        <DottedGlowBackground
        className="pointer-events-none mask-radial-to-60% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <ShieldSVG />
      </div>
    </div>
  );
}
