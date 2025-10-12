import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Code, Smartphone, Brain, Cpu, Palette, FileText,
  MessageSquare, Headphones, Clock, Shield, DollarSign,
  Award, Users, Mail, Phone, Instagram, Linkedin, MessageCircle, Github,
  ChevronRight, Sparkles, Zap, Target
} from 'lucide-react';

// Custom Hook for observing elements
const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      observedEntries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    return () => observer.current?.disconnect();
  }, [options]);

  const observe = (element) => {
    if (element && observer.current) {
      observer.current.observe(element);
    }
  };

  return [observe];
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [observe] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Add refs to all elements that need animation
  const animatedElementsRef = useRef([]);
  useEffect(() => {
    animatedElementsRef.current.forEach(el => observe(el));
  }, [observe]);
  
  const addToRefs = (el) => {
      if (el && !animatedElementsRef.current.includes(el)) {
          animatedElementsRef.current.push(el);
      }
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappNumber = "9025895743"; // Replace with actual number
  const whatsappMessage = "Hi! I want to discuss a project.";
  const whatsappLink = `https://wa.me/${9025895743}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const navLinks = ['home', 'about', 'projects', 'founders', 'contact'];

  // This is a neat trick to inject global styles in a React component
  const GlobalStyles = () => (
    <style jsx global>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes background-pan {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
            box-shadow: 0 0 10px 0px #a78bfa, 0 0 20px 0px #a78bfa80;
        }
        50% {
            box-shadow: 0 0 20px 5px #a78bfa, 0 0 40px 10px #a78bfa80;
        }
      }
      
      .animated-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .animated-element.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animated-element.delay-1 { transition-delay: 0.1s; }
      .animated-element.delay-2 { transition-delay: 0.2s; }
      .animated-element.delay-3 { transition-delay: 0.3s; }
      .animated-element.delay-4 { transition-delay: 0.4s; }
      .animated-element.delay-5 { transition-delay: 0.5s; }
      
      .gradient-text {
        background: linear-gradient(to right, #a78bfa, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    `}</style>
  );

  return (
    <div className="bg-[#0a092d] text-slate-300 font-sans antialiased overflow-x-hidden">
      <GlobalStyles />
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div onClick={() => scrollToSection('home')} className="flex items-center space-x-3 cursor-pointer group">
              <div className="p-2 bg-purple-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Code className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                ProjectHub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
                </button>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:scale-105 transition-all duration-300 transform"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-lg">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-slate-300 hover:text-white hover:bg-slate-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg shadow-purple-600/30 hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a092d] to-slate-900 opacity-80"></div>
          {/* Animated Gradient Blobs */}
          <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6 animated-element" ref={addToRefs}>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300 shadow-lg">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 500+ Students Nationwide</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              <span className="block animated-element delay-1" ref={addToRefs}>We Build <span className="gradient-text">Web, App, AI, IoT</span></span>
              <span className="block mt-2 sm:mt-4 animated-element delay-2" ref={addToRefs}>& Final Year Projects</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-3" ref={addToRefs}>
              Complete Project with Source Code, Report, PPT & Viva Support for College Students.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animated-element delay-4" ref={addToRefs}>
              <button onClick={() => scrollToSection('services')} className="group inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-purple-600 rounded-full shadow-lg shadow-purple-600/40 hover:bg-purple-700 hover:scale-105 transition-all duration-300 transform">
                <span>Get a Project</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 text-lg font-bold text-white bg-slate-700/50 border border-slate-600 rounded-full hover:bg-slate-700 hover:scale-105 transition-all duration-300 transform">
                Contact Us
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white animated-element delay-5" ref={addToRefs}>
                {[
                  { label: 'Projects Completed', value: '500+' },
                  { label: 'Happy Students', value: '450+' },
                  { label: 'Success Rate', value: '98%' },
                  { label: 'On-Time Delivery', value: '100%' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
            </div>

          </div>
        </section>
        
        {/* Sections Wrapper */}
        <div className="relative bg-slate-900 z-10">

          {/* Why Choose Us */}
          <section id="benefits" className="py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Why Choose <span className="gradient-text">Us?</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  We deliver quality projects that help you succeed in academics
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { icon: Clock, title: 'On-Time Delivery', desc: 'Never miss your submission deadline' },
                  { icon: Shield, title: '100% Original', desc: 'Unique and plagiarism-free projects' },
                  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Student-friendly packages' },
                  { icon: Award, title: 'Industry Quality', desc: 'Professional-grade solutions' },
                  { icon: Users, title: 'Student Support', desc: '24/7 assistance and guidance' }
                ].map((benefit, index) => (
                  <div key={index} ref={addToRefs} className={`animated-element delay-${index+1} p-8 bg-slate-800/50 border border-slate-700 rounded-2xl text-center flex flex-col items-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-lg`}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white">
                        <benefit.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Us */}
          <section id="about" className="py-20 sm:py-32 bg-[#0a092d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="animated-element" ref={addToRefs}>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    About <span className="gradient-text">ProjectHub</span>
                  </h2>
                  <p className="mt-6 text-lg text-slate-400">
                    We are students from Mailam Engineering College helping others with quality project development.
                    Started in 2023, we've successfully delivered 500+ projects to students across various domains.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600 text-white">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Our Mission</h3>
                        <p className="mt-1 text-slate-400">To empower students with real-world, industry-standard projects that enhance their academic and professional journey.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600 text-white">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Our Vision</h3>
                        <p className="mt-1 text-slate-400">To become the leading platform for academic project development, bridging the gap between theory and practical implementation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative animated-element delay-2" ref={addToRefs}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl transform -rotate-3"></div>
                  <div className="relative p-8 bg-slate-800 rounded-3xl shadow-2xl text-center">
                      <div className="text-8xl font-black gradient-text">500+</div>
                      <div className="mt-2 text-2xl font-bold text-white">Projects Delivered</div>
                      <div className="mt-2 text-slate-400">Making Students Successful</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Our <span className="gradient-text">Services</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Comprehensive project solutions tailored for your academic needs
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Code, title: 'Web App Development', desc: 'Full-stack web applications using modern frameworks' },
                  { icon: Smartphone, title: 'Mobile App Development', desc: 'iOS & Android apps with native and cross-platform' },
                  { icon: Brain, title: 'AI & ML Projects', desc: 'Machine learning models and AI-powered solutions' },
                  { icon: Cpu, title: 'IoT & Embedded Systems', desc: 'Arduino, Raspberry Pi, and IoT implementations' },
                  { icon: Palette, title: 'UI/UX Design', desc: 'Professional Figma designs and prototypes' },
                  { icon: FileText, title: 'Final Year Projects', desc: 'Complete academic projects with documentation' },
                  { icon: MessageSquare, title: 'Report & PPT', desc: 'Professional documentation and presentations' },
                  { icon: Headphones, title: 'Viva Support', desc: 'Technical guidance and interview preparation' }
                ].map((service, index) => (
                  <div key={index} ref={addToRefs} className={`animated-element delay-${index % 4 + 1} p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-lg group`}>
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-slate-700 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 flex-grow">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sample Projects */}
          <section id="projects" className="py-20 sm:py-32 bg-[#0a092d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Sample <span className="gradient-text">Projects</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Check out some of our recently delivered projects
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: 'E-Commerce Platform', desc: 'Full-stack online shopping platform with payment integration', tech: ['React', 'Node.js', 'MongoDB'], category: 'Web Development' },
                  { title: 'Chatbot with AI', desc: 'Intelligent chatbot using NLP and machine learning', tech: ['Python', 'TensorFlow', 'Flask'], category: 'AI & ML' },
                  { title: 'Smart Home Automation', desc: 'IoT-based home automation system with mobile control', tech: ['Arduino', 'ESP32', 'React Native'], category: 'IoT' },
                  { title: 'Social Media App', desc: 'Mobile social networking app with real-time features', tech: ['React Native', 'Firebase', 'Redux'], category: 'Mobile App' },
                  { title: 'Disease Prediction System', desc: 'ML model to predict diseases based on symptoms', tech: ['Python', 'Scikit-learn', 'Django'], category: 'AI & ML' },
                  { title: 'Expense Tracker', desc: 'Personal finance management web application', tech: ['Vue.js', 'Express', 'PostgreSQL'], category: 'Web Development' }
                ].map((project, index) => (
                  <div key={index} ref={addToRefs} className={`animated-element delay-${index % 3 + 1} bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-300`}>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">{project.category}</div>
                      <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm text-slate-400 flex-grow">{project.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/50 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 px-6 py-4">
                      <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold text-purple-400 hover:text-white group-hover:text-white transition-colors duration-300">
                        Request Similar Project &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Founders */}
          <section id="founders" className="py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Meet Our <span className="gradient-text">Founders</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Passionate students helping fellow students succeed
                </p>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-2">
                {[
                  { name: 'Sambath S', role: 'Co-founder & Developer', bio: 'Full-stack developer specializing in web and mobile applications. Passionate about creating scalable solutions.', avatar: 'https://placehold.co/128x128/a78bfa/FFFFFF?text=SS' },
                  { name: 'Thamizh Kumaran MDR', role: 'Co-founder & Embedded/AI Specialist', bio: 'Expert in IoT, embedded systems, and AI/ML. Focused on building intelligent automation solutions.', avatar: 'https://placehold.co/128x128/60a5fa/FFFFFF?text=TK' }
                ].map((founder, index) => (
                  <div key={index} ref={addToRefs} className={`animated-element delay-${index+1} p-8 bg-slate-800/50 border border-slate-700 rounded-2xl text-center flex flex-col items-center hover:border-purple-500 hover:scale-105 transition-all duration-300 shadow-lg`}>
                    <img className="h-32 w-32 rounded-full ring-4 ring-purple-500/50" src={founder.avatar} alt={founder.name} />
                    <h3 className="mt-6 text-xl font-bold text-white">{founder.name}</h3>
                    <div className="text-sm font-semibold text-purple-400">{founder.role}</div>
                    <p className="mt-4 text-slate-400 text-sm">{founder.bio}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 max-w-3xl mx-auto text-center animated-element delay-3" ref={addToRefs}>
                  <p className="text-xl italic text-slate-300">
                    "We started this startup to help students build real-world, high-quality projects that not only secure good grades but also prepare them for their professional careers."
                  </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20 sm:py-32 bg-[#0a092d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Ready to start your project? Contact us today!
                </p>
              </div>

              <div className="mt-16 grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 animated-element" ref={addToRefs}>
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                      <input id="name" type="text" placeholder="Your name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                      <input id="email" type="email" placeholder="your@email.com" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                      <input id="phone" type="tel" placeholder="+91 12345 67890" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                      <textarea id="message" rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" />
                    </div>
                    <button type="submit" className="w-full px-8 py-3 text-lg font-bold text-white bg-purple-600 rounded-full shadow-lg shadow-purple-600/40 hover:bg-purple-700 hover:scale-105 transition-all duration-300 transform">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8 animated-element delay-2" ref={addToRefs}>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 text-purple-400"><Mail /></div>
                        <div>
                          <div className="text-sm text-slate-400">Email</div>
                          <a href="mailto:contact@projecthub.com" className="text-white hover:text-purple-400 transition">contact@projecthub.com</a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 text-purple-400"><Phone /></div>
                        <div>
                          <div className="text-sm text-slate-400">Phone</div>
                          <a href="tel:+911234567890" className="text-white hover:text-purple-400 transition">+91 12345 67890</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: Instagram, href: '#' },
                        { icon: Linkedin, href: '#' }
                      ].map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-700 text-slate-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                          <social.icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a092d] border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Code className="text-white h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-white">ProjectHub</span>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Empowering students with quality academic and technical projects. Your success is our mission.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Quick Links</h4>
              <div className="mt-4 space-y-2">
                {['Home', 'About', 'Projects', 'Founders', 'Contact'].map((link) => (
                  <button key={link} onClick={() => scrollToSection(link.toLowerCase())} className="block text-base text-slate-400 hover:text-white transition-colors duration-200">
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base font-semibold text-slate-300 tracking-wider uppercase">Contact Us</h4>
              <div className="mt-4 space-y-4 text-base text-slate-400">
                <a href="mailto:contact@projecthub.com" className="flex items-center space-x-2 hover:text-white">
                  <Mail className="h-5 w-5"/><span>Email</span>
                </a>
                <a href="tel:+911234567890" className="flex items-center space-x-2 hover:text-white">
                  <Phone className="h-5 w-5"/><span>Phone</span>
                </a>
                <h4 className="text-base font-semibold text-slate-300 tracking-wider uppercase">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Github /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Linkedin /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Instagram /></a>
              </div>
              </div>
            </div>

            {/* Services & Social */}
            <div>
              <h4 className="text-base font-semibold text-slate-300 tracking-wider uppercase">Services</h4>
              <div className="mt-4 space-y-2 text-base text-slate-400">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>AI & ML</div>
                <div>IoT Projects</div>
                <div>UI/UX Design</div>
              </div>

              
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} ProjectHub. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ by Sambath & Thamizh</p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 h-16 w-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-pulse"
        style={{ animation: 'pulse-glow 2s infinite' }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </div>
    

  );
}

export default App;

