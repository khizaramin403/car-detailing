import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import 'swiper/css';

// Authentic Google Multi-Colored Icon SVG
const GoogleIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Real Verified Google Reviews for Dos Bros Auto Detailing
const reviews = [
  {
    id: 1,
    name: "Cindy Cochran",
    timeAgo: "a month ago",
    rating: 5,
    initials: "CC",
    avatarColor: "bg-purple-600",
    text: "Dos bros detailed my car this morning and did a very good job. it was so dusty dirty inside from driving gravel roads daily and now it looks like new. very polite and prompt young men very reasonable price",
  },
  {
    id: 2,
    name: "Hermilo Sanchez",
    timeAgo: "2 months ago",
    rating: 5,
    initials: "HS",
    avatarColor: "bg-blue-600",
    text: "Detailed the inside and outside of my truck really well",
  },
  {
    id: 3,
    name: "Randy Fehr",
    timeAgo: "a month ago",
    rating: 5,
    initials: "RF",
    avatarColor: "bg-emerald-600",
    text: "Reyes and Mariano did a great job detailing my pickup. Huge convenience of coming to my place while I was gone. Coming home with the truck dialed in is priceless. Highly recommend!",
  },
  {
    id: 4,
    name: "Mohr PioneerPam",
    timeAgo: "a month ago",
    rating: 5,
    initials: "MP",
    avatarColor: "bg-amber-600",
    text: "Thank you for doing an incredible job on our Jeep Grand Cherokee. Living on dirt roads and traveling with a dog can be hard on our vehicle. You did AMAZING!!",
  },
  {
    id: 5,
    name: "Mike Carlson",
    timeAgo: "a month ago",
    rating: 5,
    initials: "MC",
    avatarColor: "bg-rose-600",
    text: "They detailed our midsize suv, and it looked better then bran new!",
  },
  {
    id: 6,
    name: "Herb Peterson",
    timeAgo: "4 days ago",
    rating: 5,
    initials: "HP",
    avatarColor: "bg-teal-600",
    text: "They showed up when they said they would and did a beautiful job on both the Honda pickup and the 3033 John Deere utility tractor. Would definitely have them back. Very professional and courteous.",
  },
  {
    id: 7,
    name: "Peggy Raddatz",
    timeAgo: "6 days ago",
    rating: 5,
    initials: "PR",
    avatarColor: "bg-indigo-600",
    text: "They were amazing to work with, quick to respond, polite, fair priced no issues. Very happy with how my pick up turned out as itvery needed to have cleaned mostly inside. Even my son said \"he loves the smell of the pick up\". Will look to hiring them many times again",
  },
  {
    id: 8,
    name: "Liv",
    timeAgo: "a week ago",
    rating: 5,
    initials: "L",
    avatarColor: "bg-orange-600",
    text: "I’ve never had a detailing done on my Jeep before. I reached out and they were quick to get back to me with estimates and when I can get in for a cleaning. A phenomenal job at a great price was done for my Jeep. I really recommend going through Dos Bros Detailing for anyone looking to get a detailing done.",
  },
  {
    id: 9,
    name: "Arianna Hart",
    timeAgo: "3 weeks ago",
    rating: 5,
    initials: "AH",
    avatarColor: "bg-cyan-600",
    text: "Very convenient! They were able to do two of our vehicles in the same day and were quick with scheduling us. Vehicles came back very clean and looked brand new.",
  },
  {
    id: 10,
    name: "Crystal Thomas",
    timeAgo: "a month ago",
    rating: 5,
    initials: "CT",
    avatarColor: "bg-pink-600",
    text: "We had our Tahoe detailed today and they did a great job! They took a dirty car and made it new. We are really happy with how it turned out. Friendly service and would definitely recommend them!",
  },
  {
    id: 11,
    name: "Lee Ruplinger",
    timeAgo: "a month ago",
    rating: 5,
    initials: "LR",
    avatarColor: "bg-emerald-600",
    text: "Dos Bros Detailing did a great job with my SUV inside and out. It looks like new! Having the detailing done on sight was a great convenience for me. There was good communication before my appointment and they were promptly on time. I would recommend Dos Bros Detailing.",
  },
];

export default function GoogleReviewsSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full space-y-6">
      {/* Top Rating Summary Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
        {/* Rating Score & Stars */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center shrink-0">
            <GoogleIcon />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base sm:text-lg font-['Outfit']">
                5.0 Rating
              </span>
              <div className="flex items-center gap-0.5 text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Based on verified customer reviews on Google
            </p>
          </div>
        </div>

        {/* Action Button & Carousel Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700/80 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium border border-neutral-700/60 transition-all duration-200"
          >
            <span>Review Us on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Previous / Next Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Review"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-800/80 hover:cursor-pointer hover:bg-red-600 text-neutral-400 hover:text-white border border-neutral-700/60 hover:border-red-500 flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Review"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-800/80 hover:cursor-pointer hover:bg-red-600 text-neutral-400 hover:text-white border border-neutral-700/60 hover:border-red-500 flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Swiper Slider */}
      <div className="w-full relative">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          speed={600}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="reviews-swiper !pb-2"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!h-auto flex">
              <div className="w-full bg-neutral-900/60 hover:bg-neutral-900/95 border border-neutral-800/80 hover:border-neutral-700/90 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-red-500/5 select-none h-full">
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-full ${review.avatarColor} text-white font-semibold text-xs flex items-center justify-center shadow-inner shrink-0`}
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold text-xs sm:text-sm leading-snug truncate">
                          {review.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 truncate">
                          {review.timeAgo}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 p-1.5 rounded-lg bg-neutral-800/60 border border-neutral-700/50">
                      <GoogleIcon />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-[#FBBC05] mb-2.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-5">
                    "{review.text}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
