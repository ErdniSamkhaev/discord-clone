<template>
    <div class="dashboard">
      <h1 class="text-4xl font-bold mb-6">Личный кабинет</h1>
      <!-- Проверь правильность компонента -->
      <Userlist />
    </div>
  </template>
  
  <script setup>
  import Userlist from '@/components/Userlist.vue';
  
  definePageMeta({
    middleware: 'auth'
  })
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  </style>
  