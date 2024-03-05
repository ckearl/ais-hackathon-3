import { Database } from '/js/firebase/database.js';
import { auth } from '/js/firebase/auth.js';

async function displayUserInfo() {
    const curAuth = auth.currentUser;
    if (curAuth) {
        const tempDB = new Database();
        const curAppUser = await tempDB.fetchUser(curAuth.uid);
        if (curAppUser) {
            alert(`User details:\nUserId: ${curAuth.uid}\nfirstName: ${curAppUser['firstName']}\nlastName: ${curAppUser['lastName']}\nstudentType: ${curAppUser['studentType']}`);
        } else {
            alert(`Could not find user with id ${curAuth.uid}`);
        }
    } else {
        alert(`Could not get current authentication`);
    }
}

const userProfileBtn = document.getElementById("userProfileBtn");
if (userProfileBtn) {
    userProfileBtn.onclick = displayUserInfo;
}