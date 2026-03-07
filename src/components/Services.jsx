import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const services = [
    {
        title: "Haircut & Styling",
        price: "₹499",
        duration: "45 min",
        image: "/haircut.png",
        description: "Professional cuts tailored to your face shape, lifestyle, and hair texture."
    },
    {
        title: "Hair Spa",
        price: "₹999",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
        description: "Deep conditioning treatments to restore moisture and repair damaged hair."
    },
    {
        title: "Hair Coloring",
        price: "₹1,999",
        duration: "120 min",
        image: "/coloring.png",
        description: "Vibrant global colors, balayage, and highlights using premium international brands."
    },
    {
        title: "Facial & Skincare",
        price: "₹1,299",
        duration: "60 min",
        image: "/facial.png",
        description: "Rejuvenating custom facials for an instant, natural, and healthy glow."
    },
    {
        title: "Manicure & Pedicure",
        price: "₹799",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
        description: "Luxurious nail care treatments including shaping, buffing, and premium polish application."
    },
    {
        title: "Bridal Makeup",
        price: "₹4,999",
        duration: "180 min",
        image: "/bridal.png",
        description: "Exquisite waterproof HD bridal transformations for your special day."
    },
    {
        title: "Party Makeup",
        price: "₹1,999",
        duration: "90 min",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
        description: "Flawless and elegant makeup looks perfect for any special occasion or party."
    },
    {
        title: "Keratin Treatment",
        price: "₹3,999",
        duration: "150 min",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
        description: "Frizz-free, intensely smooth, and glossy hair that lasts for months."
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 bg-luxury-light">
            <div className="container-pad">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Signature Services</h2>
                    <p className="text-gray-600 text-lg">Curated premium beauty experiences designed for your absolute transformation and relaxation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="glass-card group flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-luxury-gold text-white font-bold py-1 px-3 rounded text-sm shadow-md">
                                    Starts at {service.price}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                        <Clock size={16} className="text-luxury-gold" /> {service.duration}
                                    </span>
                                    <a href="#booking" className="text-luxury-gold font-bold text-sm uppercase tracking-wider hover:text-black transition-colors">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
