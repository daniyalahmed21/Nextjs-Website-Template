import Link from "next/link";
import Logo from "./logo";
import Container from "./container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Features", href: "#" },
  { name: "Products", href: "#" },
  { name: "Socials", href: "#" },
  { name: "Pricing", href: "#" },
];

const linkClass =
  "font-display text-sm text-neutral-600 transition-colors hover:text-neutral-900";

const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200">
      <Container>
        <div className={cn("flex items-center justify-between", " h-16 ")}>
          <Logo />

          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Signup</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
