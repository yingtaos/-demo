<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from "./components/footer.vue";
export default {
  name: 'App',
  components : {
 		"v-footer" : Footer
 	}
}
</script>

<style lang="scss">
    #app{
      width: 100%;
      height: 100%;
    }
</style>
