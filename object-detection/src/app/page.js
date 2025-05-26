import Image from "next/image";
import Objectdetection from "./components/Objectdetection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-4xl font-bold mb-8 md:text-6xl lg:text-8xl tracking-tight md:px-6 text-center ">
        Object Detection App
      </h1>
      <Objectdetection />
    </main>
  );
}
