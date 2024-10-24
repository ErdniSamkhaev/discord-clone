<template>
  <div class="dashboard">
    <h1 class="text-4xl font-bold mb-6 flex justify-center">Личный кабинет</h1>

    <!-- Кнопка редактирования -->
    <div class="edit-button-container mb-6">
      <button @click="goToEditProfile" class="edit-button">Редактировать профиль</button>
    </div>

    <!-- Кнопка "История действий" -->
    <div class="history-button-container mb-6">
      <button @click="goToUserActivity" class="history-button">История действий</button>
    </div>

    <!-- Список пользователей -->
    <Userlist />

    <div class="logout-container">
      <button @click="logout" class="logout-button">Выйти</button>
    </div>
  </div>
</template>

<script setup>
import Userlist from '../components/UserList.vue';
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

definePageMeta({
  middleware: 'auth'
})

const { $firebaseAuth } = useNuxtApp()
const router = useRouter()

// Переход на страницу редактирования профиля
const goToEditProfile = () => {
  router.push('/edit-profile')
}

// Переход на страницу истории действий
const goToUserActivity = () => {
  router.push('/user-activity')
}

// Функция выхода
const logout = async () => {
  await $firebaseAuth.signOut()
  router.push('/login')
}
</script>

<style scoped>
.edit-button-container,
.history-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.edit-button,
.history-button {
  padding: 10px 20px;
  border: none;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
  border-radius: 9999px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.edit-button:hover,
.history-button:hover {
  background-color: #4338ca;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.logout-container {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.logout-button {
  padding: 10px 20px;
  border: none;
  background-color: #e63946;
  color: white;
  cursor: pointer;
  border-radius: 9999px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.logout-button:hover {
  background-color: #d62828;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
