import React, { useState, useMemo, useEffect } from 'react';
import { Select, Checkbox, ConfigProvider, theme } from 'antd';
import { 
  CheckCircle2, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';
import { PhoneOutlined } from '@ant-design/icons';

// ==========================================
// 1. DATA DEFINITIONS & PRICING MATRICES
// ==========================================

const STEP_1_OPTIONS = [
  {
    id: 'inside',
    label: 'Inside only',
    sub: 'Cabin, carpets, seats',
    family: 'Interior'
  },
  {
    id: 'outside',
    label: 'Outside only',
    sub: 'Wash, wheels, finish',
    family: 'Exterior'
  },
  {
    id: 'both',
    label: 'Both inside and out',
    sub: 'The full job',
    family: 'Full Detail'
  }
];

const STEP_2_OPTIONS = [
  {
    id: 'refresh',
    label: 'Pretty good, just needs a refresh',
    sub: 'Regular upkeep',
    tier: 'Express'
  },
  {
    id: 'deep',
    label: 'It has been a while, needs a deep clean',
    sub: 'Built-up dirt',
    tier: 'Executive'
  }
];

// Resolves Want + Condition into Package details
const PACKAGE_MATRIX = {
  'inside_refresh': {
    name: 'Express Interior',
    basePrice: 195,
    timeRange: '2 to 3 hrs'
  },
  'inside_deep': {
    name: 'Executive Interior',
    basePrice: 255,
    timeRange: '3 to 5 hrs'
  },
  'outside_refresh': {
    name: 'Express Exterior',
    basePrice: 75,
    timeRange: '1 to 1.5 hrs'
  },
  'outside_deep': {
    name: 'Executive Exterior',
    basePrice: 100,
    timeRange: '1.5 to 2.5 hrs'
  },
  'both_refresh': {
    name: 'Express Full Detail',
    basePrice: 245,
    timeRange: '3 to 4.5 hrs'
  },
  'both_deep': {
    name: 'Executive Full Detail',
    basePrice: 330,
    timeRange: '5 to 7 hrs'
  }
};

const STEP_3_OPTIONS = [
  {
    id: 'car',
    label: 'Car, sedan, or coupe',
    upcharge: 0,
    badge: 'Included',
    isCustom: false
  },
  {
    id: 'mid_suv',
    label: 'Mid-size SUV or truck',
    upcharge: 20,
    badge: '+$20',
    isCustom: false,
    allowsThirdRow: true
  },
  {
    id: 'xl_suv',
    label: '3-row or XL SUV',
    upcharge: 35,
    badge: '+$35',
    isCustom: false,
    allowsThirdRow: true
  },
  {
    id: 'full_truck',
    label: 'Full-size truck',
    upcharge: 40,
    badge: '+$40',
    isCustom: false
  },
  {
    id: 'van',
    label: 'Van or Sprinter',
    upcharge: 50,
    badge: '+$50',
    isCustom: false,
    allowsThirdRow: true
  },
  {
    id: 'boat_rv',
    label: 'Boat, pontoon, RV, or oversized',
    upcharge: 0,
    badge: 'Custom',
    isCustom: true
  }
];

const STEP_4_OPTIONS = [
  {
    id: 'pet_hair',
    label: 'Pet hair removal',
    price: 30,
    displayPrice: 'from +$30',
    isFrom: true
  },
  {
    id: 'odor',
    label: 'Odor treatment',
    price: 30,
    displayPrice: 'from +$30',
    isFrom: true
  },
  {
    id: 'heavy_stains',
    label: 'Heavy stain removal',
    price: 25,
    displayPrice: 'from +$25',
    isFrom: true
  },
  {
    id: 'engine_bay',
    label: 'Engine bay detail',
    price: 50,
    displayPrice: '+$50',
    isFrom: false
  }
];

// Towns and Travel Zones
const TOWN_ZONES = [
  // Zone 1: $0
  { name: 'Morris', zone: 1, fee: 0, label: 'Morris ($0 travel)' },
  { name: 'Hancock', zone: 1, fee: 0, label: 'Hancock ($0 travel)' },
  { name: 'Alberta', zone: 1, fee: 0, label: 'Alberta ($0 travel)' },
  { name: 'Chokio', zone: 1, fee: 0, label: 'Chokio ($0 travel)' },
  { name: 'Donnelly', zone: 1, fee: 0, label: 'Donnelly ($0 travel)' },
  { name: 'Cyrus', zone: 1, fee: 0, label: 'Cyrus ($0 travel)' },

  // Zone 2: +$15
  { name: 'Starbuck', zone: 2, fee: 15, label: 'Starbuck (+$15 travel)' },
  { name: 'Glenwood', zone: 2, fee: 15, label: 'Glenwood (+$15 travel)' },
  { name: 'Lowry', zone: 2, fee: 15, label: 'Lowry (+$15 travel)' },
  { name: 'Hoffman', zone: 2, fee: 15, label: 'Hoffman (+$15 travel)' },
  { name: 'Kensington', zone: 2, fee: 15, label: 'Kensington (+$15 travel)' },
  { name: 'Barrett', zone: 2, fee: 15, label: 'Barrett (+$15 travel)' },
  { name: 'Elbow Lake', zone: 2, fee: 15, label: 'Elbow Lake (+$15 travel)' },
  { name: 'Herman', zone: 2, fee: 15, label: 'Herman (+$15 travel)' },
  { name: 'Benson', zone: 2, fee: 15, label: 'Benson (+$15 travel)' },
  { name: 'Clontarf', zone: 2, fee: 15, label: 'Clontarf (+$15 travel)' },
  { name: 'Danvers', zone: 2, fee: 15, label: 'Danvers (+$15 travel)' },
  { name: 'Graceville', zone: 2, fee: 15, label: 'Graceville (+$15 travel)' },

  // Zone 3: +$25
  { name: 'Alexandria', zone: 3, fee: 25, label: 'Alexandria (+$25 travel)' },
  { name: 'Villard', zone: 3, fee: 25, label: 'Villard (+$25 travel)' },
  { name: 'Farwell', zone: 3, fee: 25, label: 'Farwell (+$25 travel)' },
  { name: 'Ashby', zone: 3, fee: 25, label: 'Ashby (+$25 travel)' },
  { name: 'Evansville', zone: 3, fee: 25, label: 'Evansville (+$25 travel)' },
  { name: 'Brandon', zone: 3, fee: 25, label: 'Brandon (+$25 travel)' },
  { name: 'Osakis', zone: 3, fee: 25, label: 'Osakis (+$25 travel)' },
  { name: 'Appleton', zone: 3, fee: 25, label: 'Appleton (+$25 travel)' },
  { name: 'Milan', zone: 3, fee: 25, label: 'Milan (+$25 travel)' },
  { name: 'Kerkhoven', zone: 3, fee: 25, label: 'Kerkhoven (+$25 travel)' },
  { name: 'Murdock', zone: 3, fee: 25, label: 'Murdock (+$25 travel)' },
  { name: 'Clinton', zone: 3, fee: 25, label: 'Clinton (+$25 travel)' },
  { name: 'Beardsley', zone: 3, fee: 25, label: 'Beardsley (+$25 travel)' },
  { name: 'Wheaton', zone: 3, fee: 25, label: 'Wheaton (+$25 travel)' },
  { name: 'Sunburg', zone: 3, fee: 25, label: 'Sunburg (+$25 travel)' },

  // Zone 4: Custom Quote
  { name: 'Fergus Falls', zone: 4, fee: 0, isCustom: true, label: 'Fergus Falls (Custom travel)' },
  { name: 'Sauk Centre', zone: 4, fee: 0, isCustom: true, label: 'Sauk Centre (Custom travel)' },
  { name: 'Willmar', zone: 4, fee: 0, isCustom: true, label: 'Willmar (Custom travel)' },
  { name: 'New London', zone: 4, fee: 0, isCustom: true, label: 'New London (Custom travel)' },
  { name: 'Spicer', zone: 4, fee: 0, isCustom: true, label: 'Spicer (Custom travel)' },
  { name: 'Montevideo', zone: 4, fee: 0, isCustom: true, label: 'Montevideo (Custom travel)' },
  { name: 'Madison', zone: 4, fee: 0, isCustom: true, label: 'Madison (Custom travel)' },
  { name: 'Ortonville', zone: 4, fee: 0, isCustom: true, label: 'Ortonville (Custom travel)' },
  { name: 'Melrose', zone: 4, fee: 0, isCustom: true, label: 'Melrose (Custom travel)' },
  { name: 'Paynesville', zone: 4, fee: 0, isCustom: true, label: 'Paynesville (Custom travel)' },
  { name: 'Long Prairie', zone: 4, fee: 0, isCustom: true, label: 'Long Prairie (Custom travel)' },

  // Other: Custom Quote
  { name: 'My town is not listed', zone: 5, fee: 0, isCustom: true, label: 'My town is not listed (Custom quote)' }
];

export default function CostCalculatorSection() {
  // Step 1: Want done
  const [wantDone, setWantDone] = useState('both');
  // Step 2: Condition
  const [condition, setCondition] = useState('deep');
  // Step 3: Vehicle
  const [vehicle, setVehicle] = useState('mid_suv');
  const [thirdRowCargo, setThirdRowCargo] = useState(false);
  // Step 4: Add-ons (array of IDs)
  const [addons, setAddons] = useState([]);
  // Step 5: Town
  const [selectedTownName, setSelectedTownName] = useState('Morris');

  // Mobile wizard step state (1 to 5)
  const [mobileStep, setMobileStep] = useState(1);

  // Selected vehicle object
  const selectedVehicleObj = useMemo(() => {
    return STEP_3_OPTIONS.find(v => v.id === vehicle) || STEP_3_OPTIONS[0];
  }, [vehicle]);

  // Selected town object
  const selectedTownObj = useMemo(() => {
    return TOWN_ZONES.find(t => t.name === selectedTownName) || TOWN_ZONES[0];
  }, [selectedTownName]);

  // Check if custom quote trigger is active
  const isCustomQuote = useMemo(() => {
    return selectedVehicleObj.isCustom || (selectedTownObj && selectedTownObj.isCustom);
  }, [selectedVehicleObj, selectedTownObj]);

  // Resolve base package
  const packageKey = `${wantDone}_${condition}`;
  const currentPackage = PACKAGE_MATRIX[packageKey] || PACKAGE_MATRIX['both_deep'];

  // Calculate size upcharge
  const vehicleBaseUpcharge = selectedVehicleObj.upcharge;
  const extraRowUpcharge = (thirdRowCargo && (vehicle === 'mid_suv' || vehicle === 'van')) ? 15 : 0;
  const totalVehicleUpcharge = vehicleBaseUpcharge + extraRowUpcharge;

  // Travel Fee
  const travelFee = selectedTownObj ? (selectedTownObj.fee || 0) : 0;

  // Add-ons total & check if any "from" add-on selected
  const { addonsTotal, hasFromAddon, selectedAddonObjects } = useMemo(() => {
    let total = 0;
    let hasFrom = false;
    const objs = [];

    addons.forEach(id => {
      const item = STEP_4_OPTIONS.find(a => a.id === id);
      if (item) {
        total += item.price;
        if (item.isFrom) hasFrom = true;
        objs.push(item);
      }
    });

    return { addonsTotal: total, hasFromAddon: hasFrom, selectedAddonObjects: objs };
  }, [addons]);

  // Total Starting Estimate
  const totalEstimate = currentPackage.basePrice + totalVehicleUpcharge + travelFee + addonsTotal;

  // Log completions rule
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completionData = {
        package: currentPackage.name,
        basePrice: currentPackage.basePrice,
        vehicle: selectedVehicleObj.label,
        thirdRowCargo,
        town: selectedTownName,
        addons: selectedAddonObjects.map(a => a.label),
        totalEstimate,
        isCustomQuote,
        timestamp: new Date().toISOString()
      };
      try {
        localStorage.setItem('dosbros_last_estimate', JSON.stringify(completionData));
      } catch (e) {}
    }
  }, [currentPackage, selectedVehicleObj, thirdRowCargo, selectedTownName, selectedAddonObjects, totalEstimate, isCustomQuote]);

  // Toggle add-on
  const toggleAddon = (id) => {
    setAddons(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Reset calculator
  const handleReset = () => {
    setWantDone('both');
    setCondition('deep');
    setVehicle('mid_suv');
    setThirdRowCargo(false);
    setAddons([]);
    setSelectedTownName('Morris');
    setMobileStep(1);
  };

  // Build prefill URL for Contact page
  const quoteUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set('vehicle', selectedVehicleObj.label);
    params.set('town', selectedTownName);
    
    const detailsArr = [];
    detailsArr.push(`Package: ${currentPackage.name} ($${currentPackage.basePrice} starting)`);
    if (thirdRowCargo) detailsArr.push('Includes: Third row / Extra Cargo');
    if (selectedAddonObjects.length > 0) {
      detailsArr.push(`Add-ons: ${selectedAddonObjects.map(a => a.label).join(', ')}`);
    }
    if (isCustomQuote) {
      detailsArr.push('Requesting: Custom Quote');
    } else {
      detailsArr.push(`Estimated Starting Price: $${totalEstimate}`);
    }
    params.set('details', detailsArr.join(' | '));

    return `/contact?${params.toString()}#contact-form`;
  }, [selectedVehicleObj, selectedTownName, currentPackage, thirdRowCargo, selectedAddonObjects, isCustomQuote, totalEstimate]);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ef4444',
          colorBgContainer: '#0a0a0a',
          colorBgElevated: '#000000',
          colorBorder: 'rgba(38, 38, 38, 0.9)',
          colorText: '#ffffff',
          colorTextPlaceholder: '#71717a',
          borderRadius: 10,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          controlHeight: 38,
          fontSize: 13,
        },
        components: {
          Select: {
            colorBgContainer: '#121212',
            colorBgElevated: '#000000',
            colorBorder: 'rgba(50, 50, 50, 0.9)',
            activeBorderColor: '#ef4444',
            hoverBorderColor: 'rgba(239, 68, 68, 0.6)',
            activeOutlineColor: 'rgba(239, 68, 68, 0.15)',
            colorText: '#ffffff',
            optionSelectedBg: 'rgba(239, 68, 68, 0.18)',
            optionActiveBg: 'rgba(255, 255, 255, 0.08)',
          },
          Checkbox: {
            colorPrimary: '#ef4444',
            colorPrimaryHover: '#dc2626',
            colorBgContainer: '#171717',
            colorBorder: '#404040',
          }
        }
      }}
    >
      {/* SECTION ROOT: Notice no overflow-hidden so position:sticky works flawlessly */}
      <section id="cost-calculator" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 border-t border-neutral-900 select-none">
        
        {/* Subtle Ambient Radial Glows contained in isolated wrapper */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-widest uppercase">PRICE CALCULATOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Find your starting price in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                about a minute
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
              Answer five short questions. The estimate on the right updates as you go, service time included.
            </p>
          </div>

          {/* Main Layout Grid: items-stretch ensures right column matches left column height for sticky scrolling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: THE 5 STEPS (SCROLLS NATURALLY)                              */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-7">

              {/* Mobile Progress Bar & Step Indicator */}
              <div className="block lg:hidden bg-neutral-900/90 border border-neutral-800/90 p-3 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-light text-[11px]">
                    Step {mobileStep} of 5:
                  </span>
                  <span className="text-white font-medium text-[11px]">
                    {mobileStep === 1 && 'What do you want done?'}
                    {mobileStep === 2 && 'What condition is it in?'}
                    {mobileStep === 3 && 'What do you drive?'}
                    {mobileStep === 4 && 'Anything extra? (Optional)'}
                    {mobileStep === 5 && 'What town are you in?'}
                  </span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${(mobileStep / 5) * 100}%` }}
                  />
                </div>
                {/* Mobile Step Switcher */}
                <div className="flex items-center justify-between pt-0.5">
                  <button
                    type="button"
                    disabled={mobileStep === 1}
                    onClick={() => setMobileStep(prev => Math.max(1, prev - 1))}
                    className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white disabled:opacity-30 py-1 px-2 rounded-lg bg-neutral-950 border border-neutral-800 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                    Tap to select
                  </span>

                  <button
                    type="button"
                    disabled={mobileStep === 5}
                    onClick={() => setMobileStep(prev => Math.min(5, prev + 1))}
                    className="inline-flex items-center gap-1 text-[11px] text-white hover:text-red-400 disabled:opacity-30 py-1 px-2 rounded-lg bg-neutral-950 border border-neutral-800 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STEP 01: What do you want done?                               */}
              {/* ------------------------------------------------------------- */}
              <div className={`space-y-2.5 ${mobileStep !== 1 ? 'hidden lg:block' : 'block'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium text-red-500">01</span>
                  <h3 className="text-xs sm:text-sm font-normal text-white font-['Outfit']">
                    What do you want done?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {STEP_1_OPTIONS.map((opt) => {
                    const isSelected = wantDone === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setWantDone(opt.id);
                          if (window.innerWidth < 1024) setMobileStep(2);
                        }}
                        className={`relative w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-neutral-900/90 border-red-500/80 shadow-md shadow-red-600/10 ring-1 ring-red-500/40'
                            : 'bg-neutral-900/35 hover:bg-neutral-900/65 border-neutral-800/80 hover:border-neutral-700'
                        }`}
                      >
                        <div className="space-y-0.5 pr-5">
                          <span className={`block text-xs sm:text-[13px] font-medium ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                            {opt.label}
                          </span>
                          <span className="block text-[10.5px] text-neutral-400 font-light leading-snug">
                            {opt.sub}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 text-red-500">
                            <CheckCircle2 className="w-3.5 h-3.5 fill-red-500/20" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STEP 02: What condition is it in?                             */}
              {/* ------------------------------------------------------------- */}
              <div className={`space-y-2.5 ${mobileStep !== 2 ? 'hidden lg:block' : 'block'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium text-red-500">02</span>
                  <h3 className="text-xs sm:text-sm font-normal text-white font-['Outfit']">
                    What condition is it in?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STEP_2_OPTIONS.map((opt) => {
                    const isSelected = condition === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setCondition(opt.id);
                          if (window.innerWidth < 1024) setMobileStep(3);
                        }}
                        className={`relative w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-neutral-900/90 border-red-500/80 shadow-md shadow-red-600/10 ring-1 ring-red-500/40'
                            : 'bg-neutral-900/35 hover:bg-neutral-900/65 border-neutral-800/80 hover:border-neutral-700'
                        }`}
                      >
                        <div className="space-y-0.5 pr-5">
                          <span className={`block text-xs sm:text-[13px] font-medium ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                            {opt.label}
                          </span>
                          <span className="block text-[10.5px] text-neutral-400 font-light leading-snug">
                            {opt.sub}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 text-red-500">
                            <CheckCircle2 className="w-3.5 h-3.5 fill-red-500/20" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STEP 03: What do you drive?                                   */}
              {/* ------------------------------------------------------------- */}
              <div className={`space-y-2.5 ${mobileStep !== 3 ? 'hidden lg:block' : 'block'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-red-500">03</span>
                    <h3 className="text-xs sm:text-sm font-normal text-white font-['Outfit']">
                      What do you drive?
                    </h3>
                  </div>
                  {selectedVehicleObj.isCustom && (
                    <span className="text-[10px] text-amber-400 font-light bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded-full">
                      Custom quote
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STEP_3_OPTIONS.map((opt) => {
                    const isSelected = vehicle === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setVehicle(opt.id);
                          if (!opt.allowsThirdRow) {
                            setThirdRowCargo(false);
                          }
                          if (opt.id === 'xl_suv') {
                            setThirdRowCargo(true);
                          }
                          if (window.innerWidth < 1024) setMobileStep(4);
                        }}
                        className={`relative w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-neutral-900/90 border-red-500/80 shadow-md shadow-red-600/10 ring-1 ring-red-500/40'
                            : 'bg-neutral-900/35 hover:bg-neutral-900/65 border-neutral-800/80 hover:border-neutral-700'
                        }`}
                      >
                        <span className={`text-xs sm:text-[13px] font-medium truncate ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                          {opt.label}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                            opt.isCustom
                              ? 'bg-neutral-800 border-neutral-700 text-neutral-300'
                              : isSelected
                              ? 'bg-red-500/20 border-red-500/40 text-red-400'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                          }`}>
                            {opt.badge}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 fill-red-500/20 shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Conditional Checkbox: "Third row / Extra Cargo" when SUV or Van is selected */}
                {(vehicle === 'mid_suv' || vehicle === 'xl_suv' || vehicle === 'van') && (
                  <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/90 flex items-center justify-between gap-2.5 transition-all">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="third-row-toggle"
                        checked={thirdRowCargo}
                        onChange={(e) => setThirdRowCargo(e.target.checked)}
                      />
                      <label 
                        htmlFor="third-row-toggle" 
                        className="text-xs font-normal text-neutral-200 cursor-pointer"
                      >
                        Third row / Extra Cargo
                        <span className="hidden sm:inline text-[11px] text-neutral-400 ml-1.5 font-light">
                          (Fold-down 3rd row, expanded trunk, or cargo bay)
                        </span>
                      </label>
                    </div>

                    <span className="text-[10px] font-mono text-amber-400/90 shrink-0 font-light bg-amber-950/30 px-1.5 py-0.5 rounded border border-amber-800/40">
                      {vehicle === 'xl_suv' ? 'Included' : '+$15'}
                    </span>
                  </div>
                )}
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STEP 04: Anything extra? (Optional)                           */}
              {/* ------------------------------------------------------------- */}
              <div className={`space-y-2.5 ${mobileStep !== 4 ? 'hidden lg:block' : 'block'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-red-500">04</span>
                    <h3 className="text-xs sm:text-sm font-normal text-white font-['Outfit']">
                      Anything extra?
                    </h3>
                  </div>
                  <span className="text-[10.5px] text-neutral-500 font-light">Optional</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STEP_4_OPTIONS.map((opt) => {
                    const isSelected = addons.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleAddon(opt.id)}
                        className={`relative w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-neutral-900/90 border-red-500/80 shadow-md shadow-red-600/10 ring-1 ring-red-500/40'
                            : 'bg-neutral-900/35 hover:bg-neutral-900/65 border-neutral-800/80 hover:border-neutral-700'
                        }`}
                      >
                        <span className={`text-xs sm:text-[13px] font-medium truncate ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                          {opt.label}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className={`text-[10px] font-mono font-light px-1.5 py-0.5 rounded border ${
                            isSelected
                              ? 'bg-red-500/20 border-red-500/40 text-red-400'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                          }`}>
                            {opt.displayPrice}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 fill-red-500/20 shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STEP 05: What town are you in?                                */}
              {/* ------------------------------------------------------------- */}
              <div className={`space-y-2.5 ${mobileStep !== 5 ? 'hidden lg:block' : 'block'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-red-500">05</span>
                    <h3 className="text-xs sm:text-sm font-normal text-white font-['Outfit']">
                      What town are you in?
                    </h3>
                  </div>
                  {/* {selectedTownObj && (
                    <span className={`text-[10.5px] font-light px-2 py-0.5 rounded-full border ${
                      selectedTownObj.zone === 1
                        ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40'
                        : selectedTownObj.zone <= 3
                        ? 'bg-neutral-900 text-neutral-300 border-neutral-800'
                        : 'bg-amber-950/40 text-amber-400 border-amber-800/40'
                    }`}>
                      {selectedTownObj.zone === 1 && 'Zone 1 · Free Travel'}
                      {selectedTownObj.zone === 2 && 'Zone 2 · $15 Travel'}
                      {selectedTownObj.zone === 3 && 'Zone 3 · $25 Travel'}
                      {selectedTownObj.zone >= 4 && 'Extended Travel'}
                    </span>
                  )} */}
                </div>

                <div className="relative">
                  <Select
                    showSearch
                    placeholder="Search or select your town..."
                    value={selectedTownName}
                    onChange={(val) => setSelectedTownName(val)}
                    popupClassName="dark-select-dropdown"
                    popupMatchSelectWidth={true}
                    dropdownStyle={{ backgroundColor: '#000000', padding: '6px' }}
                    className="w-full"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={TOWN_ZONES.map(t => ({
                      value: t.name,
                      label: `${t.name} (${t.zone === 1 ? 'Free travel' : t.isCustom ? 'Custom travel' : `+$${t.fee} travel`})`
                    }))}
                  />
                </div>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: STICKY ESTIMATE / CUSTOM QUOTE CARD                         */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 relative h-full lg:self-stretch">
              <div className="lg:sticky lg:top-24 z-20">
                
                {isCustomQuote ? (
                  /* ------------------------------------------------------------- */
                  /* RESULT STATE A: CUSTOM QUOTE SCREEN                           */
                  /* ------------------------------------------------------------- */
                  <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/60 p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4">
                    
                    {/* Header Pill & Step Progress */}
                    <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-medium px-2 py-0.5 rounded-md bg-amber-950/40 border border-amber-800/40">
                        CUSTOM QUOTE
                      </span>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-normal text-white font-['Outfit'] leading-snug">
                        This one needs a real quote
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full" />
                    </div>

                    {/* Explanatory Narrative */}
                    <div className="space-y-1.5 text-xs text-neutral-300 font-light leading-relaxed">
                      <p>
                        Boats, pontoons, RVs, oversized vehicles, and towns further out get priced individually. Too many variables for a calculator to guess at.
                      </p>
                      <p className="text-neutral-400">
                        Tell us what you have and where you are. We will come back the same day.
                      </p>
                    </div>

                    {/* Side-by-Side Action Buttons: Quote + Call */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-2">
                        <a
                          href={quoteUrl}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/20 border border-red-500/40 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                          <span>Get My Free Quote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href="tel:3202873573"
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                        >
                          <PhoneOutlined className="text-red-500 text-xs" />
                          <span>Call 320-287-3573</span>
                        </a>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ------------------------------------------------------------- */
                  /* RESULT STATE B: STANDARD ESTIMATE SCREEN                      */
                  /* ------------------------------------------------------------- */
                  <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/60 p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-3.5">
                    
                    {/* Top Header without 'Live Calculation' */}
                    <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 font-light">
                        STARTING ESTIMATE
                      </span>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    </div>

                    {/* Main Big Number Display */}
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-neutral-400 font-light block">
                        Your estimate starts at
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-light text-white font-['Outfit'] tracking-tight">
                          ${totalEstimate}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-light">
                          starting at
                        </span>
                      </div>
                    </div>

                    {/* Context Summary & Time Requirement */}
                    <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/70 space-y-1.5">
                      <div className="text-xs text-neutral-200 font-normal leading-relaxed">
                        {currentPackage.name} · {selectedVehicleObj.label} · {selectedTownName}
                      </div>

                      <div className="flex items-center gap-1.5 text-[11.5px] text-neutral-200 font-light pt-1 border-t border-neutral-900">
                        <Clock className="w-3.5 h-3.5 text-neutral-200 shrink-0" />
                        <span>Expect us to be there {currentPackage.timeRange}</span>
                      </div>
                    </div>

                    {/* Line Items Breakdown */}
                    <div className="space-y-1.5 pt-0.5 text-[11.5px] font-light">
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>{currentPackage.name}</span>
                        <span className="font-mono text-white font-normal">${currentPackage.basePrice}</span>
                      </div>

                      {totalVehicleUpcharge > 0 && (
                        <div className="flex items-center justify-between text-neutral-300">
                          <span>{selectedVehicleObj.label}</span>
                          <span className="font-mono text-neutral-200">+${vehicleBaseUpcharge}</span>
                        </div>
                      )}

                      {extraRowUpcharge > 0 && (
                        <div className="flex items-center justify-between text-neutral-300">
                          <span>Third row / Extra Cargo</span>
                          <span className="font-mono text-neutral-200">+${extraRowUpcharge}</span>
                        </div>
                      )}

                      {selectedAddonObjects.map(addon => (
                        <div key={addon.id} className="flex items-center justify-between text-neutral-300">
                          <span>{addon.label}</span>
                          <span className="font-mono text-neutral-200">+{addon.displayPrice.replace('from ', '')}</span>
                        </div>
                      ))}

                      <div className="flex items-center justify-between text-neutral-300">
                        <span>Travel to {selectedTownName}</span>
                        <span className="font-mono text-neutral-200">
                          {travelFee === 0 ? 'Included' : `+$${travelFee}`}
                        </span>
                      </div>

                      {/* Total Bar */}
                      <div className="border-t border-neutral-800 pt-2 flex items-center justify-between text-xs">
                        <span className="text-white font-normal">Starting at</span>
                        <span className="text-base font-normal text-white font-mono font-['Outfit']">
                          ${totalEstimate}
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Footnote */}
                    <div className="rounded-lg p-2 bg-neutral-950/60 border border-neutral-800/60 text-[10.5px] text-neutral-400 font-light leading-relaxed">
                      {hasFromAddon ? (
                        <span>
                          Pet hair, stains, and odor are priced from these amounts because severity varies a lot. Send a photo with your quote request and we will give you a firm number.
                        </span>
                      ) : (
                        <span>
                          This is a starting price for a vehicle in average condition. If yours needs more work than that, Reyes will tell you before he starts, never after he finishes.
                        </span>
                      )}
                    </div>

                    {/* Side-by-Side Action Buttons: Quote + Call */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-2">
                        <a
                          href={quoteUrl}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/20 border border-red-500/40 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                          <span>Get My Exact Quote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href="tel:3202873573"
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                        >
                          <PhoneOutlined className="text-red-500 text-xs" />
                          <span>Call 320-287-3573</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </section>
    </ConfigProvider>
  );
}
