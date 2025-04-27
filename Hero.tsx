
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-4xl px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Terry Kuo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          iOS Developer crafting beautiful and intuitive applications
        </p>
        <Button
          onClick={scrollToProjects}
          className="group text-lg"
          variant="outline"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
}
