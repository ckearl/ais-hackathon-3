// import { firebaseConfig } from './firebaseConfig.js';
// import { initializeApp } from 'firebase/app';
// import { collection, addDoc } from 'firebase/firestore';
// import { initializeApp } from 'https://cdn.skypack.dev/firebase/app';
import { FirebaseApp } from "firebase/app";
import { AppUser, appUserConverter } from "../../models/appuser.js";
import { ClubEvent, clubEventConverter } from "../../models/clubevent.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  Firestore,
} from "firebase/firestore";

// Initialize Firebase

class Database {
  db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);
  }

  // Function to add an event to the "events" collection
  async addEvent(event: ClubEvent) {
    try {
      if (event["id"]) {
        delete event["id"];
      }

      const docRef = await addDoc(
        collection(this.db, "events"),
        clubEventConverter.toFirestore(event)
      );
      // console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (error) {
      // console.error("Error adding document: ", error);
      throw error;
    }
  }

  async fetchEvents() {
    try {
      const docsSnapshot = await getDocs(
        collection(this.db, "events").withConverter(clubEventConverter)
      );
      const docs: ClubEvent[] = [];
      docsSnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      return docs;
    } catch (error) {
      throw error;
    }
  }

  async addUser(appUser: AppUser) {
    try {
      if (appUser["id"]) {
        delete appUser["id"];
      }
      const docRef = await addDoc(
        collection(this.db, "appusers"),
        appUserConverter.toFirestore(appUser)
      );
      // console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (error) {
      console.error("Error adding user: ", error);
      throw error;
    }
  }

  async fetchUser(userId: string): Promise<AppUser | undefined> {
    const userRef = doc(this.db, "appusers", userId).withConverter(
      appUserConverter
    );
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      console.error("User document does not exist");
      return undefined;
    }

    // Returns undefined if no matching user is found
    const userData = userSnapshot.data();
    return userData;
  }
}

export { Database };
