import { useContext, useEffect, useMemo, useState } from "react";
import { FirebaseContext } from "../shared/firebaseProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/submit_success.css";
import "../css/styles.css";
import { ClubEvent } from "../models/clubevent";
import { getAuth } from "firebase/auth";

export function EventCheckInPage() {
  const { eventId } = useParams();
  const fireContext = useContext(FirebaseContext);
  const db = useMemo(() => fireContext?.db, [fireContext]);
  const navigate = useNavigate();
  const [curEvent, setCurEvent] = useState<ClubEvent | null>(null);

  // Get current event so we can check for handshake url
  useEffect(() => {
    const initFetchEvent = async () => {
      if (db && eventId) {
        const clubEvent = await db.fetchEvent(eventId);

        if (clubEvent) {
          setCurEvent(clubEvent);
        }
      }
    };

    initFetchEvent();
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
        <div className="center-block">
          <h2>Did you bring a plus one with you?</h2>
          <p>Select one of the following to complete your check in.</p>
          <div id="yesNoContainer">
            <button
              onClick={async () => {
                if (!fireContext?.isAuthenticated) {
                  await fireContext?.googleSignIn();
                }

                const auth = getAuth();

                let curUserId: undefined | string = undefined;
                if (auth && auth.currentUser) {
                  curUserId = auth.currentUser.uid;
                } else if (fireContext && fireContext.user) {
                  curUserId = fireContext.user.id;
                }

                if (curUserId !== undefined) {
                  await db?.registerAttendance(
                    eventId,
                    fireContext?.user?.id,
                    true
                  );

                  // If event has external navigation url (like handshake) send them there
                  // Otherwise, take them back to the home page
                  if (
                    curEvent != null &&
                    curEvent.externalUrl &&
                    curEvent.externalUrl.length > 0
                  ) {
                    window.location.href = curEvent.externalUrl;
                  } else {
                    navigate("/");
                  }
                }
              }}
            >
              Yes
            </button>
            <button
              className="no"
              onClick={async () => {
                if (!fireContext?.isAuthenticated) {
                  await fireContext?.googleSignIn();
                }

                const auth = getAuth();

                let curUserId: undefined | string = undefined;
                if (auth && auth.currentUser) {
                  curUserId = auth.currentUser.uid;
                } else if (fireContext && fireContext.user) {
                  curUserId = fireContext.user.id;
                }

                if (curUserId !== undefined) {
                  await db?.registerAttendance(
                    eventId,
                    fireContext?.user?.id,
                    false
                  );

                  // If event has external navigation url (like handshake) send them there
                  // Otherwise, take them back to the home page
                  if (
                    curEvent != null &&
                    curEvent.externalUrl &&
                    curEvent.externalUrl.length > 0
                  ) {
                    window.location.href = curEvent.externalUrl;
                  } else {
                    navigate("/");
                  }
                }
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}
