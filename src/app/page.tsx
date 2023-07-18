import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { VisionBusiness } from "./components/vision-business";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <VisionBusiness />
      <Services />
    </main>
  );
}
