// TODO - accepts jpeg, png, jif (maybe video). an optional note
// setup amazon s3 bucket.
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const router = useRouter();

  // track and manage form state
  const [formData, setFormData] = useState({});

  // track and display any error messages
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    // send file to S3
  };

  return (
    <>
      <form action="POST" onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title (required)</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleFormChange}
          required={true}
          value={formData.name}
          placeholder="Enter title"
        />
        <label htmlFor="imageFile">Image File (required)</label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept="image/*"
          onChange={handleFormChange}
          required={true}
          value={formData.name}
        />
        <label htmlFor="description">Description (optional)</label>
        <textarea
          type="text"
          id="description"
          name="description"
          style={{ height: 50 + "px" }}
          onChange={handleFormChange}
          value={formData.name}
          placeholder="Enter description"
        />
      </form>
    </>
  );
};

export default UploadForm;
