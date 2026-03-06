import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-luxury-black text-white pt-20 pb-8 border-t-[8px] border-luxury-gold">
            <div className="container-pad">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold flex flex-col tracking-wider mb-6 inline-block">
                            <span className="text-luxury-gold uppercase leading-none">RK Saloon</span>
                            <span className="text-white text-xs tracking-[0.2em] font-light mt-1">& Parlour</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 pe-4">
                            Premium hair and beauty transformations tailored to your style. Experience the ultimate luxury and relaxation in Chennai.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider uppercase">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Services</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Gallery</a></li>
                            <li><a href="#reviews" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Reviews</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider uppercase">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#booking" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Hair Styling</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Bridal Makeup</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Facial & Skincare</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Keratin Treatment</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Men's Grooming</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider uppercase">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-luxury-gold shrink-0 mt-1" />
                                <span className="text-gray-400 text-sm leading-relaxed">Anna Nagar, Chennai,<br />Tamil Nadu 600040</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-luxury-gold shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-luxury-gold shrink-0" />
                                <a href="mailto:hello@rksaloon.com" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">hello@rksaloon.com</a>
                            </li>
                        </ul>
                        <a href="https://wa.me/91XXXXXXXXXX" className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded font-bold text-sm tracking-wide hover:bg-[#20b858] transition-colors">
                            <MessageSquare size={16} /> Chat on WhatsApp
                        </a>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 RK Saloon. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
