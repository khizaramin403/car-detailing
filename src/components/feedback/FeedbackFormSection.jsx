import React, { useState } from 'react';
import { Form, Input, Select, Rate, ConfigProvider, theme } from 'antd';
import { 
  CheckCircleFilled, 
  LoadingOutlined, 
  StarFilled,
  GoogleOutlined 
} from '@ant-design/icons';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  MessageSquare, 
  Send, 
  ThumbsUp, 
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const { TextArea } = Input;

export default function FeedbackFormSection() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9Y8GQyClTl_F4FokgRqt97Ddp6lvYMbCO80XiLqBscVeC-lISAveoYFocsNW4FAqCMA/exec';

  const handleSubmit = (values) => {
    setIsSubmitting(true);

    const submissionData = {
      ...values,
      formType: 'Client Feedback',
      rating: rating,
      timestamp: new Date().toISOString()
    };

    // Fast background dispatch to Google Apps Script
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(submissionData),
    }).catch((err) => {
      console.error('Feedback submission background error:', err);
    });

    // Sleek micro-delay for smooth spinner feedback, then instant Thank You transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    form.resetFields();
    setRating(5);
    setIsSubmitted(false);
  };

  const ratingLabels = {
    1: 'Needs Significant Improvement',
    2: 'Below Expectations',
    3: 'Met Basic Expectations',
    4: 'Great Job & Friendly Service',
    5: 'Exceptional 5-Star Experience!'
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
          controlHeight: 38,
          fontSize: 13,
        },
        components: {
          Form: {
            itemMarginBottom: 12,
            labelFontSize: 12,
            labelColor: '#d4d4d8',
            labelHeight: 20,
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
            colorBorder: 'rgba(38, 38, 38, 0.9)',
            activeBorderColor: '#ef4444',
            hoverBorderColor: 'rgba(239, 68, 68, 0.5)',
            colorText: '#ffffff',
            colorTextPlaceholder: '#52525b',
            borderRadius: 8,
            fontSize: 13,
          }
        },
      }}
    >
      <section className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900 overflow-hidden select-none">
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header */}
          {/* Section Header (Matching Home Page Section Headings) */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>CLIENT REVIEWS &amp; FEEDBACK</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Help Us Keep Raising the Standard <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                for Mobile Detailing
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Every detail matters to us. As two brothers serving Morris and West Central Minnesota, your candid feedback directly shapes how Reyes and Mariano continue improving every driveway detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: WHY FEEDBACK MATTERS & TRUST STATS                           */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 shadow-xl backdrop-blur-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white font-['Outfit']">
                      Local Brother-Owned Business
                    </h2>
                    <span className="text-[11px] text-neutral-500">Morris, Minnesota • Stevens County</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  We started Dos Bros Auto Detailing with one goal: deliver honest, high-end mobile vehicle care directly to our neighbors without high-pressure upsells or shortcuts.
                </p>

                {/* Key Pillars */}
                <div className="space-y-3 pt-2 border-t border-neutral-800/60">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-neutral-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-xs font-medium text-white block">100% Uncompromised Quality</strong>
                      <span className="text-[11px] text-neutral-400 font-light">We take the extra time to ensure door jambs, seat rails, and tight crevices are truly clean.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-neutral-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-xs font-medium text-white block">Direct Accountability</strong>
                      <span className="text-[11px] text-neutral-400 font-light">You work directly with founders Reyes &amp; Mariano, not subcontracted third-party cleaners.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-neutral-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-xs font-medium text-white block">Community Reputation</strong>
                      <span className="text-[11px] text-neutral-400 font-light">Proudly serving Morris, Alexandria, Glenwood, Starbuck, Benson, Hancock, &amp; Chokio.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Reach Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/20 border border-neutral-800/60 space-y-3">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold block">
                  Need Immediate Assistance or Have a Complaint?
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  If something wasn&apos;t completely right with your detail, call or text us right away. We make it right immediately.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="tel:3202873573"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-red-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                    <span>(320) 287-3573</span>
                  </a>
                  <span className="text-neutral-700">•</span>
                  <a
                    href="mailto:ordonezreyes75@gmail.com"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-400" />
                    <span>ordonezreyes75@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: THE INTERACTIVE FEEDBACK FORM                               */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-neutral-900/30 border border-neutral-800/60 p-5 sm:p-7 lg:p-8 shadow-xl backdrop-blur-md">
                
                <div className="border-b border-neutral-800/60 pb-3.5 mb-5">
                  <h2 className="text-lg sm:text-xl font-normal text-white font-['Outfit'] tracking-tight">
                    Submit Your Feedback
                  </h2>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pt-0.5">
                    Takes less than 60 seconds. Your feedback helps fellow Minnesota drivers know what to expect.
                  </p>
                </div>

                {isSubmitted ? (
                  /* Success Notification State */
                  <div className="py-10 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircleFilled className="text-2xl" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-normal text-white font-['Outfit']">
                        Thank You For Your Review!
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                        Reyes and Mariano sincerely appreciate your time and support for our local business. We look forward to seeing you on your next detail!
                      </p>
                    </div>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors"
                      >
                        Submit Another Review
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Ant Design Feedback Form */
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    requiredMark={false}
                    className="space-y-0"
                  >
                    {/* Overall Star Rating */}
                    <div className="mb-5 p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/70 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-medium text-white block">Overall Service Rating</span>
                        <span className="text-[11px] text-red-400 font-light">{ratingLabels[rating]}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Rate
                          value={rating}
                          onChange={(val) => setRating(val || 5)}
                          className="text-amber-400 text-xl"
                        />
                      </div>
                    </div>

                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Form.Item
                        name="firstName"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">First name <span className="text-red-500">*</span></span>}
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                        className="mb-2.5!"
                      >
                        <Input placeholder="Your first name" className="bg-neutral-950/90" />
                      </Form.Item>

                      <Form.Item
                        name="lastName"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">Last name <span className="text-red-500">*</span></span>}
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                        className="mb-2.5!"
                      >
                        <Input placeholder="Your last name" className="bg-neutral-950/90" />
                      </Form.Item>
                    </div>

                    {/* Row 2: Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Form.Item
                        name="email"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">Email address <span className="text-red-500">*</span></span>}
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' }
                        ]}
                        className="mb-2.5!"
                      >
                        <Input placeholder="name@example.com" className="bg-neutral-950/90" />
                      </Form.Item>

                      <Form.Item
                        name="phoneNumber"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">Phone number (Optional)</span>}
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
                    </div>

                    {/* Row 3: Service Experienced & Town */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Form.Item
                        name="service"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">Service Received</span>}
                        className="mb-2.5!"
                      >
                        <Select
                          placeholder="Select detailing service"
                          popupClassName="dark-select-dropdown"
                          options={[
                            { value: 'Full Interior Revival', label: 'Full Interior Revival' },
                            { value: 'Exterior Wash & Seal', label: 'Exterior Hand Wash & Seal' },
                            { value: 'Paint Correction', label: 'Multi-Stage Paint Correction' },
                            { value: 'Ceramic Coating', label: 'Ceramic & Graphene Coating' },
                            { value: 'Full Detail Package', label: 'Complete Interior + Exterior Detail' },
                            { value: 'Farm Equipment Detail', label: 'Farm & Heavy Equipment' },
                            { value: 'Odor & Pet Hair Extraction', label: 'Odor & Pet Hair Removal' },
                          ]}
                        />
                      </Form.Item>

                      <Form.Item
                        name="town"
                        label={<span className="text-[11.5px] text-neutral-300 font-light">What town was service in?</span>}
                        className="mb-2.5!"
                      >
                        <Input placeholder="e.g. Morris, Glenwood, Alexandria..." className="bg-neutral-950/90" />
                      </Form.Item>
                    </div>

                    {/* Row 4: Detailed Feedback Comments */}
                    <Form.Item
                      name="feedback"
                      label={
                        <span className="text-[11.5px] text-neutral-300 font-light">
                          Your Review &amp; Comments <span className="text-red-500">*</span>
                        </span>
                      }
                      rules={[{ required: true, message: 'Please share your thoughts or feedback' }]}
                      className="mb-3!"
                    >
                      <TextArea
                        rows={4}
                        placeholder="Tell us about the vehicle results, communication, arrival punctuality, or anything we can do to make your next detail even better..."
                        className="bg-neutral-950/90"
                      />
                    </Form.Item>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-[0.99] transition-all duration-150 shadow-lg shadow-red-950/50 hover:shadow-red-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingOutlined className="text-sm animate-spin" />
                            <span>Submitting Review...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit My Feedback</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-neutral-500 text-center font-light pt-3">
                      We respect your privacy. Reviews may be shared anonymously to help other local car owners.
                    </p>
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
