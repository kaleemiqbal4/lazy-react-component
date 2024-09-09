import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are dedicated to providing high-quality software solutions to
              help businesses thrive.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-teal-400 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#learn-more"
                  className="text-teal-400 hover:underline"
                >
                  Learn More
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-teal-400 hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-teal-400 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-teal-400 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-teal-400 hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-teal-400 hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-teal-400 hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Main Street, Hometown, USA</p>
            <p className="text-gray-300">Email: contact@example.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center lg:justify-end space-x-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
