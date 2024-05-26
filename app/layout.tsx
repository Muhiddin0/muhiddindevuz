import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Muhiddindev.uz",
    template: "%s | Muhiddindev.uz",
  },
  description:
    "Hello friend, my name is Muhiddin and I am from Uzbekistan ✔ +998905650213 for contact @black_hole_225 for telegram",
  openGraph: {
    title: "Muhiddindev",
    description:
      "Hello friend, my name is Muhiddin and I am from Uzbekistan ✔ +998905650213 for contact @black_hole_225 for telegram",
    url: "https://muhddindev.uz",
    siteName: "Muhiddindev",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/88494561?s=400&u=c5ca80f7ea816a960094d012395a0e5cce8da3c5&v=4",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "uz-UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black overflow-x-hidden ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
