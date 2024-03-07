import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Database } from "./path/to/your/Database"; // Adjust path as necessary
import "./css/styles.css";
import "./css/home.css";

// Define a type for your event for TypeScript
type EventDetail = {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  description: string;
};

const ViewEvent: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Extracting event ID from the URL
  const [event, setEvent] = useState<EventDetail | null>(null);

  useEffect(() => {
    const db = new Database(); // Initialize your database class
    const fetchEvent = async () => {
      const eventData = await db.fetchEvent(eventId); // Implement this method based on your database logic
      setEvent(eventData);
    };

    fetchEvent();
  }, [eventId]);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AIS Events - {event?.name || "Event Details"}</title>
      <link rel="icon" href="assets/logo.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <nav>
        <Link to="/loggedOut">Logout</Link>
        <Link to="/createEvent">Create Event</Link>
      </nav>
      <a className="imgLink" href="/">
        <img src="assets/logo.png" alt="Logo" />
      </a>

      {event ? (
        <div id="bodyContainer">
          <h2>{event.name}</h2>
          <p>{event.location}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.description}</p>
          <img src="assets/dummyQRcode.png" alt="Event QR Code" />
          <div className="eventActions">
            <Link to={`/deleteEvent/${event.id}`}>Delete</Link>{" "}
            {/* Implement these routes and functionalities */}
            <Link to={`/editEvent/${event.id}`}>Edit</Link>
          </div>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default ViewEvent;
