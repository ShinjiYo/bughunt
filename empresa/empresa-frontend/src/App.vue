<template>
  <div id="app">
    <div id="nav" class = "div-1">
      <img class = "logo" src="../src/assets/bughunt.png" width="60" height="auto" id="logo">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class = "link" to="/adicionar">Adicionar Empresas</router-link> |
      <router-link class = "link" to="/Empresas">Listar Empresas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ff9100;
}

.div-1{
  background-color:#720ca4;
}

.router-1{
text-color:#ffffff;
}

#logo{
  position: absolute;
  left: 15px;
  top: 10px;
}

.link{
  right:150px;
}
</style>
