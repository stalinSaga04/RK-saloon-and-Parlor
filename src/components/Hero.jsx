import { motion } from 'framer-motion'
import { Calendar, Phone } from 'lucide-react'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-luxury-black overflow-hidden pt-20">
            {/* Background Image with Parallax & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="/haircut.png"
                    alt="RK Saloon Luxury Makeover"
                    className="w-full h-full object-cover object-top opacity-70"
                    style={{ transform: 'translateZ(-10px) scale(1.1)' }}
                />
            </div>

            <div className="container-pad relative z-20 text-center max-w-4xl mx-auto px-4 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block border border-luxury-gold/50 bg-luxury-gold/10 backdrop-blur-sm text-luxury-gold px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-bold mb-8"
                >
                    Premium Salon & Spa in Chennai
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Look Good. <br /> Feel <span className="text-luxury-gold">Confident.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Premium hair & beauty services trusted by 1200+ clients in Chennai. Experience luxury tailored just for you.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <a href="#booking" className="btn-primary w-full sm:w-auto text-base">
                        <Calendar size={18} /> Book Appointment
                    </a>
                    <a href="https://wa.me/91XXXXXXXXXX" className="btn-whatsapp w-full sm:w-auto text-base">
                        <Phone size={18} /> WhatsApp Booking
                    </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-luxury-gold text-2xl">⭐</div>
                        <p className="text-white font-bold tracking-wide">4.8 Google Rating</p>
                        <p className="text-gray-400 text-sm">From 500+ Reviews</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:border-l md:border-r border-white/10">
                        <div className="text-luxury-gold text-2xl">🏆</div>
                        <p className="text-white font-bold tracking-wide">10+ Years</p>
                        <p className="text-gray-400 text-sm">Of Beauty Excellence</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-luxury-gold text-2xl">💄</div>
                        <p className="text-white font-bold tracking-wide">Certified Artists</p>
                        <p className="text-gray-400 text-sm">Professional Team</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
