import { useContext, useEffect, useMemo, useState } from "react";
import { FirebaseContext } from "../shared/firebaseProvider";
import { Link, useParams } from "react-router-dom";

export function EventCheckInPage() {
  const { eventId } = useParams();
  const fireContext = useContext(FirebaseContext);
  const db = useMemo(() => fireContext?.db, [fireContext]);

  const [eventName, setEventName] = useState("");

  useEffect(() => {
    const tempFetchEvent = async () => {
      if (db && eventId) {
        const clubEvent = await db.fetchEvent(eventId);

        if (clubEvent) {
          setEventName(clubEvent.title);
        }
      }
    };

    tempFetchEvent();
  }, [eventId, db]);

  return (
    <>
      {!eventId && (
        <form>
          <h2>Error: No eventId found. Please return to the home page.</h2>
          <Link to="/">
            <input
              className="ais-button background-ais"
              type="button"
              value="Home/Login"
            />
          </Link>
        </form>
      )}
      {eventId && (
        <form>
          <h2>{eventName}</h2>
          <div id="titleUnderline"></div>
          <input
            className="ais-button background-ais"
            type="button"
            onClick={async () => {
              if (!fireContext?.isAuthenticated) {
                await fireContext?.googleSignIn();
              }

              await db?.registerAttendance(
                eventId,
                fireContext?.user?.id,
                true
              );
              // TODO: navigate to home page or to Handshake
            }}
            value="Yes"
          />
          <input
            className="ais-button background-ais"
            type="button"
            onClick={async () => {
              if (!fireContext?.isAuthenticated) {
                await fireContext?.googleSignIn();
              }

              await db?.registerAttendance(
                eventId,
                fireContext?.user?.id,
                false
              );
              // TODO: navigate to home page or to Handshake
            }}
            value="No"
          />
        </form>
      )}
    </>
  );
}
