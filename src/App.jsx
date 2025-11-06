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
  const [result, setResult] = useState("");
  const [observe] = useIntersectionObserver({ threshold: 0.1 });

  // sendmessage: submits form to web3forms API
  const sendmessage = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "4bca6f80-2622-48e0-adc6-a94eaada23f1");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(data.success ? "Success!" : "Error");
      if (data.success) {
        // optional: show a quick success alert
        alert('Message sent successfully.');
        event.target.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      console.error('sendmessage error', err);
      setResult('Error');
      alert('An error occurred while sending the message.');
    }
  };

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
  const externalLinks = ['blog'];

  // Note: form submissions are handled by sendmessage (Web3Forms API)

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
                PRIONEX
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
                href="/blog"
                className="capitalize text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
              </a>
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
              href="/blog"
              className="capitalize text-slate-300 hover:text-white hover:bg-slate-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              blog
            </a>
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
                <span>Trusted by 50+ Professionals Nationwide</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              <span className="block animated-element delay-1" ref={addToRefs}>We Build <span className="gradient-text">Web, App, AI, IoT</span></span>
              <span className="block mt-2 sm:mt-4 animated-element delay-2" ref={addToRefs}>& Final Year Projects</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-3" ref={addToRefs}>
              Complete <strong>IoT, AI/ML, Web & Mobile App Projects</strong> with Source Code, 
              Professional Documentation, PPT Presentations & Comprehensive Viva Support for 
              <strong> Final Year Students</strong> and <strong>Working Professionals</strong>.
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
                  { label: 'Product Quality', value: '100%' },
                  { label: 'Transparency', value: '100%' },
                  { label: 'Success Rate', value: '100%' },
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
                    About <span className="gradient-text">PRIONEX</span>
                  </h2>
                  <p className="mt-6 text-lg text-slate-400">
                    We are <strong>engineering students from Mailam Engineering College</strong> specializing in 
                    <strong> IoT project development</strong>, <strong>AI/ML solutions</strong>, 
                    <strong> web application development</strong>, and <strong>mobile app creation</strong>. 
                    Since 2023, we've successfully delivered 50+ industry-standard projects helping students excel in their 
                    <strong> final year projects</strong> and <strong>academic assessments</strong>.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                       className="inline-flex items-center text-purple-300 hover:text-white font-medium"
                       title="Prionex Services - IoT, AI/ML, Web & Mobile Development">
                      Explore Services <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                       className="inline-flex items-center text-purple-300 hover:text-white font-medium"
                       title="Sample Final Year Projects Portfolio">
                      View Projects <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="#founders" onClick={(e) => { e.preventDefault(); scrollToSection('founders'); }} 
                       className="inline-flex items-center text-purple-300 hover:text-white font-medium"
                       title="Meet Prionex Founders - Technical Expertise">
                      Meet Founders <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                       className="inline-flex items-center text-purple-300 hover:text-white font-medium"
                       title="Contact Prionex for Project Development">
                      Get Started <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
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
                      <div className="text-8xl font-black gradient-text">50+</div>
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
                  { 
                    icon: Code, 
                    title: 'Web App Development', 
                    desc: 'Full-stack web applications using React, Node.js, Python Django, and modern frameworks with responsive design',
                    keywords: 'React development, Node.js, Django, full-stack development',
                    link: '#contact'
                  },
                  { 
                    icon: Smartphone, 
                    title: 'Mobile App Development', 
                    desc: 'Cross-platform iOS & Android apps using React Native, Flutter, with native performance and modern UI',
                    keywords: 'React Native, Flutter, mobile apps, iOS, Android',
                    link: '#contact'
                  },
                  { 
                    icon: Brain, 
                    title: 'AI & ML Projects', 
                    desc: 'Machine learning models, data analysis, computer vision, NLP solutions using Python, TensorFlow, PyTorch',
                    keywords: 'machine learning, AI projects, Python, TensorFlow, data science',
                    link: '#contact'
                  },
                  { 
                    icon: Cpu, 
                    title: 'IoT & Embedded Systems', 
                    desc: 'Arduino, Raspberry Pi, ESP32 projects with sensor integration, cloud connectivity, and automation',
                    keywords: 'IoT projects, Arduino, Raspberry Pi, embedded systems, sensors',
                    link: '#contact'
                  },
                  { 
                    icon: Palette, 
                    title: 'UI/UX Design', 
                    desc: 'Professional Figma designs, user experience research, prototyping, and modern interface design',
                    keywords: 'UI UX design, Figma, prototyping, user experience',
                    link: '#contact'
                  },
                  { 
                    icon: FileText, 
                    title: 'Final Year Projects', 
                    desc: 'Complete academic projects with source code, technical documentation, literature review, and methodology',
                    keywords: 'final year projects, academic projects, student projects, documentation',
                    link: '#projects'
                  },
                  { 
                    icon: MessageSquare, 
                    title: 'Report & PPT', 
                    desc: 'Professional project documentation, technical reports, presentation slides, and academic writing',
                    keywords: 'project reports, technical documentation, presentations, academic writing',
                    link: '#contact'
                  },
                  { 
                    icon: Headphones, 
                    title: 'Viva Support', 
                    desc: 'Technical guidance, project explanation coaching, interview preparation, and presentation skills training',
                    keywords: 'viva support, technical guidance, interview preparation, presentation skills',
                    link: '#contact'
                  }
                ].map((service, index) => (
                  <article 
                    key={index} 
                    ref={addToRefs} 
                    className={`animated-element delay-${index % 4 + 1} p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-lg group cursor-pointer`}
                    onClick={() => scrollToSection(service.link.replace('#', ''))}
                    itemScope 
                    itemType="https://schema.org/Service"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-slate-700 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white" itemProp="name">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 flex-grow" itemProp="description">{service.desc}</p>
                    <div className="mt-4 text-xs text-slate-500 italic" itemProp="keywords">{service.keywords}</div>
                    <button 
                      className="mt-4 text-purple-300 hover:text-white text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
                      aria-label={`Learn more about ${service.title} services`}
                    >
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Sample Projects */}
          <section id="projects" className="py-20 sm:py-32 bg-[#0a092d]" itemScope itemType="https://schema.org/WebPage">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs} itemProp="name">
                  Featured <span className="gradient-text">Projects Portfolio</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs} itemProp="description">
                  Explore our successfully delivered projects showcasing expertise in web development, AI/ML, IoT solutions, and mobile applications with complete source code and documentation
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { 
                    title: 'E-Commerce Platform', 
                    desc: 'Full-stack online shopping platform with secure payment integration, inventory management, user authentication, and responsive design using modern web technologies', 
                    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'], 
                    category: 'Web Development',
                    keywords: 'e-commerce development, React projects, payment integration, online store',
                    deliverables: 'Source Code, Database, Documentation, PPT'
                  },
                  { 
                    title: 'Chatbot with AI', 
                    desc: 'Intelligent conversational AI chatbot using natural language processing, machine learning algorithms, and sentiment analysis for customer support automation', 
                    tech: ['Python', 'TensorFlow', 'Flask', 'NLP'], 
                    category: 'AI & ML',
                    keywords: 'AI chatbot, machine learning, NLP projects, conversational AI',
                    deliverables: 'ML Model, Source Code, Training Data, Report'
                  },
                  { 
                    title: 'Smart Home Automation', 
                    desc: 'IoT-based home automation system with sensor integration, mobile app control, voice commands, and real-time monitoring dashboard for smart living', 
                    tech: ['Arduino', 'ESP32', 'React Native', 'Firebase'], 
                    category: 'IoT Projects',
                    keywords: 'IoT automation, Arduino projects, smart home, ESP32 development',
                    deliverables: 'Hardware Setup, Mobile App, Documentation, Demo'
                  },
                  { 
                    title: 'Social Media App', 
                    desc: 'Cross-platform mobile social networking application with real-time messaging, photo sharing, user profiles, and push notifications using React Native', 
                    tech: ['React Native', 'Firebase', 'Redux', 'Expo'], 
                    category: 'Mobile App Development',
                    keywords: 'React Native app, social media development, mobile projects, cross-platform',
                    deliverables: 'APK File, Source Code, UI Design, Testing Report'
                  },
                  { 
                    title: 'Disease Prediction System', 
                    desc: 'Machine learning model for disease prediction based on symptom analysis, medical data processing, and health risk assessment with web interface', 
                    tech: ['Python', 'Scikit-learn', 'Django', 'Pandas'], 
                    category: 'AI & ML',
                    keywords: 'healthcare AI, disease prediction, medical ML, health analytics',
                    deliverables: 'ML Model, Web Interface, Dataset, Research Paper'
                  },
                  { 
                    title: 'Expense Tracker', 
                    desc: 'Personal finance management web application with budget tracking, expense categorization, financial reports, and data visualization features', 
                    tech: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'], 
                    category: 'Web Development',
                    keywords: 'finance app, budget tracker, Vue.js projects, data visualization',
                    deliverables: 'Web App, Database, Financial Reports, User Manual'
                  }
                ].map((project, index) => (
                  <article 
                    key={index} 
                    ref={addToRefs} 
                    className={`animated-element delay-${index % 3 + 1} bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-300 cursor-pointer`}
                    onClick={() => scrollToSection('contact')}
                    itemScope 
                    itemType="https://schema.org/CreativeWork"
                  >
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-semibold uppercase tracking-wider text-purple-400" itemProp="genre">{project.category}</div>
                      <h3 className="mt-2 text-xl font-bold text-white" itemProp="name">{project.title}</h3>
                      <p className="mt-3 text-sm text-slate-400 flex-grow" itemProp="description">{project.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/50 rounded-full" itemProp="keywords">{tech}</span>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-slate-500 italic">
                        <strong>Keywords:</strong> {project.keywords}
                      </div>
                      <div className="mt-2 text-xs text-green-400">
                        <strong>Deliverables:</strong> {project.deliverables}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 px-6 py-4">
                      <button 
                        className="text-sm font-semibold text-purple-400 hover:text-white group-hover:text-white transition-colors duration-300 flex items-center"
                        aria-label={`Request similar project like ${project.title}`}
                      >
                        Request Similar Project <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <nav className="inline-flex items-center space-x-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium flex items-center transition-colors"
                    aria-label="Get custom project development quote"
                  >
                    Get Your Project Quote <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-medium flex items-center transition-colors"
                    aria-label="View all development services"
                  >
                    View All Services <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </nav>
              </div>
            </div>
          </section>

          {/* Founders */}
          <section id="founders" className="py-20 sm:py-32 bg-[#0a092d]" itemScope itemType="https://schema.org/Organization">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Meet Our <span className="gradient-text">Expert Founders</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Engineering students from Mailam Engineering College with expertise in web development, AI/ML, IoT, and mobile app development, dedicated to delivering quality academic and industry projects
                </p>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-2">
                {[
                  { 
                    name: 'Sambath S', 
                    role: 'Co-founder & Full-Stack Developer/AI Specialist', 
                    bio: 'Expert full-stack developer specializing in React, Node.js, Python, AI/ML projects, and web application development. Passionate about creating scalable solutions and helping students with final year projects.',
                    expertise: 'React, Node.js, Python, AI/ML, Web Development, Final Year Projects',
                    education: 'B.E. Computer Science - Mailam Engineering College',
                    avatar: 'https://placehold.co/128x128/a78bfa/FFFFFF?text=SS', 
                    github: 'https://github.com/crazy-sam-02', 
                    linkedin: 'https://www.linkedin.com/in/sambath-siva-059ba3299/', 
                    instagram: 'https://www.instagram.com/crazy_sam_02/?utm_source=ig_web_button_share_sheet' 
                  },
                  { 
                    name: 'Thamizh Kumaran MDR', 
                    role: 'Co-founder & IoT/Embedded Systems Developer', 
                    bio: 'Specialized IoT and embedded systems expert with hands-on experience in Arduino, ESP32, Raspberry Pi, sensor integration, and intelligent automation solutions for academic and industrial projects.',
                    expertise: 'Arduino, ESP32, IoT Development, Embedded Systems, Automation, Hardware Integration',
                    education: 'B.E. Electronics - Mailam Engineering College',
                    avatar: 'https://placehold.co/128x128/60a5fa/FFFFFF?text=TK', 
                    github: '#', 
                    linkedin: 'https://www.linkedin.com/in/thamizh-kumaran-m-d-r-970ab0293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
                    instagram: 'https://www.instagram.com/mr.lone_ranger_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
                  }
                ].map((founder, index) => (
                  <article 
                    key={index} 
                    ref={addToRefs} 
                    className={`animated-element delay-${index+1} p-8 bg-slate-800/50 border border-slate-700 rounded-2xl text-center flex flex-col items-center hover:border-purple-500 hover:scale-105 transition-all duration-300 shadow-lg`}
                    itemScope 
                    itemType="https://schema.org/Person"
                  >
                    <div className="relative">
                      <img 
                        className="h-32 w-32 rounded-full ring-4 ring-purple-500/50" 
                        src={founder.avatar} 
                        alt={`${founder.name} - ${founder.role} at Prionex`}
                        itemProp="image"
                      />
                      {/* small logo badge overlay */}
                      <div className="absolute -bottom-1 -right-1 bg-slate-900/70 border border-purple-500 rounded-full p-1">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white" itemProp="name">{founder.name}</h3>
                    <div className="text-sm font-semibold text-purple-400" itemProp="jobTitle">{founder.role}</div>
                    <div className="text-xs text-slate-500 mt-1" itemProp="affiliation">{founder.education}</div>
                    <p className="mt-4 text-slate-400 text-sm" itemProp="description">{founder.bio}</p>
                    
                    <div className="mt-4 text-xs text-slate-500">
                      <strong>Expertise:</strong> <span itemProp="knowsAbout">{founder.expertise}</span>
                    </div>

                    {/* Social icons (Github, LinkedIn, Instagram) */}
                    <div className="mt-6 flex items-center justify-center gap-3">
                      {[
                        { Icon: Github, href: founder.github, label: `${founder.name} on GitHub`, prop: 'url' },
                        { Icon: Linkedin, href: founder.linkedin, label: `${founder.name} on LinkedIn`, prop: 'sameAs' },
                        { Icon: Instagram, href: founder.instagram, label: `${founder.name} on Instagram`, prop: 'sameAs' }
                      ].map((social, sidx) => (
                        <a 
                          aria-label={social.label} 
                          key={sidx} 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                          itemProp={social.prop}
                        >
                          <social.Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="mt-6 text-purple-300 hover:text-white text-sm font-medium flex items-center transition-colors"
                      aria-label={`Contact ${founder.name} for project consultation`}
                    >
                      Get Project Consultation <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </article>
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
          <section id="contact" className="py-20 sm:py-32">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight animated-element" ref={addToRefs}>
                  Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 animated-element delay-1" ref={addToRefs}>
                  Ready to start your project? Contact us today!
                </p>
              </div>

              <div className="mt-16 grid lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 animated-element" ref={addToRefs}>
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                  <form className="space-y-6" onSubmit={sendmessage} >
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                        <input 
                          id="name" 
                          name="name" 
                          type="text" 
                          placeholder="Your name" 
                          required
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                        <input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" 
                        />
                      </div>
                    </div>

                    {/* Phone and Category Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                        <input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="+91 9876543210" 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-slate-400 mb-2">Project Category *</label>
                        <select 
                          name="category" 
                          id="category"
                          required
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-900 text-slate-400">Choose Category</option>
                          <option value="Web App Development" className="bg-slate-900 text-white">Web App Development</option>
                          <option value="Mobile App Development" className="bg-slate-900 text-white">Mobile App Development</option>
                          <option value="AI & ML Projects" className="bg-slate-900 text-white">AI & ML Projects</option>
                          <option value="IoT & Embedded Systems" className="bg-slate-900 text-white">IoT & Embedded Systems</option>
                          <option value="UI/UX Design" className="bg-slate-900 text-white">UI/UX Design</option>
                          <option value="Final Year Projects" className="bg-slate-900 text-white">Final Year Projects</option>
                          <option value="Automation Projects" className="bg-slate-900 text-white">Automation Projects</option>
                          <option value="Hardware Projects" className="bg-slate-900 text-white">Hardware Projects</option>
                          <option value="Other" className="bg-slate-900 text-white">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Project Details *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        placeholder="Tell us about your project requirements, timeline, and any specific features you need..." 
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-vertical" 
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg shadow-purple-600/25 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] transition-all duration-300 transform focus:ring-4 focus:ring-purple-500/50"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6 animated-element delay-2" ref={addToRefs}>
                  {/* Contact Information */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-400 mb-1">Email</div>
                          <a href="mailto:prionex2025@gmail.com" className="text-white hover:text-purple-400 transition font-medium">
                            prionex2025@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-400 mb-1">Phone</div>
                          <a href="tel:+919345947620" className="text-white hover:text-purple-400 transition font-medium">
                            +91 93459 47620
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-400 mb-1">Response Time</div>
                          <div className="text-white font-medium">Within 24 hours</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Instagram, href: 'https://www.instagram.com/prionex_global?igsh=anM0Y2ZneHJyMWd3', label: 'Follow Prionex on Instagram', name: 'Instagram' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/prionex-undefined-340201395/', label: 'Connect with Prionex on LinkedIn', name: 'LinkedIn' },
                        { icon: Github, href: 'https://github.com/prionex2025-hue', label: 'Prionex on GitHub', name: 'GitHub' }
                      ].map((social, index) => (
                        <a 
                          aria-label={social.label} 
                          key={index} 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center p-4 bg-slate-700/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 group"
                        >
                          <social.icon className="h-6 w-6 mb-2 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Why Choose Prionex?</h4>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        100% Original & Plagiarism-free
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        Complete Documentation & PPT
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        Viva Support & Technical Guidance
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        On-time Delivery Guaranteed
                      </li>
                    </ul>
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
                <span className="text-2xl font-bold text-white">PRIONEX</span>
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
                <a href="/blog" className="block text-base text-slate-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base font-semibold text-slate-300 tracking-wider uppercase">Contact Us</h4>
              <div className="mt-4 space-y-4 text-base text-slate-400">
                <a href="mailto:prionex2025@gmail.com" className="flex items-center space-x-2 hover:text-white">
                  <Mail className="h-5 w-5"/><span>Email</span>
                </a>
                <a href="tel:+911234567890" className="flex items-center space-x-2 hover:text-white">
                  <Phone className="h-5 w-5"/><span>Phone</span>
                </a>
                <h4 className="text-base font-semibold text-slate-300 tracking-wider uppercase">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <a aria-label="Prionex on GitHub" href="https://github.com/prionex2025-hue" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Github /></a>
                <a aria-label="Prionex on LinkedIn" href="https://www.linkedin.com/in/prionex-undefined-340201395/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Linkedin /></a>
                <a aria-label="Prionex on Instagram" href="https://www.instagram.com/prionex_global?igsh=anM0Y2ZneHJyMWd3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300 transform"><Instagram /></a>
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
            <p>© {new Date().getFullYear()} PRIONEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      
      
    </div>
    

  );
}

export default App;

