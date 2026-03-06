import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-luxury-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container-pad flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold flex flex-col tracking-wider">
                    <span className="text-luxury-gold uppercase leading-none">RK Saloon</span>
                    <span className="text-white text-xs tracking-[0.2em] font-light mt-1">& Parlour</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-luxury-gold transition-colors text-sm uppercase tracking-widest font-medium"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#booking" className="bg-luxury-gold hover:bg-white hover:text-luxury-black text-white px-6 py-2 rounded text-sm uppercase tracking-widest font-bold transition-all">
                        Book Now
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white hover:text-luxury-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-luxury-black border-t border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'}`}>
                <div className="container-pad flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white hover:text-luxury-gold transition-colors py-2 uppercase tracking-widest text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-luxury-gold text-white text-center py-3 rounded mt-2 uppercase tracking-widest text-sm font-bold"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    )
}
