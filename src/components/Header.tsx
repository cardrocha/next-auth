"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => signOut();

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between bg-primary text-secondary p-4 rounded-lg h-[88px]">
        <h1 className="text-xl sm:text-3xl xl:text-4xl ml-3 font-semibold">
          Login de usuário
        </h1>
        <div className="flex items-center gap-4">
          <div>
            <p className="hidden sm:flex xl:flex">{data?.user?.email}</p>
          </div>
          {status === "authenticated" && data.user && (
            <Image
              width={50}
              height={50}
              src={data.user.image!}
              className="rounded-full border-2 border-button"
              alt={data.user.name!}
            />
          )}
          {status === "unauthenticated" ? (
            <button
              onClick={handleLoginClick}
              className="text-xl mr-3 cursor-pointer p-2 rounded-xl hover:brightness-125 bg-button"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogoutClick}
              className="text-xl mr-3 cursor-pointer p-2 rounded-xl hover:brightness-125 bg-button"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
