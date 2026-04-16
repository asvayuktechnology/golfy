"use client";

import Image from "next/image";
import Link from "next/link";

interface Partner {
  id: number;
  image: string;
  link?: string;
}

export default function PartnerSection() {
  const partners: Partner[] = [
    { id: 1, image: "/assets/img/partner-04.webp", link: "#" },
    { id: 2, image: "/assets/img/partner-04.webp", link: "#" },
    { id: 3, image: "/assets/img/partner-04.webp", link: "#" },
    { id: 4, image: "/assets/img/partner-04.webp", link: "#" },
    { id: 5, image: "/assets/img/partner-04.webp", link: "#" },
    { id: 6, image: "/assets/img/partner-04.webp", link: "#" },
  ];

  return (
    <div className="partner-section mb-100">
      <div className="container mx-auto">
        {/* Section Title */}
        <div
          className="partner-title wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <h5>Those Company You Can Easily Trust!</h5>
        </div>

        {/* Partner Logos */}
        <div className="partner-wrap">
          <div className="marquee">
            {/* First Group */}
            <div className="marquee__group">
              {partners.map((partner) => (
                <Link key={partner.id} href={partner.link || "#"}>
                  <Image
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>

            {/* Duplicate Group for Infinite Marquee Effect */}
            <div className="marquee__group" aria-hidden="true">
              {partners.map((partner) => (
                <Link key={`duplicate-${partner.id}`} href={partner.link || "#"}>
                  <Image
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}