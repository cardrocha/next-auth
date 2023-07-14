'use client'

import Image from 'next/image'
import React from 'react'
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { status, data } = useSession();

  return (
    <>
      <div className="container mx-auto">
        <div className="relative">
          {status === "authenticated" && data.user && (
            <div className="text-3xl p-2 xl:p-0 xl:text-3xl text-black font-semibold absolute top-4 xl:top-64 sm:left-14 xl:left-0">
              Olá, {data.user.name}! Você está logado...
            </div>
          )}
          </div>
          <div>
            <Image
              className="absolute top-52 xl:top-40 sm:right-44 xl:right-10"
              src="/login.jpg"
              width={400}
              height={400}
              alt="image de login"
            />
        </div>
      </div>
    </>
  );
}

export default HomePage