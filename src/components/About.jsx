import React from 'react';

function About() {
  return (
    <section id="about" className="mx-auto lg:px-12 px-8 mb-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">About Our E-Procurement Solution</h2>
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <img src="/img/about.jpg" alt="About Our Solution" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Transforming Procurement for both Private and Public sector Organizations</h3>
          <p className="mb-4">Our e-procurement system is designed to simplify and streamline the procurement process for organizations of all sizes, including large enterprises, medium businesses, small businesses, and public sector entities. We understand the unique challenges faced by different types of organizations and have tailored our solution to meet their specific needs.</p>
          <p>With our system, you can automate tedious tasks, integrate seamlessly with your existing workflows, and gain valuable insights through powerful analytics – all while saving time and reducing costs. Our user-friendly interface ensures that businesses of any size can easily adopt and benefit from our solution.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
          <img src="/img/mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-4">We are on a mission to democratize advanced procurement tools, making them accessible and affordable for businesses of all sizes. Our goal is to empower all organizations, from SMEs to large corporations, with powerful tools that level the playing field in the global market.</p>
          <p>By simplifying procurement, we enable you to focus on what matters most – growing your business and serving your customers. Our user-friendly system ensures that organizations of any size can easily adopt and benefit from our solution.</p>
        </div>
      </div>
    </section>
  );
}

export default About;