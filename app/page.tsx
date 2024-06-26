import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

import coffee from "@/assets/Buy Me a Coffee.svg";

const navigation = [
  { name: "Loyihalar", href: "/projects" },
  { name: "Bog'lanish", href: "/contact" },
];

export default function Home() {
  return (
    <div className="px-4 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Muhiddindev
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Fullstask injiner{" "}
          <Link
            target="_blank"
            href="https://t.me/@black_hole_225"
            className="underline duration-500 hover:text-zinc-300"
          >
            @black_hole_225
          </Link>{" "}
          tomonidan yaratildi. Website, Telegra, bot, Ios, Android
        </h2>

        <button className="mt-2">
          <Image
            className="w-[135px]"
            src={coffee}
            alt="Buy me a coffee"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
}
