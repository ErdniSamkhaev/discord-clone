import { defineStore } from 'pinia'
import { ref } from 'vue'

// Определяем тип данных пользователя
interface User {
  id: string
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', () => {
  // Типизируем ref для пользователя
  const user = ref<User | null>(null)

  const setUser = (userData: User) => {
    user.value = userData
  }

  const logout = () => {
    user.value = null
  }

  return { user, setUser, logout }
})
