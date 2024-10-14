<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div class="text-center">
        <!-- Заголовок с объемной тенью -->
        <h1 class="text-5xl font-extrabold text-white mb-8 transform hover:scale-105 transition duration-500 ease-in-out shadow-2xl">
          Добро пожаловать в мой Discord-клон!
        </h1>
  
        <!-- Кнопки с эффектом объемности и тени -->
        <nuxt-link
          to="/login"
          class="block px-8 py-4 mb-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out"
        >
          Перейти к логину
        </nuxt-link>
  
        <nuxt-link
          to="/register"
          class="block px-8 py-4 text-lg font-semibold text-white bg-pink-600 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out"
        >
          Перейти к регистрации
        </nuxt-link>
      </div>
    </div>
  </template>
  