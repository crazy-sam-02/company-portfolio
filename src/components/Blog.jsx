import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Calendar, User, ArrowLeft, Clock, Tag, 
  ChevronRight, BookOpen, Lightbulb, Zap
} from 'lucide-react';

// SEO Component for Blog Page
const BlogSEO = () => (
  <>
    <title>Blog - Prionex | Latest Updates on IoT, AI/ML, Web & Mobile Development Projects</title>
    <meta name="description" content="Stay updated with Prionex blog featuring latest trends in IoT projects, AI/ML development, web applications, mobile apps, and academic project guidance for students and professionals." />
    <meta name="keywords" content="Prionex blog, IoT tutorials, AI ML guides, web development tips, mobile app development, final year project ideas, student project help, technical blog India" />
    <link rel="canonical" href="https://prionex.dev/blog" />
    <meta property="og:title" content="Blog - Prionex | IoT, AI/ML, Web & Mobile Development Updates" />
    <meta property="og:description" content="Explore Prionex blog for expert insights on IoT, AI/ML, web and mobile development. Get project ideas and technical guidance." />
    <meta property="og:url" content="https://prionex.dev/blog" />
    <meta name="twitter:title" content="Blog - Prionex | IoT, AI/ML, Web & Mobile Development Updates" />
    <meta name="twitter:description" content="Explore Prionex blog for expert insights on IoT, AI/ML, web and mobile development. Get project ideas and technical guidance." />
    
    {/* Blog-specific JSON-LD */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Prionex Blog",
        "description": "Expert insights on IoT, AI/ML, web and mobile development projects for students and professionals",
        "url": "https://prionex.dev/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Prionex",
          "logo": "https://prionex.dev/Logo.svg"
        },
        "mainEntityOfPage": "https://prionex.dev/blog"
      })}
    </script>
  </>
);

const useIntersectionObserver = (options) => {
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

const Blog = () => {
  const [observe] = useIntersectionObserver({ threshold: 0.1 });
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    animatedElementsRef.current.forEach(el => observe(el));
  }, [observe]);

  const addToRefs = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
      animatedElementsRef.current.push(el);
    }
  };

  const blogPosts = [];

  const categories = ["All", "IoT", "AI/ML", "Web Development", "Mobile Development", "Design", "Documentation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="bg-[#0a092d] text-slate-300 font-sans antialiased min-h-screen">
      <BlogSEO />
      
      {/* Header Navigation */}
      <div className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-[#0a092d] to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animated-element" ref={addToRefs}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300 shadow-lg mb-6">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Knowledge Hub</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight animated-element delay-1" ref={addToRefs}>
            <span className="gradient-text">Prionex</span> Blog
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 animated-element delay-2" ref={addToRefs}>
            Explore tutorials, project guides, and industry insights to accelerate your development journey. 
            From IoT to AI/ML, we share knowledge that empowers your projects.
          </p>
        </div>
      </section>

      {/* Blog Content Area */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animated-element" ref={addToRefs}>
            <article className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12">
              <BookOpen className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <header>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Coming Soon - Expert Technical Content
                </h2>
              </header>
              <p className="text-slate-400 mb-8 text-lg">
                We're developing comprehensive guides on <strong>IoT project development</strong>, 
                <strong> AI/ML implementation</strong>, <strong>web application architecture</strong>, 
                <strong> mobile app development strategies</strong>, and <strong>academic project documentation</strong>. 
                Our upcoming articles will help students and professionals excel in their technical projects.
              </p>
              
              {/* Topic Categories with Internal Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    topic: "IoT & Embedded Systems", 
                    description: "Arduino projects, sensor integration, IoT protocols",
                    link: "/#services",
                    keywords: "IoT projects, Arduino tutorials, sensor programming"
                  },
                  { 
                    topic: "AI/ML Development", 
                    description: "Machine learning models, data analysis, Python frameworks",
                    link: "/#services",
                    keywords: "AI projects, machine learning, Python development"
                  },
                  { 
                    topic: "Web Development", 
                    description: "React applications, full-stack development, modern frameworks",
                    link: "/#projects",
                    keywords: "web applications, React projects, full-stack development"
                  },
                  { 
                    topic: "Mobile Apps", 
                    description: "React Native, Flutter, cross-platform development",
                    link: "/#projects",
                    keywords: "mobile app development, React Native, Flutter"
                  }
                ].map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    className="bg-slate-700/30 rounded-lg p-6 hover:bg-slate-700/50 transition-colors group"
                    aria-label={`Learn more about ${item.topic} services`}
                  >
                    <h3 className="text-purple-300 font-semibold text-lg mb-2 group-hover:text-white">
                      {item.topic}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    <div className="text-xs text-slate-500 italic">{item.keywords}</div>
                  </a>
                ))}
              </div>

              {/* Call-to-Action with Internal Links */}
              <div className="text-center space-y-4">
                <p className="text-slate-300 mb-4">
                  Need immediate project assistance? Explore our current offerings:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/#services" 
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm hover:bg-purple-600/40 transition-colors"
                    title="View Prionex Services - IoT, AI/ML, Web & Mobile Development"
                  >
                    View Our Services
                  </a>
                  <a 
                    href="/#projects" 
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm hover:bg-blue-600/40 transition-colors"
                    title="Sample Projects - Final Year Projects Portfolio"
                  >
                    Sample Projects
                  </a>
                  <a 
                    href="/#founders" 
                    className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm hover:bg-green-600/40 transition-colors"
                    title="Meet Prionex Founders - Technical Expertise"
                  >
                    Meet Our Team
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animated-element" ref={addToRefs}>
            <Lightbulb className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Get expert guidance and professional development support for your academic or professional projects.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <Zap className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;