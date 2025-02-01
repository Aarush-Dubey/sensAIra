import React from 'react';
import { Button, Card, Container, Navbar, Nav } from 'react-bootstrap';
import { FaHeartbeat, FaMobileAlt, FaMoneyBillWave, FaSyncAlt, FaBatteryFull, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CommonNavbar from './Navbar'; // Importing the Common Navbar

// Features Data
const features = [
  { icon: FaHeartbeat, title: "Predictive Analytics", desc: "We help you stay ahead of potential health risks. By tracking your SpO2 levels, heart rate, respiratory rate, and stress patterns, we predict issues like COPD flare-ups or hypertension spikes before they happen. This allows for early intervention, giving you peace of mind knowing you’re being actively monitored." },
  { icon: FaMobileAlt, title: "Emergency Alerts", desc: "In case of a critical health situation, our device immediately sends an alert to your emergency contacts and nearby hospitals. This ensures that help reaches you faster by sharing real-time health data like heart rate, SpO2, and respiration rate, all through a seamless connection." },
  { icon: FaBatteryFull, title: "Dual Battery System", desc: "Your health doesn’t take breaks, and neither should your device. Our dual battery system allows continuous, 24/7 monitoring. One battery charges while the other powers the device, so you never have to worry about running out of power." },
  { icon: FaSyncAlt, title: "AI-Based Risk Detection", desc: "Using advanced AI, we analyze your health data to identify any potential health risks early on. This means you can take action sooner rather than later, potentially avoiding serious health events. It’s like having an expert by your side, 24/7." },
  { icon: FaMoneyBillWave, title: "Electronic Health Records (EHR)", desc: "All your health data is automatically logged and securely stored in a digital health record. With this, your doctor can track your health over time, make more informed decisions, and update your treatment plan as necessary. It’s your personal health history, always accessible and up-to-date." },
  { icon: FaChartLine, title: "Health Data Insights", desc: "Your health journey matters. With regular tracking and insights from your data, our app provides you with valuable trends, helping you make informed decisions about your health. Whether it’s spotting patterns in your sleep, exercise, or stress levels, you’ll have a clear view of how your daily habits affect your health." },
];

// Inline CSS for customization
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: 1.6,
    backgroundColor: '#f4f4f9',
    color: '#333',
    padding: '0 1rem',
  },
  nav: {
    backgroundColor: '#6a82fb',
    width: '130%',
    marginLeft: '3rem',
    marginBottom: '1rem',
  },
  navLink: {
    color: '#fff',
    marginRight: '1rem',
  },
  section: {
    padding: '4rem 2rem',
    margin: '0 auto',
    maxWidth: '1200px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem',
    background: 'linear-gradient(to right, #6a82fb, #fc5c7d)',
    color: 'white',
    borderRadius: '8px',
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
    backgroundColor: '#ff4081',
    borderColor: '#ff4081',
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  card: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    backgroundColor: '#fff',
    color: '#333',
    height: '100%',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  cardText: {
    fontSize: '1rem',
  },
};

const ProductPage = () => {
  return (
    <div style={styles.body}>
      {/* Common Navbar */}
      <CommonNavbar />

      {/* Hero Section */}
      <section style={{ ...styles.section, ...styles.hero }}>
        <motion.h1 className="display-4" style={styles.heroH1} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Welcome to sensAIra
        </motion.h1>
        <p className="lead" style={styles.heroLead}>AI-powered wearable for proactive health monitoring</p>
        {/* Replaced "Learn More" button with "Buy Now" button */}
        <Button variant="light" className="mt-4" style={styles.heroBtn}>
          <Link to="/buy-now" style={{ color: 'inherit', textDecoration: 'none' }}>Buy Now</Link>
        </Button>
      </section>

      {/* Key Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Features</h2>
        <div className="row">
          {features.map((feature, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <Card className="shadow-lg" style={styles.card}>
                <Card.Body style={styles.cardBody}>
                  <feature.icon className="text-primary mb-3" style={{ fontSize: '2.5rem', color: '#6a82fb' }} />
                  <div>
                    <Card.Title style={styles.cardTitle}>{feature.title}</Card.Title>
                    <Card.Text style={styles.cardText}>{feature.desc}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ ...styles.section, backgroundColor: '#f7f7f7' }} className="text-center py-5">
        <h2 style={styles.sectionTitle}>Simple, Transparent Pricing</h2>
        <p>₹1999 for the device + 3 months free subscription. ₹99/month thereafter.</p>
        {/* Buy Now Button */}
        <Button variant="primary" className="mt-4" style={styles.heroBtn}>
          Buy Now
        </Button>
      </section>
    </div>
  );
};

export default ProductPage;
