import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-luxury-light">
            <div className="container-pad">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Salon</h2>
                    <p className="text-gray-600 text-lg">Step into a world of luxury and relaxation. We're centrally located in Chennai.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

                    {/* Map (Placeholder for actual iframe) */}
                    <div className="w-full lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.435754593444!2d80.21731111075635!3d13.071536487212275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266914561b36f%3A0xe2130e704de8c66e!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709734992497!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RK Saloon Location"
                        ></iframe>
                    </div>

                    {/* Contact Details */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-luxury-gold/10 p-3 rounded-xl text-luxury-gold shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-luxury-black">Our Address</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        123 Premium Lane, Anna Nagar,<br />
                                        Chennai, Tamil Nadu 600040<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-luxury-gold/10 p-3 rounded-xl text-luxury-gold shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-luxury-black">Opening Hours</h4>
                                    <p className="text-gray-600">
                                        Monday - Friday: 10:00 AM - 9:00 PM<br />
                                        Saturday & Sunday: 9:00 AM - 10:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-luxury-gold/10 p-3 rounded-xl text-luxury-gold shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-luxury-black">Contact Info</h4>
                                    <p className="text-gray-600 mb-1">Mobile: <a href="tel:+919876543210" className="hover:text-luxury-gold font-bold">+91 98765 43210</a></p>
                                    <p className="text-gray-600">Landline: <a href="tel:04423456789" className="hover:text-luxury-gold font-bold">044 2345 6789</a></p>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
