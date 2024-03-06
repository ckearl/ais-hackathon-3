import "/js/index.js";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "https://cdn.skypack.dev/firebase/auth";

const provider = new GoogleAuthProvider();

/// Sign in event handlers
export const auth = getAuth();

export function signInGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log("Logged in!");
      signInNav();
    })
    .catch((error) => console.log(error));
}

function signInNav() {
  if (
    window.location.href.endsWith("login.html") ||
    window.location.href.endsWith("login.html/") ||
    window.location.href.endsWith("login.html?")
  ) {
    window.location.replace("userHome.html");
  }
}

function signOutNav() {
  if (
    !window.location.href.endsWith("login.html") &&
    !window.location.href.endsWith("login.html/")
  ) {
    window.location.replace("login.html");
  }
}

function userSignOut() {
  signOut(auth)
    .then(() => {
      signOutNav();
    })
    .catch((error) => {
      console.log("Signout Unsuccessful");
    });
}

const googleSignInBtn = document.getElementById("googleSignInBtn");

if (googleSignInBtn) {
  googleSignInBtn.onclick = signInGoogle;
}

const signOutBtn = document.getElementById("signOutBtn");
if (signOutBtn) {
  signOutBtn.onclick = () => userSignOut(auth);
}

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    // userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
    // not signed in
    // console.log("Logged out!");
    // signOutNav();
  }
});
