"use client";
import FilterSidebar from "@/Components/Common/FilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";
import { useState } from "react";


const packages = [
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences:
      "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions:
      "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
];

export default function LeftGridLayout() {
  const [page, setPage] = useState(1);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <FilterSidebar />
      </div>
      <div className="lg:col-span-8">
        <div className="package-grid-page">

          <SortingSection totalJourneys={70}
            onFilterClick={() => console.log("Filter clicked")}
            onSortChange={(value) => console.log("Sort:", value)}
            onViewChange={(view) => console.log("View:", view)} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
              delay={200 + index * 100}
            />
          ))}

        </div>
        <PackagePagination
          currentPage={page}
          totalPages={4}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}