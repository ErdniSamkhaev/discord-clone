import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const setUser = (userData) => {
    user.value = userData
  }

  const logout = () => {
    user.value = null
  }

  return { user, setUser, logout }
})
