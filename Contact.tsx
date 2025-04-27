
import { Mail, Smartphone, Laptop } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Email Me</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600">
            <Smartphone className="h-5 w-5" />
            <span>iOS Developer</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Laptop className="h-5 w-5" />
            <span>macOS Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
