import { AnimatedTestimonials } from "./ui/animated-testimonials";
import project01 from "../assets/videos/project01.mp4";
import project02 from "../assets/videos/project02.mp4";
import project03 from "../assets/videos/project03.mp4";
import project04 from "../assets/videos/project04.mp4";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A comprehensive e-commerce platform with modern UI/UX design, featuring product catalog, shopping cart, and secure checkout functionality. Built with responsive design principles for optimal user experience.",
      name: "E-Commerce Platform",
      designation: "Full-Stack Web Application",
      src: project01,
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      quote:
        "Interactive weather application providing real-time weather data with beautiful animations and intuitive interface. Features location-based forecasts and detailed weather analytics.",
      name: "Weather App",
      designation: "React Native Application",
      src: project02,
      technologies: ["React", "Weather API", "CSS3", "JavaScript"]
    },
    {
      quote:
        "Modern portfolio website showcasing creative design with smooth animations, responsive layout, and optimized performance. Demonstrates advanced front-end development skills.",
      name: "Portfolio Website",
      designation: "Personal Brand Website",
      src: project03,
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    },
    {
      quote:
        "Task management application with drag-and-drop functionality, real-time updates, and collaborative features. Streamlines project workflows and team productivity.",
      name: "Task Manager Pro",
      designation: "Productivity Application",
      src: project04,
      technologies: ["React", "Firebase", "Material-UI", "Redux"]
    }
  ];
  
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development techniques and innovative solutions
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoPlay={true} />
      </div>
    </section>
  );
}

export { AnimatedTestimonialsDemo };