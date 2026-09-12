import React from 'react';
import LegalContentSection from './LegalContentSection.jsx';

export default function PrivacyContentSection() {
  const privacySections = [
    {
      id: "commitment",
      navTitle: "Our Commitment",
      title: "Privacy Commitment & Family Values",
      content: (
        <>
          <p>
            At Dos Bros Auto Detailing (&quot;Dos Bros,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we operate our mobile detailing business with straightforward honesty. As two local brothers serving Morris, Minnesota, Stevens County, and surrounding communities, we treat your privacy and personal information with the same integrity and respect we show to every customer vehicle we service.
          </p>
          <p>
            This Privacy Policy outlines the information we collect when you visit our website, submit a free quote request, book a mobile detailing appointment, or contact us by phone or SMS text message.
          </p>
        </>
      ),
      callout: {
        title: "Strict No-Sale Guarantee",
        text: "We will NEVER sell, lease, rent, or trade your personal phone number, email address, physical location, or vehicle data to third-party advertisers, data aggregators, or marketing firms under any circumstance."
      }
    },
    {
      id: "information-collected",
      navTitle: "Data We Collect",
      title: "Information We Collect to Provide Service",
      content: (
        <>
          <p>
            When you use our website or request a detailing quote, we may collect the following information that you voluntarily provide:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li><strong>Contact Details:</strong> First and last name, mobile phone number, and email address.</li>
            <li><strong>Location Information:</strong> Your town, city, or physical service address (e.g. Morris, Hancock, Glenwood, Alexandria) to determine travel distances, route scheduling, and mobile dispatch feasibility.</li>
            <li><strong>Vehicle Details:</strong> Vehicle make, model, year, exterior color, and vehicle category (Sedan, SUV, Truck, Minivan, Farm Machinery, Tractor).</li>
            <li><strong>Service Inquiries &amp; Notes:</strong> Specific detailing packages requested (Interior Revival, Wash &amp; Seal, Paint Correction, Ceramic Coating) and any notes regarding pet hair, stains, odors, or child seats.</li>
          </ul>
        </>
      )
    },
    {
      id: "how-we-use-data",
      navTitle: "How We Use Data",
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            We use the information we collect solely for direct business operations and exceptional customer service:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li>Generating accurate, no-obligation pricing quotes tailored to your vehicle type and town.</li>
            <li>Communicating arrival times, route delays, or weather-related rescheduling via phone or SMS text message.</li>
            <li>Sending appointment reminders and service completion follow-ups.</li>
            <li>Processing service payments and delivering digital receipts.</li>
            <li>Reviewing client feedback to continuously refine our detailing methods and chemical products.</li>
          </ul>
        </>
      )
    },
    {
      id: "technical-data",
      navTitle: "Cookies & Analytics",
      title: "Website Cookies, Web Analytics & Technical Logs",
      content: (
        <>
          <p>
            Like most modern websites, our site may utilize standard cookies, local storage, and server log files to ensure optimal browsing performance:
          </p>
          <p>
            <strong>Anonymous Analytics:</strong> We may monitor non-identifiable browser information—such as device type, screen resolution, browser version, and pages viewed—to ensure our pages render swiftly and without glitches on both smartphones and desktop computers.
          </p>
          <p>
            <strong>Embedded Maps &amp; Media:</strong> Our contact page features an embedded Google Maps iframe to assist customers in locating our service territory in Morris, MN. Google may collect standard location cookies in accordance with Google&apos;s independent privacy policies.
          </p>
        </>
      )
    },
    {
      id: "data-security",
      navTitle: "Data Security",
      title: "Data Security & Secure Lead Transmission",
      content: (
        <>
          <p>
            All online form submissions on our website utilize modern HTTPS / TLS (Transport Layer Security) encryption to protect your contact data during transit.
          </p>
          <p>
            Quote requests and customer records are securely routed to our internal Google Workspace systems accessible only by founders Reyes and Mariano. We implement strict digital access controls to safeguard your data from unauthorized access or disclosure.
          </p>
        </>
      )
    },
    {
      id: "your-rights",
      navTitle: "Customer Rights",
      title: "Your Rights & Managing Your Information",
      content: (
        <>
          <p>
            You have full control over your contact data with Dos Bros Auto Detailing. At any time, you may request:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li>Verification of the contact information we currently have on file for you.</li>
            <li>Correction of any inaccurate phone numbers, addresses, or vehicle details.</li>
            <li>Complete removal and deletion of your contact records from our scheduling database.</li>
          </ul>
          <p>
            To make any of these requests, simply text or call us at <strong>(320) 287-3573</strong> or send an email to <strong>ordonezreyes75@gmail.com</strong>.
          </p>
        </>
      )
    },
    {
      id: "updates",
      navTitle: "Policy Updates",
      title: "Updates to This Privacy Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect modifications in our operational practices, new service capabilities, or regulatory updates. Any changes will be posted directly to this page with an updated revision date.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalContentSection
      badge="DATA PROTECTION"
      title="Privacy Policy & Data Transparency"
      subtitle="Learn how Dos Bros Auto Detailing safeguards your personal contact details, vehicle specifications, and booking information across all our mobile operations."
      lastUpdated="September 2026"
      sections={privacySections}
    />
  );
}
