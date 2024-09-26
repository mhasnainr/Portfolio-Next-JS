"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the type for the link prop
interface LinkProps {
  link: {
    url: string;
    title: string;
  };
}

const NavLink = ({ link }: LinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url ? "bg-black text-white" : ""
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
