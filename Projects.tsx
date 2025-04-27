import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Import the images directly
import yosumIcon from "../images/yosum-icon.png";
import tunetallyIcon from "../images/tunetally-icon.png";
import picpulseIcon from "../images/picpulse-icon.png";

interface Project {
  name: string;
  description: string;
  platform: string;
  appStoreLink?: string;
  icon: string;
}

const projects: Project[] = [
  {
    name: "Yosum: Subscription Manager",
    description: "Your All-in-One Subscription Manager with a Global Touch. Yosum is your comprehensive subscription management solution with real-time exchange rates. Select different currencies for each subscription item, receive timely alerts, and effortlessly manage members within subscriptions.",
    platform: "iOS",
    appStoreLink: "#",
    icon: yosumIcon
  },
  {
    name: "TuneTally",
    description: "The ultimate destination for music lovers who crave to explore and compare top hits across various popular music services and countries. Whether you're a fan of Apple Music, Spotify, Last.FM, KKBox, or more, TuneTally brings you the world of music through a beautifully designed interface.",
    platform: "iOS",
    appStoreLink: "#",
    icon: tunetallyIcon
  },
  {
    name: "PicPulse: Batch Image Resizer",
    description: "A NATIVE macOS app designed to revolutionize your photo resizing workflow. Whether you're a developer preparing App Store previews, a designer adjusting images for various projects, or a photographer managing a large collection, PicPulse offers a seamless solution.",
    platform: "macOS",
    icon: picpulseIcon
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.name} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                    {project.platform}
                  </span>
                  <div className="w-16 h-16 overflow-hidden rounded-lg">
                    <img
                      src={project.icon}
                      alt={`${project.name} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.appStoreLink && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                      Download on the App Store
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
