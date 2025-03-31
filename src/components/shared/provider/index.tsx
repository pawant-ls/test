"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Lenis } from "../lenis";
import { GSAP } from "../gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Lenis options={{ lerp: 0.15 }} />
      {/* <MouseAnimation /> */}
      <GSAP scrollTrigger />
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Providers;
