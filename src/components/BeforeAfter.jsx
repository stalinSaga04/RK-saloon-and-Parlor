import { motion } from 'framer-motion'
import './BeforeAfter.css'

export default function BeforeAfter() {
    return (
        <section className="before-after-section">
            <div className="section-header">
                <h2>Real Transformations</h2>
                <p>Our clients' results speak for themselves.</p>
            </div>

            <motion.div
                className="photo-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="photo-card">
                    <img src="/t1-before.jpg" alt="Before transformation 1"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="photo-placeholder" style={{ display: 'none' }}>
                        <span>📸</span>
                        <p>Add Before Photo</p>
                        <small>Drop t1-before.jpg in /public folder</small>
                    </div>
                    <div className="photo-label before-lbl">BEFORE</div>
                </div>

                <div className="photo-card featured">
                    <img src="/t1-after.jpg" alt="After transformation 1"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="photo-placeholder" style={{ display: 'none' }}>
                        <span>✨</span>
                        <p>Add After Photo</p>
                        <small>Drop t1-after.jpg in /public folder</small>
                    </div>
                    <div className="photo-label after-lbl">AFTER</div>
                </div>

                <div className="photo-card">
                    <img src="/t2-before.jpg" alt="Before transformation 2"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="photo-placeholder" style={{ display: 'none' }}>
                        <span>📸</span>
                        <p>Add Before Photo</p>
                        <small>Drop t2-before.jpg in /public folder</small>
                    </div>
                    <div className="photo-label before-lbl">BEFORE</div>
                </div>

                <div className="photo-card featured">
                    <img src="/t2-after.jpg" alt="After transformation 2"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="photo-placeholder" style={{ display: 'none' }}>
                        <span>✨</span>
                        <p>Add After Photo</p>
                        <small>Drop t2-after.jpg in /public folder</small>
                    </div>
                    <div className="photo-label after-lbl">AFTER</div>
                </div>
            </motion.div>

            <p className="ba-caption">✨ Real results from our happy clients at RK Saloon</p>
        </section>
    )
}
