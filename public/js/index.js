import { firebaseConfig } from '/js/firebase/firebaseConfig.js';
import { initializeApp } from 'https://cdn.skypack.dev/firebase/app';

export const app = initializeApp(firebaseConfig);
