<script>
import Header from './components/Header.vue'
import FooterVue from './components/Footer.vue'
import cart from './assets/js/cart'

export default {
  data() {
    return {
    }
  },
  created: function() {
  },
  components: {
    HeaderBar: Header,
    FooterVue: FooterVue
  }
}

</script>


<template>
<HeaderBar />
<router-view></router-view>
<FooterVue />

</template>


<style>
</style>