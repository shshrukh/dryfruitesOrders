import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] flex justify-center items-center">
      <div 
        className="w-[1440px] h-[259px] box-border px-32 py-10 flex justify-between items-start font-sans"
      >
        {/* Navigation Links Wrapper */}
        <div className="flex gap-24">
          {/* Company Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[#1a1a1a] mb-2 text-lg">Company</h4>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">About Us</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Why Choose us</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Pricing</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Testimonial</a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[#1a1a1a] mb-2 text-lg">Resources</h4>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Privacy Policy</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Terms and Condition</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Blog</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Contact Us</a>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[#1a1a1a] mb-2 text-lg">Product</h4>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Project management</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Time tracker</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Time schedule</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Lead generate</a>
            <a href="#" className="text-[#4b5563] hover:text-black text-sm">Remote Collaboration</a>
          </div>
        </div>

        {/* Brand & Socials Section */}
        <div className="flex flex-col items-start min-w-[300px]">
          <h2 className="text-5xl font-serif text-[#f97316] mb-6 lowercase" style={{ fontFamily: 'serif' }}>
            hunza naturals
          </h2>
          <p className="font-bold text-[#1a1a1a] mb-4">Subscribe to our Newsletter</p>
          
          <div className="flex gap-4">
            <FaFacebook className="text-[#4b5563] cursor-pointer hover:text-black" size={24} />
            <FaTwitter className="text-[#4b5563] cursor-pointer hover:text-black" size={24} />
            <FaInstagram className="text-[#4b5563] cursor-pointer hover:text-black" size={24} />
            <FaLinkedin className="text-[#4b5563] cursor-pointer hover:text-black" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}