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
    return (
        <div className="font-sans antialiased text-luxury-black bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Gallery />
                <Reviews />
                <BookingForm />
                <InstaGallery />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default App
