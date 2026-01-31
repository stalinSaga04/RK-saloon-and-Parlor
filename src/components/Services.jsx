import { motion } from 'framer-motion'
import { Clock, Tag } from 'lucide-react'

const services = [
    {
        title: "Haircut & Styling",
        price: "₹499",
        duration: "45 min",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
        description: "Professional cuts tailored to your face shape and style."
    },
    {
        title: "Bridal Makeup",
        price: "₹4,999",
        duration: "180 min",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
        description: "Exquisite bridal transformations for your special day."
    },
    {
        title: "Facial & Skincare",
        price: "₹1,299",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
        description: "Rejuvenating treatments for a natural, healthy glow."
    },
    {
        title: "Hair Coloring",
        price: "₹1,999",
        duration: "120 min",
        image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800",
        description: "Vibrant colors and highlights that last."
    }
]

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="section-header">
                <h2 className="text-gold">Our Signature Services</h2>
                <p>Curated beauty experiences designed for your transformation.</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                            <div className="price-tag">{service.price}</div>
                        </div>
                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-meta">
                                <span><Clock size={16} /> {service.duration}</span>
                                <a href="#booking" className="book-link">Book Now</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
