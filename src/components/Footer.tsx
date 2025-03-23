'use client';

import Link from 'next/link';
import { FiMapPin, FiMail, FiPhone, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-bg-1 pt-16">
      <div className="container-custom px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 gradient-text">Premium Movers</h3>
            <p className="text-gray-300 text-sm">
              Professional moving and packing services with care and precision. 
              Making relocations stress-free since 2008.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialLink href="#" icon={<FiFacebook />} label="Facebook" />
              <SocialLink href="#" icon={<FiTwitter />} label="Twitter" />
              <SocialLink href="#" icon={<FiInstagram />} label="Instagram" />
              <SocialLink href="#" icon={<FiLinkedin />} label="LinkedIn" />
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services#home-relocation">Home Relocation</FooterLink>
              <FooterLink href="/services#office-relocation">Office Relocation</FooterLink>
              <FooterLink href="/services#international">International Moving</FooterLink>
              <FooterLink href="/services#packing">Packing Services</FooterLink>
              <FooterLink href="/services#storage">Storage Solutions</FooterLink>
              <FooterLink href="/services#specialty">Specialty Items Moving</FooterLink>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <FiMapPin className="text-indigo-400 mt-1" size={18} />
                <span>1234 Moving Street, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FiPhone className="text-indigo-400" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FiMail className="text-indigo-400" size={18} />
                <span>contact@premiummovers.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Working Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-3">
                <FiClock className="text-indigo-400" size={18} />
                <div>
                  <div className="font-medium">Monday - Friday</div>
                  <div>8:00 AM - 7:00 PM</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FiClock className="text-indigo-400" size={18} />
                <div>
                  <div className="font-medium">Saturday</div>
                  <div>9:00 AM - 5:00 PM</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FiClock className="text-indigo-400" size={18} />
                <div>
                  <div className="font-medium">Sunday</div>
                  <div>Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Premium Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-300 hover:text-indigo-400 transition duration-300">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link href={href} aria-label={label} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-700 transition-colors flex items-center justify-center text-gray-300 hover:text-white">
    {icon}
  </Link>
);

export default Footer; 