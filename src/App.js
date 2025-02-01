import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeartbeat, FaMobileAlt, FaMoneyBillWave, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BuyNowPage from './pages/BuyNowPage';
import ContactPage from './pages/ContactPage';

// Features Data
const features = [
  { icon: FaHeartbeat, title: "Predictive Analytics", desc: "AI-powered health monitoring to detect risks early." },
  { icon: FaMobileAlt, title: "Real-Time Monitoring", desc: "Track vitals like heart rate, SpO2, and stress levels." },
  { icon: FaMoneyBillWave, title: "Affordable Pricing", desc: "₹1999 upfront + ₹99/month for full health insights." }
];

// Inline CSS
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: 1.6,
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 0',
    background: 'linear-gradient(to right, #007bff, #0056b3)',
    color: 'white',
  },
  heroH1: {
    fontSize: '3.5rem',
    opacity: 0,
    animation: 'fadeIn 2s forwards',
  },
  heroLead: {
    marginTop: '1rem',
    fontSize: '1.25rem',
  },
  heroBtn: {
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
  },
  features: {
    padding: '5rem 1.5rem',
    textAlign: 'center',
  },
  card: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  cardText: {
    fontSize: '1rem',
  },
  pricing: {
    textAlign: 'center',
    padding: '5rem 1.5rem',
    backgroundColor: '#f8f9fa',
  },
  pricingH2: {
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  pricingLead: {
    fontSize: '1.25rem',
  },
  pricingBtn: {
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
  },
  contact: {
    textAlign: 'center',
    padding: '5rem 1.5rem',
  },
  contactH2: {
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  contactPhone: {
    fontSize: '2rem',
    color: '#007bff',
  },
  mt4: {
    marginTop: '1.5rem !important',
  },
  fadeIn: {
    '@keyframes fadeIn': {
      to: {
        opacity: 1,
      },
    },
  },
};




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// SensAIraLanding Component
export function SensAIraLanding() {
  return (
    <div className="min-vh-100" style={styles.body}>
      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <motion.h1 className="display-4" style={styles.heroH1} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Welcome to sensAIra
        </motion.h1>
        <p className="mt-4 lead" style={styles.heroLead}>AI-powered wearable for proactive health monitoring</p>
        <Button variant="light" className="mt-4" style={styles.heroBtn}>Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="features" style={styles.features}>
        <div className="row">
          {features.map((feature, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <Card className="shadow-lg" style={styles.card}>
                <Card.Body>
                  <feature.icon className="text-primary mb-3" style={{ fontSize: '2.5rem' }} />
                  <Card.Title style={styles.cardTitle}>{feature.title}</Card.Title>
                  <Card.Text style={styles.cardText}>{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" style={styles.pricing}>
        <h2 className="h2 font-weight-bold" style={styles.pricingH2}>Simple, Transparent Pricing</h2>
        <p className="lead" style={styles.pricingLead}>₹1999 upfront + ₹99/month after 3 months</p>
        <Button variant="primary" className="mt-4" style={styles.pricingBtn}>Buy Now</Button>
      </section>

      {/* Contact Section */}
      <section className="contact" style={styles.contact}>
        <h2 className="h2 font-weight-bold" style={styles.contactH2}>Get in Touch</h2>
        <p className="mt-4">Have questions? Reach out to us!</p>
        <div className="mt-4" style={styles.mt4}>
          <FaPhone className="text-primary" style={styles.contactPhone} />
          <span className="ml-2">+91 98765 43210</span>
        </div>
      </section>
    </div>
  );
}
