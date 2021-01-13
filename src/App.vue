<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/AddCard">Add Card</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 50%;
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  -webkit-box-shadow: -1px 4px 9px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 4px 9px 0px rgba(0,0,0,0.75);
  box-shadow: -1px 4px 9px 0px rgba(0,0,0,0.75);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
