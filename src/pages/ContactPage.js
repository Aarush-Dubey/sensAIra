import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import CommonNavbar from './Navbar';  // Importing the Common Navbar

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
  sectionTitle: {
    marginBottom: '1.5rem',
    color: '#333',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  formSection: {
    padding: '4rem 2rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  formControl: {
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '10px',
    fontSize: '1rem',
    width: '100%',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1.25rem',
    backgroundColor: '#6a82fb',
    borderColor: '#6a82fb',
    color: 'white',
  },
  alert: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    padding: '1rem',
  },
  contactInfoSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  contactInfoText: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
  };

  return (
    <div style={styles.body}>
      {/* Include the common Navbar here */}
      <CommonNavbar />

      {/* Contact Us Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p>If you have any questions, concerns, or feedback, we’d love to hear from you!</p>
      </section>

      {/* Success Alert */}
      {success && (
        <Alert variant="success" style={styles.alert}>
          Thank you for reaching out! We’ll get back to you shortly.
        </Alert>
      )}

      {/* Contact Form */}
      <section style={styles.formSection}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} style={styles.formGroup}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.formControl}
                required
              />
            </Col>
            <Col md={6} style={styles.formGroup}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.formControl}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col style={styles.formGroup}>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.formControl}
                required
              />
            </Col>
          </Row>
          <Button variant="primary" type="submit" style={styles.button} className="mt-3">
            Send Message
          </Button>
        </Form>
      </section>

      {/* Other Ways to Reach Us Section */}
      <section style={styles.contactInfoSection}>
        <h3 style={styles.sectionTitle}>Other Ways to Reach Us</h3>
        <p style={styles.contactInfoText}>
          <FaPhone style={styles.icon} />
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p style={styles.contactInfoText}>
          <FaEnvelope style={styles.icon} />
          <strong>Email:</strong> support@sensaira.com
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
