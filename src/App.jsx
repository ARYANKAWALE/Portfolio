import aryan from './assets/images/aryan.jpg'
import './App.css'
import project01 from './assets/videos/project01.mp4'
import project02 from './assets/videos/project02.mp4'
import project03 from './assets/videos/project03.mp4'
import project04 from './assets/videos/project04.mp4'
import { useState, useEffect, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FaFontAwesome, FaGithub, FaHtml5, FaLinkedin, FaLocationArrow, FaPhone, FaSearchLocation } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { Analytics } from "@vercel/analytics/react"
import { Spotlight } from './components/bg'
import Card3D from './components/Card3D'
import NavBar from './components/nav-bar'
import { CardSpotlight } from "./components/bg-hover";
import { LoaderOne } from "./components/loader";
import TextType from './components/TextType';
import FallingStars from './components/FallingStars';
import About from './components/About';
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo';
// Add icons to the library
library.add(faInstagram)

function App() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const skillsRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const project1Link = 'https://weather-app-nine-ruby-76.vercel.app/'
  const project2Link = 'https://shoes-find-app.vercel.app/'
  const project3Link = '#' // Timer App - add actual link when available
  const project4Link = '#' // Age Calculator - add actual link when available

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to backend API
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Show success toast
        toast.success(data.message, {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Show error toast with server message
        toast.error(data.message || 'Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#EF4444',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Show network error toast
      toast.error('Network error. Please check your connection and try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };

  // Loading effect - simulate app initialization
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // For mobile devices, don't use Intersection Observer
    if (window.innerWidth <= 768) {
      if (skillsRef.current) {
        skillsRef.current.classList.add('visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (skillsRef.current) {
      // Ensure initial visibility
      skillsRef.current.style.opacity = '1';
      skillsRef.current.style.visibility = 'visible';
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);



  // Show loader while app is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoaderOne />
          <p className="text-white text-lg font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <Analytics />
      <Toaster />
      <Spotlight />
      <NavBar />

      <section className='w-full'>
        <div className='min-h-[100vh] w-full bg-black text-white flex justify-center items-center py-4 md:py-0 relative overflow-hidden'>
          <FallingStars starCount={6} />
          <div id="main" className='flex flex-col-reverse md:flex-row justify-between items-center h-full w-full max-w-7xl mx-auto px-4 gap-8 md:gap-0 relative z-10'>
            <div className='flex justify-center items-center gap-4'>
              <div className='flex justify-center items-center'>
                <img src={aryan} alt="aryan" className='w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full shadow-2xl shadow-blue-500 object-cover' />
              </div>
              <div className='flex flex-col justify-center items-start'>
                <p className='text-3xl md:text-3xl font-medium'>Aryan Kawale</p>
                <p className='text-3xl md:text-xl font-medium text-blue-500'>FullStack Developer</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.instagram.com/aryan_kawale._/"><FontAwesomeIcon icon={faInstagram} className='w-6 h-6 hover:text-pink-500 cursor-pointer transition-colors' /></a>
                  <a href="https://github.com/ARYANKAWALE"><FaGithub className='w-6 h-6 hover:text-gray-400 cursor-pointer transition-colors' /></a>
                  <a href="https://www.linkedin.com/in/aryan-kawale-19a919266/"><FaLinkedin className='w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors' /></a>
                  <a href="mailto:aryankawale163@gmail.com"><HiMail className='w-6 h-6 hover:text-red-500 cursor-pointer transition-colors' /></a>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center text-center md:text-left'>
              <div className='gap-3 md:gap-5 flex flex-col'>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-500'> <span className='text-white'>Hey There!</span> I'm <span className='text-blue-500 rounded-full p-2'>Aryan</span></h1>
                <div className='text-3xl md:text-6xl font-medium flex items-center'>
                  <span className='mr-2'>a</span>
                  <TextType
                    text={[
                      "Web Developer",
                      "Frontend Developer", 
                      "Backend Developer",
                      "Full Stack Developer",
                      "React Developer"
                    ]}
                    className='text-blue-500 font-serif'
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    cursorCharacter="_"
                    cursorClassName="text-blue-500"
                    startOnVisible={true}
                    textColors={["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"]}
                  />
                </div>
                <p className='text-[20px] md:text-4xl font-medium'><span className='text-gray-500 p-2'>I build responsive websites and love <br className='hidden md:block' /> turning ideas into digital reality.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <AnimatedTestimonialsDemo />

      <section className=' w-full py-10 md:py-20 bg-black border-t-[1px] border-gray-900'>
        <div id="skills" ref={skillsRef} className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-start mb-8 md:mb-10'>
            <h1 className='text-3xl md:text-4xl text-white font-bold text-center'>Skills & Technologies</h1>
          </div>
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 text-white justify-center items-center w-full'>
            <Card3D className="w-full md:w-1/3 hover:shadow-2xl hover:shadow-opacity-0 hover:shadow-blue-400 hover:scale-[1.02] transition-all duration-300">
              <div className='border-2 border-gray-700 rounded-lg p-3 w-full'>
                <div className='flex gap-2 text-gray-400 pb-2'>
                  <p className='font-bold'>Frontend</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <div className='flex justify-between' >
                      <p>HTML</p>
                      <p className='text-gray-400'>90%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>JavaScript</p>
                      <p className='text-gray-400'>85%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>React</p>
                      <p className='text-gray-400'>80%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>Tailwind CSS</p>
                      <p className='text-gray-400'>85%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>


            <Card3D className="w-full md:w-1/3 hover:shadow-2xl hover:shadow-blue-400 hover:scale-[1.02] transition-all duration-300">
              <div className='border-2 border-gray-700 rounded-lg p-3 w-full'>
                <div className='flex flex-start gap-2 text-gray-400'>
                  <p className='font-bold pb-2'>BackEnd</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <div className='flex justify-between' >
                      <p>Nodejs</p>
                      <p className='text-gray-400'>75%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>Express</p>
                      <p className='text-gray-400'>70%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>MongoDB</p>
                      <p className='text-gray-400'>80%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>MySQL</p>
                      <p className='text-gray-400'>75%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D className="w-full md:w-1/3 hover:shadow-2xl hover:shadow-blue-400 hover:scale-[1.02] transition-all duration-300">
              <div className='border-2 border-gray-700 rounded-lg p-3 w-full'>
                <div className='flex flex-start gap-2 text-gray-400'>
                  <p className='font-bold pb-2'>Tools & Others</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <div className='flex justify-between' >
                      <p>Git</p>
                      <p className='text-gray-400'>85%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>GitHub</p>
                      <p className='text-gray-400'>90%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>Postman</p>
                      <p className='text-gray-400'>80%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between' >
                      <p>Figma</p>
                      <p className='text-gray-400'>75%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
          <div className='flex justify-center items-center w-full mt-10'>
            <div className='text-white text-[20px] font-bold'>
              <p>Technologies I Work With</p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-4 mt-10'>
            <p className='text-white text-[12px] border-2 border-gray-700 rounded-lg p-2'>Git</p>
            <p className='text-white text-[12px] border-2 border-gray-700 rounded-lg p-2'>GitHub</p>
            <p className='text-white text-[12px] border-2 border-gray-700 rounded-lg p-2'>Postman</p>
            <p className='text-white text-[12px] border-2 border-gray-700 rounded-lg p-2'>Figma</p>
            <p className='text-white text-[12px] border-2 border-gray-700 rounded-lg p-2'>MongoDB</p>

          </div>
        </div>
      </section>

      {/* <section className='min-h-[80vh] w-full bg-black border-t-[1px] border-gray-900'> */}
        {/* <CardSpotlight> */}
          {/* <div id="projects" className='max-w-7xl mx-auto px-4'>
            <div className='flex justify-center items-start mb-8 md:mb-12'>
              <h1 className='text-3xl md:text-4xl text-white font-bold'>Personal Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
              <Card3D>
                <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 0 }}>
                  <a
                    href={project1Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <video
                      ref={video => {
                        if (video) {
                          if (hoveredVideo === 'project1') {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                      onMouseEnter={() => setHoveredVideo('project1')}
                      onMouseLeave={() => setHoveredVideo(null)}
                      src={project01}
                      alt="Weather App Demo"
                      className='w-full max-h-[40vh] object-cover'
                      muted
                      loop
                      playsInline
                    />
                  </a>
                  <p className='text-gray-300 font-bold'>Weather App – Real-Time Weather Forecast</p>
                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>React</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>Tailwind</span>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 1 }}>
                  <a
                    href={project2Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <video
                      ref={video => {
                        if (video) {
                          if (hoveredVideo === 'project2') {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                      onMouseEnter={() => setHoveredVideo('project2')}
                      onMouseLeave={() => setHoveredVideo(null)}
                      src={project02}
                      alt="Shoes Find App Demo"
                      className='w-full max-h-[40vh] object-cover'
                      muted
                      loop
                      playsInline
                    />
                  </a>
                  <p className='text-gray-300 font-bold'>Shoes Find App – Discover Your Perfect Pair</p>
                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>HTML</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>Tailwind CSS</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>JavaScript</span>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 2 }}>
                  <a
                    href={project3Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <video
                      ref={video => {
                        if (video) {
                          if (hoveredVideo === 'project3') {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                      onMouseEnter={() => setHoveredVideo('project3')}
                      onMouseLeave={() => setHoveredVideo(null)}
                      src={project03}
                      alt="Timer App Demo"
                      className='w-full max-h-[40vh] object-cover'
                      muted
                      loop
                      playsInline
                    />
                  </a>
                  <p className='text-gray-300 font-bold'>Timer App – Minimal Countdown Timer</p>
                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>HTML</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>Tailwind CSS</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>JavaScript</span>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 3 }}>
                  <a
                    href={project4Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <video
                      ref={video => {
                        if (video) {
                          if (hoveredVideo === 'project4') {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                      onMouseEnter={() => setHoveredVideo('project4')}
                      onMouseLeave={() => setHoveredVideo(null)}
                      src={project04}
                      alt="Age Calculator App Demo"
                      className='w-full max-h-[40vh] object-cover'
                      muted
                      loop
                      playsInline
                    />
                  </a>
                  <p className='text-gray-300 font-bold'> Age Calculator App – Calculate Your Exact Age Instantly</p>
                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>HTML</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>Tailwind CSS</span>
                    <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>JavaScript</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div> */}
        {/* </CardSpotlight> */}
      {/* </section > */}

      <div className='flex justify-center items-center text-white w-full bg-black'>
        <div id="contact" className='flex flex-col justify-center items-center gap-8 w-full px-4 md:px-8 py-12'>
          <div className='flex flex-col justify-center items-center gap-4 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-white text-transparent bg-clip-text pb-10'>Get in touch</h2>
          </div>
          <div className='flex flex-col justify-evenly items-center gap-4 w-full md:flex-row'>
            <div className='gap-4 mb-10 md:mb-0'>
              <p className='pb-8 text-2xl md:text-3xl font-bold'>Let's Work Together</p>
              <p className='text-gray-400 text-lg md:text-xl max-w-2xl'>I'm always open to discussing new opportunities, interesting projects,
                or creative collaborations. Feel free to reach out if you'd like to connect!</p>
              <div className='flex flex-col gap-2 pb-10 mt-10'>
                <a href="mailto:aryankawale163@gmail.com"> <p className='flex items-center gap-2 hover:text-red-500 cursor-pointer transition-colors'>
                  <HiMail className='w-6 h-6' />
                  aryankawale163@gmail.com
                </p>
                </a>
                <a href="tel:+919309289570"><p className='flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors'>
                  <FaPhone className='w-6 h-6' />
                  +91 9309289570
                </p>
                </a>
                <a href="https://www.google.com/maps/place/Nagpur,+Maharashtra/@21.1466333,79.0888741,12z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c093d8a203ed:0x5382bc3e4ced0680!8m2!3d21.146633!4d79.0888736!16s%2Fg%2F11c4022sqw?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D">
                  <p className='flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors'>
                    <FaLocationArrow className='w-6 h-6' />
                    Nagpur, Maharashtra, India
                  </p>
                </a>

              </div>
              <div className='flex flex-row gap-2'>
                <p className='flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors'>
                  <FaLinkedin className='w-6 h-6' />
                  LinkedIn
                </p>
                <p className='flex items-center gap-2 hover:text-gray-400 cursor-pointer transition-colors'>
                  <FaGithub className='w-6 h-6' />
                  GitHub
                </p>
                <p className='flex items-center gap-2 hover:text-pink-500 cursor-pointer transition-colors'>
                  <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
                  Instagram
                </p>
              </div>
            </div>

            <div className='w-full max-w-2xl'>
              <div className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 shadow-xl'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                  <p className='text-2xl font-bold mb-6 text-center'>Send a Message</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                      <label className='text-gray-300 font-medium' htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors'
                        type="text"
                        placeholder='Your name'
                        required
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label className='text-gray-300 font-medium' htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors'
                        type="email"
                        placeholder='Your email'
                        required
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-gray-300 font-medium' htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors'
                      type="text"
                      placeholder='What is this regarding?'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-gray-300 font-medium' htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors h-36 resize-none scrollbar-hide'
                      placeholder='Write your message here...'
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:opacity-90 hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
          <hr className='w-[70%] border-gray-700 mt-10' />
          <div className='flex flex-row justify-evenly items-center gap-4 text-center w-full'>
            <div className='text-gray-400 text-sm text-[12px] md:text-[16px]'>
              <p>© 2025 Aryan Kawale. All rights reserved.</p>
            </div>
            <div className='text-gray-400 text-sm text-[12px] md:text-[16px]'>
              <p>Designed and Developed by Aryan Kawale</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App