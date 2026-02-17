import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">About SwiftCart</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SwiftCart is your ultimate destination for fast, reliable, and affordable online shopping. 
              We believe in making quality products accessible to everyone with seamless and swift service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to deliver exceptional products and services while maintaining the highest 
              standards of customer satisfaction. We strive to make every shopping experience smooth, 
              secure, and enjoyable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wide range of quality products across multiple categories</li>
              <li>Competitive and transparent pricing</li>
              <li>Fast and reliable delivery</li>
              <li>Secure payment options</li>
              <li>Excellent customer support</li>
              <li>Easy returns and exchanges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to integrity, innovation, and customer-centricity. Every decision we make 
              is guided by our core values to ensure that your shopping experience is nothing short of excellent.
            </p>
          </section>
        </div>
      </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
