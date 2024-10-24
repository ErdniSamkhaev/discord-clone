<template>
    <div class="edit-profile-page">
      <h2 class="text-3xl font-bold text-center mb-6">Редактирование профиля</h2>
      <form @submit.prevent="updateProfile" class="flex flex-col items-center">
        <div class="mb-4 w-full max-w-xs">
          <label for="name" class="block mb-1">Имя:</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div class="mb-4 w-full max-w-xs">
          <label for="email" class="block mb-1">Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <button type="submit" class="submit-button">Сохранить изменения</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useNuxtApp, useRouter } from '#app'
  
  const { $firebaseAuth } = useNuxtApp()
  const router = useRouter()
  
  // Получаем текущего пользователя
  const user = $firebaseAuth.currentUser
  const name = ref(user?.displayName || '')
  const email = ref(user?.email || '')
  
  // Обновление профиля пользователя
  const updateProfile = async () => {
    try {
      if (user) {
        await user.updateProfile({
          displayName: name.value
        })
        await user.updateEmail(email.value)
        alert('Профиль успешно обновлен!')
        router.push('/dashboard') // Возвращаем пользователя в личный кабинет после сохранения
      }
    } catch (error) {
      console.error('Ошибка при обновлении профиля:', error)
      alert('Не удалось обновить профиль.')
    }
  }
  </script>
  
  <style scoped>
  .submit-button {
    padding: 10px 20px;
    border: none;
    background-color: #4f46e5;
    color: white;
    cursor: pointer;
    border-radius: 9999px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #4338ca;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .edit-profile-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  </style>
  