import Image from "next/image";
import "animate.css";
import { candy as candyList } from "./data/candy_list.json";
// Images are stored under ../../public/images/
const backgroundImage = "/images/pumpkin_field_royalty_free.png";

export default function Home() {
  return (
    <main
      className="bg-slate-900 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="smoke">
        {["Left", "Right"].map((direction) =>
          ["even_slower", "slowest"].map((animationSpeed) => (
            <Image
              className={`animate__animated animate__fadeIn${direction} animate__infinite animate__${animationSpeed} ${
                animationSpeed === "slowest" && "animate__delay-2s"
              }`}
              src="/images/smoke_small.png"
              alt="Floating smoke."
              fill={true}
            />
          ))
        )}
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center h-screen p-8 pb-10 gap-5 sm:p-15 font-[family-name:var(--font-griffy)]">
        {candyList.map((item) => (
          <div
            className="candy-item p-4 outline outline-4 rounded outline-orange-400 outline-offset-4 border border-5 border-orange-300 shadow-2xl shadow-orange-300 bg-gray-700/50 content-center row"
            key={item.name}
          >
            <Image
              className={`m-auto animate__animated animate__pulse animate__infinite animate__slow ${
                !item.available && "grayscale"
              }`}
              src={item.image}
              alt={item.name}
              width={200}
              height={100}
            />
            <div className="text-center pt-2 font-bold tracking-wide text-xl text-slate-100">
              {item.available ? item.name : "OUT OF STOCK"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
