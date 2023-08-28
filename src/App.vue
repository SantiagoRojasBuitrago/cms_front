<template>
  <div class="home-content">
    <h2>Bienvenido a la Página de Inicio</h2>
    <AgendaComponent />
    <NotificationsComponent />
  </div>
</template>

<script>
import Agenda from './components/Agenda.vue';
import Notifications from './components/Notifications.vue';

export default {
  components: {
    Agenda,
    Notifications
  }
};
</script>

<style scoped>
.home-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
</style>
