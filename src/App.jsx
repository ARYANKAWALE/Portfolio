import aryan from './assets/images/aryan.jpg'
import './App.css'
import css from './assets/images/css.png'
import html from './assets/images/html.png'
import javascript from './assets/images/js.png'
import react from './assets/images/react.png'
import tailwind from './assets/images/tailwind.png'
import github from './assets/images/github.jpg'
import sql from './assets/images/sql.png'
import c from './assets/images/c.png'
import project1 from './assets/images/weather.png'
import project01 from './assets/videos/project01.mp4'
import project02 from './assets/videos/project02.mp4'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const skillsRef = useRef(null);

  const project1Link = 'https://weather-app-nine-ruby-76.vercel.app/'
  const project2Link = 'https://shoes-find-app.vercel.app/'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (skillsRef.current) {
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
      <nav className='w-full sticky top-0 z-10'>
        <div className='flex flex-col md:flex-row md:justify-around border-b-[1px] border-gray-900 bg-black text-white p-4 md:p-9'>
          <div className='flex justify-between md:justify-start items-center mb-4 md:mb-0'>
            <h1 className='text-2xl md:text-3xl font-bold'>Portfolio</h1>
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
              <li className='rounded-md p-2 relative nav-link'>Home</li>
              <li className='rounded-md p-2 relative nav-link'>Skills</li>
              <li className='rounded-md p-2 relative nav-link'>Projects</li>
            </ul>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex justify-center md:justify-end items-center text-lg md:text-2xl mt-4 md:mt-0`}>
            <button className='rounded-md p-2 relative nav-link'>
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      <section className='w-full'>
        <div className='min-h-[90vh] w-full bg-black text-white flex justify-center items-center py-4 md:py-0'>
          <div id="main" className='flex flex-col-reverse md:flex-row justify-between items-center h-full w-full max-w-7xl mx-auto px-4 gap-8 md:gap-0'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <img src={aryan} alt="aryan" className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-2xl shadow-blue-500 object-cover' />
              </div>
            </div>
            <div className='flex justify-center items-center text-center md:text-left'>
              <div className='gap-3 md:gap-5 flex flex-col'>
                <h1 className='text-3xl md:text-6xl font-bold'>Hey There! I'm <span className='text-blue-500 bg-white rounded-full p-2'>Aryan 👋</span></h1>
                <p className='text-2xl md:text-4xl font-medium'>a passionate<span className='text-white bg-blue-500 rounded-full p-2'>Web Developer</span></p>
                <p className='text-2xl md:text-4xl font-medium'><span className='text-blue-500 p-2'>I build responsive websites and love <br className='hidden md:block' /> turning ideas into digital reality.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-h-[100vh] w-full py-10 md:py-20 bg-black border-t-[1px] border-gray-900'>
        <div id="skills" ref={skillsRef} className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-start mb-8 md:mb-0'>
            <h1 className='text-3xl md:text-4xl text-white font-bold'>Skills</h1>
          </div>
          <div id="slider" className='w-full overflow-hidden'>
            <div className="slide-track gap-4 md:gap-8">
              {/* First set of icons */}
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={html} alt="html" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={css} alt="css" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={javascript} alt="javascript" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-md' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={react} alt="react" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={tailwind} alt="tailwind" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={github} alt="github" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={sql} alt="sql" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={c} alt="c" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={html} alt="html" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={css} alt="css" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={javascript} alt="javascript" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-md' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={react} alt="react" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={tailwind} alt="tailwind" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px]' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={github} alt="github" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={sql} alt="sql" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>
              <div className='flex justify-center items-center bg-gray-900 h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full'>
                <img src={c} alt="c" className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] w-full py-10 md:py-20 bg-black border-t-[1px] border-gray-900'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-start mb-8 md:mb-12'>
            <h1 className='text-3xl md:text-4xl text-white font-bold'>Projects</h1>
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
                <p className='text-gray-300 font-bold'>🌦️ Weather App – Real-Time Weather Forecast</p>
                <div className='flex gap-2'>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>React</span>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>Tailwind</span>
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
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>React</span>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>Tailwind</span>
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
                  <img
                    src={project1}
                    alt="Weather App Screenshot"
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
                  />
                </a>
                <p className='text-gray-300 font-bold'>🌦️ Weather App – Real-Time Weather Forecast</p>
                <div className='flex gap-2'>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>React</span>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>Tailwind</span>
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
                  <img
                    src={project1}
                    alt="Weather App Screenshot"
                    className='w-full max-h-[40vh] object-cover transition-transform duration-300 hover:scale-105'
                  />
                </a>
                <p className='text-gray-300 font-bold'>🌦️ Weather App – Real-Time Weather Forecast</p>
                <div className='flex gap-2'>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>React</span>
                  <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>Tailwind</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}

export default App