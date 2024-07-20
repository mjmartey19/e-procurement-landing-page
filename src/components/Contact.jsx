import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">Ready to Streamline Your Procurement?</h2>
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-xl shadow-lg">
        <form className="w-full md:w-1/2 md:pr-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded bg-white text-gray-800" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded bg-white text-gray-800" required />
          </div>
          <div className="mb-4">
            <label htmlFor="organization" className="block mb-2 text-gray-700">Organization</label>
            <input type="text" id="organization" name="organization" className="w-full p-2 border rounded bg-white text-gray-800" required />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block mb-2 text-gray-700">Phone Number</label>
            <input type="tel" id="number" name="number" className="w-full p-2 border rounded bg-white text-gray-800" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded bg-white text-gray-800" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">Get in Touch</button>
        </form>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="/img/phone.png" alt="Contact Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Contact;