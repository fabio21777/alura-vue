<template>
  <div class="body">
     <nav>
       <ul class="item" v-for="(route,index) in  routes" :key="index">
          <li>
            <router-link class="item" :to="route.path">{{ route.name }}</router-link>
          </li>
       </ul>
     </nav>
  </div>

</template>

<script>
import {routes} from '../routes'
export default {
  name: "NavBar",
  data() {
    return {
      routes
    };
  },
  components: {},
  methods: {},
  created() {},
  computed: {}
};
</script>

<style scoped>
.item {
  display: inline-block;
  text-align: center;
  list-style: none;
  font-size: 20px;
  color: #000;
  text-decoration: none;
}
</style>

