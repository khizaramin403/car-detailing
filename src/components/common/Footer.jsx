import React from 'react';
import {
  CarOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <div className="rounded-xl bg-neutral-900/80 p-1 border border-neutral-800 inline-block">
                <img
                  src="/logo.jpg"
                  alt="Dos Bros Auto Detailing"
                  className="h-16 w-auto object-contain rounded-lg"
                  style={{
                    height: '60px',
                    width: 'auto',
                    maxHeight: '64px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Elevating automotive aesthetics through master craftsmanship, multi-stage paint correction, ceramic coatings, and interior detailing.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <YoutubeOutlined />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Our Studio</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">All Detailing Services</a>
              </li>
              <li>
                <a href="/prices" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pricing & Packages</a>
              </li>
              <li>
                <a href="/service-areas" className="hover:text-white hover:translate-x-1 inline-block transition-all">Service Locations</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact & Bookings</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Premium Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-neutral-300">Multi-Stage Paint Correction</li>
              <li className="text-neutral-300">Graphene & Ceramic Coating (3-7 Yr)</li>
              <li className="text-neutral-300">Deep Interior Steam Restoration</li>
              <li className="text-neutral-300">Paint Protection Film (PPF)</li>
              <li className="text-neutral-300">Engine Bay Deep Clean & Dressing</li>
              <li className="text-neutral-300">Mobile Valet Detailing</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Studio Information
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <EnvironmentOutlined className="text-red-500 mt-1" />
              <span>742 Evergreen Blvd, Suite 100, Metro City, CA 90210</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <PhoneOutlined className="text-red-500" />
              <a href="tel:+15558392849" className="hover:text-white">+1 (555) 839-2849</a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MailOutlined className="text-red-500" />
              <a href="mailto:info@apexautodetail.com" className="hover:text-white">info@apexautodetail.com</a>
            </div>
            <div className="flex items-start gap-3 text-sm pt-2">
              <ClockCircleOutlined className="text-amber-400 mt-1" />
              <div>
                <p className="text-neutral-200">Mon - Sat: 8:00 AM - 7:00 PM</p>
                <p className="text-neutral-500 text-xs">Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & certifications */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Apex Auto Detailing Studio. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <SafetyCertificateOutlined className="text-emerald-400 text-base" />
            <span>Certified IDA & Ceramic Pro Master Applicators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
