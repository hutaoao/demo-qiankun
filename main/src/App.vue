<template>
  <div id="app">
    <ul>
      <li v-for="(menu, i) in menuList" :key="i" @click="goto(menu.path)">{{ menu.name }}</li>
    </ul>
    <div id="mainApp"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {
          name: 'VueHash',
          path: '/vue-hash-app/#/',
        },
        {
          name: 'VueHistory',
          path: '/vue-history-app',
        },
        {
          name: 'ReactHash',
          path: '/react-hash-app/#/',
        },
        {
          name: 'ReactHistory',
          path: '/react-history-app',
        },
      ]
    }
  },
  methods: {
    goto(path) {
      window.location.href = path;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  width: 100px;
  height: 100px;
  cursor: pointer;
  line-height: 100px;
  margin-right: 20px;
  border: 1px solid #2c3e50;
}
</style>
