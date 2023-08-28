<template>
    <div class="agenda">
      <h2>Agenda</h2>
      <ul>
        <li v-for="(event, index) in events" :key="index">
          <span>{{ event.date }}</span> - <span>{{ event.title }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        events: [
          { date: '2023-08-25', title: 'Meeting with Client A' },
          { date: '2023-08-28', title: 'Team Workshop' },
          { date: '2023-08-30', title: 'Project Deadline' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .agenda {
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