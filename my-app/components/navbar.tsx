import Link from "next/link";
import Logo from "./logo";

const NavLinks = [
  {
    name: "Features",
    ahref: "#",
  },
  {
    name: "Products",
    ahref: "#",
  },
  {
    name: "Socials",
    ahref: "#",
  },
  {
    name: "Pricing",
    ahref: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-4 font-display text-neutral-600 text-sm">
        {NavLinks.map((link) => {
          return (
            <Link key={link.name} href={link.ahref}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
