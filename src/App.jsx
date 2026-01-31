import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MessageSquare, Star, MapPin, Clock, Phone, ChevronRight, Zap } from 'lucide-react'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import BookingForm from './components/BookingForm'
import './App.css'

function App() {
    const [timeLeft, setTimeLeft] = useState(48000) // Initial seconds for countdown

    useEffect(() => {
        if (timeLeft <= 0) return
        const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
        return () => clearInterval(interval)
    }, [timeLeft])

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }

    return (
        <div className="app-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hero-badge"
                    >
                        BEST SALON IN CHENNAI
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Look Good. Feel <span className="text-gold">Confident.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="subheadline"
                    >
                        Premium hair & beauty services trusted by 1,200+ clients. Visit us for a luxury makeover that defines you.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-ctas"
                    >
                        <a href="#booking" className="btn-primary">
                            <Calendar size={18} /> Book Appointment
                        </a>
                        <a href="https://wa.me/91XXXXXXXXXX" className="btn-secondary">
                            <MessageSquare size={18} /> Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Trust Strip */}
            <div className="trust-strip">
                <div className="trust-container">
                    <div className="trust-item">
                        <Star className="text-gold" fill="currentColor" size={20} />
                        <span>4.9/5 Google Rating</span>
                    </div>
                    <div className="trust-item line">|</div>
                    <div className="trust-item">
                        <Star className="text-gold" fill="currentColor" size={20} />
                        <span>1,200+ Happy Clients</span>
                    </div>
                    <div className="trust-item line">|</div>
                    <div className="trust-item">
                        <Star className="text-gold" fill="currentColor" size={20} />
                        <span>8+ Years Excellence</span>
                    </div>
                </div>
            </div>

            <main>
                <Services />
                <BeforeAfter />

                {/* Urgency Offer Section */}
                <section className="offer-section">
                    <motion.div
                        className="offer-card"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="offer-content">
                            <div className="offer-badge"><Zap size={14} /> LIMITED TIME OFFER</div>
                            <h2>Flat 20% OFF</h2>
                            <p>On your first visit. All services included.</p>
                            <div className="countdown">
                                <span className="time">{formatTime(timeLeft)}</span>
                                <span className="label">OFFER EXPIRES SOON</span>
                            </div>
                            <a href="#booking" className="btn-primary">CLAIM OFFER NOW</a>
                        </div>
                    </motion.div>
                </section>

                <BookingForm />

                {/* Location & Info */}
                <section className="info-section">
                    <div className="info-grid">
                        <div className="info-card glass">
                            <MapPin className="text-gold" size={32} />
                            <h3>Visit Us</h3>
                            <p>123 Luxury Lane, Anna Nagar,<br />Chennai, Tamil Nadu 600040</p>
                            <a href="#" className="text-link">Get Directions <ChevronRight size={16} /></a>
                        </div>
                        <div className="info-card glass">
                            <Clock className="text-gold" size={32} />
                            <h3>Open Hours</h3>
                            <p>Mon - Sun: 10:00 AM - 9:00 PM<br />Open all 7 days</p>
                        </div>
                        <div className="info-card glass">
                            <Phone className="text-gold" size={32} />
                            <h3>Call Us</h3>
                            <p>+91 98765 43210<br />+91 44 2345 6789</p>
                            <a href="tel:+919876543210" className="btn-secondary small">Call Now</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="text-gold">RK SALOON</h2>
                        <p>Your premium destination for beauty and confidence.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 RK Saloon & Parlour. All Rights Reserved.</p>
                </div>
            </footer>

            {/* Sticky Mobile CTA */}
            <div className="mobile-cta-bar">
                <a href="https://wa.me/91XXXXXXXXXX" className="whatsapp-btn">
                    <MessageSquare size={20} /> WhatsApp
                </a>
                <a href="#booking" className="book-btn">
                    Book Now
                </a>
            </div>
        </div>
    )
}

export default App
