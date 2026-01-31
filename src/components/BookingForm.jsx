import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Haircut & Styling',
        date: '',
        time: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Create WhatsApp message
        const message = `Hi RK Saloon & Parlour, I'd like to book an appointment!
    
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}

Please confirm my booking.`.replace(/ /g, '%20').replace(/\n/g, '%0A')

        const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${message}` // Replace with real number

        window.open(whatsappUrl, '_blank')
        setSubmitted(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    if (submitted) {
        return (
            <motion.div
                className="booking-success glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <CheckCircle size={60} className="text-gold" />
                <h3>Booking Initiated!</h3>
                <p>We've opened WhatsApp for you to confirm your details. See you soon!</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">New Booking</button>
            </motion.div>
        )
    }

    return (
        <section id="booking" className="booking-section">
            <div className="section-header">
                <h2 className="text-gold">Book Your Transformation</h2>
                <p>Simple details. Instant confirmation via WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form glass">
                <div className="form-group">
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Select Service</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option>Haircut & Styling</option>
                        <option>Bridal Makeup</option>
                        <option>Facial & Skincare</option>
                        <option>Hair Coloring</option>
                    </select>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Preferred Time</label>
                        <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn-primary full-width">
                    Confirm on WhatsApp <Send size={18} />
                </button>
            </form>
        </section>
    )
}
