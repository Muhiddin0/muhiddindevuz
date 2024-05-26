import {
  Facebook,
  Github,
  Linkedin,
  MapPin,
  PhoneCall,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

import Muhiddin from "@/assets/Muhiddin.jpg";
import { instance } from "../services";
import { MODERATOR_ID } from "../lib/config";
import { UserProfile } from "../lib/types";

const socials = [
  {
    icon: <PhoneCall size={20} />,
    href: "tel:+998905650213",
    label: "Telefon",
    handle: "+998-90-565-02-13",
  },
  {
    icon: <Send size={20} />,
    href: "https://t.me/@black_hole_225",
    label: "Telegram",
    handle: "@black_hole_225",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/muhiddin0",
    label: "Github",
    handle: "Muhiddin0",
  },
];

export async function generateMetadata() {
  let { data }: { data: UserProfile } = await instance.get(
    "/moderator/" + MODERATOR_ID
  );
  return {
    title: data.name,
    description: data.description,
    url: "https://muhddindev.uz/contact",
    images: [
      {
        url: data.profile,
        width: 1920,
        height: 1080,
      },
    ],
  };
}

export default async function Example() {
  let { data }: { data: UserProfile } = await instance.get(
    "/moderator/" + MODERATOR_ID
  );
  return (
    <>
      <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />

        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto flex-col gap-3">
          <div className="py-5 px-4 flex items-center justify-center mt-32 relative">
            <Image
              className="relative z-10 rounded-2xl"
              width={160}
              height={160}
              src={Muhiddin}
              alt="Muhiddindev"
            />
            <Image
              className="absolute z-0 scale-105 blur-lg top-[50%] translate-y-[-50%] rounded-2xl"
              width={160}
              height={160}
              src={Muhiddin}
              alt="Muhiddindev"
            />
          </div>

          <div className="flex flex-col gap-3 mx-auto text-center px-4 max-w-[500px]">
            <h1 className="text-zinc-100 text-2xl">{data.name}</h1>
            <p className="z-10 text-zinc-400">{data.description}</p>
            <b className="text-zinc-400">
              <time dateTime={new Date(data.birth_date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(data.birth_date)
                )}
              </time>
            </b>
            <Link
              href={data.rezyume}
              className="rounded-md border-2 hover:text-zinc-300 transition-colors duration-300 hover:border-zinc-300 border-zinc-400 text-zinc-400 px-4 py-2 mt-4"
            >
              Rezyume
            </Link>

            <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
              {data.youtube && (
                <Link
                  href={data.youtube}
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 flex items-center border border-zinc-400 justify-center transition-all duration-500 hover:border-zinc-300"
                >
                  <Youtube />
                </Link>
              )}
              {data.linkedin && (
                <Link
                  href=""
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 flex items-center border border-zinc-400 justify-center transition-all duration-500 hover:border-zinc-300"
                >
                  <Linkedin />
                </Link>
              )}
              {data.twitter && (
                <Link
                  href=""
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 flex items-center border border-zinc-400 justify-center transition-all duration-500 hover:border-zinc-300"
                >
                  <Twitter />
                </Link>
              )}
              {data.facebook && (
                <Link
                  href=""
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 flex items-center border border-zinc-400 justify-center transition-all duration-500 hover:border-zinc-300"
                >
                  <Facebook />
                </Link>
              )}
              {data.location && (
                <Link
                  href=""
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 flex items-center border border-zinc-400 justify-center transition-all duration-500 hover:border-zinc-300"
                >
                  <MapPin />
                </Link>
              )}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-12 sm:grid-cols-3 lg:gap-16 mt-6">
            {socials.map((s) => (
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
