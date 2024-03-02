// import { firebaseConfig } from './firebaseConfig.js';
// import { initializeApp } from 'firebase/app';
// import { collection, addDoc } from 'firebase/firestore';
// import { initializeApp } from 'https://cdn.skypack.dev/firebase/app';
import { app } from '/js/index.js';
import { appUserConverter } from '/js/models/appuser.js';
import { clubEventConverter } from '/js/models/clubevent.js';
import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from 'https://cdn.skypack.dev/firebase/firestore';

// Initialize Firebase
const db = getFirestore(app);

class Database {
    
    // Function to add an event to the "events" collection
    async addEvent(event) {
      try {
        if (event['id']) {
          delete event['id'];
        }
        const docRef = await addDoc(collection(db, "events"), event.toFirestore());
        // console.log("Document written with ID: ", docRef.id);
        return docRef;
      } catch (error) {
        // console.error("Error adding document: ", error);
        throw error; 
      }
    }

    async fetchEvents() {
      try{
        const docsSnapshot = await getDocs(collection(db, "events").withConverter(clubEventConverter));
        const docs = [];
        docsSnapshot.forEach(doc => {
          docs.push(doc.data());
        });
        return docs;
      } catch (error) {
        throw error;
      }
    }
  
    async addUser(appUser) {
      try {
        if (appUser['id']) {
          delete appUser['id'];
        }
        const docRef = await addDoc(collection(db, "appusers"), appUserConverter.toFirestore());
        // console.log("Document written with ID: ", docRef.id);
        return docRef;
      } catch (error) {
        console.error("Error adding user: ", error);
        throw error; 
      }
    }

    async fetchUser(userId) {
      const userRef = doc(db, "appusers", userId).withConverter(appUserConverter);
      const userSnapshot = await getDoc(userRef);
      
      if (!userSnapshot.exists()) {
        console.error("User document does not exist");
      }
      
      // Returns undefined if no matching user is found
      const userData = userSnapshot.data();
      return userData;
    }
}

export { Database };