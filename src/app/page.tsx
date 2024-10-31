import Image from "next/image";
import "animate.css";
import { SmokeScene } from "react-smoke";
import { useMemo } from "react";
import * as THREE from "three";

// Images are stored under ../../public/images/
const candyList = [
  {
    name: "Hershey's Chocolate",
    image: "/images/hersheys_bar.png",
  },
  {
    name: "Hershey's with Almonds",
    image: "/images/hersheys_almond_chocolate_bar.png",
  },
  {
    name: "KitKat",
    image: "/images/kitkat.png",
  },
  {
    name: "Milkyway",
    image: "/images/milkyway.png",
  },
  {
    name: "M&M's",
    image: "/images/mm.png",
  },
  {
    name: "M&M's Peanuts",
    image: "/images/mm_peanut.png",
  },
  {
    name: "Reese's Cup",
    image: "/images/reeses.png",
  },
  {
    name: "Snickers",
    image: "/images/snickers.png",
  },
  {
    name: "Twix",
    image: "/images/twix.png",
  },
];

export default function Home() {
  const smokeColor = useMemo(() => new THREE.Color("red"), []);
  return (
    <main className="bg-slate-900">
      <SmokeScene
        smoke={{
          color: smokeColor,
          density: 50,
          enableRotation: true,
        }}
      />
      <div className="grid grid-cols-3 items-center justify-items-center h-screen p-8 pb-10 gap-5 sm:p-15 font-[family-name:var(--font-geist-sans)]">
        {candyList.map((item) => (
          <div
            className="w-1/2 p-10 outline outline-4 rounded outline-orange-400 outline-offset-4 border border-5 border-orange-300 bg-gray-700 row"
            key={item.name}
          >
            <Image
              className="animate__animated animate__pulse animate__infinite animate__slow"
              src={item.image}
              alt={item.name}
              width={200}
              height={100}
            />
            <div className="text-center pt-2 font-bold tracking-wide text-slate-100">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
