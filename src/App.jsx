import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import BookingForm from './components/BookingForm'
import InstaGallery from './components/InstaGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)

        const handleHashChange = (e) => {
            if (window.location.hash === '#booking') {
                e.preventDefault()
                setIsBookingModalOpen(true)
                // Reset hash so the same link can be clicked again
                window.history.replaceState(null, null, ' ')
            }
        }

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a')
            if (target && target.getAttribute('href') === '#booking') {
                e.preventDefault()
                setIsBookingModalOpen(true)
            }
        }

        window.addEventListener('hashchange', handleHashChange)
        document.addEventListener('click', handleAnchorClick)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
            document.removeEventListener('click', handleAnchorClick)
        }
    }, [])

    return (
        <div className="font-sans antialiased text-luxury-black bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Gallery />
                <Reviews />
                <InstaGallery />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />

            <BookingForm
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </div>
    )
}

export default App
