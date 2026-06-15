import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiPhoneCall, 
  FiCheck, 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiX, 
  FiShield, 
  FiMessageCircle, 
  FiSmartphone, 
  FiCalendar, 
  FiActivity, 
  FiStar,
  FiGlobe,
  FiPlus
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaApple, 
  FaGooglePlay 
} from 'react-icons/fa';
import logoImg from './assets/logo.png';
import drOlivia from './assets/dr_olivia.png';
import drNguyen from './assets/dr_nguyen.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="logo">
            <img src={logoImg} alt="Medicare Logo" className="logo-img-tag" />
            <span>Medicare</span>
          </a>

          <nav className="nav-menu">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="nav-link active">Home</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="nav-link">About</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="nav-link">Services</a>
            <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="nav-link">Reviews</a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="nav-link">FAQ</a>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-outline header-btn">Contact Us</a>
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-nav-dropdown"
            >
              <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="nav-link">Home</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="nav-link">About</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="nav-link">Services</a>
                <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="nav-link">Reviews</a>
                <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="nav-link">FAQ</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-primary">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-content"
          >
            <motion.div variants={fadeInUp} className="hero-tag">
              <span>✦ Best Medical Service of 2026 ✦</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="hero-title">
              Get Premium medical care for your best health
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-desc">
              Our doctors are specialize in many sectors, here we have special doctors for you that wait for your call. we are providing professional medical services.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-cta">
              <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="btn btn-primary">
                Make a booking <FiArrowRight />
              </a>
              <div className="hero-call-info">
                <span className="btn-icon"><FiPhoneCall /></span>
                <div className="hero-call-text">
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gray-400)' }}>Medicare Call</span>
                  <span style={{ fontWeight: '700' }}>+12 345 6789</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-outcomes">
              <div className="avatar-group">
                <div className="avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100)' }}></div>
                <div className="avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100)' }}></div>
                <div className="avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100)' }}></div>
                <div className="avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100)' }}></div>
              </div>
              <div className="outcomes-text">
                <span className="outcomes-title">Happy Outcomes</span>
                <div className="outcomes-stars">
                  <FiStar fill="#FBBF24" />
                  <FiStar fill="#FBBF24" />
                  <FiStar fill="#FBBF24" />
                  <FiStar fill="#FBBF24" />
                  <FiStar fill="#FBBF24" />
                  <span style={{ marginLeft: '4px', fontWeight: '700', color: 'var(--black)' }}>4.9</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-image-container"
          >
            <div className="hero-bg-gradient"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" 
              alt="Medical Care Specialist" 
              className="hero-img" 
            />

            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="floating-widget widget-call"
            >
              <div className="call-pulse"></div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: '600' }}>Calling...</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--black)' }}>Dr. Olivia</span>
              </div>
              <span className="btn-icon" style={{ width: '28px', height: '28px', fontSize: '0.75rem', background: '#EF4444' }}>
                <FiPhoneCall />
              </span>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="floating-widget widget-status"
            >
              <span className="btn-icon" style={{ background: '#3B82F6', width: '32px', height: '32px' }}>
                <FiActivity />
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>Medicare Status</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--black)' }}>Active Consultation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
            className="stats-grid"
          >
            <motion.div variants={fadeInUp} className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Patients</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Doctors</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Online Support</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discover Benefits & Features */}
      <section id="services" className="features">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="features-header"
          >
            <span className="section-label">Features</span>
            <h2 className="section-title">Discover Our Benefits & Features</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="features-grid"
          >
            {/* Card 1 */}
            <motion.div variants={slideInLeft} className="feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <FiSmartphone />
                </div>
                <h3>Mobile Health Apps: Tools for patients to track symptoms, medications</h3>
                <p>Tools for patients to track symptoms, medications, and appointments, promoting self-management and engagement.</p>
              </div>
              <div className="mockup-container">
                <div className="phone-mockup">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>Active Intake Tracker</span>
                  </div>
                  <div className="small-mockup-wrapper" style={{ margin: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                      <span>Aspirin (Daily)</span>
                      <span style={{ color: 'var(--primary)' }}>08:00 AM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                      <span>Vitamin D3</span>
                      <span style={{ color: 'var(--primary)' }}>12:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={slideInRight} className="feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <FiMessageCircle />
                </div>
                <h3>Secure Messaging Systems: HIPAA-compliant platforms</h3>
                <p>Secure messaging platforms that allow healthcare professionals to communicate securely.</p>
              </div>
              <div className="mockup-container">
                <div className="phone-mockup chat-mockup">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid var(--gray-100)', paddingBottom: '8px' }}>
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" style={{ width: '24px', height: '24px', borderRadius: '50%' }} alt="Doc" />
                    <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>Dr. Thomas (Cardio)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ background: 'var(--gray-100)', padding: '8px', borderRadius: '8px', fontSize: '0.65rem', alignSelf: 'flex-start', maxWidth: '80%' }}>
                      Hi John, how can I help you?
                    </div>
                    <div style={{ background: 'var(--primary)', color: '#fff', padding: '8px', borderRadius: '8px', fontSize: '0.65rem', alignSelf: 'flex-end', maxWidth: '80%' }}>
                      I got the blood test report, looks good!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="features-grid"
          >
            {/* Card 3 */}
            <motion.div variants={slideInLeft} className="feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <FiCalendar />
                </div>
                <h3>Personal Health Dashboard & Appointment Booking System</h3>
                <p>Track vital signs, medications, and test results in one place. Easily schedule, reschedule, or cancel appointments.</p>
              </div>
              <div className="mockup-container">
                <div className="phone-mockup dashboard-mockup">
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '8px' }}>Heart Rate Trend</span>
                  <div style={{ height: '60px', background: 'var(--primary-subtle)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '8px' }}>
                    <div style={{ width: '8px', height: '20px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                    <div style={{ width: '8px', height: '35px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                    <div style={{ width: '8px', height: '25px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                    <div style={{ width: '8px', height: '45px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                    <div style={{ width: '8px', height: '30px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.65rem', fontWeight: '700' }}>
                    <span>Avg BPM: 72</span>
                    <span style={{ color: '#10B981' }}>Normal</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 Grid of Mini Cards */}
            <motion.div variants={slideInRight} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', height: '50%' }}>
                <div className="feature-card-small">
                  <div className="feature-icon-wrapper" style={{ width: '36px', height: '36px', fontSize: '1.1rem', marginBottom: '16px' }}>
                    <FiShield />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px' }}>Online Prescription Services</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Facilitate easy medicine ordering</p>
                </div>
                <div className="feature-card-small">
                  <div className="feature-icon-wrapper" style={{ width: '36px', height: '36px', fontSize: '1.1rem', marginBottom: '16px' }}>
                    <FiGlobe />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px' }}>Online global service</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Provide from any country worldwide</p>
                </div>
              </div>
              
              <div className="feature-card-small promo" style={{ height: 'calc(50% - 15px)' }}>
                <h3>Explore our more amazing services</h3>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="btn btn-white btn-icon-right" style={{ padding: '8px 20px', fontSize: '0.8rem', alignSelf: 'flex-start' }}>
                  Explore more <FiArrowRight />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="trusted-title">Trusted by 100+ Global top company connect with us</motion.h3>
            <motion.div variants={fadeInUp} className="logos-grid">
              <div className="logo-item"><span style={{ color: 'var(--primary)' }}>✦</span> Envato</div>
              <div className="logo-item"><span style={{ color: 'var(--primary)' }}>✦</span> WordPress</div>
              <div className="logo-item"><span style={{ color: 'var(--primary)' }}>✦</span> Webflow</div>
              <div className="logo-item"><span style={{ color: 'var(--primary)' }}>✦</span> Shopify</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="trust-checkmarks">
              <div className="checkmark-item"><FiCheck className="checkmark-icon" /> Smart healthcare</div>
              <div className="checkmark-item"><FiCheck className="checkmark-icon" /> Trusted doctors</div>
              <div className="checkmark-item"><FiCheck className="checkmark-icon" /> Secure communication</div>
              <div className="checkmark-item"><FiCheck className="checkmark-icon" /> Expert consultants</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consultants Section */}
      <section id="about" className="consultants">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="consultants-header"
          >
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Collaborate with our best consultant by online</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="team-grid"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="team-card">
              <div className="team-img-wrapper">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" alt="Dr. Miles" className="team-img" />
              </div>
              <h3 className="team-name">Dr. Miles</h3>
              <p className="team-role">Medicine Specialist</p>
              <p className="team-desc">Offer programs focused on preventive care, nutrition, exercise, and overall wellness.</p>
              <div className="team-actions">
                <span className="btn-icon" style={{ background: 'var(--primary)' }}><FiPhoneCall /></span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="team-card">
              <div className="team-img-wrapper">
                <img src={drNguyen} alt="Dr. Nguyen" className="team-img" />
              </div>
              <h3 className="team-name">Dr. Nguyen</h3>
              <p className="team-role">Gynecologist</p>
              <p className="team-desc">Offer programs focused on preventive care, nutrition, exercise, and overall wellness.</p>
              <div className="team-actions">
                <span className="btn-icon" style={{ background: 'var(--primary)' }}><FiPhoneCall /></span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="team-card">
              <div className="team-img-wrapper">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Dr. Flores" className="team-img" />
              </div>
              <h3 className="team-name">Dr. Flores</h3>
              <p className="team-role">Senior Orthopedics</p>
              <p className="team-desc">Offer programs focused on preventive care, nutrition, exercise, and overall wellness.</p>
              <div className="team-actions">
                <span className="btn-icon" style={{ background: 'var(--primary)' }}><FiPhoneCall /></span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="callbox-banner"
          >
            <p className="callbox-text">
              Patients can consult with healthcare providers from the comfort of their homes, eliminating travel time and costs. Reduced waiting times.
            </p>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-primary">
              Make a call now <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="consultants-header" 
            style={{ marginBottom: '20px' }}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="testimonials-grid"
          >
            <motion.div variants={fadeInUp} className="testimonial-card">
              <div className="outcomes-stars" style={{ marginBottom: '16px' }}>
                <FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" />
              </div>
              <p className="testimonial-quote">"The telehealth platform is incredibly easy to use. I was able to consult with my doctor and get my prescription refilled without leaving my house."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="Sarah J." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Sarah Jenkins</h4>
                  <p>Patient</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="testimonial-card">
              <div className="outcomes-stars" style={{ marginBottom: '16px' }}>
                <FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" />
              </div>
              <p className="testimonial-quote">"Booking appointments and managing my family's health records has never been simpler. The mobile app is a lifesaver!"</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Michael T." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Michael Thompson</h4>
                  <p>Patient</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="testimonial-card">
              <div className="outcomes-stars" style={{ marginBottom: '16px' }}>
                <FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" /><FiStar fill="#FBBF24" />
              </div>
              <p className="testimonial-quote">"I felt like the doctors really listened to me. Having quick access to specialists from home completely changed my healthcare experience."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Emily R." className="testimonial-avatar" />
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <p>Patient</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map & Additional Features */}
      <section className="additional-features">
        <div className="container features-map-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="map-container"
          >
            {/* Styling a simulated maps view */}
            <div className="map-placeholder" style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600)',
              filter: 'grayscale(1) contrast(1.2) opacity(0.8)' 
            }}></div>
            
            {/* Dr Pin info card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="map-widget"
            >
              <div className="map-widget-info">
                <img src={drOlivia} className="map-avatar" alt="Dr Olivia" />
                <div className="map-widget-text">
                  <h4>Dr. Olivia</h4>
                  <p>Pediatrician • ⭐ 4.9</p>
                </div>
              </div>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                Make Appointment
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="section-label">Benefits</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">Additional Medical Features</motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>
              We provide comprehensive medical features and services tailored to meet all patient needs and schedules seamlessly.
            </motion.p>

            <motion.div variants={fadeInUp} className="features-list-grid">
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> Personalized Health Assessments</div>
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> Patient Education</div>
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> Integration with Pharmacy Services</div>
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> 10-Year Health Assistant</div>
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> Emergency Contact Feature</div>
              <div className="features-list-item"><FiCheck style={{ color: 'var(--primary)' }} /> Health Training</div>
            </motion.div>

            <motion.a variants={fadeInUp} href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="btn btn-outline">
              Read More <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="consultants-header" 
            style={{ marginBottom: '40px' }}
          >
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="faq-container"
          >
            <motion.div variants={fadeInUp} className="faq-item" onClick={() => toggleFaq(0)}>
              <div className="faq-question">
                How do I book an online consultation?
                <FiPlus className={`faq-icon ${openFaq === 0 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p className="faq-answer">Booking is simple! Just click the "Make a booking" button, select your preferred doctor or specialty, choose a suitable time slot, and confirm your appointment. You can also use our mobile app.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div variants={fadeInUp} className="faq-item" onClick={() => toggleFaq(1)}>
              <div className="faq-question">
                Is my medical data secure?
                <FiPlus className={`faq-icon ${openFaq === 1 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p className="faq-answer">Absolutely. We use end-to-end encryption and adhere to strict HIPAA regulations to ensure that your personal and medical information remains completely confidential and secure.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div variants={fadeInUp} className="faq-item" onClick={() => toggleFaq(2)}>
              <div className="faq-question">
                Can I get prescriptions online?
                <FiPlus className={`faq-icon ${openFaq === 2 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p className="faq-answer">Yes, our licensed physicians can write and send prescriptions directly to your preferred local pharmacy after an online consultation, assuming it is medically appropriate.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Box Section */}
      <section className="cta-banner">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="cta-banner-box"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="cta-deco-bubble cta-deco-1"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="cta-deco-bubble cta-deco-2"
            ></motion.div>
            
            <h2 className="cta-title">
              Bring your customer services the next level of excellence.
            </h2>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-white">
              Make a call now <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="footer-top"
          >
            <h2 className="footer-top-title">Let's Connect with us</h2>
            <div className="footer-top-actions">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="btn btn-primary">Get Started <FiArrowRight /></a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="btn btn-outline" style={{ borderColor: 'var(--gray-700)', color: '#fff' }}>Contact Us</a>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="footer-grid"
          >
            <motion.div variants={fadeInUp} className="footer-brand">
              <h4>
                <img src={logoImg} alt="Medicare Logo" className="logo-img-tag" />
                Medicare
              </h4>
              <p className="footer-desc">
                Subscribe to our newsletter for latest updates and medical features.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
                <button type="submit" className="btn btn-primary newsletter-btn">Subscribe</button>
              </form>

              <div className="download-badges">
                <a href="#ios" className="download-badge">
                  <FaApple />
                  <span>App Store</span>
                </a>
                <a href="#android" className="download-badge">
                  <FaGooglePlay />
                  <span>Google Play</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="footer-col">
              <h5>Company</h5>
              <div className="footer-links">
                <a onClick={(e) => handleSmoothScroll(e, 'about')} className="footer-link">About Us</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">Careers</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">Press</a>
                <a onClick={(e) => handleSmoothScroll(e, 'contact')} className="footer-link">Contact</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="footer-col">
              <h5>Features</h5>
              <div className="footer-links">
                <a onClick={(e) => handleSmoothScroll(e, 'services')} className="footer-link">Telehealth</a>
                <a onClick={(e) => handleSmoothScroll(e, 'services')} className="footer-link">Secure Messaging</a>
                <a onClick={(e) => handleSmoothScroll(e, 'services')} className="footer-link">Dashboard</a>
                <a onClick={(e) => handleSmoothScroll(e, 'services')} className="footer-link">Scheduling</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="footer-col">
              <h5>Solutions</h5>
              <div className="footer-links">
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">For Individuals</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">For Clinics</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">For Hospitals</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">Enterprise</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="footer-col">
              <h5>Resources</h5>
              <div className="footer-links">
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">Medical Blog</a>
                <a onClick={(e) => handleSmoothScroll(e, 'faq')} className="footer-link">FAQs</a>
                <a onClick={(e) => handleSmoothScroll(e, 'contact')} className="footer-link">Help Support</a>
                <a onClick={(e) => handleSmoothScroll(e, 'home')} className="footer-link">Privacy Policy</a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="footer-bottom"
          >
            <span>© 2026 Medicare. All rights reserved.</span>
            <div className="social-links">
              <a href="#facebook" className="social-link"><FaFacebookF /></a>
              <a href="#twitter" className="social-link"><FaTwitter /></a>
              <a href="#instagram" className="social-link"><FaInstagram /></a>
              <a href="#linkedin" className="social-link"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
