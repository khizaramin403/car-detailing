import React, { useState, useEffect } from 'react';
import { Form, Input, Select, ConfigProvider, theme } from 'antd';
import { 
  GoogleOutlined, 
  FacebookOutlined, 
  InstagramOutlined, 
  TikTokOutlined,
  PhoneOutlined,
  CheckCircleFilled,
  MessageOutlined,
  FormOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { ArrowRight, Send, Sparkles } from 'lucide-react';

const { TextArea } = Input;

export default function ContactReachAndFormSection() {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const vehicle = params.get('vehicle') || params.get('vehicleType');
      const townParam = params.get('town');
      const detailsParam = params.get('details') || params.get('service');

      const valuesToSet = {};
      if (vehicle) {
        if (vehicle.includes('Car') || vehicle.includes('sedan')) valuesToSet.vehicleType = 'Car or sedan';
        else if (vehicle.includes('SUV')) valuesToSet.vehicleType = 'SUV';
        else if (vehicle.includes('truck') || vehicle.includes('Pickup')) valuesToSet.vehicleType = 'Pickup truck';
        else if (vehicle.includes('Van') || vehicle.includes('Sprinter')) valuesToSet.vehicleType = 'Van or Sprinter';
        else if (vehicle.includes('Boat') || vehicle.includes('pontoon') || vehicle.includes('RV')) valuesToSet.vehicleType = 'Boat or pontoon';
        else valuesToSet.vehicleType = 'Something else';
      }
      if (townParam) valuesToSet.town = townParam;
      if (detailsParam) valuesToSet.details = detailsParam;

      if (Object.keys(valuesToSet).length > 0) {
        form.setFieldsValue(valuesToSet);
      }
    }
  }, [form]);

  const handleSubmit = (values) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    form.resetFields();
    setIsSubmitted(false);
  };

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
          colorTextPlaceholder: '#52525b',
          borderRadius: 8,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          controlHeight: 38,
          fontSize: 13,
        },
        components: {
          Form: {
            itemMarginBottom: 13,
            labelFontSize: 12,
            labelColor: '#d4d4d8',
            labelHeight: 18,
          },
          Input: {
            colorBgContainer: '#0a0a0a',
            colorBorder: 'rgba(38, 38, 38, 0.9)',
            activeBorderColor: '#ef4444',
            hoverBorderColor: 'rgba(239, 68, 68, 0.5)',
            activeShadow: '0 0 0 2px rgba(239, 68, 68, 0.12)',
            colorText: '#ffffff',
            colorTextPlaceholder: '#52525b',
            borderRadius: 8,
            paddingBlock: 7,
            paddingInline: 12,
            fontSize: 13,
          },
          Select: {
            colorBgContainer: '#0a0a0a',
            colorBgElevated: '#000000',
            colorBorder: 'rgba(38, 38, 38, 0.9)',
            activeBorderColor: '#ef4444',
            hoverBorderColor: 'rgba(239, 68, 68, 0.5)',
            activeOutlineColor: 'rgba(239, 68, 68, 0.12)',
            colorText: '#ffffff',
            colorTextPlaceholder: '#52525b',
            borderRadius: 8,
            controlHeight: 38,
            fontSize: 13,
            optionSelectedBg: 'rgba(239, 68, 68, 0.18)',
            optionActiveBg: 'rgba(255, 255, 255, 0.08)',
          },
        },
      }}
    >
      <section id="contact-booking" className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900/90 overflow-hidden select-none">
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/5 blur-[130px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: SECTION 2: HOW TO REACH US                                   */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-5">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-normal text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="tracking-wide uppercase">How To Reach Us</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-light text-white font-['Outfit'] tracking-tight leading-snug">
                  Three Ways to <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Get in Touch</span>
                </h2>

                <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full" />
              </div>

              {/* Minimal Streamlined List (No bulky boxes) */}
              <div className="divide-y divide-neutral-900/90 border-y border-neutral-900/90">
                
                {/* 1. Quote Form */}
                <div className="py-3.5 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Quote form
                    </span>
                    <span className="text-[11px] text-amber-400/90 font-light">
                      Best for: Getting a price
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pl-3.5">
                    Fill in the form below. Takes about a minute. Add a photo if the inside is rough.
                  </p>
                </div>

                {/* 2. Phone or Text */}
                <div className="py-3.5 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Phone or text
                    </span>
                    <span className="text-[11px] text-neutral-400 font-light">
                      Best for: Quick questions
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pl-3.5">
                    <a 
                      href="tel:3202873573" 
                      className="text-white hover:text-red-400 font-normal underline underline-offset-4 decoration-neutral-700 hover:decoration-red-500 transition-colors"
                    >
                      320-287-3573
                    </a>
                    . Text is often faster if we are mid-job with equipment running.
                  </p>
                </div>

                {/* 3. Facebook Messenger */}
                <div className="py-3.5 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Facebook Messenger
                    </span>
                    <span className="text-[11px] text-neutral-400 font-light">
                      Best for: If that is where you already are
                    </span>
                  </div>
                  <div className="pl-3.5 pt-0.5">
                    <a
                      href="https://m.me/dosbrosautodetailing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-normal transition-colors"
                    >
                      <span>Message us on Facebook</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Informational Note & Operating Hours (Minimal & Uncluttered) */}
              <div className="space-y-2 pt-0.5">
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  We are usually reachable during the day, though if we are in the middle of a vehicle it might take us a bit to get back to you. We answer everything.
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-light pt-0.5">
                  <ClockCircleOutlined className="text-amber-400 text-xs shrink-0" />
                  <span>Hours: Sunday through Saturday, 8am to 6pm</span>
                </div>
              </div>

              {/* Social Channels (Google, Facebook, Instagram, TikTok) */}
              <div className="pt-2 space-y-2">
                <span className="block text-[11px] font-light text-neutral-500 uppercase tracking-wider">
                  Connect With Us
                </span>
                <div className="flex items-center gap-2">
                  
                  {/* Google */}
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Review and Profile"
                    className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800 hover:border-neutral-700"
                  >
                    <GoogleOutlined className="text-xs" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800 hover:border-neutral-700"
                  >
                    <FacebookOutlined className="text-xs" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800 hover:border-neutral-700"
                  >
                    <InstagramOutlined className="text-xs" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok Profile"
                    className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800 hover:border-neutral-700"
                  >
                    <TikTokOutlined className="text-xs" />
                  </a>

                </div>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: SECTION 3: THE FORM                                         */}
            {/* ========================================================================= */}
            <div id="contact-form" className="lg:col-span-7 xl:col-span-7">
              <div className="rounded-2xl bg-neutral-900/30 border border-neutral-800/60 p-4 sm:p-6 lg:p-7 shadow-xl backdrop-blur-md">
                
                {/* Form Title & Subtitle (Clean & Minimal) */}
                <div className="border-b border-neutral-800/60 pb-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-normal text-white font-['Outfit'] tracking-tight">
                    Get Your Free Quote
                  </h2>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                    Fill this out and we will come back with a price. No obligation, no pressure, and nobody is going to keep calling you afterward.
                  </p>
                </div>

                {isSubmitted ? (
                  /* Success Notification State */
                  <div className="py-8 text-center space-y-3.5">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircleFilled className="text-xl" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-normal text-white font-['Outfit']">
                        Thank You! Quote Request Received
                      </h3>
                      <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                        Reyes or Mariano will review what you drive and send you a straight price shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  /* Ant Design Contact Form */
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    requiredMark={false}
                    className="space-y-0"
                  >
                    {/* Row 1: First Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                      
                      {/* First Name (Required) */}
                      <Form.Item
                        name="firstName"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            First name <span className="text-red-500">*</span>
                          </span>
                        }
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                        className="!mb-2.5"
                      >
                        <Input 
                          placeholder="Your first name" 
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                      {/* Phone Number (Required) */}
                      <Form.Item
                        name="phoneNumber"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            Phone number <span className="text-red-500">*</span>
                          </span>
                        }
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                        className="!mb-2.5"
                      >
                        <Input 
                          placeholder="(320) 000-0000" 
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                    </div>

                    {/* Row 2: What do you drive? (Dropdown) & What town are you in? (Required) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                      
                      {/* What do you drive? (Dropdown with allowClear and custom black scrollable popup) */}
                      <Form.Item
                        name="vehicleType"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            What do you drive?
                          </span>
                        }
                        className="!mb-2.5"
                      >
                        <Select
                          placeholder="Select vehicle type..."
                          allowClear={true}
                          popupClassName="dark-select-dropdown"
                          popupMatchSelectWidth={true}
                          dropdownStyle={{ backgroundColor: '#000000', padding: '4px' }}
                          className="w-full bg-neutral-950/90"
                          options={[
                            { value: 'Car or sedan', label: 'Car or sedan' },
                            { value: 'SUV', label: 'SUV' },
                            { value: 'Pickup truck', label: 'Pickup truck' },
                            { value: 'Van or Sprinter', label: 'Van or Sprinter' },
                            { value: 'Boat or pontoon', label: 'Boat or pontoon' },
                            { value: 'Fleet or multiple vehicles', label: 'Fleet or multiple vehicles' },
                            { value: 'Something else', label: 'Something else' },
                          ]}
                        />
                      </Form.Item>

                      {/* What town are you in? (Required) */}
                      <Form.Item
                        name="town"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            What town are you in? <span className="text-red-500">*</span>
                          </span>
                        }
                        rules={[{ required: true, message: 'Please tell us what town you are in' }]}
                        className="!mb-2.5"
                      >
                        <Input 
                          placeholder="e.g. Morris, Hancock, Glenwood..." 
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                    </div>

                    {/* Row 3: Anything we should know? (Optional) */}
                    <Form.Item
                      name="details"
                      label={
                        <span className="text-[11.5px] text-neutral-300 font-light">
                          Anything we should know? <span className="text-neutral-500">(Optional)</span>
                        </span>
                      }
                      className="!mb-3.5"
                    >
                      <TextArea
                        rows={3}
                        placeholder="Pet hair, stains, smells, or anything you want us to look at."
                        className="bg-neutral-950/90 resize-none"
                      />
                    </Form.Item>

                    {/* Submit Button: [Get My Free Quote] */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 active:scale-[0.99] shadow-lg shadow-red-600/20 border border-red-500/30 transition-all duration-200 cursor-pointer disabled:opacity-60"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}</span>
                      <Send className="w-3.5 h-3.5 text-white/90" />
                    </button>

                  </Form>
                )}

              </div>
            </div>

          </div>
        </div>

      </section>
    </ConfigProvider>
  );
}
