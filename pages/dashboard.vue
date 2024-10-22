<template>
  <div class="dashboard">
    <h1 class="text-4xl font-bold mb-6">Личный кабинет</h1>
    <Userlist />
    <div class="logout-container">
      <button @click="logout" class="logout-button">Выйти</button>
    </div>
  </div>
</template>

<script setup>
import Userlist from '../components/UserList.vue';
import { useNuxtApp } from '#app'

definePageMeta({
  middleware: 'auth'
})

const { $firebaseAuth, $router } = useNuxtApp()

const logout = async () => {
  await $firebaseAuth.signOut()
  $router.push('/login')
}
</script>

<style scoped>
/* Для контейнера страницы */
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

/* Для кнопки "Выйти" внизу */
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
