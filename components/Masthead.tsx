import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Masthead() {
  const mastheadRef = useRef<HTMLElement>(null);
  useEffect(() => {}, []);
  return (
    <section
      ref={mastheadRef}
      className=" isolate sticky top-0 min-h-screen border-2 border-green-400 flex flex-col items-center  bg-[#a2a2a4] "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/masthead-bg.webm" type="video/webm" />
      </video>
      {/* LOGO */}
      <div className="flex-grow-0 pt-10 border-2 border-blue-700">
        <Image
          src="/assets/logo.svg"
          alt="Margelo logo"
          width={43}
          height={38}
        />
      </div>
      <div className="p-12 border-2 border-pink-400 font-bold text-white text-center flex flex-1  flex-col items-center justify-center ">
        <h1 className="mb-2 text-2xl tracking-tight">Margelo</h1>

        <h2 className="mb-2 text-2xl  tracking-tight">
          <span className="whitespace-nowrap">App Development,</span>{" "}
          <span className="whitespace-nowrap">done right.</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 border-2 border-yellow-400">
        <Image
          src="/assets/arrow-down.png"
          alt="Scroll down"
          width={188 / 3}
          height={35}
        />
      </div>
    </section>
  );
}
