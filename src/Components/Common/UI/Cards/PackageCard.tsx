"use client";

import Image from "next/image";
import Link from "next/link";

export interface PackageCardProps {
    title: string;
    location: string;
    duration: string;
    price: number;
    image: string;
    badge?: string;
    link: string;
    experiences: string;
    inclusions: string;
    delay?: number; // Optional for WOW.js animation
}

export default function PackageCard({
    title,
    location,
    duration,
    price,
    image,
    badge,
    link,
    experiences,
    inclusions,
    delay = 200,
}: PackageCardProps) {
    return (
        <div
            className="wow animate fadeInDown"
            data-wow-delay={`${delay}ms`}
            data-wow-duration="1500ms"
        >

            <div className="package-card">
                {/* Image */}
                <div className="package-img-wrap">
                  <Link href={link} className="package-img">
                    <Image
                      src={image}
                      alt={title}
                      width={550}
                      height={220}
                      className="w-full h-auto"
                    />
                  </Link>
                  {badge && (
                    <div className="batch">
                      <span>{badge}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="package-content">
                  <h5>
                    <Link href={link}>{title}</Link>
                  </h5>

                  {/* Location & Duration */}
                  <div className="location-and-time">
                    <div className="location">
                      {/* Location Icon */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.83615 0C3.77766 0 1.28891 2.48879 1.28891 5.54892C1.28891 7.93837 4.6241 11.8351 6.05811 13.3994C6.25669 13.6175 6.54154 13.7411 6.83615 13.7411C7.13076 13.7411 7.41561 13.6175 7.6142 13.3994C9.04821 11.8351 12.3834 7.93833 12.3834 5.54892C12.3834 2.48879 9.89464 0 6.83615 0Z" />
                        <path d="M6.83618 8.54554C8.4624 8.54554 9.7807 7.22723 9.7807 5.60102C9.7807 3.9748 8.4624 2.65649 6.83618 2.65649C5.20997 2.65649 3.89166 3.9748 3.89166 5.60102C3.89166 7.22723 5.20997 8.54554 6.83618 8.54554Z" />
                      </svg>
                      <Link href="/travel-package">{location}</Link>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="arrow"
                      width="25"
                      height="6"
                      viewBox="0 0 25 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 3L5 5.88675V0.113249L0 3ZM25 3L20 0.113249V5.88675L25 3ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>

                    <span>{duration}</span>
                  </div>

                  {/* Button & Price */}
                  <div className="btn-and-price-area">
                    <Link href={link} className="primary-btn1">
                      <span>Book Now</span>
                    </Link>
                    <div className="price-area">
                      <h6>Per Person</h6>
                      <span>${price}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <svg
                    className="divider"
                    height="6"
                    viewBox="0 0 374 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM369 3.5L374 5.88675V0.113249L369 2.5V3.5ZM4.5 3.5H369.5V2.5H4.5V3.5Z" />
                  </svg>

                  {/* Bottom Area */}
                  <div className="bottom-area">
                    <ul>
                      <li>
                        Experience
                        <div className="info">
                          <div className="tooltip-text">
                            Including Activities{" "}
                            <span>{experiences}</span> with this premium
                            package.
                          </div>
                        </div>
                      </li>
                      <li>
                        Inclusion
                        <div className="info">
                          <div className="tooltip-text">
                            This package covers{" "}
                            <span>{inclusions}</span> to ensure a worry-free
                            trip.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            



            

            
        </div>
    );
}