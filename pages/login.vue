<template>
    <div class="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
        <h2 class="text-3xl font-bold text-center mb-6 text-gray-700">Вход</h2>
        <AuthForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import AuthForm from '@/components/AuthForm.vue'
  </script>
  