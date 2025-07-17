import aryan from './assets/images/aryan.jpg'
import './App.css'
import project01 from './assets/videos/project01.mp4'
import project02 from './assets/videos/project02.mp4'
import project03 from './assets/videos/project03.mp4'
import project04 from './assets/videos/project04.mp4'
import { useState, useEffect, useRef } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FaFontAwesome, FaGithub, FaHtml5, FaLinkedin, FaLocationArrow, FaPhone, FaSearchLocation } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { Analytics } from "@vercel/analytics/react"

// Add icons to the library
library.add(faInstagram)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const skillsRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const project1Link = 'https://weather-app-nine-ruby-76.vercel.app/'
  const project2Link = 'https://shoes-find-app.vercel.app/'

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='min-h-screen w-full'>
      <Analytics />
      <nav className='w-full sticky top-0 z-10'>
        <div className='flex flex-col md:flex-row md:justify-around border-b-[1px] border-gray-900 bg-black text-white p-4 md:p-9'>
          <div className='flex justify-between md:justify-start items-center mb-4 md:mb-0'>
            <h1 id="logo" className='text-4xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white'>Aryan</h1>
            <button
              className='md:hidden hamburger-menu'
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center text-lg md:text-2xl`}>
            <ul className='flex flex-col md:flex-row gap-4 md:gap-10 text-center'>
              <li onClick={() => scrollToSection('main')} className='rounded-md p-2 relative nav-link cursor-pointer'>Home</li>
              <li onClick={() => scrollToSection('about')} className='rounded-md p-2 relative nav-link cursor-pointer'>About</li>
              <li onClick={() => scrollToSection('skills')} className='rounded-md p-2 relative nav-link cursor-pointer'>Skills</li>
              <li onClick={() => scrollToSection('projects')} className='rounded-md p-2 relative nav-link cursor-pointer'>Projects</li>
            </ul>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex justify-center md:justify-end items-center text-lg md:text-2xl mt-4 md:mt-0`}>
            <button onClick={() => scrollToSection('contact')} className='rounded-md p-2 relative nav-link'>
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      <section className='w-full'>
        <div className='min-h-[90vh] w-full bg-black text-white flex justify-center items-center py-4 md:py-0'>
          <div id="main" className='flex flex-col-reverse md:flex-row justify-between items-center h-full w-full max-w-7xl mx-auto px-4 gap-8 md:gap-0'>
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
                <p className='text-3xl md:text-6xl font-medium'>a<span className='text-blue-500 p-2 font-serif'>Web Developer</span></p>
                <p className='text-[20px] md:text-4xl font-medium'><span className='text-gray-500 p-2'>I build responsive websites and love <br className='hidden md:block' /> turning ideas into digital reality.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' w-full py-10 md:py-20 bg-black border-t-[1px] border-gray-900'>
        <div id="skills" ref={skillsRef} className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-start mb-8 md:mb-10'>
            <h1 className='text-3xl md:text-4xl text-white font-bold text-center'>Skills & Technologies</h1>
          </div>
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 text-white justify-center items-center w-full'>
            <div className='border-2 border-gray-700 rounded-lg p-3 hover:shadow-2xl hover:shadow-blue-500 transition-all duration-300 w-full md:w-1/3'>
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


            <div>
            </div>
            <div className='border-2 border-gray-700 rounded-lg p-3 hover:shadow-2xl hover:shadow-blue-500 transition-all duration-300 w-full md:w-1/3'>
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


            <div className='border-2 border-gray-700 rounded-lg p-3 hover:shadow-2xl hover:shadow-blue-500 transition-all duration-300 w-full md:w-1/3'>
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

      <section className='min-h-[80vh] w-full py-10 md:py-20 bg-black border-t-[1px] border-gray-900'>
        <div id="projects" className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-start mb-8 md:mb-12'>
            <h1 className='text-3xl md:text-4xl text-white font-bold'>Personal Projects</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
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
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
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
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
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
                    alt="Weather App Demo"
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
                    muted
                    loop
                    playsInline
                  />
                </a>
                <p className='text-gray-300 font-bold'>Shoes Find App – Discover Your Perfect Pair</p>
                <div className='flex gap-2'>
                  <span className='px-3 py-1 bg-blue-800 font-po text-white rounded-full text-sm'>HTML</span>
                  <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>Tailwind CSS</span>
                  <span className='px-3 py-1 bg-blue-800 text-white rounded-full text-sm'>JavaScript</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
              <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 2 }}>
                <a
                  href={project1Link}
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
                    src={project03}
                    alt="Weather App Demo"
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
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
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
              <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-4 project-card" style={{ "--card-index": 3 }}>
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
                    src={project04}
                    alt="Weather App Demo"
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
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
            </div>
          </div>
        </div>
      </section >

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
                <form className='space-y-6'>
                  <p className='text-2xl font-bold mb-6 text-center'>Send a Message</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                      <label className='text-gray-300 font-medium' htmlFor="name">Name</label>
                      <input
                        className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors'
                        type="text"
                        placeholder='Your name'
                        required
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label className='text-gray-300 font-medium' htmlFor="email">Email</label>
                      <input
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
                      className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors'
                      type="text"
                      placeholder='What is this regarding?'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-gray-300 font-medium' htmlFor="message">Message</label>
                    <textarea
                      className='w-full text-white bg-gray-800/80 rounded-lg p-3 outline-none border border-gray-700 focus:border-blue-500 transition-colors h-36 resize-none scrollbar-hide'
                      placeholder='Write your message here...'
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className='w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg py-4 px-6 hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg'
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
          <hr className='w-[50%] border-gray-700 mt-10' />
            <div className='flex flex-row justify-center items-center gap-4 text-center'>
                  <div className='text-gray-400 text-sm text-[12px] md:text-[16px]'>
                    <p>© 2025 Aryan Kawale. All rights reserved.</p>
                  </div>
                  <div className='text-gray-400 text-sm text-[12px] md:text-[16px]'>
                    <p>Designed and Developed by Aryan Kawale</p>
                  </div>
            </div>
        </div>
      </div>

    </div >

  )
}

export default App