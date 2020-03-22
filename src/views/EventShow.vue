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
        this.event = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
