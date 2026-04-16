"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";



interface Offer {
  id: number;
  image: string;
  link: string;
  alt: string;
} 

const offers: Offer[] = [
  {
    id: 1,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package",
    alt: "Travel Offer 1",
  },
  {
    id: 2, 
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package/details",
    alt: "Travel Offer 2",
  },
  {
    id: 3,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package",
    alt: "Travel Offer 3",
  },
  {
    id: 4,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package/details",
    alt: "Travel Offer 4",
  },
  {
    id: 5,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package/details",
    alt: "Travel Offer 5",
  },
];

const OfferSection: React.FC = () => {
  return (
    <section className="mb-100"> 
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discounts &amp; Offers
            </h2>
            <p className="text-gray-600">
              A curated list of the most popular travel packages based on
              different destinations.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".offer-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-40"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <Link href={offer.link} className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    width={550}
                    height={220}
                    className="w-full h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={offer.id === 1}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="slider-pagi-wrap"> 
          <div className="offer-pagination relative flex justify-center paginations"></div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;