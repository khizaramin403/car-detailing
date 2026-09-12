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
  ClockCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Phone, Mail, MapPin } from 'lucide-react';

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
          {/* Centered Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] font-normal text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-wide uppercase">How To Reach Us</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">

            {/* ========================================================================= */}
            {/* LEFT COLUMN: SLEEK MAP, CONTACT DETAILS & SOCIAL CHANNELS                 */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-5">

              {/* Minimal Sleek Responsive Google Map (Fills height to match the Form) */}
              <div className="w-full flex-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] rounded-2xl overflow-hidden border border-neutral-800/90 shadow-xl bg-neutral-900 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714743.6334346599!2d-96.40757407354259!3d45.591201733580284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xade143f3c1c313bd%3A0x1bc9c78296fefa41!2sDos%20Bros%20Detailing!5e0!3m2!1sen!2s!4v1789153353385!5m2!1sen!2s"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dos Bros Detailing Morris Location Map"
                />
              </div>

              {/* Sleek Minimal Contact & Location Details */}
              <div className="shrink-0 space-y-3 pt-1 text-xs sm:text-sm">
                
                {/* Row 1: Call or Text & Email Us side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Phone */}
                  <a
                    href="tel:3202873573"
                    className="group flex items-center gap-2.5 sm:gap-3 text-neutral-300 hover:text-white transition-colors min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-medium">Call or Text</span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white tracking-tight group-hover:text-red-400 transition-colors">
                        (320) 287-3573
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:ordonezreyes75@gmail.com"
                    className="group flex items-center gap-2.5 sm:gap-3 text-neutral-300 hover:text-white transition-colors min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-medium">Email Us</span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white tracking-tight truncate block group-hover:text-red-400 transition-colors" title="ordonezreyes75@gmail.com">
                        ordonezreyes75@gmail.com
                      </span>
                    </div>
                  </a>
                </div>

                {/* Row 2: Address (Left) & Social Icons (Right) */}
                <div className="pt-2.5 border-t border-neutral-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  {/* Location */}
                  <div className="flex items-center gap-2.5 sm:gap-3 text-neutral-400 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="leading-tight min-w-0">
                      <span className="text-neutral-200 text-xs sm:text-[13px] font-medium block truncate">Morris, MN 56267</span>
                      <span className="text-[10px] sm:text-[11px] text-neutral-500 block truncate">Stevens County & Surrounding</span>
                    </div>
                  </div>

                  {/* Social Channels */}
                  <div className="flex items-center gap-2 shrink-0 sm:justify-end">
                    {/* Google */}
                    <a
                      href="https://www.google.com/search?q=dos+ros+detailing+morris&sca_esv=35cfe427b01f9ce2&sxsrf=APpeQnubABDyQlUKzeujqubn9MHryYxxZA%3A1789064331965&ei=i_SiauWyOr6Xi-gP5P6GqAo&biw=1366&bih=599&ved=2ahUKEwilpPL_z-SWAxW-ywIHHWS_AaUQ4dUDegQIBhAM&uact=5&oq=dos+ros+detailing+morris&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGRvcyByb3MgZGV0YWlsaW5nIG1vcnJpczIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIIEAAYiQUYogQyCBAAGIAEGKIESLwPULMDWIcNcAF4AJABAJgBpwOgAfwOqgEFMy0yLjO4AQPIAQD4AQGYAgagAskPwgIKECMYsAIYsAMYJ8ICDRAAGIAEGIoFGEMYsAPCAgoQABiABBgNGLADwgILEAAYiQUYogQYsAPCAggQABjvBRiwA8ICBxAjGLACGCfCAgcQABiABBgNwgIGEAAYHhgNwgIFECEYnwWYAwDiAwUSATEgQIgGAZAGCJIHBzEuMy0yLjOgB6YcsgcFMy0yLjO4B7sPwgcFMi00LjLIByyACAE&sclient=gws-wiz-serp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Review and Profile"
                      className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-red-500 hover:scale-105"
                    >
                      <GoogleOutlined className="text-xs" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/DosBrosDetailingMN#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Page"
                      className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-red-500 hover:scale-105"
                    >
                      <FacebookOutlined className="text-xs" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/dosbrosmn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                      className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-red-500 hover:scale-105"
                    >
                      <InstagramOutlined className="text-xs" />
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/@dosbrosdetailing"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok Profile"
                      className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-red-500 hover:scale-105"
                    >
                      <TikTokOutlined className="text-xs" />
                    </a>
                  </div>
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
                  {/* <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                    Fill this out and we will come back with a price. No obligation, no pressure, and nobody is going to keep calling you afterward.
                  </p> */}
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
                        Reyes will get back to you soon with your free quote.
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 active:scale-[0.99] shadow-lg shadow-red-600/20 border border-red-500/30 transition-all duration-200 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingOutlined className="text-sm" />
                          <span>Sending your request...</span>
                        </>
                      ) : (
                        <span>Submit</span>
                      )}
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
