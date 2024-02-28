import { Database } from '/js/firebase/database.js';
import { ClubEvent } from '/js/models/clubevent.js';
import { Timestamp } from 'https://cdn.skypack.dev/firebase/firestore';

// Example function to use addEvent
async function submitEvent(isFakeSubmit) {
    let uploadEvent;
    // if (!isFakeSubmit) {
    //     // uploadEvent = ;
    // } else {
    // ClubEvent(tempTitle, tempDescription, tempLocation, tempImgUrl, tempHandshakeUrl, tempDate) {
        uploadEvent = new ClubEvent(
            "Example Title",
            "Example Desc",
            "Example Loc",
            "Example imgUrl",
            "",
            "ExampleCategory",
            Timestamp.now(),
            // other event details
        );
    // }

    try {
      // this.app = initializeApp(firebaseConfig);
        const tempDB = new Database();        
        const docRef = await tempDB.addEvent(uploadEvent);
        console.log(`Event added with ID: ${docRef.id}`);
        // Handle successful event addition
    } catch (error) {
    console.error("Error adding event: ", error);
    // Handle error
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('testEventButton');
    if (submitButton) {
        submitButton.addEventListener('click', submitEvent);
    }
});
