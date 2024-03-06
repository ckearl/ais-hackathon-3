import { EventList } from "./eventList";

export function UserHome() {
  return (
    <div id="bodyContainer">
      <div className="eventListContainer">
        <h2>Events Attended</h2>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
      </div>

      <div className="eventListContainer">
        <h2>Upcoming Events</h2>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
        <div className="eventCard">
          <div className="eventInfo">
            <h3>Event Name</h3>
            <p>Event Location</p>
            <p>Event Date</p>
            <p>Event Time</p>
          </div>
          <div className="eventOpen">
            {/* <!-- <a href="viewEvent.html">Open</a> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
