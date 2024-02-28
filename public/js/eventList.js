import { Database } from "./firebase/database.js";

async function loadEvents() {
    const db = new Database();
    const events = await db.fetchEvents();
    const displaying = events[0];
    console.log(displaying);
    document.getElementById("title").innerHTML = displaying.title;
    document.getElementById("description").innerHTML = displaying.description;
    document.getElementById("datetime").innerHTML = displaying.datetime;
    document.getElementById("location").innerHTML = displaying.location;
    document.getElementById("handshakeUrl").innerHTML = displaying.handshakeUrl;
    document.getElementById("imgUrl").innerHTML = displaying.imgUrl;
}

loadEvents();

export { loadEvents }