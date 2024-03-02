// import { firebaseConfig } from './firebaseConfig.js';
// import { initializeApp } from 'firebase/app';
// import { collection, addDoc } from 'firebase/firestore';
// import { initializeApp } from 'https://cdn.skypack.dev/firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'https://cdn.skypack.dev/firebase/firestore';

// Initialize Firebase
const db = getFirestore(app);

class Database {
    
    // Function to add an event to the "events" collection
    async addEvent(event) {
      try {
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
        const docsSnapshot = await getDocs(collection(db, "events"));
        const docs = [];
        docsSnapshot.forEach(doc => {
          docs.push(doc.data());
        });
        return docs;
      } catch (error) {
        throw error;
      }
    }
}

export { Database };