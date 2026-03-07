import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Calendar, Clock, Sparkles, X } from 'lucide-react'

// Map services to prices for dynamic display
const servicePrices = {
    "Select a service": "₹0",
    "Haircut & Styling": "₹499",
    "Hair Spa": "₹999",
    "Hair Coloring": "₹1,999",
    "Facial & Skincare": "₹1,299",
    "Beard Grooming": "₹299",
    "Bridal Makeup": "₹4,999",
    "Party Makeup": "₹1,999",
    "Keratin Treatment": "₹3,999"
}

export default function BookingForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Select a service',
        date: '',
        time: '10:00 AM'
    })

    // Basic validation hook just to show total
    const selectedPrice = servicePrices[formData.service] || "₹0"

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.service === 'Select a service') {
            alert("Please select a service before booking.")
            return
        }

        const message = `Hello RK Saloon,
I want to book ${formData.service} on ${formData.date} at ${formData.time}.

Name: ${formData.name}
Phone: ${formData.phone}`.replace(/ /g, '%20').replace(/\n/g, '%0A')

        const whatsappUrl = `https://wa.me/918122139068?text=${message}`
        window.open(whatsappUrl, '_blank')
        if (onClose) onClose()
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 md:pb-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-luxury-light rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white text-luxury-black rounded-full shadow-sm transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Left Side - Text */}
                            <div className="w-full lg:w-5/12 p-8 md:p-12 bg-luxury-light border-r border-gray-200">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Reserve Your <br /><span className="text-luxury-gold">Experience</span></h2>
                                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                                    Skip the queue and book your dedicated time. Fill out this simple form, and we'll instantly confirm your appointment via WhatsApp.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-luxury-black font-medium text-sm">
                                        <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0"><Sparkles size={16} /></div>
                                        Premium VIP Treatment
                                    </li>
                                    <li className="flex items-center gap-3 text-luxury-black font-medium text-sm">
                                        <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0"><Clock size={16} /></div>
                                        Zero Waiting Time
                                    </li>
                                    <li className="flex items-center gap-3 text-luxury-black font-medium text-sm">
                                        <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0"><Calendar size={16} /></div>
                                        24/7 Priority Booking
                                    </li>
                                </ul>

                                <div className="p-5 bg-white border-l-4 border-luxury-gold shadow-sm rounded-r-lg">
                                    <p className="font-bold text-luxury-black mb-1 text-sm">Have an emergency?</p>
                                    <p className="text-xs text-gray-500 mb-2">Don't wait. Call us directly.</p>
                                    <a href="tel:+918122139068" className="text-luxury-gold font-bold flex items-center gap-2 hover:underline text-sm md:text-base">
                                        +91 81221 39068
                                    </a>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full lg:w-7/12 p-8 md:p-12 bg-white relative">
                                <h3 className="text-2xl font-bold mb-8">Booking Details</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/30 focus:border-luxury-gold transition-colors"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+91 81221 39068"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/30 focus:border-luxury-gold transition-colors"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Service</label>
                                            {formData.service !== 'Select a service' && (
                                                <span className="text-xs font-bold text-luxury-gold bg-luxury-gold/10 px-2 py-1 rounded">Starts at {selectedPrice}</span>
                                            )}
                                        </div>
                                        <select
                                            name="service"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/30 focus:border-luxury-gold transition-colors cursor-pointer appearance-none"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            {Object.keys(servicePrices).map(srv => (
                                                <option key={srv} value={srv}>{srv}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/30 focus:border-luxury-gold transition-colors cursor-pointer"
                                                value={formData.date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preferred Time</label>
                                            <select
                                                name="time"
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/30 focus:border-luxury-gold transition-colors cursor-pointer appearance-none"
                                                value={formData.time}
                                                onChange={handleChange}
                                            >
                                                <option>10:00 AM</option>
                                                <option>11:30 AM</option>
                                                <option>2:00 PM</option>
                                                <option>5:00 PM</option>
                                                <option>7:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full btn-primary text-lg mt-4 py-4 md:py-3 cursor-pointer">
                                        Confirm on WhatsApp <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
