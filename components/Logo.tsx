import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl tracking-tight hover:text-zinc-700 text-zinc-800 transition-colors duration-300"
    >
      AK-FORM
    </Link>
  );
};

export default Logo;
