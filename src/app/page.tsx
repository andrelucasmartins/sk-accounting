import { Hero } from "./components/hero";
import { VisionBusiness } from "./components/vision-business";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <VisionBusiness />
    </main>
  );
}
