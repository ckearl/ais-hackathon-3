import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../shared/firebaseProvider";
import { EventCard } from "./eventCard";
import { ClubEvent } from "../models/clubevent";

export function EventList() {
  const fireContext = useContext(FirebaseContext);
  const [currentEvents, setCurrentEvents] = useState<ClubEvent[] | null>(null);
  // const [];

  useEffect(() => {
    const fetchEvents = async () => {
      // Fetch events and set them
      const events = await fireContext?.db.fetchEvents();

      if (events) {
        setCurrentEvents(events);
      }
    };

    fetchEvents();
  }, [fireContext?.db]);

  return (
    <div className="eventListContainer">
      <h2>Events Attended</h2>
      {!currentEvents && <h3>Loading Events...</h3>}
      {currentEvents != null && currentEvents.length === 0 && (
        <h3>No events to be displayed.</h3>
      )}
      {currentEvents != null &&
        currentEvents.length > 0 &&
        currentEvents.map((curEvent, index) => (
          <EventCard key={index} event={curEvent} />
        ))}

      <h2>Upcoming Events</h2>
    </div>
  );
}
