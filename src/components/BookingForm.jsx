import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Calendar, Clock, Sparkles } from 'lucide-react'

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

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Select a service',
        date: '',
        time: '10:00 AM'
    })

    // Basic validation hook just to show total
    const selectedPrice = servicePrices[formData.service] || "₹0"

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

        const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${message}`
        window.open(whatsappUrl, '_blank')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="booking" className="py-24 bg-luxury-light relative">
            <div className="container-pad">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side - Text */}
                    <div className="w-full lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Reserve Your <br /><span className="text-luxury-gold">Experience</span></h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Skip the queue and book your dedicated time. Fill out this simple form, and we'll instantly confirm your appointment via WhatsApp.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-luxury-black font-medium">
                                    <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold"><Sparkles size={16} /></div>
                                    Premium VIP Treatment
                                </li>
                                <li className="flex items-center gap-3 text-luxury-black font-medium">
                                    <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold"><Clock size={16} /></div>
                                    Zero Waiting Time
                                </li>
                                <li className="flex items-center gap-3 text-luxury-black font-medium">
                                    <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold"><Calendar size={16} /></div>
                                    24/7 Priority Booking
                                </li>
                            </ul>

                            <div className="p-6 bg-white border-l-4 border-luxury-gold shadow-sm">
                                <p className="font-bold text-luxury-black mb-1">Have an emergency?</p>
                                <p className="text-sm text-gray-500 mb-3">Don't wait. Call us directly.</p>
                                <a href="tel:+919876543210" className="text-luxury-gold font-bold flex items-center gap-2 hover:underline">
                                    +91 98765 43210
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            className="glass-card p-8 md:p-12 shadow-2xl border-t-4 border-t-luxury-gold relative bg-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
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
                                            placeholder="+91 XXXXX XXXXX"
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

                                <button type="submit" className="w-full btn-primary text-lg mt-4 py-4">
                                    Confirm on WhatsApp <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
