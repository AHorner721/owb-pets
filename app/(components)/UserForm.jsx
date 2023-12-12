"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  // want state management for tracking form data
  // and displaying error messages if user data already exists
  const [formData, setFormData] = useState({});
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
    // get response from our own api endpoint
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh(); // refreshes the current page
      router.push("/"); // route to the provided href. creates new history entry
    }
  };

  return (
    <>
      <form action="POST" onSubmit={handleFormSubmit}>
        <h1>Create New User</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleFormChange}
          required={true}
          value={formData.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleFormChange}
          required={true}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFormChange}
          required={true}
          value={formData.password}
        />
        <input type="submit" value="Create User" />
      </form>
      <p>{errorMessage}</p>
    </>
  );
};

export default UserForm;
