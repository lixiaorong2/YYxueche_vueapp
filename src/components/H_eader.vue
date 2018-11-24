<template>
 <header>
      <div class="header">
      <div class="logo">
        <router-link to="/">
      <img src="./../assets/icon/logo.png">
      </router-link>
      </div>
      <div class="log">
      <p><router-link to="/login">{{login}}</router-link></p>
      <p><router-link to="/resgist">{{resgist}}</router-link></p>
      </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      login: "登陆",
      resgist: '注册'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 40px;
  background: #f0f0f0;
  box-shadow: 0px 5px 10px #888888;
  -moz-box-shadow: 0px 5px 10px #888888;
  -webkit-box-shadow: 0px 5px 10px #888888;
  display: flex;
  box-sizing: border-box;
}

.logo {
  flex-grow: 1;
  text-align: left;
  padding: auto 20px;
}

.logo img {
  height: 38px;
  padding: 8px;
}

.log {
  width: 18%;
  padding: 0;
  display: flex;
}
.log p {
  flex-wrap: wrap;
  text-align: center;
  flex-basis: 38px;
  line-height: 40px;
}
p{
    margin: 0;
}
</style>
