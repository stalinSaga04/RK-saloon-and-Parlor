import { Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const instaPosts = [
    { img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400", price: "₹3,999" },
    { img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400", price: "₹999" },
    { img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=400", price: "₹1,299" },
    { img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400", price: "₹4,999" },
    { img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400", price: "₹1,999" },
    { img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=400", price: "₹2,499" }
]

export default function InstaGallery() {
    return (
        <section className="py-24 bg-white">
            <div className="container-pad text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Us on Instagram</h2>
                <p className="text-gray-500 mb-10">@rk.saloon.parlour</p>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 mb-10">
                    {instaPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={post.img}
                                alt={`Instagram post ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Price Tag Overlay */}
                            <div className="absolute top-2 right-2 bg-black/70 text-white font-bold text-xs py-1 px-2 rounded shadow-sm backdrop-blur-sm">
                                {post.price}
                            </div>

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram size={32} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
                    style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                >
                    <Instagram size={20} /> View on Instagram
                </a>
            </div>
        </section>
    )
}
