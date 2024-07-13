import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className=" relative w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="absolute top-0 -z-10 h-auto w-full scale-110 px-0 blur-3xl xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Salom
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Kod yordamida ko&apos;rishni haqiqatga aylantiraman. Men veb-sayt
              yoki biron-bir raqamli mahsulot ustida ishlayaman, Men o&apos;zim
              ishlayotgan har bir loyihada mukammal dizayn va foydalanuvchiga
              yo&apos;naltirilgan fikrlashga sodiqman.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Reactjs, Nextjs, Javascript, Typescript va veb-ishlab chiqish
              bo&apos;yicha tajribamni namoyish etuvchi so&apos;nggi
              loyihalarimni o&apos;rganing.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Uzbekistan flag"
                src="https://flagcdn.com/uz.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Farg&apos;ona, O&apos;zbekistona
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
