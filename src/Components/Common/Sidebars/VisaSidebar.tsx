"use client";

import VisaApplyModal from "@/Components/Visa/VisaApplyModal";
import { useVisaSettings } from "@/services/visaService";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface VisaSidebarProps {
  visa: any;
}
const VisaSidebar = ({ visa }: VisaSidebarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!visa) return null;
  const { data: settingsData } = useVisaSettings();

  const settings = settingsData?.data?.[0];

  return (
    <div className="space-y-6 visa-dt-sidebar">

      {/* ================= Pricing Card ================= */}
      <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm">

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900">
          {visa.visaType
            ?.replaceAll("_", " ")
            .replace(/\b\w/g, (char: string) => char.toUpperCase())}
        </h2>

        {/* Badge */}
        <div className="mt-3 inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-blue-600">
          Validity - {visa?.validity} / {visa?.entryType}
        </div>

        {/* Pricing */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">Visa Pricing</p>
          <h3 className="text-3xl font-bold text-gray-900">
            ₹{visa?.price}{" "}
            <span className="text-base font-normal text-gray-600">
              /{visa?.priceLabel}
            </span>
          </h3>
        </div>

        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium w-full cursor-pointer"
        >
          Apply Online <span>↗</span>
        </button>

        {/* Note (same UI) */}
        <p className="mt-4 text-xs text-gray-600 flex items-start gap-2">
          <span>ⓘ</span>
          Exclusive Offers – Access travel, dining, and shopping deals.
        </p>
      </div>

      {/* ================= Assistance Card ================= */}
      <div className="bg-green-100 rounded-2xl p-6 shadow-sm visa-assistance-wrap">

        <div className="visa-assistance-content">
          <h4>Need Visa Assistance?</h4>
          <ul>
            <li>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={16} height={16} rx={8} />
                <path d="M11.6947 6.45771L7.24644 10.9083C7.17556 10.9768 7.08572 11.0123 6.99596 11.0123C6.9494 11.0124 6.90328 11.0033 6.86027 10.9854C6.81727 10.9676 6.77822 10.9414 6.7454 10.9083L4.3038 8.46675C4.16436 8.32963 4.16436 8.10515 4.3038 7.96571L5.16652 7.10059C5.29892 6.96827 5.53524 6.96827 5.66764 7.10059L6.99596 8.42891L10.3309 5.09155C10.3638 5.05862 10.4028 5.03249 10.4457 5.01465C10.4887 4.9968 10.5347 4.98759 10.5812 4.98755C10.6757 4.98755 10.7656 5.02539 10.8317 5.09155L11.6944 5.95675C11.8341 6.09619 11.8341 6.32067 11.6947 6.45771Z" />
              </svg>
              Expert Guidance
            </li>
            <li>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={16} height={16} rx={8} />
                <path d="M11.6947 6.45771L7.24644 10.9083C7.17556 10.9768 7.08572 11.0123 6.99596 11.0123C6.9494 11.0124 6.90328 11.0033 6.86027 10.9854C6.81727 10.9676 6.77822 10.9414 6.7454 10.9083L4.3038 8.46675C4.16436 8.32963 4.16436 8.10515 4.3038 7.96571L5.16652 7.10059C5.29892 6.96827 5.53524 6.96827 5.66764 7.10059L6.99596 8.42891L10.3309 5.09155C10.3638 5.05862 10.4028 5.03249 10.4457 5.01465C10.4887 4.9968 10.5347 4.98759 10.5812 4.98755C10.6757 4.98755 10.7656 5.02539 10.8317 5.09155L11.6944 5.95675C11.8341 6.09619 11.8341 6.32067 11.6947 6.45771Z" />
              </svg>
              Fast Processing
            </li>
          </ul>
          <div className="contact-area">
            <div className="icon">
              <img
                alt=""
                width={550}
                height={220}
                src="/assets/img/whatsapp-icon-white.svg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="content">
              <span>WhatsApp</span>
              <a href="https://wa.me/0000000000">+91 0000000000</a>
            </div>
          </div>
        </div>


        <div className="mt-4">
          <Image
            src="/assets/img/travel-couple.png"
            alt="travel"
            width={400}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <VisaApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        visaCategory={visa?.visaCategoryId || visa?.visaCategory}
        visaType={visa?._id}
      />

    </div>
  );
};

export default VisaSidebar;