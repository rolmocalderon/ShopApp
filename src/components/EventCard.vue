<template>
  <router-link
    @click.native.capture="showPost"
    :to="{ name: 'event-show', params: { id: event.id } }"
    :class="'post'"
  >
    <img
      :src="require('@/assets/product-images/' + event.image)"
      width="240"
      height="240"
    />
    <span class="product-name">{{ event.name }}</span>
    <span class="product-description">{{ event.description }}</span>

    <div class="shop-box">
      <div class="price-box">{{ event.price }} {{ currency }}</div>
      <button>
        <img :src="require('@/assets/cart_white.png')" width="36" height="36" />
      </button>
    </div>
  </router-link>
</template>

<script>
import Axios from "axios";

export default {
  name: "EventCard",
  data() {
    return {
      currency: process.env.VUE_APP_DEFAULT_CURRENCY
    };
  },
  props: {
    event: Object
  },
  methods: {
    showPost: function(e) {
      if (e.target.tagName.toLowerCase() === "button" || e.target.parentNode.tagName.toLowerCase() === "button") {
        e.preventDefault();
        e.stopPropagation();
        this.buyProduct();
      }
    },
    buyProduct: function() {
      let productId = this.event.id;
      Axios.post(process.env.VUE_APP_PURCHASES_API, {
        id: productId
      })
        .then(response => {
          this.$root.$emit('purchadedSuccessfully', { response: response.data });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.post {
  width: 330px;
  padding: 10px;
  margin: 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.post:hover {
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.45);
}

.post button {
  height: 65px;
  width: 65px;
  background-color: #ff6700eb;
  z-index: 1;
  right: 15px;
  border-style: none;
  bottom: 15px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  line-height: 65px;
  text-align: center;
}

.post button:hover {
	background-color: orangered;
	cursor: pointer;
}

.post button:focus {
	outline: none;
}

.shop-box {
  display: flex;
  width: 100%;
  margin-top: 10px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
}

.product-description {
  font-weight: 100;
}

.price-box {
  padding: 10px 35px;
  margin: 10px;
  border-radius: 7px;
  flex: 2 auto;
  font-size: 27px;
  font-weight: 600;
}
</style>
