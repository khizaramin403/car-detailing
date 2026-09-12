import React from 'react';
import LegalContentSection from './LegalContentSection.jsx';

export default function DisclaimerContentSection() {
  const disclaimerSections = [
    {
      id: "general-disclaimer",
      navTitle: "General Scope",
      title: "Realistic Detailing Expectations vs. Body Shop Restoration",
      content: (
        <>
          <p>
            Dos Bros Auto Detailing specializes in high-end mobile automotive detailing, paint correction, ceramic coatings, and interior reconditioning across Morris, Minnesota and Stevens County. Our goal is always to deliver the highest possible level of cleanliness, gloss, and paint enhancement realistic for the current age, mileage, and maintenance history of your vehicle.
          </p>
          <p>
            Detailing is an intensive cosmetic rejuvenation process; it is distinct from mechanical repair, body shop collision repair, or automotive upholstery re-upholstering. We cannot repair mechanical malfunctions, cracked windscreens, dry-rotted leather, broken plastic trim tabs, or structural corrosion.
          </p>
        </>
      ),
      callout: {
        title: "Our Guiding Principle",
        text: "We aim for maximum realistic perfection while maintaining the structural and chemical safety of your vehicle's delicate surfaces, leather dyes, and factory clear coat."
      }
    },
    {
      id: "paint-correction",
      navTitle: "Paint Correction & Clear Coat",
      title: "Paint Correction Boundaries & Clear Coat Integrity",
      content: (
        <>
          <p>
            Automotive paint consists of an electro-coat, primer, color base coat, and a microscopic protective layer of clear coat. Our single-stage and multi-stage paint correction services utilize precision dual-action polishers, micro-abrasive compounds, and specialized foam/microfiber pads to safely eliminate 70% to 90%+ of swirl marks, light wash scratches, and water spots.
          </p>
          <p>
            <strong>Deep Scratch Limitations:</strong> If a scratch catches your fingernail, it has penetrated through the clear coat into the color coat or underlying primer. Buffing further would destroy the clear coat and cause permanent clear coat failure. In such instances, touch-up paint or body shop panel repainting is required.
          </p>
          <p>
            <strong>Rock Chips &amp; Minnesota Road Salt:</strong> Winter driving across Stevens County frequently causes gravel rock chips and road salt pitting. Paint correction will enhance the gloss of surrounding clear coat, but will not refill missing paint chips.
          </p>
        </>
      )
    },
    {
      id: "stain-odor",
      navTitle: "Stains & Odor Removal",
      title: "Interior Upholstery Stains, Pet Hair & Odor Limitations",
      content: (
        <>
          <p>
            We utilize commercial hot-water extractors, enzyme cleaners, steam machines, and ozone treatments to tackle the toughest interior stains and smells. However, complete 100% removal cannot be guaranteed in every scenario:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li><strong>Set-In Stains:</strong> Stains caused by artificial food dyes, harsh chemical spills, bleach, ink, or acid that have permanently altered the fabric or carpet dye cannot be reversed through cleaning alone.</li>
            <li><strong>Deep Mildew &amp; Flooding:</strong> If liquid or milk has penetrated deep into carpet backing foam or interior sound-deadening sublayers, odor elimination may require subfloor replacement.</li>
            <li><strong>Excessive Pet Hair:</strong> Barbed pet hairs that have mechanically woven into tight woven carpet fibers will be heavily removed with specialized rubber brushes and extractors, but slight residual fibers may remain in heavily embedded footwells.</li>
          </ul>
        </>
      )
    },
    {
      id: "coatings-sealants",
      navTitle: "Ceramic Coatings",
      title: "Ceramic & Graphene Coating Durability & Maintenance",
      content: (
        <>
          <p>
            Professional ceramic coatings and graphene sealants provide industry-leading hydrophobicity, UV resistance, chemical protection, and ease of washing. However, a ceramic coating is not an impermeable shield:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li>Ceramic coatings will <strong>not</strong> prevent heavy stone chips, deep gouges, key scratches, or severe parking lot door dings.</li>
            <li>Coatings do not make a vehicle completely maintenance-free; periodic washing using proper two-bucket methods or touchless washes is essential to avoid clogging the coating pores with road grime.</li>
            <li>Washing coated vehicles in harsh abrasive automatic tunnel brush car washes will void coating durability and introduce brush scratches.</li>
          </ul>
        </>
      )
    },
    {
      id: "agricultural-equipment",
      navTitle: "Farm & Heavy Equipment",
      title: "Agricultural Machinery & Heavy Equipment Detailing",
      content: (
        <>
          <p>
            For tractors, combines, grain trucks, and field machinery serviced in rural Stevens County:
          </p>
          <p>
            Due to heavy agricultural use, caked field mud, hydraulic fluid seepage, and grain dust, detailing focuses on deep mechanical degreasing, high-pressure washing, cab sanitation, and glass clarity. Sun-faded plastic panels or chalked tractor paint will be rejuvenated with UV protectants, but factory gloss cannot be restored to weathered powder coats without repainting.
          </p>
        </>
      )
    },
    {
      id: "weather-dispatch",
      navTitle: "Weather Conditions",
      title: "Minnesota Weather-Dependent Mobile Service",
      content: (
        <>
          <p>
            As a 100% mobile detailing team, our operations depend on safe outdoor environmental conditions. In instances of sub-freezing Minnesota winter temperatures, blizzard conditions, lightning, severe hail warnings, or torrential downpours, on-site driveway detailing will be rescheduled for the safety of our team, client vehicles, and chemical integrity.
          </p>
          <p>
            If the customer provides a fully enclosed, heated garage bay with water access, winter services may proceed as scheduled.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalContentSection
      badge="TRANSPARENCY & LIMITS"
      title="Service Disclaimer & Technical Disclosures"
      subtitle="Clear disclosures regarding vehicle condition expectations, paint correction boundaries, stain extraction limits, and mobile detailing operations in Stevens County, MN."
      lastUpdated="September 2026"
      sections={disclaimerSections}
    />
  );
}
