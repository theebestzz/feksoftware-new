"use client";

import Particles from "./particles";

import { buttonVariants } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Send } from "lucide-react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="h-screen w-full dark:bg-transparent bg-black  dark:bg-grid-black/[0.06]  bg-opacity-[0.001] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute mx-auto  pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <motion.div
        initial="hidden"
        className="flex flex-col justify-center items-center relative"
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="w-screen overflow-hidden">
          <Particles quantity={200} />
          <Particles quantity={200} />
        </div>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-4xl text-center flex flex-col max-w-6xl mx-auto  font-bold font-heading bg-gradient-to-tr from-purple-300/80 to-white/90 bg-clip-text text-transparent tracking-tight sm:text-8xl md:text-[5rem] "
        >
          <h1 className="bg-gradient-to-tr from-purple-500 to-purple-100 text-transparent bg-clip-text">
            Fek Software
          </h1>
          <h2 className="font-headingAlt">Hayal Edin, Kodlayalım.</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="grid grid-cols-3 px-2 gap-5 mt-5"
        >
          <a
            href="https://instagram.com/fatiheminkucukk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hover:scale-105 shadow-2xl shadow-purple-400/50"
            )}
          >
            Instagram <Instagram className="size-4 ml-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatih-emin-k%C3%BC%C3%A7%C3%BCk-a7a7a9320/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hover:scale-105 shadow-2xl shadow-purple-400/50"
            )}
          >
            Linkedin <Linkedin className="size-4 ml-2" />
          </a>{" "}
          <a
            href="https://github.com/theebestzz"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hover:scale-105 shadow-2xl shadow-purple-400/50"
            )}
          >
            Github <Github className="size-4 ml-2" />
          </a>
        </motion.div>
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-52 text-purple-200/50 flex flex-col items-center"
        >
          <span>Fatih Emin Küçük</span>
          <span>
            Fek Software &mdash;
            <span className="text-purple-200/50">
              Tüm hakları saklıdır &copy;
            </span>{" "}
            {new Date().getFullYear()}
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
}
