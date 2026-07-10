"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "../Common/input/Button";
import TextAreaInput from "../Common/input/TextAreaInput";
import TextInput from "../Common/input/TextInput";
import FileUploadInput from "../Common/input/uploadImage";

// import { useCreateVisaRequest } from "@/services/visaService";
import { toastError, toastSuccess } from "@/utils/toast";
import { useCreateVisaRequest } from "@/services/visaService";
// import { useCreateVisaRequest } from "@/services/visaRequestService";

// ─────────────────────────────────────────────
// VISA REQUEST VALIDATION SCHEMA
// ─────────────────────────────────────────────

const visaRequestValidationSchema = z.object({
  visaCategory: z
    .string()
    .min(1, "Visa category is required"),

  visaType: z
    .string()
    .min(1, "Visa type is required"),

  fullName: z
    .string()
    .min(2, "Full name is required"),

  dob: z
    .string()
    .min(1, "Date of birth is required"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email address"),

  notes: z
    .string()
    .optional(),

  document: z
    .custom<File | null>(
      (val) => val === null || val instanceof File,
      { message: "Invalid file" }
    )
    .nullable()
    .optional(),
});

export type VisaRequestPayload = z.infer<
  typeof visaRequestValidationSchema
>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  visaCategory: string;
  visaType: string;
}

const VisaApplyModal = ({
  isOpen,
  onClose,
  visaCategory,
  visaType,
}: Props) => {
  const [document, setDocument] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<VisaRequestPayload>({
    resolver: zodResolver(visaRequestValidationSchema),
    mode: "onChange",
    defaultValues: {
      visaCategory,
      visaType,
      fullName: "",
      dob: "",
      phone: "",
      email: "",
      notes: "",
      document: null,
    },
  });

  const mutation = useCreateVisaRequest({
    onSuccess: (data) => {
      toastSuccess(
        data?.message || "Visa request submitted successfully!"
      );

      reset();
      setDocument(null);
      onClose();
    },

    onError: (err: any) => {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";

      toastError(message);
    },
  });

  const onSubmit = (data: VisaRequestPayload) => {
    mutation.mutate({
      visaCategory,
      visaType,
      fullName: data.fullName,
      dob: data.dob,
      phone: data.phone,
      email: data.email,
      notes: data.notes,
      document,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative shadow-xl">
        {/* Close Button */}
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <svg
            width={10}
            height={10}
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
          >
            <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Apply for Visa
        </h2>
        <div className="border border-[#E8E8E8] px-[30px] py-[35px] rounded-[10px]">

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 visa-application-form"
          >
            {/* Full Name */}
            <TextInput
              label="Your Name *"
              name="fullName"
              placeholder="Enter your name"
              register={register}
              error={errors.fullName}
              className=""
            />

            {/* Date of Birth */}
            <TextInput
              label="Date of Birth *"
              name="dob"
              type="date"
              register={register}
              error={errors.dob}
            />

            {/* Phone */}
            <TextInput
              label="Phone Number *"
              name="phone"
              placeholder="Enter phone number"
              register={register}
              error={errors.phone}
            />

            {/* Email */}
            <TextInput
              label="Email Address *"
              name="email"
              placeholder="Enter email"
              register={register}
              error={errors.email}
            />

            {/* File Upload */}
            <div className="md:col-span-2">
              <FileUploadInput
                name="document"
                label="Upload Documents"
                file={document}
                onChange={(file) => {
                  setDocument(file);
                  setValue("document", file, {
                    shouldValidate: true,
                  });
                }}
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <TextAreaInput
                label="Short Notes"
                name="notes"
                placeholder="Write your notes..."
                register={register}
                error={errors.notes}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                text="Submit Now →"
                className="w-full h-12"
                isLoading={mutation.isPending}
                disabled={mutation.isPending}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisaApplyModal;