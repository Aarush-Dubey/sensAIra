import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCreditCard, FaShippingFast } from 'react-icons/fa';
import CommonNavbar from './Navbar';  // Importing the Common Navbar

const BuyNowPage = () => {
  return (
    <div>
      {/* Include the common Navbar here */}
      <CommonNavbar />

      {/* Buy Now Section */}
      <section className="text-center py-5">
        <h2 className="font-weight-bold">Buy SensAIra Now</h2>
        <p>Get your AI-powered health monitoring wristband today and start monitoring your health in real-time.</p>
      </section>

      <section className="text-center py-5">
        <Card className="shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Card.Body>
            <h3>Pricing</h3>
            <p><strong>₹1999</strong> for the wristband (includes 3 months of free subscription)</p>
            <p><strong>₹99/month</strong> after the first 3 months</p>
            <p>Free shipping and easy returns!</p>
            <Button variant="success" size="lg" className="mt-3">
              <FaCreditCard className="mr-2" />
              Buy Now
            </Button>
            <p className="mt-3"><FaShippingFast className="mr-2" /> Free shipping available!</p>
          </Card.Body>
        </Card>
      </section>

      <section className="text-center py-5 bg-light">
        <h2>Need Assistance?</h2>
        <p>If you have any questions or need help with your order, feel free to contact us.</p>
        <Button variant="primary" href="/contact">Contact Us</Button>
      </section>
    </div>
  );
};

export default BuyNowPage;
