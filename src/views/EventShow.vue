<template>
  <div>
    <img
      :src="require('@/assets/product-images/' + event.image)"
      width="240"
      height="240"
    />
  </div>
</template>

<script>
import Axios from "axios";
import Product from "@/DTO/product.js";

export default {
  props: ["id"],
  name: "EventShow",
  data() {
    return {
      event: {}
    };
  },
  created() {
    Axios.get(process.env.VUE_APP_POSTS_API + "/" + this.id)
      .then(response => {
        this.mapProduct(response);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    mapProduct: function(response) {
      const product = createProduct(response.data);
      this.event = product;
    }
  }
};

function createProduct(product) {
  const id = product.id;
  const name = product.name;
  const price = product.price;
  const description = product.description;
  const image = product.image;

  return new Product(id, name, price, description, image);
}
</script>
