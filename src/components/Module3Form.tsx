/**
 * 🏗️  DEVELOPMENT GUIDE - Module3 Form Component
 *
 * 📋 Original Requirements: Generate TypeScript interfaces and React components for a report header module that matches the VB6 Module3 specification. The module should include: 1) A TypeScript interface for report_header with SchoolName, SchoolAddress, SY (school year), and SectionName fields, 2) A React component to display the header information, 3) A service to fetch header data from an API, and 4) A page component that uses the header component and service.
 *
 * 🚀 Enhancement Ideas:
 * - Add form validation with Zod/Yup schema
 * - Implement auto-save functionality
 * - Add file upload capabilities if needed
 * - Include conditional fields based on other inputs
 * - Add form steps/wizard for complex forms
 * - Implement real-time validation feedback
 *
 * 💡 Props to Consider Adding:
 * - initialData?: Partial<Module3> (for edit mode)
 * - onCancel?: () => void
 * - isLoading?: boolean
 * - validationSchema?: ZodSchema
 *
 * 🔧 Libraries to Consider:
 * - @hookform/resolvers for validation
 * - react-hook-form-devtools for debugging
 */

import React from "react";
import { useForm } from "react-hook-form";
import { ReportHeader } from "../types/Module3Types";

interface Module3FormProps {
  onSubmit: (data: ReportHeader) => void;
}

const Module3Form: React.FC<Module3FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportHeader>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="schoolName">School Name</label>
        <input
          id="schoolName"
          {...register("schoolName", { required: "School Name is required" })}
        />
        {errors.schoolName && <span>{errors.schoolName.message}</span>}
      </div>

      <div>
        <label htmlFor="schoolAddress">School Address</label>
        <input
          id="schoolAddress"
          {...register("schoolAddress", {
            required: "School Address is required",
          })}
        />
        {errors.schoolAddress && <span>{errors.schoolAddress.message}</span>}
      </div>

      <div>
        <label htmlFor="sy">School Year</label>
        <input
          id="sy"
          {...register("sy", { required: "School Year is required" })}
        />
        {errors.sy && <span>{errors.sy.message}</span>}
      </div>

      <div>
        <label htmlFor="sectionName">Section Name</label>
        <input
          id="sectionName"
          {...register("sectionName", { required: "Section Name is required" })}
        />
        {errors.sectionName && <span>{errors.sectionName.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Module3Form;
