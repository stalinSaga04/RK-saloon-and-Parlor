import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button after scrolling down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/918122139068", "_blank")
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={handleWhatsAppClick}
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20b858] transition-colors group flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    aria-label="Chat on WhatsApp"
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
                    >
                        <MessageCircle size={32} />
                    </motion.div>

                    {/* Tooltip that appears on hover (desktop only) */}
                    <div className="absolute right-full mr-4 bg-white text-luxury-black font-bold text-sm py-2 px-4 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                        Chat with us
                        {/* Tooltip Arrow */}
                        <div className="absolute top-1/2 -mt-1 -right-2 border-4 border-transparent border-l-white"></div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
