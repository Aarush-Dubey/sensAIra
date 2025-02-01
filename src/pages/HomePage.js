import React from 'react';
import { Button, Card, Navbar, Nav, Container } from 'react-bootstrap';
import { FaHeartbeat, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CommonNavbar from './Navbar';  // Importing the Common Navbar

// Features Data
const features = [
  { icon: FaHeartbeat, title: "Predictive Analytics", desc: "We predict COPD exacerbations by monitoring SpO2 levels, respiratory rate, and activity trends, while hypertension spikes are detected using HRV, heart rate patterns, and stress data. Models such as LSTM, Random Forest, etc., analyze these inputs to provide timely risk alerts and actionable insights." },
  { icon: FaMobileAlt, title: "Emergency Alerts", desc: "Our device continuously monitors your vital signs, such as heart rate, SpO2, and respiratory rate. In case of a serious health issue, it instantly sends an alert to your emergency contact and nearby hospitals, providing real-time health data to ensure timely assistance." },
  { icon: FaMoneyBillWave, title: "Personalized Care Plans", desc: "Our app generates real-time electronic health reports, tracking vital signs like heart rate and SpO2. This unique feature helps doctors in India make accurate diagnoses and provide personalized treatments, improving overall care and effectiveness." }
];

// Inline CSS
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: 1.6,
    backgroundColor: '#f4f4f9',
    color: '#333',
    padding: '0 1rem',
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

const HomePage = () => {
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
        <Button variant="light" className="mt-4" style={styles.heroBtn}>
          <Link to="/product" style={{ color: 'inherit', textDecoration: 'none' }}>Learn More About Our Product</Link>
        </Button>
      </section>

      {/* Commitment Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Commitment</h2>
        <p>The world's aging population is growing rapidly, leading to an increase in chronic conditions such as hypertension and COPD. For instance, 41.9% of adults aged 45 and over are hypertensive, and 9.5% of total deaths in India are caused by COPD, with 55 million patients of COPD in India alone. We aim to tackle these issues by using AI and remote monitoring technologies to provide personalized healthcare for the elderly. Our approach ensures early warnings, continuous monitoring, and makes healthcare accessible and effective.</p>
      </section>

      {/* Features Section */}
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

      {/* Call to Action Section */}
      <section style={{ ...styles.section, backgroundColor: '#e3f2fd' }}>
        <h2 style={styles.sectionTitle}>Ready to Take Control of Your Health?</h2>
        <Button variant="primary" className="mt-4" style={{ padding: '0.75rem 2rem', fontSize: '1.25rem' }}>
          <Link to="/buy-now" style={{ color: 'inherit', textDecoration: 'none' }}>Buy Now</Link>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
