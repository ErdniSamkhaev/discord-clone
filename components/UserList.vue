<template>
    <div class="userlist-container">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-700">Список пользователей</h2>
      <div class="user-cards">
        <div class="user-card" v-for="user in users" :key="user.id">
          <div class="user-avatar">
            <img :src="user.avatar" alt="User Avatar" />
          </div>
          <div class="user-info">
            <h3 class="text-2xl font-semibold">{{ user.name }}</h3>
            <p class="text-gray-500">{{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const users = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Мария Смирнова', email: 'maria@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Алексей Петров', email: 'alex@example.com', avatar: 'https://i.pravatar.cc/150?img=3' }
  ]
  </script>
  
  <style scoped>
  .userlist-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .user-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .user-card {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: translateY(0);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .user-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.2);
  }
  
  .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-info h3 {
    margin: 0;
  }
  
  .user-info p {
    margin: 5px 0 0;
  }
  </style>
  