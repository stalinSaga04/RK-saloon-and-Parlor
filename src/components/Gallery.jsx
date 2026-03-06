import { useState } from 'react'
import { motion } from 'framer-motion'

const transformations = [
    {
        id: 1,
        before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
        after: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800",
        title: "Keratin Smooth",
        description: "From frizzy to flawless silky straight."
    },
    {
        id: 2,
        before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
        beforeStyle: { filter: "grayscale(80%) sepia(20%) brightness(75%) contrast(110%)" },
        after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
        title: "Color Transformation",
        description: "Vibrant balayage highlights."
    },
    {
        id: 3,
        before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
        beforeStyle: { filter: "brightness(90%) contrast(90%) sepia(10%)" },
        after: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800",
        title: "Bridal Glow",
        description: "HD waterproof bridal makeup."
    },
    {
        id: 4,
        before: "https://images.unsplash.com/photo-1621605815978-2c0021b0b306?auto=format&fit=crop&q=80&w=800",
        after: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
        title: "Men's Styling",
        description: "Sharp haircut and beard grooming."
    },
    {
        id: 5,
        before: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
        after: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
        title: "Hair Spa",
        description: "Intense deep conditioning repair."
    },
    {
        id: 6,
        before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
        after: "https://images.unsplash.com/photo-1512496015851-a1dc8a47ff17?auto=format&fit=crop&q=80&w=800",
        title: "Party Makeup",
        description: "Elegant evening transformation."
    }
]

const CompareSlider = ({ item }) => {
    const [sliderPos, setSliderPos] = useState(50)

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const x = (clientX - rect.left) / rect.width
        setSliderPos(Math.max(0, Math.min(100, x * 100)))
    }

    return (
        <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
            <div
                className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden"
                onMouseMove={handleMove}
                onTouchMove={(e) => { e.preventDefault(); handleMove(e); }}
            >
                {/* BEFORE */}
                <div className="absolute inset-0">
                    <img src={item.before} alt="Before" style={item.beforeStyle || {}} className="w-full h-full object-cover pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded tracking-wider">BEFORE</div>
                </div>

                {/* AFTER */}
                <div
                    className="absolute inset-0 border-r-2 border-luxury-gold"
                    style={{ clipPath: `inset(0 ${(100 - sliderPos)}% 0 0)` }}
                >
                    <img src={item.after} alt="After" className="w-full h-full object-cover pointer-events-none" />
                    <div className="absolute bottom-4 right-4 bg-luxury-gold text-white text-xs font-bold px-3 py-1 rounded tracking-wider">AFTER</div>
                </div>

                {/* Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-luxury-gold z-10 -ml-[2px]"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-5 text-center bg-white border-t-4 border-luxury-gold/20 flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
        </div>
    )
}

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container-pad">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Transformations</h2>
                    <p className="text-gray-600 text-lg">Drag the sliders to see the incredible differences. Our expert work speaks for itself.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <CompareSlider item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
