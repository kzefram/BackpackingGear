# Client (Backpacking gear)

This client is a Vite + React app used as the web frontend for the Backpacking gear tracker.

Firebase setup

1. Create a Firebase project at https://console.firebase.google.com/ and enable Email/Password and Google sign-in providers in Authentication -> Sign-in method.

2. Add a web app in Firebase project settings and copy the config values.

3. Create a `.env` file in `client/` with these variables (replace values with your Firebase config):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Install dependencies and run the dev server:

```bash
cd client
npm install
npm run dev
```

Notes

- This project uses `firebase` for authentication. The client currently exposes sign-in and sign-up flows for email/password and Google sign-in.
- For production, tie Firebase auth to backend rules or use server-side verification as needed.
