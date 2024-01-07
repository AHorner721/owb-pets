// TODO - accepts jpeg, png, jif (maybe video). an optional note
// setup amazon s3 bucket.
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const router = useRouter();

  // track and manage form state
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFile(file);

    // remove previous file object
    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(file);
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
          accept="image/jpeg,image/png,image/webp,image/gif,image/heic,image/jpg,video/mp4,video/webm,video/mov"
          onChange={handleFileChange}
          required={true}
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

        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default UploadForm;
