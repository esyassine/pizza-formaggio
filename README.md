# Getting Started with Create React App

## Available Scripts

```js
npm start
```

```js
npm test
```

```js
npm run build
```

```js
npm run eject
```

# Deploy Firebase
```js
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

```js
apiKey=
authDomain=
databaseURL=
projectId=
storageBucket=
messagingSenderId=
appId=
measurementId=
REACT_APP_PUBLISHABLE_KEY=
UID_USER=
```
