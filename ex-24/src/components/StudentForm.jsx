// src/components/StudentForm.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  // Watch subjects for validation
  const subjects = watch("subjects") || [];

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("studentForm");
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.keys(parsed).forEach((key) => setValue(key, parsed[key]));
    }
  }, [setValue]);

  // Save form data to localStorage on change
  const watchAllFields = watch();
  useEffect(() => {
    localStorage.setItem("studentForm", JSON.stringify(watchAllFields));
  }, [watchAllFields]);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedData(data);
      setSuccessModal(true);
      reset();
      localStorage.removeItem("studentForm");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Name
            </label>
            <input
              {...register("studentName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces allowed",
                },
              })}
              className={`w-full p-2 border rounded ${
                errors.studentName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.studentName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Grade Level */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Grade Level
            </label>
            <select
              {...register("gradeLevel", { required: "Please select a grade" })}
              className={`w-full p-2 border rounded ${errors.gradeLevel ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Grade</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
            {errors.gradeLevel && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gradeLevel.message}
              </p>
            )}
          </div>

          {/* Subjects */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Subjects Interest
            </label>
            <div className="space-y-2">
              {["Mathematics", "Science", "English"].map((subject) => (
                <label key={subject} className="flex items-center">
                  <input
                    type="checkbox"
                    value={subject}
                    {...register("subjects", {
                      validate: (v) =>
                        v?.length >= 1 || "Select at least one subject",
                    })}
                    className="mr-2"
                  />
                  {subject}
                </label>
              ))}
            </div>
            {errors.subjects && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subjects.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-rose-500 text-white py-2 rounded hover:bg-rose-600 disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                localStorage.removeItem("studentForm");
              }}
              className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-xl font-bold mb-4 text-center">
              Registration Successful!
            </h3>
            <pre className="bg-gray-100 p-3 rounded text-sm">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
            <div className="mt-4 text-center">
              <button
                onClick={() => setSuccessModal(false)}
                className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
