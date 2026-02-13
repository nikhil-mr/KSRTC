import HeroScroll from "./components/HeroScroll";
import BusMorph from "./components/BusMorph";
import Map from "./components/Map";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      <SmoothScroll />
      <HeroScroll />
      <BusMorph />
      <Map />
    </main>
  );
}
