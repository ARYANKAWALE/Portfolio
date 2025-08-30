import React from 'react'
import ScrollReveal from './ScrollReveal'

const About = () => {
    return (
        <section className='w-full bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 py-10 md:py-20 '>
                <div className='flex flex-col justify-center items-center mb-8 md:mb-10'>
                    <ScrollReveal 
                        containerClassName="text-4xl md:text-6xl font-bold text-gray-500 mb-6"
                        textClassName=""
                        baseOpacity={0.2}
                        baseRotation={2}
                        blurStrength={3}
                        rotationEnd="bottom center"
                        wordAnimationEnd="bottom center"
                    >
                        About Me
                    </ScrollReveal>
                    <ScrollReveal 
                        containerClassName="text-gray-300 text-lg md:text-xl text-center px-4 md:px-0 py-2"
                        textClassName=""
                        baseOpacity={0.1}
                        baseRotation={1}
                        blurStrength={2}
                        rotationEnd="bottom center"
                        wordAnimationEnd="bottom center"
                    >
                        Hi, I'm Aryan Kawale, a passionate Web Developer currently pursuing a Bachelor of Computer 
                        Applications (BCCA) at G.H. Raisoni College, Nagpur. I enjoy building clean, functional, 
                        and user-friendly websites while constantly learning new technologies. I have a good foundation 
                        in HTML, CSS, and JavaScript and I'm exploring full-stack development to strengthen my skills further.
                         Alongside coding, I'm also interested in content creation, digital marketing, and problem-solving
                          projects that combine creativity with technology. My long-term goal is to grow as a skilled 
                          developer and build innovative solutions that make an impact.
                    </ScrollReveal>
                </div>
            </div>
        </section>

    )
}

export default About