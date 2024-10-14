<template>
    <NuxtPage />
    <div class="login-page">
      <AuthForm />
    </div>
  </template>
  
  <script setup>
  import AuthForm from '@/components/AuthForm.vue'
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  