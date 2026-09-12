import React from 'react';
import LegalContentSection from './LegalContentSection.jsx';

export default function TermsContentSection() {
  const termsSections = [
    {
      id: "overview",
      navTitle: "Service Overview",
      title: "Service Scope & Mobile Operations in Minnesota",
      content: (
        <>
          <p>
            Welcome to Dos Bros Auto Detailing (&quot;Dos Bros,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Use govern all mobile auto detailing services, equipment cleaning, booking requests, and website interactions provided across Morris, Minnesota (56267), Stevens County, and surrounding West Central Minnesota communities including Alexandria, Glenwood, Starbuck, Benson, Hancock, and Chokio.
          </p>
          <p>
            By booking an appointment online, by telephone, via SMS text message, or using our quote request form, you agree to be bound by these terms. Our mobile unit travels directly to residential driveways, commercial parking lots, job sites, and agricultural farm properties.
          </p>
        </>
      ),
      callout: {
        title: "Family-Operated Standards",
        text: "Every vehicle is inspected and treated with utmost care by founders Reyes and Mariano. We treat your vehicle with the exact attention to detail we give our own personal rides."
      }
    },
    {
      id: "appointments-cancellations",
      navTitle: "Bookings & Cancellations",
      title: "Appointment Booking, Arrival Windows & Cancellation Policy",
      content: (
        <>
          <p>
            <strong>Arrival Windows:</strong> Mobile detailing requires transit between client locations across rural and suburban Minnesota roads. While we strive to arrive precisely at the scheduled time, we request a standard 30-to-45-minute arrival window to account for traffic, weather conditions, or unexpected extended service on prior vehicles.
          </p>
          <p>
            <strong>Cancellations &amp; Rescheduling:</strong> We respect your time and plan our mobile routes days in advance. If you need to cancel or reschedule your mobile detail, please notify us at least <strong>24 to 48 hours</strong> prior to your scheduled appointment by calling or texting <strong>(320) 287-3573</strong>.
          </p>
          <p>
            <strong>Weather Rescheduling:</strong> In the event of severe weather conditions typical in West Central Minnesota—including blizzards, sub-zero winter temperatures, torrential rain, hail, or extreme winds—we reserve the right to reschedule for the safety of our technicians and the integrity of the detailing products.
          </p>
        </>
      )
    },
    {
      id: "site-requirements",
      navTitle: "Mobile Site Requirements",
      title: "Site Access, Utilities & Working Conditions",
      content: (
        <>
          <p>
            To perform our comprehensive interior, exterior, and ceramic coating services safely, the client agrees to provide the following minimum site conditions at the requested location:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-300">
            <li>A safe, legal, and flat parking space (residential driveway, garage bay, or designated business parking stall) away from heavy passing road traffic.</li>
            <li>Sufficient clearance of at least 3 to 4 feet around all sides of the vehicle to open doors fully and navigate detailing equipment.</li>
            <li>Access to a standard exterior water spigot and a dedicated 120V electrical outlet within 75 to 100 feet of the service area (unless advance arrangements are confirmed for self-contained mobile supply).</li>
            <li>Confirmation from property management if parked in an apartment complex or commercial office lot.</li>
          </ul>
        </>
      )
    },
    {
      id: "personal-belongings",
      navTitle: "Personal Items & Valuables",
      title: "Removal of Personal Belongings & Child Safety Seats",
      content: (
        <>
          <p>
            <strong>Personal Possessions:</strong> We kindly request that all personal belongings, cash, jewelry, electronics, firearms, and high-value items be removed from the glovebox, center console, door pockets, and trunk prior to our technicians starting interior cleaning.
          </p>
          <p>
            <strong>Child Car Seats:</strong> For liability and safety reasons, our technicians will not remove or reinstall child car seats. If you would like the upholstery underneath child seats cleaned and vacuumed, please unbuckle and remove them before our arrival.
          </p>
        </>
      )
    },
    {
      id: "vehicle-condition",
      navTitle: "Condition & Pre-Existing Damage",
      title: "Pre-Existing Wear, Biological Hazards & Paint Imperfections",
      content: (
        <>
          <p>
            <strong>Pre-Service Inspection:</strong> Prior to beginning any service, our technicians conduct a pre-detail walkaround to document existing paint flaws, clear coat failure, rock chips, scratched glass, dented panels, torn leather, cracked vinyl, or sagging headliners. Dos Bros is not liable for pre-existing flaws inherent to vehicle age or prior maintenance.
          </p>
          <p>
            <strong>Severe Soiling &amp; Hazardous Materials:</strong> Vehicles containing excessive biological hazards (mold, blood, bodily fluids, severe rodent infestation) may require specialized remediation fees or may be refused if they present an unsafe health risk to our staff.
          </p>
          <p>
            <strong>Agricultural Machinery:</strong> For tractors, combines, and farm trucks serviced across Stevens County, heavy mud pack and grease accumulation may be subject to additional prep time quoted upfront with the customer.
          </p>
        </>
      )
    },
    {
      id: "satisfaction-payment",
      navTitle: "Guarantee & Payment",
      title: "100% Satisfaction Walkaround, Payment Terms & Warranty",
      content: (
        <>
          <p>
            <strong>Walkaround Inspection:</strong> Upon completion of your detail, our technicians will perform an on-site walkaround with you. If you notice an area that was overlooked or requires touch-up, we address it immediately before departing.
          </p>
          <p>
            <strong>Payment Terms:</strong> Payment is due immediately upon completion of service unless a corporate commercial invoicing arrangement has been pre-approved. We accept cash, major credit/debit cards, and electronic payment methods.
          </p>
          <p>
            <strong>Ceramic Coating Warranties:</strong> Longevity warranties on ceramic coatings and graphene treatments are contingent upon proper routine wash maintenance using pH-neutral automotive shampoo and avoiding harsh automatic tunnel car washes with abrasive brushes.
          </p>
        </>
      )
    },
    {
      id: "governing-law",
      navTitle: "Governing Law",
      title: "Governing Law & Legal Jurisdiction",
      content: (
        <>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions. Any legal disputes, claims, or proceedings arising out of or related to our mobile detailing services shall be resolved within the state or federal courts located in Stevens County, Minnesota.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalContentSection
      badge="LEGAL AGREEMENT"
      title="Terms of Use & Service Policies"
      subtitle="Clear, fair, and transparent guidelines for all mobile automotive, truck, and equipment detailing services provided by Dos Bros Auto Detailing in Morris, MN and West Central Minnesota."
      lastUpdated="September 2026"
      sections={termsSections}
    />
  );
}
