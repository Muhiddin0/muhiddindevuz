import Image from "next/image";
import logo from "@/public/static/logo.png";

export default function AnimatedLogo() {
  return (
    <>
      <Image src={logo} alt="logo" />
    </>
  );
}
