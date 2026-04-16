"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ServiceSection() {
  useEffect(() => {
    // Initialize WOW.js if available
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <div className="home1-service-section mb-100">
      <div className="container mx-auto">
        <div className="service-wrapper">
          {/* Section Title */}
          <div
            className="row justify-content-center wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-9">
              <div className="section-title">
                <h2>We’re Providing Best Service Ever!</h2>
                <svg height="6" viewBox="0 0 872 6">
                  <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867 3.5L872 5.88675V0.113249L867 2.5V3.5ZM4.5 3.5H867.5V2.5H4.5V3.5Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Services List */}
          <ul
            className="service-list wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            {/* Service 1 */}
            <li className="single-service">
              <div className="icon">
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 0C21.4662 0 26.7081 5.24194 26.7081 11.7081C26.7081 18.1743 21.4662 23.4163 15 23.4163C8.53375 23.4163 3.29187 18.1743 3.29187 11.7081C3.29187 5.24194 8.53375 0 15 0Z"
                  />
                  {/* Additional SVG paths can remain unchanged */}
                </svg>
              </div>
              <div className="content">
                <h4>Local Guidance</h4>
                <p>
                  Travel agencies have experienced professionals guidance.
                </p>
              </div>
            </li>

            {/* Service 2 */}
            <li className="single-service">
              <div className="icon">
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path d="M20.4896 4.14404C19.8384 3.81275 19.0419 4.07233 18.7107 4.72379L8.87091 24.0772C8.53971 24.7285 8.79929 25.5249 9.45066 25.8561Z" />
                </svg>
              </div>
              <div className="content">
                <h4>Deals & Discounts</h4>
                <p>
                  Agencies have special discounts on flights, hotels, &amp;
                  packages.
                </p>
              </div>
            </li>

            {/* Service 3 */}
            <li className="single-service">
              <div className="icon">
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.6977 12.3954C27.6977 11.446 27.32 10.5343 26.6493 9.86234C25.9771 9.19137 25.0661 8.81436 24.1163 8.81396H5.88376Z"
                  />
                </svg>
              </div>
              <div className="content">
                <h4>Saves Money</h4>
                <p>
                  Avoids hidden fees &amp; tourist traps, Multi-destination &amp;
                  budget-friendly options.
                </p>
              </div>
            </li>
          </ul>

          {/* Bottom Offer Area */}
          <div
            className="bottom-area flex justify-center wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="batch">
              <span>Flat 30% Discounts All Packages</span>
              <Link href="/travel-package">
                Check Offer
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path
                    d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}