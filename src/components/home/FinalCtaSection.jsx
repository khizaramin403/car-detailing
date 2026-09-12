import React, { useState, useEffect } from 'react';
import { Form, Input, Select, ConfigProvider, theme } from 'antd';
import { 
  CheckCircleFilled,
  LoadingOutlined
} from '@ant-design/icons';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calendar,
  Send
} from 'lucide-react';
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  TikTokOutlined, 
  YoutubeOutlined, 
  GoogleOutlined 
} from '@ant-design/icons';

const { TextArea } = Input;

export default function FinalCtaSection() {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const vehicle = params.get('vehicle') || params.get('vehicleType');
      const townParam = params.get('town');
      const detailsParam = params.get('details');
      const serviceParam = params.get('service');

      const valuesToSet = {};
      if (vehicle) valuesToSet.vehicleType = vehicle;
      if (townParam) valuesToSet.town = townParam;
      if (detailsParam) valuesToSet.details = detailsParam;
      if (serviceParam) {
        if (serviceParam.toLowerCase().includes('interior')) valuesToSet.service = 'Interior Detailing';
        else if (serviceParam.toLowerCase().includes('exterior')) valuesToSet.service = 'Exterior Detailing';
        else if (serviceParam.toLowerCase().includes('full')) valuesToSet.service = 'Full Car Detailing';
        else valuesToSet.service = serviceParam;
      }

      if (Object.keys(valuesToSet).length > 0) {
        form.setFieldsValue(valuesToSet);
      }
    }
  }, [form]);

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9Y8GQyClTl_F4FokgRqt97Ddp6lvYMbCO80XiLqBscVeC-lISAveoYFocsNW4FAqCMA/exec';

  const handleSubmit = (values) => {
    setIsSubmitting(true);

    // Fast background dispatch to Google Apps Script (doesn't freeze UI)
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(values),
    }).catch((err) => {
      console.error('Lead submission background error:', err);
    });

    // Sleek micro-delay for smooth spinner feedback, then instant Thank You transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
          colorBgElevated: '#141414',
          colorBorder: 'rgba(50, 50, 50, 0.7)',
          colorText: '#f5f5f5',
          colorTextPlaceholder: '#52525b',
          borderRadius: 8,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          controlHeight: 36,
          fontSize: 12,
        },
        components: {
          Form: {
            itemMarginBottom: 10,
            labelFontSize: 11,
            labelColor: '#a1a1aa',
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
            paddingBlock: 6,
            paddingInline: 10,
            fontSize: 12,
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
          }
        }
      }}
    >
      <section id="contact-booking" className="relative bg-neutral-950 py-10 sm:py-12 lg:py-14 border-t border-neutral-900 overflow-hidden select-none">
        
        {/* Ambient Subtle Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-100 h-62.5 bg-red-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-87.5 h-50 bg-amber-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: Sleek Minimal Contact Details                                */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Badge & Title */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-semibold text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>BOOKING & INQUIRIES</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit'] tracking-tight leading-snug">
                  Get your free quote <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
                    & lock in your detail
                  </span>
                </h2>

                <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
                  Reyes and Mariano bring 100% mobile detailing directly to your driveway, workplace, or farm anywhere in Stevens County.
                </p>
              </div>

              {/* Minimal Contact List */}
              <div className="space-y-2 pt-1">
                
                {/* Phone */}
                <a
                  href="tel:3202873573"
                  className="group flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/60 hover:border-red-500/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Call or Text</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      (320) 287-3573
                      
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 hidden xs:inline group-hover:text-neutral-300 transition-colors">
                    Fast Response →
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:dosbrosautodetailing@gmail.com"
                  className="group flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/60 hover:border-red-500/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Email Us</span>
                    <span className="block text-xs font-semibold text-white truncate group-hover:text-red-400 transition-colors">
                      ordonezreyes75@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60">
                  <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Service Hub</span>
                    <span className="block text-xs font-semibold text-white">
                      Morris, MN 56267
                    </span>
                  </div>
                </div>

                {/* Hours */}
                {/* <div className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60">
                  <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Operating Hours</span>
                    <span className="block text-xs font-semibold text-white">
                      Mon – Sat: 8:00 AM – 7:00 PM
                    </span>
                  </div>
                </div> */}

              </div>

              {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.google.com/search?q=dos+ros+detailing+morris&sca_esv=35cfe427b01f9ce2&sxsrf=APpeQnubABDyQlUKzeujqubn9MHryYxxZA%3A1789064331965&ei=i_SiauWyOr6Xi-gP5P6GqAo&biw=1366&bih=599&ved=2ahUKEwilpPL_z-SWAxW-ywIHHWS_AaUQ4dUDegQIBhAM&uact=5&oq=dos+ros+detailing+morris&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGRvcyByb3MgZGV0YWlsaW5nIG1vcnJpczIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIIEAAYiQUYogQyCBAAGIAEGKIESLwPULMDWIcNcAF4AJABAJgBpwOgAfwOqgEFMy0yLjO4AQPIAQD4AQGYAgagAskPwgIKECMYsAIYsAMYJ8ICDRAAGIAEGIoFGEMYsAPCAgoQABiABBgNGLADwgILEAAYiQUYogQYsAPCAggQABjvBRiwA8ICBxAjGLACGCfCAgcQABiABBgNwgIGEAAYHhgNwgIFECEYnwWYAwDiAwUSATEgQIgGAZAGCJIHBzEuMy0yLjOgB6YcsgcFMy0yLjO4B7sPwgcFMi00LjLIByyACAE&sclient=gws-wiz-serp"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Review and Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <GoogleOutlined className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/DosBrosDetailingMN#"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <FacebookOutlined className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/dosbrosmn"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <InstagramOutlined className="text-sm" />
              </a>
              <a
                href="https://www.tiktok.com/@dosbrosdetailing"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on TikTok"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <TikTokOutlined className="text-sm" />
              </a>
            </div>

              {/* Minimal Trust Badges */}
              {/* <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] text-neutral-400">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>100% Mobile</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>5.0 Star Rated</span>
                </span>
              </div> */}

            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Sleek Compact Ant Design Form                               */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7">
              <div className="rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-4 sm:p-5 lg:p-6 shadow-xl backdrop-blur-md">
                
                <div className="border-b border-neutral-800/70 pb-2.5 mb-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                      Book Detailing Slot
                    </h3>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Free Estimate</span>
                </div>

                {isSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircleFilled className="text-xl" />
                    </div>
                    <div className="space-y-1 max-w-sm mx-auto">
                      <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                        Thank You! Request Received
                      </h4>
                      <p className="text-xs text-neutral-300">
                        Reyes will get back to you soon with your free quote.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    requiredMark={false}
                    className="space-y-0"
                  >
                    {/* Row 1: First Name & Last Name */}
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
                        className="mb-2.5!"
                      >
                        <Input
                          placeholder="Your first name"
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                      {/* Last Name (Required) */}
                      <Form.Item
                        name="lastName"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            Last name <span className="text-red-500">*</span>
                          </span>
                        }
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                        className="mb-2.5!"
                      >
                        <Input
                          placeholder="Your last name"
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                    </div>

                    {/* Row 2: Phone Number & What town are you in? */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">

                      {/* Phone Number (Required) */}
                      <Form.Item
                        name="phoneNumber"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            Phone number <span className="text-red-500">*</span>
                          </span>
                        }
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                        normalize={(value) => (value ? value.replace(/\D/g, '') : '')}
                        className="mb-2.5!"
                      >
                        <Input
                          placeholder="(320) 000-0000"
                          className="bg-neutral-950/90"
                          type="tel"
                          inputMode="numeric"
                          onKeyDown={(e) => {
                            if (e.key.length === 1 && !/[0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                              e.preventDefault();
                            }
                          }}
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
                        className="mb-2.5!"
                      >
                        <Input
                          placeholder="e.g. Morris, Hancock, Glenwood..."
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                    </div>

                    {/* Row 3: What do you drive? (Input) & Select Service (Dropdown) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">

                      {/* What do you drive? (Input) */}
                      <Form.Item
                        name="vehicleType"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            What do you drive?
                          </span>
                        }
                        className="mb-2.5!"
                      >
                        <Input
                          placeholder="e.g. Car, SUV, Truck, etc."
                          className="bg-neutral-950/90"
                        />
                      </Form.Item>

                      {/* Service Dropdown Selector */}
                      <Form.Item
                        name="service"
                        label={
                          <span className="text-[11.5px] text-neutral-300 font-light">
                            Select Service
                          </span>
                        }
                        className="mb-2.5!"
                      >
                        <Select
                          placeholder="Select service..."
                          allowClear={true}
                          popupClassName="dark-select-dropdown"
                          popupMatchSelectWidth={true}
                          dropdownStyle={{ backgroundColor: '#000000', padding: '4px' }}
                          className="w-full"
                          options={[
                            { value: 'Interior Detailing', label: 'Interior Detailing' },
                            { value: 'Exterior Detailing', label: 'Exterior Detailing' },
                            { value: 'Full Car Detailing', label: 'Full Car Detailing' },
                          ]}
                        />
                      </Form.Item>

                    </div>

                    {/* Row 4: Anything we should know? (Optional) */}
                    <Form.Item
                      name="details"
                      label={
                        <span className="text-[11.5px] text-neutral-300 font-light">
                          Anything we should know? <span className="text-neutral-500">(Optional)</span>
                        </span>
                      }
                      className="mb-3.5!"
                    >
                      <TextArea
                        rows={3}
                        placeholder="Pet hair, stains, smells, or anything you want us to look at."
                        className="bg-neutral-950/90 resize-none"
                      />
                    </Form.Item>

                    {/* Submit Button (Compact & Sleek) */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 active:scale-[0.99] shadow-md shadow-red-600/20 transition-all duration-150 cursor-pointer disabled:opacity-75 border border-red-500/30"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingOutlined className="text-sm" />
                          <span>Sending your request...</span>
                        </>
                      ) : (
                        <span>Request Free Quote & Booking</span>
                      )}
                    </button>

                    {/* <p className="text-[10px] text-neutral-500 text-center pt-2">
                      🔒 Zero spam. We only use this to confirm your detail.
                    </p> */}
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
