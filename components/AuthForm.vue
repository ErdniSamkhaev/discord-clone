<template>
  <div class="auth-form">
    <h1 class="text-3xl font-bold text-center mb-6 text-gray-700">
      {{ isLogin ? "Login" : "Register" }}
    </h1>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-4 shadow-sm"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-4 shadow-sm"
        required
      />
      <button
        type="submit"
        class="w-full px-4 py-2 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-2xl transition duration-500 ease-in-out mb-4"
      >
        {{ isLogin ? "Login" : "Register" }}
      </button>
      <p
        @click="toggleForm"
        class="text-center text-blue-500 cursor-pointer hover:underline"
      >
        {{
          isLogin ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войти"
        }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const email = ref("");
const password = ref("");
const isLogin = ref(true);

const { $firebaseAuth, $router } = useNuxtApp();

const handleSubmit = async () => {
  try {
    if (isLogin.value) {
      const userCredential = await signInWithEmailAndPassword(
        $firebaseAuth,
        email.value,
        password.value
      );
      console.log("User signed in:", userCredential.user);
      $router.push("/dashboard"); // Перенаправляем на страницу личного кабинета
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        $firebaseAuth,
        email.value,
        password.value
      );
      console.log("User registered:", userCredential.user);
      $router.push("/dashboard"); // Перенаправляем на страницу личного кабинета после регистрации
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.auth-form:hover {
  transform: translateY(-5px);
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.2);
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
  border-radius: 9999px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #4338ca;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

p {
  color: #4f46e5;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  transition: color 0.3s ease;
}

p:hover {
  color: #4338ca;
  text-decoration: underline;
}
</style>
