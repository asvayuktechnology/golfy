"use client";

import Link from "next/link";

interface OfferBannerProps {
  backgroundImage: string;
  subtitle?: string;
  title: string;
  authorName?: string;
  authorRole?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function OfferBanner({
  backgroundImage,
  subtitle = "Make Meet Happiness.",
  title,
  authorName = "Mr. Gabriel Haringson",
  authorRole = "CEO, GoFly",
  buttonText = "Grab the Deal Now",
  buttonLink = "/travel-package",
}: OfferBannerProps) {
  return (
    <div
      className="home1-offer-banner-section mb-100 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="banner-content text-center text-white py-20">
          <span>{subtitle}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
            {title}
          </h2>

          <div className="author-area mb-6">
            <h5 className="text-lg font-semibold">{authorName}</h5>
            <span className="text-sm opacity-90">{authorRole}</span>
          </div>

          <Link
            href={buttonLink}
            className="primary-btn1 two inline-flex items-center gap-2"
          >
            <span>{buttonText}</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}