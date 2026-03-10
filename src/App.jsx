import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Twitter, Mail, ChevronDown, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">&lt;/&gt;</div>
            Developer X
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>

          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-accent-line"></div>
              <h1 className="hero-title">I'm Maxwell, a<br />Full-Stack Developer</h1>
              <p className="hero-description">
                I build real-world digital systems that solve problems. From web applications and progressive web apps to mobile solutions, I create practical software that makes a difference.
              </p>
            </div>

            <div className="hero-image-section">
              <div className="hero-image">
                <div className="image-circle">
                  <img src="/images/profile.png" alt="Maxwell Mwendwa" />
                </div>
              </div>
            </div>

            <div className="hero-info">
              <div className="info-block">
                <h3>ABOUT ME</h3>
                <p>I'm a BBIT student with a passion for building real systems that solve real problems through modern technologies.</p>
                <a href="#about" className="link-arrow">LEARN MORE →</a>
              </div>

              <div className="info-block">
                <h3>MY WORK</h3>
                <p>Focus on beautiful, scalable alternatives. I create elegant, well-structured code for building exceptional applications.</p>
                <a href="#projects" className="link-arrow">BROWSE PORTFOLIO →</a>
              </div>

              <div className="info-block">
                <h3>FOLLOW ME</h3>
                <div className="social-icons">
                 
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
                  <a href="https://linkedin.com/in/maxwell-mwendwa-3ab791286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                 
                  <a href="https://github.com/maxwell123767" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
                </div>
              </div>

              <div className="stats-bar">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years of Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Successful Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>I've been developing websites and apps since 2024</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                As a full-stack developer and what I call a "vibe coder," I approach every project with both technical precision and creative intuition. I believe great software isn't just functional—it's intuitive, efficient, and built with the user's experience in mind.
              </p>
              <a href="#" className="link-arrow">More about me →</a>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>2</h3>
                <p>Years of<br />experience</p>
              </div>
              <div className="stat-card">
                <h3>10</h3>
                <p>Successful<br />projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="skills-header">
            <h2>My extensive list of skills</h2>
            <div className="skills-nav">
              <button className="nav-btn"><ChevronLeft size={20} /></button>
              <button className="nav-btn"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Flask</li>
                <li>RESTful APIs</li>
                <li>Authentication & Security</li>
                <li>Server Architecture</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Databases & Tools</h3>
              <ul>
                <li>MongoDB</li>
                <li>MySQL & PostgreSQL</li>
                <li>Firebase</li>
                <li>Git & GitHub</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Other Expertise</h3>
              <ul>
                <li>Mobile Development</li>
                <li>UI/UX Principles</li>
                <li>Data Management</li>
                <li>Problem Solving</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/images/notifyhub.jpg" alt="NotifyHub" />
                <div className="project-overlay">
                  <a href="https://notifyhub.netlify.app" target="_blank" rel="noopener noreferrer" className="project-visit-btn">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>NotifyHub</h3>
                  <a href="https://notifyhub.netlify.app" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                </div>
                <p className="project-description">
                  A digital event and announcement platform designed to replace traditional notice boards. Perfect for schools, organizations, and communities.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/images/attendiq.jpg" alt="AttendIQ" />
                <div className="project-overlay">
                  <a href="https://attendiq-app.netlify.app" target="_blank" rel="noopener noreferrer" className="project-visit-btn">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>AttendIQ</h3>
                  <a href="https://attendiq-app.netlify.app" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                </div>
                <p className="project-description">
                  A Progressive Web App that transforms how organizations track attendance. Works seamlessly on any device, even offline.
                </p>
                <div className="project-tech">
                  <span>PWA</span>
                  <span>React</span>
                  <span>Service Workers</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/images/femcollege.png" alt="FEM Leadership College Website" />
                <div className="project-overlay">
                  <a href="https://femleadershipcollege.co.ke" target="_blank" rel="noopener noreferrer" className="project-visit-btn">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>FEM Leadership College Website</h3>
                  <a href="https://femleadershipcollege.co.ke" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                </div>
                <p className="project-description">
                  A comprehensive college website with an integrated online application form system. Designed to enhance digital presence and simplify admissions.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Express</span>
                  <span>Form Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Services I Offer</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Website Development</h3>
              <p>
                Custom website development tailored to your needs. From responsive corporate websites to feature-rich web applications, I create sites that are fast, secure, and optimized for performance.
              </p>
            </div>

            <div className="service-card">
              <h3>Progressive Web Apps</h3>
              <p>
                Build powerful PWAs that work like native apps but run in the browser. I develop apps that work offline, load instantly, and provide engaging user experiences.
              </p>
            </div>

            <div className="service-card">
              <h3>Online Application Forms</h3>
              <p>
                Design and implement sophisticated online application form systems. I create forms that streamline data collection, validate information in real-time, and integrate seamlessly.
              </p>
            </div>

            <div className="service-card">
              <h3>Resume & CV Design</h3>
              <p>
                Professional resume and CV design that stands out. I create visually appealing, ATS-friendly documents that highlight your qualifications effectively.
              </p>
            </div>

            <div className="service-card">
              <h3>Poster & Flyer Design</h3>
              <p>
                Eye-catching poster and flyer designs for events, promotions, and announcements. I create visually compelling designs that communicate effectively.
              </p>
            </div>

            <div className="service-card">
              <h3>Data Entry & Typing</h3>
              <p>
                Accurate and efficient data entry and academic typing services. I handle documents with precision and attention to detail with fast turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Let's Work Together</h2>
          </div>

          <div className="contact-content">
            <p className="contact-message">
              I'm always excited to discuss new projects, collaborate on innovative ideas, and take on freelance work that challenges me to grow.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <Mail size={24} />
                <div>
                  <p>Email</p>
                  <a href="mailto:maxwellmwendwa28@gmail.com">maxwellmwendwa28@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <Linkedin size={24} />
                <div>
                  <p>LinkedIn</p>
                  <a href="https://linkedin.com/in/maxwell-mwendwa-3ab791286" target="_blank" rel="noopener noreferrer">linkedin.com/in/maxwell</a>
                </div>
              </div>
              <div className="info-item">
                <Github size={24} />
                <div>
                  <p>GitHub</p>
                  <a href="https://github.com/maxwell123767" target="_blank" rel="noopener noreferrer">github.com/maxwell</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Maxwell Mwendwa. All rights reserved. | Crafted with passion for innovation and excellence.</p>
        </div>
      </footer>
    </div>
  );
}