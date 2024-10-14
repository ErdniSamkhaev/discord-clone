<template>
    <div class="auth-form">
      <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        <p @click="toggleForm">{{ isLogin ? 'No account? Register' : 'Already have an account? Login' }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useNuxtApp } from '#app'
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
  
  const email = ref('')
  const password = ref('')
  const isLogin = ref(true)
  
  const { $firebaseAuth } = useNuxtApp()
  
  const handleSubmit = async () => {
    try {
      if (isLogin.value) {
        // Логика для входа
        const userCredential = await signInWithEmailAndPassword($firebaseAuth, email.value, password.value)
        console.log('User signed in:', userCredential.user)
      } else {
        // Логика для регистрации
        const userCredential = await createUserWithEmailAndPassword($firebaseAuth, email.value, password.value)
        console.log('User registered:', userCredential.user)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
  
  const toggleForm = () => {
    isLogin.value = !isLogin.value
  }
  </script>
  
  <style scoped>
  .auth-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    color: #007bff;
    cursor: pointer;
  }
  </style>
  