import Link from "next/link";

const TOP_DESTINATIONS = [
  "Maldives Tour", "Bali, Indonesia Tour", "Thailand Tour", "Philippines Tour",
  "Hawaii, USA Tour", "Switzerland Tour", "New Zealand Tour", "Costa Rica Tour",
  "Peru (Machu Picchu)", "Paris, France Tour", "Rome, Italy Tour",
];

const POPULAR_SEARCHES = [
  "Adventure", "Hiking & Trekking", "Holiday Packages", "Flights And Hotels",
  "Honeymoon Trip", "Bali Vacation Package", "Desert Safari", "Last-Minute Deals",
  "Summer Vacation", "Wildlife Safari", "Dubai Luxury Tours",
];

const RESOURCES = [
  { label: "About GoFly", href: "/about" },
  { label: "Health & Safety Measure", href: "#" },
  { label: "Visa Processing", href: "/visa" },
  { label: "Customize Tour", href: "/contact" },
  { label: "Travel Inspirations", href: "/travel-inspiration" },
  { label: "Traveler Reviews", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "Sitemap", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA strip */}
      <div className="bg-orange-500 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-sm font-medium mb-1">To More Inquiry</p>
            <h3 className="text-white text-2xl font-bold">Don't hesitate Call to GoFly.</h3>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="https://wa.me/91345533865" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.849L.057 23.5l5.794-1.519A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.648-.497-5.173-1.368l-.371-.22-3.44.902.92-3.352-.241-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-xs">WhatsApp</p>
                <p className="text-white font-semibold text-sm">+91 345 533 865</p>
              </div>
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-xs">Mail Us</p>
                <p className="text-white font-semibold text-sm">info@example.com</p>
              </div>
            </a>
            <a href="tel:+91456453345" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.72a16 16 0 006.29 6.29l1.24-1.25a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-xs">Call Us</p>
                <p className="text-white font-semibold text-sm">+91 456 453 345</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Go<span className="text-orange-500">Fly</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              GoFly Travel Agency<br />
              Skyline Plaza, 5th Floor, 123 Main Street<br />
              Los Angeles, CA 90001, USA
            </p>
            <div className="flex gap-3 mt-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-gray-700 hover:bg-orange-500 transition-colors rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Top Destination</h4>
            <ul className="space-y-2">
              {TOP_DESTINATIONS.map((d) => (
                <li key={d}>
                  <Link href="/travel-package" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Popular Search</h4>
            <ul className="space-y-2">
              {POPULAR_SEARCHES.map((s) => (
                <li key={s}>
                  <Link href="/travel-package/style2" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Resources</h4>
            <ul className="space-y-2">
              {RESOURCES.map((r) => (
                <li key={r.label}>
                  <Link href={r.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Copyright 2025 <a href="https://www.egenslab.com/" className="text-orange-400 hover:underline">Egens Lab</a> | All Right Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm mr-2">Accepted Payment Methods:</span>
            {["MC", "VISA", "PP", "GPay"].map((p) => (
              <span key={p} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded font-medium">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
