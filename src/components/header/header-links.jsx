"use client";
import CustomLink from "./custom-link";
import { useSelector } from "react-redux";
function HeaderLinks() {
  const links = useSelector((state) => state.links.links);

  return (
    <div className="links flex items-center gap-7.5 max-laptop:gap-6 max-md:hidden">
      {links.map(({ label, link }, i) => (
        <CustomLink key={i} label={label} href={link} />
      ))}
    </div>
  );
}

export default HeaderLinks;
