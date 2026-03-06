import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
    {
        id: 1,
        name: "Priya K",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Amazing service and very professional staff. The keratin treatment completely transformed my frizzy hair. Worth every penny!"
    },
    {
        id: 2,
        name: "Sneha Reddy",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        text: "Got my bridal makeup done here and I couldn't be happier. The artists are incredibly talented and made me feel like a queen."
    },
    {
        id: 3,
        name: "Rahul M",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "Best salon in Chennai for men's grooming. The haircut and beard styling were sharp and precise. Highly recommend."
    },
    {
        id: 4,
        name: "Anita Desai",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 4,
        text: "Very relaxing facial experience. The ambiance is pure luxury and the staff is very polite. Will definitely return."
    }
]

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextReview()
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const nextReview = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }

    const prevReview = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const variants = {
        enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
    }

    return (
        <section id="reviews" className="py-24 bg-luxury-black text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[120px] -ml-20 -mb-20"></div>

            <div className="container-pad relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Loved by Our Clients</h2>
                    <p className="text-gray-400 text-lg">Don't just take our word for it. Read what our beautiful clients have to say about their transformations.</p>
                </div>

                <div className="max-w-4xl mx-auto relative px-12 md:px-20">
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-luxury-gold text-white rounded-full flex items-center justify-center transition-all z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="relative h-[280px] md:h-[220px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute w-full"
                            >
                                <div className="glass-card bg-white/5 border-white/10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                    <div className="shrink-0 relative">
                                        <img
                                            src={reviews[currentIndex].image}
                                            alt={reviews[currentIndex].name}
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-luxury-gold/30 shadow-lg"
                                        />
                                        <div className="absolute -bottom-3 -right-3 bg-luxury-gold text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                            <Quote size={18} fill="currentColor" />
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-center md:justify-start gap-1 mb-4 text-luxury-gold">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} fill={i < reviews[currentIndex].rating ? "currentColor" : "none"} strokeWidth={i < reviews[currentIndex].rating ? 0 : 2} />
                                            ))}
                                        </div>
                                        <p className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed text-gray-200">
                                            "{reviews[currentIndex].text}"
                                        </p>
                                        <h4 className="text-lg font-bold text-white">— {reviews[currentIndex].name}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-luxury-gold text-white rounded-full flex items-center justify-center transition-all z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1)
                                    setCurrentIndex(index)
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-luxury-gold w-8' : 'bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
