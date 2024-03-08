import { EventCard } from "./eventCard";
import { ClubEvent } from "../models/clubevent";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface EventListProps {
  events: ClubEvent[];
}

export function EventList({ ...EventListProps }) {
  return (
    <div className="eventListContainer">
      {EventListProps.events.length === 0 && (
        <h3>No events to be displayed.</h3>
      )}
      {EventListProps.events.length > 0 &&
        EventListProps.events.map((curEvent: ClubEvent, index: number) => (
          <EventCard key={index} event={curEvent} />
        ))}
    </div>
  );
}
