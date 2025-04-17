
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Testimonial slider functionality
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.classList.remove('hidden');
        } else {
          testimonial.classList.add('hidden');
        }
      });
    }

    document.getElementById('prev-testimonial')?.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentTestimonial);
    });

    document.getElementById('next-testimonial')?.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    const autoRotate = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
    }, 8000);

    return () => {
      clearInterval(autoRotate);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">
              <span className="text-3xl">L</span>ogisticsss
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          
          <button id="mobile-menu-toggle" className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md absolute w-full">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium py-2">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Global Logistics Solutions for Modern Businesses</h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">Streamlining your supply chain with innovative logistics management and technology-driven solutions.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-white text-blue-800 hover:bg-blue-100 font-medium py-3 px-6 rounded-lg transition duration-300">Get Started</a>
                <a href="#services" className="border border-white text-white hover:bg-white hover:text-blue-800 font-medium py-3 px-6 rounded-lg transition duration-300">Our Services</a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="bg-blue-600/20 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                      <h3 className="text-3xl font-bold mb-1">98%</h3>
                      <p className="text-blue-100">On-time Delivery</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                      <h3 className="text-3xl font-bold mb-1">50+</h3>
                      <p className="text-blue-100">Countries Served</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                      <h3 className="text-3xl font-bold mb-1">15K+</h3>
                      <p className="text-blue-100">Clients Worldwide</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                      <h3 className="text-3xl font-bold mb-1">24/7</h3>
                      <p className="text-blue-100">Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide end-to-end logistics solutions to optimize your supply chain operations and drive business growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Freight Forwarding</h3>
              <p className="text-gray-600 mb-4">International shipping solutions with our global network of carriers for air, ocean, and land transport.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Warehousing & Distribution</h3>
              <p className="text-gray-600 mb-4">Strategic warehouse locations and distribution services to ensure efficient inventory management.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Supply Chain Management</h3>
              <p className="text-gray-600 mb-4">Comprehensive solutions to optimize your entire supply chain from procurement to final delivery.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Customs Clearance</h3>
              <p className="text-gray-600 mb-4">Expert assistance with customs documentation, duties, and regulatory compliance for smooth border crossings.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Last Mile Delivery</h3>
              <p className="text-gray-600 mb-4">Efficient final delivery services ensuring your products reach customers quickly and securely.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Logistics Technology</h3>
              <p className="text-gray-600 mb-4">Advanced tracking systems and software solutions for real-time visibility across your supply chain.</p>
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="bg-blue-700 w-72 h-72 rounded-full absolute -z-10 -left-10 -top-10 opacity-10"></div>
                <div className="bg-blue-700 w-40 h-40 rounded-full absolute -z-10 right-10 bottom-10 opacity-10"></div>
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                      <div className="text-blue-700 mb-2">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-1">Our Mission</h3>
                      <p className="text-gray-600">To optimize global supply chains through innovative technology and personalized solutions.</p>
                    </div>
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                      <div className="text-blue-700 mb-2">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-1">Our Vision</h3>
                      <p className="text-gray-600">To be the leading global provider of sustainable logistics solutions.</p>
                    </div>
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                      <div className="text-blue-700 mb-2">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-1">Our Approach</h3>
                      <p className="text-gray-600">Data-driven decision making and continuous improvement across all operations.</p>
                    </div>
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                      <div className="text-blue-700 mb-2">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-1">Our Team</h3>
                      <p className="text-gray-600">Experienced logistics professionals dedicated to your success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="mb-6">
                <h4 className="text-blue-600 font-bold mb-2">ABOUT US</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Your Trusted Partner in Global Logistics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 25 years of experience, Logisticsss has been transforming supply chain management with innovative solutions tailored to our clients' unique needs. Our global network spans 50+ countries, allowing us to provide seamless logistics services worldwide.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We combine industry expertise with cutting-edge technology to optimize your supply chain operations, reduce costs, and improve efficiency. Our team of logistics professionals is committed to delivering exceptional service and driving your business forward.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">Global Network</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">Advanced Technology</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">Industry Expertise</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">Customized Solutions</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">Sustainable Practices</span>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="inline-block bg-blue-700 text-white hover:bg-blue-800 font-medium py-3 px-6 rounded-lg transition duration-300">Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover why businesses trust Logisticsss for their supply chain needs.</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="testimonial">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">JS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">John Smith</h4>
                    <p className="text-gray-600">CEO, Global Retail Inc.</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "Logisticsss has transformed our supply chain operations. Their expertise and technology solutions have significantly reduced our shipping costs while improving delivery times. The real-time visibility they provide across our global operations is invaluable."
                </blockquote>
              </div>
            </div>
            
            <div className="testimonial hidden">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">MW</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Maria Williams</h4>
                    <p className="text-gray-600">Supply Chain Director, Tech Solutions Ltd.</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "We've been working with Logisticsss for over 5 years now, and they continue to exceed our expectations. Their warehouse and distribution solutions have allowed us to scale our business efficiently while maintaining high customer satisfaction levels."
                </blockquote>
              </div>
            </div>
            
            <div className="testimonial hidden">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">RJ</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Robert Johnson</h4>
                    <p className="text-gray-600">Operations Manager, E-commerce Direct</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "The last mile delivery solutions from Logisticsss have been a game-changer for our e-commerce business. Their reliable service and consistent on-time delivery have helped us maintain a 98% customer satisfaction rate. Their team is responsive and always ready to adapt to our changing needs."
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button id="prev-testimonial" className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50 mr-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button id="next-testimonial" className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h4 className="text-blue-600 font-bold mb-2">CONTACT US</h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Optimize Your Supply Chain?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our team today to discuss how we can help streamline your logistics operations and drive business growth.
              </p>
              
              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">123 Logistics Way, Suite 500<br />Business District, CA 90001</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gray-800">Email Us</h4>
                    <p className="text-gray-600">info@logisticsss.com<br />support@logisticsss.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567<br />+1 (800) 987-6543</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.068 10.068 0 01-3.127 1.195A4.919 4.919 0 0016.953 2a4.923 4.923 0 00-4.92 4.92c0 .385.045.762.127 1.122-4.092-.207-7.72-2.165-10.148-5.145a4.903 4.903 0 00-.667 2.475c0 1.707.87 3.214 2.19 4.097a4.93 4.93 0 01-2.23-.615v.062c0 2.386 1.697 4.376 3.95 4.828a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.42A9.87 9.87 0 010 19.54a13.95 13.95 0 007.548 2.212c9.057 0 14.01-7.502 14.01-14.008 0-.214-.005-.428-.014-.64a9.936 9.936 0 002.46-2.548z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
                
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                    <input type="text" id="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Company" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 font-medium">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-12">
              <h3 className="text-xl font-bold mb-6">Logisticsss</h3>
              <p className="text-gray-400 mb-6">
                Global logistics solutions for modern businesses. Streamlining your supply chain with innovative logistics management.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.068 10.068 0 01-3.127 1.195A4.919 4.919 0 0016.953 2a4.923 4.923 0 00-4.92 4.92c0 .385.045.762.127 1.122-4.092-.207-7.72-2.165-10.148-5.145a4.903 4.903 0 00-.667 2.475c0 1.707.87 3.214 2.19 4.097a4.93 4.93 0 01-2.23-.615v.062c0 2.386 1.697 4.376 3.95 4.828a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.42A9.87 9.87 0 010 19.54a13.95 13.95 0 007.548 2.212c9.057 0 14.01-7.502 14.01-14.008 0-.214-.005-.428-.014-.64a9.936 9.936 0 002.46-2.548z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-12">
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Freight Forwarding</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Warehousing & Distribution</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Supply Chain Management</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Customs Clearance</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Last Mile Delivery</a></li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-12">
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Team</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-12">
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates on services and offers.</p>
              <form className="mb-4">
                <div className="flex">
                  <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
                  <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800 transition duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">&copy; 2023 Logisticsss. All rights reserved.</p>
              </div>
              <div className="w-full md:w-auto">
                <ul className="flex flex-wrap space-x-8">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
