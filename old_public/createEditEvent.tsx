// CreateEventForm.js
import React, { useState } from "react";
import { Timestamp } from "firebase/firestore"; // Import Timestamp from Firestore
import { Database } from "/path/to/js/firebase/database"; // Adjust the import path as necessary
import { ClubEvent } from "/path/to/js/models/clubevent"; // Adjust the import path as necessary

function CreateEvent() {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    eventDescription: "",
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = new Database(); // Initialize your database class
    // Construct a new ClubEvent. Convert date and time to a Firestore Timestamp if necessary
    const dateTime = Timestamp.fromDate(new Date(`${formData.eventDate}T${formData.eventTime}`));
    const newEvent = new ClubEvent(
      null, // Assuming null ID because Firestore generates this
      formData.eventTitle,
      formData.eventDescription,
      formData.eventLocation,
      "", // imgUrl is empty, replace as necessary
      "", // handshakeUrl is empty, replace as necessary
      "", // category is empty, replace as necessary or add field in form
      dateTime
    );

    try {
      const docRef = await db.addEvent(newEvent);
      console.log(`Event added with ID: ${docRef.id}`);
      // Here you can clear the form or redirect the user
    } catch (error) {
      console.error("Error adding event: ", error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AIS Events - Create Event</title>
      <script type="module" src="/js/createeditevent.js"></script>
      <form onSubmit={handleSubmit}>
        <h2>Create Event</h2>
        <div id="titleUnderline"></div>
        <label htmlFor="eventTitle">Event Title</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventTime">Event Time</label>
        <input
          type="time"
          id="eventTime"
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventLocation">Event Location</label>
        <input
          type="text"
          id="eventLocation"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
          placeholder="Room number, building, etc."
          required
        />
        <label htmlFor="eventDescription">Event Description</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          placeholder="Who the event is for, length of event, etc."
          required
        ></textarea>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
