"use client";

import Logo from "@/components/Logo";

import Toolbox from "@/public/icons/Toolbox";
import Github from "@/public/icons/Github";
import NavLinks from "./NavLinks";
import Button from "../Button";
import Menu from "./Menu";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const hiddenBelowXl = "hidden xl:block";
  const openModal = useAuthStore((state) => state.openModal);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <nav className="flex justify-between items-center py-5 text-sm 2xl:text-[15px] text-white text-nowrap gap-5">
      <Logo light />
      <NavLinks />
      <div className="flex gap-4 sm:gap-5 items-center">
        {!isAuthenticated && (
          <>
            <button onClick={() => openModal("loginSeeds")} className={`cursor-pointer ${hiddenBelowXl}`}>Sign in</button>
            <Button
              onClick={() => openModal("selectRegistration")}
              className={`${hiddenBelowXl} text-sm! 2xl:text-[15px]! py-3!`}
              text="Create a free account"
            />
          </>
        )}
        <div className="flex gap-2.5 items-center">
          <Toolbox className="w-5.5 sm:w-6.5 h-auto" />
          <Github className={`${hiddenBelowXl} text-white`} />
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
