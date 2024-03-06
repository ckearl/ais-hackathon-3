import {
  createContext,
  ReactNode,
  FC,
  useState,
  useEffect,
  useMemo,
} from "react";
import { AppUser } from "../models/appuser";
import { Database } from "./firebase/database";
import { firebaseConfig } from "./firebase/firebaseConfig.js";
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

export const app = initializeApp(firebaseConfig);
const auth = getAuth();

interface FirebaseContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  googleSignIn: () => void;
  userSignOut: () => void;
  db: Database;
}

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseContext = createContext<FirebaseContextType | null>(null);
export const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const db = useMemo(() => new Database(app), []);
  const tempUser = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        db.fetchUser(currentUser.uid).then((fetchedUser) => {
          if (fetchedUser) {
            setUser(fetchedUser);
            setIsAuthenticated(true);
          }
        });
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [db]);

  // Example effect to simulate user authentication
  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      // Replace this with actual authentication logic
      if (tempUser) {
        const fetchedUser = await db.fetchUser(tempUser.uid);
        if (fetchedUser !== undefined) {
          setUser(fetchedUser);
          setIsAuthenticated(true);
        }
      }
    };

    fetchUser();
  }, [tempUser, db]);

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        db.fetchUser(user.uid).then((fetchedUser) => {
          if (fetchedUser) {
            setUser(fetchedUser);
            setIsAuthenticated(true);
          }
        });
      })
      .catch((error) => console.log(error));
  }

  function userSignOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        setIsAuthenticated(false);
        // signOutNav();
      })
      .catch((error) => {
        console.log("Signout Unsuccessful");
      });
  }

  const value = { user, isAuthenticated, googleSignIn, userSignOut, db };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
