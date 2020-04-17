<template>
  <div class="container">
    <TopTitle :title="title" />
    <div class="collection">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import TopTitle from "@/components/TopTitle.vue";
import axios from "axios";

let posts = axios.get(process.env.VUE_APP_POSTS_API);
let info = axios.get(process.env.VUE_APP_INFO);

export default {
  name: "EventList",
  components: {
    EventCard,
    TopTitle
  },
  data() {
    return {
      events: [],
      title: ""
    };
  },
  created() {
    axios
      .all([posts, info])
      .then(
        axios.spread((postsResponse, infoResponse) => {
          this.events = postsResponse.data;
          this.title = infoResponse.data.title;
        })
      )
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 80%;
  display: flex;
  justify-content: center;
}

.collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
}
</style>
