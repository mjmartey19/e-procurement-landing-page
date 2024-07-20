import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} E-Procurement Solutions. Simplifying procurement, one click at a time.</p>
      </div>
    </footer>
  );
}

export default Footer;