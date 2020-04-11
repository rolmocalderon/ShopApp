<template>
  <div>
    <div class="top-bar">
      <MenuLogin />
      <MenuCart />
      <!-- <Login /> -->
    </div>
    <div id="nav">
      <div class="sections flex1auto">
        <router-link :to="{ name: 'event-list' }">Ver Todos</router-link>
        <!-- <router-link :to="{ name: 'event-create' }">Create Event</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import MenuLogin from "@/components/MenuLogin.vue";
import MenuCart from "@/components/MenuCart.vue";
const header = {
  components: {
    Login,
    MenuLogin,
    MenuCart
  }
};
export default header;
</script>

<style>
#nav {
  padding: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.top-bar {
  height: 80px;
  width: 100%;
  background: #8F115A;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cart {
  font-size: 20px;
  margin-left: 3px;
}

.sections a {
  float: right;
}

.flex1auto {
  flex: 1 auto;
}

.menu-box {
  height: 60%;
  background: white;
  align-items: center;
  display: flex;
  padding: 0 18px;
  align-content: space-between;
  border-radius: 2px;
  font-size: 18px;
}

.menu-box:hover {
  cursor: pointer;
  background: #F9F9F9;
  text-decoration: underline;
}
</style>
