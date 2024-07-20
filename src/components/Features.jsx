import React from 'react';

function Features() {
  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src="/img/fast.jpg" alt="Lightning-Fast Process" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Lightning-Fast Process</h3>
            <p>Streamline your procurement workflow with our intuitive interface, reducing processing time by up to 80%.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src="/img/integration.jpg" alt="Seamless Excel Integration" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-600">Seamless Excel Integration</h3>
            <p>Easily upload and process Excel documents, eliminating manual data entry and reducing errors.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src="/img/analyticIcon.jpg" alt="Reporting & Analytics" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Reporting & Analytics</h3>
            <p>Gain valuable insights with our powerful reporting and analytics tools, enabling data-driven decision making.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;