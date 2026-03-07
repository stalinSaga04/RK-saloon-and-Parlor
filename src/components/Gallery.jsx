import { useState } from 'react'
import { motion } from 'framer-motion'

const transformations = [
    {
        id: 1,
        before: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800",
        beforeStyle: { filter: "grayscale(15%) sepia(30%) brightness(85%) contrast(90%) blur(0.5px)" },
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
        beforeStyle: { filter: "brightness(85%) contrast(85%) sepia(15%) blur(1px)" },
        after: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
        title: "Bridal Glow",
        description: "HD waterproof bridal makeup."
    },
    {
        id: 4,
        before: "https://images.unsplash.com/photo-1621605815978-2c0021b0b306?auto=format&fit=crop&q=80&w=800",
        beforeStyle: { filter: "grayscale(30%) brightness(85%) contrast(90%) blur(1px)" },
        after: "https://images.unsplash.com/photo-1621605815978-2c0021b0b306?auto=format&fit=crop&q=80&w=800",
        title: "Men's Styling",
        description: "Sharp haircut and beard grooming."
    },
    {
        id: 5,
        before: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
        beforeStyle: { filter: "grayscale(20%) brightness(90%) contrast(85%) blur(1.5px)" },
        after: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
        title: "Hair Spa",
        description: "Intense deep conditioning repair."
    },
    {
        id: 6,
        before: "/hero.png",
        beforeStyle: { filter: "grayscale(10%) sepia(10%) brightness(85%) contrast(90%) blur(1.5px)" },
        after: "/hero.png",
        title: "Party Makeup",
        description: "Elegant evening transformation."
    }
]

const CompareSlider = ({ item }) => {
    const [sliderPos, setSliderPos] = useState(50)

    return (
        <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group relative">
            <div className="relative aspect-[4/5] w-full select-none overflow-hidden">
                {/* BEFORE Image */}
                <div className="absolute inset-0">
                    <img src={item.before} alt="Before" style={item.beforeStyle || {}} className="w-full h-full object-cover pointer-events-none" />
                </div>

                {/* AFTER Image (Clipped) */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <img src={item.after} alt="After" className="w-full h-full object-cover pointer-events-none" />
                </div>

                {/* Labels outside clipping overlays */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded tracking-wider z-10 pointer-events-none">BEFORE</div>
                <div className="absolute bottom-4 right-4 bg-luxury-gold text-white text-xs font-bold px-3 py-1 rounded tracking-wider z-10 pointer-events-none shadow-sm">AFTER</div>

                {/* Handle Line & Circle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-luxury-gold z-10 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    style={{ left: `calc(${sliderPos}% - 2px)` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </div>

                {/* Invisible Native Input for touch scrubbing */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(e.target.value)}
                    className="slider-overlay absolute inset-0 w-full h-full z-20 m-0 cursor-ew-resize opacity-0"
                />
            </div>
            <div className="p-5 text-center bg-white border-t-4 border-luxury-gold/20 flex-grow flex flex-col justify-center z-10 relative">
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
