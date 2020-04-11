<template>
  <div class="menu-box menu-cart">
    <img :src="require('@/assets/cart_black.png')" width="35px" />
    <span>Carrito: </span>
    <div class="cart flex1auto">
        <span id="cartPrice" class="cart">{{ cartCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MenuCart',
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
}
</script>

<style>
    .menu-cart {
        margin: 0 50px 0 25px
    }
</style>