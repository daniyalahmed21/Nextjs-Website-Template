import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <LogoIcon />
      <span className="font-display text-neutral-600 text-sm hover:text-neutral-900 transition-all duration-100">
        BetterStack
      </span>
    </Link>
  );
}

const LogoIcon = () => {
  return <Image className="rounded-full" src="/logo.png" width={25} height={25} alt="BetterStack Logo" />;
};
