<template>
  <div>
    <div class="asdf"></div>
    <div id="nav">
      <div class="sections flex1auto">
        <router-link :to="{ name: 'event-list' }">Ver Todos</router-link>
        <!-- <router-link :to="{ name: 'event-create' }">Create Event</router-link> -->
      </div>
      <div class="cart flex1auto">
        <img :src="require('@/assets/cart_black.png')" width="48" height="48" />
        <span id="cartPrice" class="cart">{{ cartCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const header = {
  data() {
    return {
      cartCount: 0
    };
  },
  mounted() {
    this.$root.$on("purchadedSuccessfully", () => {
      this.cartCount += 1;
    });
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

.asdf {
  height: 40px;
  width: 100%;
  background: red;
}

.cart {
  font-size: 20px;
}

.sections a {
  float: right;
}

.flex1auto {
  flex: 1 auto;
}
</style>
