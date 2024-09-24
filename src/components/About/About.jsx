import React from 'react';
import './About.css';

const About = () => {
  const staticImages = [
    { id: 1, src: "HTML.png", alt: "html" },
    { id: 2, src: "CSS-Logo.png", alt: "css" },
    { id: 3, src: "Javascript.png", alt: "javascript" },
    { id: 4, src: "React.png", alt: "react" },
    { id: 5, src: "node.png", alt: "node" },
    { id: 6, src: "express.png", alt: "express" },
    { id: 7, src: "mongoDB.png", alt: "mongoDB" },
  ];

  const services = [
    // Example data, replace with your actual service data
    { title: "HTML"  },
    { title: "CSS"},
    { title: "JavaScript" },
    { title: "React" },
    { title: "Node.js" },
    { title: "Express.js"},
    { title: "MongoDB" }
  ];

  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
       </div>
      <div className="about-sections">
       
        <div className="about-sections">
          <div className="about-para">
            <p>
              Hi, I’m Sneha Singh, a dedicated web developer with expertise in the MERN stack. I specialize in creating dynamic, user-friendly applications using MongoDB, Express.js, React, and Node.js. My passion lies in transforming complex ideas into seamless digital experiences that drive innovation and user engagement.
            </p>
            <p>
              With a focus on clean code and efficient design, I deliver high-quality solutions that meet real-world needs. Whether it's building intuitive front-ends or robust back-ends, I’m committed to excellence and staying updated with industry trends. Let’s connect and explore how we can bring your next project to life!
            </p>
          </div>
          <div className="about-skills">
            <div className="container grid grid-three-cols">
              {services.map((service, index) => {
                const image = staticImages[index % staticImages.length]; // Use modulo to cycle through images

                return (
                  <div className="card" key={index}>
                    <div className="card-img">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        width="100%" 
                        height="auto" 
                      />
                    </div>
                    <div className="card-details">
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
