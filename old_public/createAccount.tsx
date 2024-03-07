import React, { useState } from "react";
import { Database } from "./path/to/Database"; // Adjust the path as necessary
import { getFirebaseApp } from "./path/to/firebaseConfig"; // Adjust the path as necessary
import { AppUser } from "./path/to/AppUser"; // Adjust the path as necessary
import "./css/styles.css"; // Adjust the path as necessary
import "./css/form.css"; // Adjust the path as necessary

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentType: "junior", // Default selection, adjust as necessary
  });

  // Initialize your Firebase and Database instance
  const firebaseApp = getFirebaseApp(); // This should retrieve your Firebase app configuration
  const database = new Database(firebaseApp);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = new AppUser(
        null, // Assuming Firestore generates the ID
        formData.firstName,
        formData.lastName,
        formData.studentType
      );
      await database.addUser(newUser); // Add the user to the database
      alert("Account created successfully!");
      // Optionally clear the form or redirect the user
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account."); // Provide feedback to the user
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AIS Events - Login</title>
      <link rel="icon" href="assets/logo.png" type="image/x-icon" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
        rel="stylesheet"
      />

      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div id="titleUnderline"></div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="studentType">Student Type</label>
        <select
          id="studentType"
          name="studentType"
          value={formData.studentType}
          onChange={handleChange}
          required
        >
          <option value="junior">IS Junior Core</option>
          <option value="senior">IS Senior</option>
          <option value="mism">MISM</option>
          <option value="other-byu">Other BYU Student</option>
          <option value="other-guest">Other/Guest</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
