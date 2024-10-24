<template>
    <div class="user-activity-page">
      <h2 class="text-3xl font-bold text-center mb-6">История действий</h2>
      <ul>
        <li v-for="(activity, index) in activities" :key="index" class="activity-item">
          {{ activity }}
        </li>
      </ul>
      <button @click="goBack" class="back-button">Вернуться в Личный кабинет</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // Временные данные, которые можно заменить реальными
  const activities = ref([
    'Изменение профиля 2024-10-25',
    'Вход в систему 2024-10-24',
    'Создание аккаунта 2024-10-23'
  ])
  
  const router = useRouter()
  
  // Функция для возврата в личный кабинет
  const goBack = () => {
    router.push('/dashboard')
  }
  </script>
  
  <style scoped>
  .user-activity-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  .activity-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  
  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    background-color: #4f46e5;
    color: white;
    cursor: pointer;
    border-radius: 9999px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #4338ca;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  </style>
  