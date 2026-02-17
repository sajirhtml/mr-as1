import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="min-h-screen bg-base-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-base-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-700">support@swiftcart.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Shopping Street<br />
                  Commerce City, CC 12345
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-indigo-600 border-none hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;
