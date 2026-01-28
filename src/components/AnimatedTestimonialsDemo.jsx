import { AnimatedTestimonials } from "./ui/animated-testimonials";
import project01 from "../assets/videos/project01.mp4";
import project02 from "../assets/videos/project02.mp4";
import project03 from "../assets/videos/project03.mp4";
import project04 from "../assets/videos/project04.mp4";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A dynamic web application that allows users to search for instant weather conditions worldwide. Built with [React] for efficient state management and integrated with third-party APIs for accurate, live data reporting.",
      designation: "Weather Application",
      src: project01,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://weather-app-nine-ruby-76.vercel.app/",
    },
    {
      quote:
        "A dynamic web app for exploring shoe collections, featuring efficient state management for instant search results. Implements a clean, modern interface for browsing product details and categories without page reloads.",
      designation: "Shoes finding",
      src: project02,
      technologies: ["React", "Weather API", "CSS3", "JavaScript"],
      link: "https://shoes-find-app.vercel.app/",
    },
    {
      quote:
        "A clean, responsive timer application designed for productivity. Features intuitive controls for setting durations and tracking time, ensuring smooth performance and immediate UI updates across all devices.",
      designation: "Timer App",
      src: project03,
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      link: "https://timer-app-rust.vercel.app/",
    },
    {
      quote:
        "A precision utility tool that calculates a user's exact age in years, months, and days based on their date of birth. Implements complex JavaScript date logic to handle leap years and varying month lengths accurately.",
      designation: "Age Calculator",
      src: project04,
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      link: "https://age-calculator-woad-chi.vercel.app/",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development
            techniques and innovative solutions
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoPlay={true} />
      </div>
    </section>
  );
}

export { AnimatedTestimonialsDemo };
