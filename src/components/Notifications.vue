<template>
    <div class="notifications">
      <h2>Notificaciones</h2>
      <ul>
        <li v-for="(notification, index) in notifications" :key="index">
          <span>{{ notification.time }}</span> - <span>{{ notification.message }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          { time: '10:00 AM', message: 'Nueva actualización disponible' },
          { time: '2:30 PM', message: 'Tienes un nuevo mensaje' },
          { time: '6:45 PM', message: 'Recordatorio: Reunión mañana a las 9:00 AM' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .notifications {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  