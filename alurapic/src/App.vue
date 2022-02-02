<template>
  <div class="body">
      <NavBar></NavBar>
      <transition name="page">
          <router-view></router-view>
      </transition>

  </div>

</template>

<script>
import NavBar from "../src/components/NavBar.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods: {},
  created() {},
  computed: {}
};
</script>

<style >
.body {
  font-family: Helvetica, sans-serif;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
</style>
