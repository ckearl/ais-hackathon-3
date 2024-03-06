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
import { auth } from "./auth/auth.js";
import { firebaseConfig } from "./firebase/firebaseConfig.js";
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig);

interface FirebaseContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
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
  const tempUserId = auth.currentUser;

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  // Example effect to simulate user authentication
  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      // Replace this with actual authentication logic
      const fetchedUser = await db.fetchUser(tempUserId);
      if (fetchedUser !== undefined) {
        setUser(fetchedUser);
        setIsAuthenticated(true);
      }
    };

    fetchUser();
  }, [tempUserId, db]);

  const value = { user, isAuthenticated, db };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
