import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  }

  const app = initializeApp(firebaseConfig)
  return {
    provide: {
      firebase: app,
    },
  }
})