import Image from "next/image";
const candyList = [
  {
    name: "Chocolate Bar",
    image: "/images/Chocolate Bar.jpg",
  },
  {
    name: "Nutty Bar",
    image: "/images/Nutty Bar.jpg",
  },
  {
    name: "Fruit Bar",
    image: "/images/Fruit Bar.jpg",
  },
  {
    name: "Toothbrush",
    image: "/images/Toothbrush.jpg",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {candyList.map((item) => (
        <div
          className="p-16 outline outline-5 rounded outline-red-300 outline-offset-4 border border-5 border-red-300 row"
          key={item.name}
        >
          <Image src={item.image} alt={item.name} width={250} height={250} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
