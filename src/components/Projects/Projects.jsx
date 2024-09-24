import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: "ACONEWS", src: "ACONEWS.jpg", alt: "ACONEWS", link: "https://github.com/snehasingh53/aconews" },
    { title: "MessageApp", src: "MessageApp.jpg", alt: "MessageApp", link: "https://github.com/snehasingh53/Chat-App" },
    { title: "Mentorify", src: "mentorify.jpg", alt: "Mentorify", link: "https://github.com/snehasingh53/mentorify-" },
    { title: "Weather App", src: "weatherApp.png", alt: "WeatherApp", link: "https://github.com/snehasingh53/weatherApp" },
    { title: "Spotify Clone", src: "spotify.png", alt: "Spotify", link: "https://github.com/snehasingh53/spotify-clone-using-html-css-and-javascript" },
    { title: "Movie Booking", src: "moviebooking.png", alt: "Movie Booking", link: "https://github.com/snehasingh53/moviebooking" },
    { title: "Analog Clock", src: "analog-clock.jpg", alt: "Analog Clock", link: "https://github.com/snehasingh53/analogclock" },
    { title: "Bank Churn", src: "Churn.png", alt: "Churn", link: "https://github.com/snehasingh53/bank-churn" },
    { title: "To-Do List", src: "to-do.png", alt: "To-Do List", link: "https://github.com/snehasingh53/todo" },
    { title: "Calculator", src: "calc.jpg", alt: "Calculator", link: "https://github.com/snehasingh53/calc" },
  ];

  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-skills">
        <div className="container grid grid-three-cols">
          {projects.map((project, index) => (
            <div className="card" key={index} onClick={() => window.open(project.link, "_blank")}>
              <div className="card-img">
                <img 
                  src={project.src} 
                  alt={project.alt} 
                  width="100%" 
                  height="auto" 
                />
              </div>
              <div className="card-details">
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
