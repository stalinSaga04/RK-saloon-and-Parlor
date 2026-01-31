import { useState } from 'react'
import { motion } from 'framer-motion'
import './BeforeAfter.css'

export default function BeforeAfter() {
    const [sliderPos, setSliderPos] = useState(50)

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX || e.touches[0].clientX) - rect.left) / rect.width
        setSliderPos(Math.max(0, Math.min(100, x * 100)))
    }

    return (
        <section className="before-after-section">
            <div className="section-header">
                <h2 className="text-gold">Real Transformations</h2>
                <p>See why our clients trust us with their look.</p>
            </div>

            <div
                className="slider-container"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                <div className="img-wrapper before">
                    <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=40&w=1200" alt="Before" />
                    <div className="label">BEFORE</div>
                </div>

                <div
                    className="img-wrapper after"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                    <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1200&hue=-50" alt="After" />
                    <div className="label">AFTER</div>
                </div>

                <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
                    <div className="handle-line"></div>
                    <div className="handle-circle">
                        <span>↔</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
