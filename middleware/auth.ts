// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const { $firebaseAuth } = useNuxtApp()
  const user = $firebaseAuth.currentUser

  if (!user && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})
