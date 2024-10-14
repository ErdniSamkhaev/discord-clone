// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()
  if (!auth.user && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})
